//导航栏的个人信息部分的文字内容部分，包括姓名、院系、专业班级以及学号，采用了组件库的描述列表

import { Descriptions } from '@arco-design/web-react';
import '../css/personalDetailInformation.css'

const person={
    '姓名':"夏铎恺",
    '学院':"计算机学院",
    '专业班级':'软件工程2206',
    '学号':"8209220608",
};

const data=[];

Object.keys(person).forEach(key=>{
    data.push({label:key,value:person[key]})
})

const PersonalDetailInformation=()=>{
    return (
        <div>
            <br/>
            <Descriptions
                column={1}
                data={data}
                style={{ marginBottom: 20}}
                labelStyle={{ paddingRight: 36 }}
                size={'large'}
            />
        </div>
    )
}

export default PersonalDetailInformation