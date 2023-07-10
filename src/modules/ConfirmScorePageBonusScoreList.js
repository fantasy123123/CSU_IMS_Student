//成绩确认界面的综测加分列表，采用了组件库的表格

import React, {
    useState,
    useRef,
} from 'react';
import '../css/bonusScoreList.css'
import { Input} from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';
import { Table,Form } from '@arco-design/web-react';
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

function ConfirmScorePageBonusScoreList() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const [data, setData] = useState([
        {
            key: '1',
            bonusPointName:'名称1',
            bonusScoreCategory:'类别3',
            addedValue:3,
        },
        {
            key: '2',
            bonusPointName:'名称2',
            bonusScoreCategory:'类别1',
            addedValue:1,
        },
        {
            key: '3',
            bonusPointName:'名称3',
            bonusScoreCategory:'类别3',
            addedValue:3,
        },
        {
            key: '4',
            bonusPointName:'名称4',
            bonusScoreCategory:'类别2',
            addedValue:2,
        },
        {
            key: '5',
            bonusPointName:'名称5',
            bonusScoreCategory:'类别1',
            addedValue:1,
        }
    ]);
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
    ];

    function handleSave(row) {
        const newData = [...data];
        const index = newData.findIndex(item => row.key === item.key);
        newData.splice(index, 1, { ...newData[index], ...row });
        setData(newData);
    }

    return (
        <div style={{width:'80%',textAlign:'left'}}>
            <div style={{color:"black",fontSize:'22px',height:'25px'}}>综合加分细则</div>
            <br/>
            <Table
                borderCell={true}
                pagination={false}
                tableLayoutFixed={true}
                stripe={true}
                data={data}
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

export default ConfirmScorePageBonusScoreList;