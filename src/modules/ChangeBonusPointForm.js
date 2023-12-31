//点击综测加分项列表界面的修改加分项按钮后弹出的表单界面，采用了组件库的表单

import React, {useEffect, useRef, useState} from 'react';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Message,
    Upload,
    InputNumber,
} from '@arco-design/web-react';
import store from "../redux/store";
import {createChangeBonusPoint, createDeleteBonusPoint} from "../redux/action";

const TextArea=Input.TextArea
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 17,
    },
};
const noLabelLayout = {
    wrapperCol: {
        span: 17,
        offset: 7,
    },
};

function ChangeBonusPointForm({ifChangeBonusPointFunction,changeItem}) {
    const formRef = useRef();
    useEffect(() => {
        formRef.current.setFieldsValue({
            rate: 5,
        });
    }, []);

    let nameInput;
    let categoryInput;
    let addValueInput;
    let detailsInput;

    function sliceArr(arr,size) {
        // arr是传入的要切割的数组
        // size是每个切割的数组有多少项
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            let picture={alt:'proofPicture',url:arr[i]}
            newArr.push(picture);
        }
        return newArr;
    }

    let proofPictures=sliceArr(changeItem[changeItem.length-1].proofPicture,1);


    return (
            <div style={{
                backgroundColor:'white',
                position:'absolute',
                left:'25%',
                right:'30%',
                top:'15%',
                borderRadius:'15px',
                boxShadow:"0px 0px 10px 5px #aaa"
            }}>
                <br/>
                <b style={{color:'black',fontSize:'25px'}}>修改加分项</b>
                <br/><br/>
                <Form
                    ref={formRef}
                    autoComplete='off'
                    {...formItemLayout}
                    size={"large"}
                    initialValues={{
                        slider: 20,
                        'a.b[0].c': ['b'],
                    }}
                    scrollToFirstError
                >

                    <FormItem label='加分项名称' field='加分项名称' rules={[{ required: true }]}
                              initialValue={changeItem[changeItem.length-1].bonusPointName}
                    >
                        <Input style={{width:'70%'}} ref={(ref) =>(nameInput=ref)}/>
                    </FormItem>

                    <FormItem label='加分项类别' field='加分项类别' rules={[{ required: true }]}
                              initialValue={changeItem[changeItem.length-1].bonusScoreCategory}
                    >
                        <Input style={{width:'70%'}} ref={(ref) =>(categoryInput=ref)}/>
                    </FormItem>

                    <FormItem label='加分值' field='加分值' rules={[{ required: true }]}
                              initialValue={changeItem[changeItem.length-1].addedValue}
                    >
                        <InputNumber style={{width:'40%',position:'relative',right:'15%'}}
                                     step={0.01}
                                     precision={1}
                                     ref={(ref) =>(addValueInput=ref)}
                        />
                    </FormItem>

                    <Form.Item
                        label='证明图片'
                        field='证明图片'
                        triggerPropName='fileList'
                        rules={[{ required: true }]}
                        initialValue={proofPictures}
                    >
                        <Upload
                            listType='picture-card'
                            multiple
                            imagePreview
                            name='files'
                            action='/'
                        />
                    </Form.Item>

                    <FormItem label='详细信息' field='详细信息' rules={[{ required: true }]}
                              initialValue={changeItem[changeItem.length-1].detailInformation}
                    >
                        <TextArea style={{width:'70%'}} ref={(ref) =>(detailsInput=ref)}/>
                    </FormItem>

                    <FormItem
                        {...noLabelLayout}
                        field='readme'
                        triggerPropName='checked'
                        rules={[{ type: 'boolean', true: true }]}
                        style={{position:'relative',right:'15%'}}
                    >
                        <Checkbox>我已知晓并会遵守学校相关规定</Checkbox>
                    </FormItem>

                    <FormItem {...noLabelLayout} style={{position:'relative',right:'15%'}}>
                        <Button
                            onClick={async () => {
                                if (formRef.current) {
                                    try {
                                        await formRef.current.validate();
                                        Message.info('校验通过，提交成功！');
                                        const changeBonusPointItem={
                                            key:changeItem[changeItem.length-1].key,
                                            bonusPointName:nameInput.dom.value,
                                            bonusScoreCategory:categoryInput.dom.value,
                                            addedValue:Number(addValueInput.dom.value),
                                            proofPicture:['/avatar.img'],
                                            detailInformation:detailsInput.dom.value,
                                        }
                                        // PubSub.publish('changeBonusPoint',changeBonusPointItem)//将新增的数据传递给加分项列表
                                        store.dispatch(createChangeBonusPoint(changeBonusPointItem))
                                        ifChangeBonusPointFunction(false)//关闭修改加分项表单
                                    } catch (_) {
                                        console.log(formRef.current.getFieldsError());
                                        Message.error('校验失败，请检查字段！');
                                    }
                                }
                            }}
                            type='primary'
                            style={{ marginRight: 24 }}
                        >
                            提交
                        </Button>
                        <Button
                            onClick={() => {
                                formRef.current.resetFields();
                            }}
                        >
                            重置
                        </Button>
                        <Button
                            onClick={() => {
                                const deleteBonusPointItem={
                                    key:changeItem[changeItem.length-1].key,
                                }
                                // PubSub.publish('deleteBonusPoint',deleteBonusPointItem)//将需要删除的数据传递给加分项列表
                                store.dispatch(createDeleteBonusPoint(deleteBonusPointItem))
                                ifChangeBonusPointFunction(false)//关闭修改加分项表单
                            }}
                            status={"danger"}
                            type={"primary"}
                            style={{position:'relative',left:'5.5%'}}
                        >
                            删除
                        </Button>
                    </FormItem>
                </Form>
            </div>
    );
}

export default ChangeBonusPointForm;