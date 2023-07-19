//点击综测加分项列表界面的添加加分项按钮后弹出的表单界面，采用了组件库的表单

import React, {useEffect, useRef} from 'react';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Message,
    Upload,
    InputNumber
} from '@arco-design/web-react';
import store from "../redux/store";
import {createAddBonusPoint} from "../redux/action";

const FormItem = Form.Item;
const TextArea= Input.TextArea

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

function AddBonusPointForm({ifAddBonusPointFunction}) {
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
                <b style={{color:'black',fontSize:'25px'}}>增添加分项</b>
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

                <FormItem label='加分项名称' field='加分项名称' rules={[{ required: true }]}>
                    <Input style={{width:'70%'}} ref={(ref) =>(nameInput=ref)}/>
                </FormItem>

                <FormItem label='加分项类别' field='加分项类别' rules={[{ required: true }]}>
                    <Input style={{width:'70%'}} ref={(ref) =>(categoryInput=ref)}/>
                </FormItem>

                <FormItem label='加分值' field='加分值' rules={[{ required: true }]}>
                    <InputNumber style={{width:'40%',position:'relative',right:'15%'}}
                                 ref={(ref) =>(addValueInput=ref)}
                                 step={0.01}
                                 precision={1}
                    />
                </FormItem>

                <Form.Item
                    label='证明图片'
                    field='证明图片'
                    triggerPropName='fileList'
                    rules={[{ required: true }]}
                >
                    <Upload
                        listType='picture-card'
                        multiple
                        name='files'
                        action='/'
                    />
                </Form.Item>

                <FormItem label='详细信息' field='详细信息' rules={[{ required: true }]}>
                    <TextArea style={{width:'70%'}} autosize={true} ref={(ref) =>(detailsInput=ref)}/>
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
                                    const addBonusPointItem={
                                        bonusPointName:nameInput.dom.value,
                                        bonusScoreCategory:categoryInput.dom.value,
                                        addedValue:Number(addValueInput.dom.value),
                                        proofPicture:[
                                            '/avatar.img',
                                            '/avatar.img'
                                        ],
                                        detailInformation:detailsInput.dom.value
                                    }
                                    // PubSub.publish('addBonusPoint',addBonusPointItem)//将新增的数据传递给加分项列表
                                    store.dispatch(createAddBonusPoint(addBonusPointItem))
                                    ifAddBonusPointFunction(false)//关闭此表单
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
                            ifAddBonusPointFunction(false)//关闭此表单
                        }}
                        status={"danger"}
                        type={"primary"}
                        style={{position:'relative',left:'5.5%'}}
                    >
                        取消
                    </Button>
                </FormItem>
            </Form>
        </div>
    );
}

export default AddBonusPointForm;
