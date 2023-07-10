//导航栏的个人信息部分的文字内容部分，包括姓名、院系、专业班级以及学号，采用了组件库的描述列表

import { Descriptions } from '@arco-design/web-react';
import '../css/personalDetailInformation.css'
const PersonalDetailInformation=()=>{
    const data = [
        {
            label: '姓名',
            value: '夏铎恺',
        },
        {
            label: '院系',
            value: '计算机学院',
        },
        {
            label: '专业班级',
            value: '软件工程2206',
        },
        {
            label: '学号',
            value: '8209220608',
        },
    ];
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