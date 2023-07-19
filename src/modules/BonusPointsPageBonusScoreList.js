//综测加分项提交界面的加分项列表

import React, {
    useState,
    useRef,
} from 'react';
import '../css/bonusScoreList.css'
import {Input, Space} from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';
import { Button, Table,Form } from '@arco-design/web-react';
import {IconDownload, IconPlus} from "@arco-design/web-react/icon";
import {Image} from "@arco-design/web-react";
import store from "../redux/store";

const EditableContext = React.createContext({});

function EditableRow(props) {
    const { children, record, className, ...rest } = props;
    const refForm = useRef(null);

    const getForm = () => refForm.current;

    return (
        <EditableContext.Provider
            value={{
                getForm
            }}
        >
            <Form
                style={{
                    display: 'table-row'
                }}
                children={children}
                ref={refForm}
                wrapper='tr'
                wrapperProps={rest}
                className={`${className} editable-row`}
            />
        </EditableContext.Provider>
    );
}

function EditableCell(props) {
    const { children, className, column } = props;
    const [editing, setEditing] = useState(false);
    return (
        <div
            className={column.editable ? `editable-cell ${className}` : className}
            onClick={() => column.editable && setEditing(!editing)}
        >
            {children}
        </div>
    );
}

function EditableTable({ifAddBonusPointFunction,ifChangeBonusPointFunction,ifShowDetailsFunction,sendDetails,getChangeBonusPoint}) {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const [pagination, setPagination] = useState({
        showTotal: true,
        pageSize: 5,
    });
    const [data, setData] = useState(store.getState());

    store.subscribe(()=>{
        setData([...store.getState()])
    })

    const columns = [
        {
            title: '加分名称',
            dataIndex: 'bonusPointName',
            editable: true,
            filterIcon: <IconSearch />,
            filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
                return (
                    <div className='arco-table-custom-filter'>
                        <Input.Search
                            ref={inputRef1}
                            searchButton
                            placeholder='请输入加分名称'
                            value={filterKeys[0] || ''}
                            onChange={(value) => {
                                setFilterKeys(value ? [value] : []);
                            }}
                            onSearch={() => {
                                confirm();
                            }}
                        />
                    </div>
                );
            },
            onFilter: (value, row) => (value ? row.bonusPointName.indexOf(value) !== -1 : true),
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => inputRef1.current.focus(), 150);
                }
            },
        },
        {
            title: '所属加分类型',
            dataIndex: 'bonusScoreCategory',
            editable: true,
            filterIcon: <IconSearch />,
            filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
                return (
                    <div className='arco-table-custom-filter'>
                        <Input.Search
                            ref={inputRef2}
                            searchButton
                            placeholder='请输入加分类型'
                            value={filterKeys[0] || ''}
                            onChange={(value) => {
                                setFilterKeys(value ? [value] : []);
                            }}
                            onSearch={() => {
                                confirm();
                            }}
                        />
                    </div>
                );
            },
            onFilter: (value, row) => (value ? row.bonusScoreCategory.indexOf(value) !== -1 : true),
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => inputRef2.current.focus(), 150);
                }
            },
        },
        {
            title: '加分值',
            dataIndex: 'addedValue',
            sorter: (a, b) => a.addedValue - b.addedValue
        },
        {
            title: '证明图片',
            dataIndex: 'key',
            render:(index,record)=>{
                return (
                    <Space direction='vertical'>
                        <Image.PreviewGroup infinite>
                            <Space>
                                {record.proofPicture.map((src, index) => (
                                    <Image key={index} src={src} width={40} alt={`lamp${index + 1}`} />
                                ))}
                            </Space>
                        </Image.PreviewGroup>
                    </Space>
                )
            }
        },
        {
            title: '详细信息',
            dataIndex: 'key',
            render: (index,record) => {
                return (<Button
                    type="secondary"
                    onClick={() => {
                        sendDetailInformation(index)
                    }
                    }
                >
                    查看详细信息
                </Button>)
            }
        },
        {
            title:'操作',
            dataIndex: 'key',
            render: (index, record) => {
                return (<Button
                    type='secondary'
                    onClick={()=>{
                        changeRow(index)
                    }
                    }
                >
                    修改加分项
                </Button>)
            }
        }
    ];

    function handleSave(row) {
        const newData = [...data];
        const index = newData.findIndex(item => row.key === item.key);
        newData.splice(index, 1, { ...newData[index], ...row });
        setData(newData);
    }

    //点击添加加分项
    function addRow() {
        ifAddBonusPointFunction(true);
    }

    //点击修改加分项
    function changeRow(index){
        ifChangeBonusPointFunction(true)
        for(let i=0;i<data.length;i++)
        {
            if(index===data[i].key){
                getChangeBonusPoint(data[i])
            }
        }
    }

    function sendDetailInformation(index){
        ifShowDetailsFunction(true);
        for(let i=0;i<data.length;i++)
        {
            if(index===data[i].key){
                sendDetails({'detailInformation':data[i].detailInformation})
            }
        }
    }

    //计算总加分值
    let sum=0;
    // eslint-disable-next-line no-unused-vars
    for (let dataKey in data) {
        sum=sum+data[dataKey].addedValue
    }

    return (
        <div style={{width:'90%',position:'absolute',left:'5%',top:'15%',textAlign:'left'}}>
            <div style={{color:"grey",fontSize:'20px',height:'25px'}}>你总共有 <span style={{color:'black'}}>{data.length}</span> 条加分项，总共加 <span style={{color:'black'}}>{sum}</span> 分</div>
            <br/>
            <Button
                style={{
                    marginBottom: 10,
                    marginRight:20,
                    width:'10%',
                }}
                type='primary'
                onClick={addRow}
                icon={<IconPlus />}
            >
                新增加分项
            </Button>
            <Button
                style={{
                    marginBottom: 10,
                    width:'10%',
                }}
                type='secondary'
            >
                批量导入
            </Button>
            <Button
                style={{
                    marginBottom: 10,
                    width:'10%',
                    position:'absolute',
                    right:'0',
                }}
                type='secondary'
                icon={<IconDownload />}
            >
                下载
            </Button>
            <Table
                borderCell={true}
                tableLayoutFixed={true}
                stripe={true}
                data={data}
                pagination={pagination}
                components={{
                    body: {
                        row: EditableRow,
                        cell: EditableCell
                    }
                }}
                columns={columns.map(column =>
                    column.editable
                        ? {
                            ...column,
                            onCell: () => ({
                                onHandleSave: handleSave
                            })
                        }
                        : column
                )}
                className='table-demo-editable-cell'
            />
        </div>
    );
}

export default EditableTable;