//成绩确认界面的个人信息部分，包括排名、综测加分、成绩等

import {Descriptions} from "@arco-design/web-react";
import '../css/ConfirmScorePagePersonalScore.css'
import ConfirmScorePageBonusScoreList from "./ConfirmScorePageBonusScoreList";
const data = [
    {
        label: '加权成绩',
        value: '78',
    },
    {
        label: '本学年所修学分',
        value: '56',
    },
    {
        label: '挂科数',
        value: '0',
    },
    {
        label: '德育分',
        value: '92',
    },
    {
        label: '综合素质加分合计',
        value: '2.23',
    },
];
const score=[{
        label:'最终成绩',
        value:'90.00'
    },
    {
        label:'排名',
        value:'10'
    }]
const ConfirmScorePagePersonalScore=()=>{
    return(
    <div style={{position:'relative',left:'4%'}}>
        <Descriptions
            size={'large'}
            colon=' :'
            layout='inline-horizontal'
            data={data} />
        <ConfirmScorePageBonusScoreList/>
        <Descriptions
            style={{marginTop:'15px'}}
            size={'large'}
            colon=' :'
            layout='inline-horizontal'
            data={score} />
    </div>
    )
};


export default ConfirmScorePagePersonalScore