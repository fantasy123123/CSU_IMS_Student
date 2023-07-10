//综测加分项提交总界面，包括标题、实时排名、综测加分项列表以及提交加分项等按钮
import React, {useEffect, useState} from "react";
import BonusPointsPageBonusScoreList from "./BonusPointsPageBonusScoreList";
import AddBonusPointForm from "./AddBonusPointForm";
import ChangeBonusPointForm from "./ChangeBonusPointForm";
import PubSub from "pubsub-js";

const BonusPointsPage=()=>{
    //定义变量，决定是否渲染添加加分项与修改加分项表单
    const [ifAddBonusPoint,setIfAddBonusPoint]=useState(false)
    const [ifChangeBonusPoint,setIfChangeBonusPoint]=useState(false)
    const [changeItem,setChangeItem]=useState([])

    //组件，根据上面定义的两个变量决定添加加分项与修改加分项表单的渲染与否
    function AddBonusPoint({ifAddBonusPoint,ifAddBonusPointFunction}){
        if(ifAddBonusPoint) return (<AddBonusPointForm ifAddBonusPointFunction={ifAddBonusPointFunction} />)
        else return null;
    }
    function ChangeBonusPoint({ifChangeBonusPoint,ifChangeBonusPointFunction}){
        if(ifChangeBonusPoint&&changeItem.length!==0) return (<ChangeBonusPointForm ifChangeBonusPointFunction={ifChangeBonusPointFunction} changeItem={changeItem}/>)
        else return null;
    }

    //这两个函数通过props配置项传递给加分项列表的添加加分项按钮与修改加分项按钮，以修改上面的两个变量
    function ifAddBonusPointFunction(value){
        setIfAddBonusPoint(value)
    }
    function ifChangeBonusPointFunction(value){
        setIfChangeBonusPoint(value)
    }

    //接收需要修改的加分项的原始数据
    PubSub.unsubscribe('changBonusPoint');
    PubSub.subscribe('changBonusPoint',(msg,data)=>{
        changeItem.push({
            ...data
        })
        if(changeItem.length!==1) changeItem.splice(0,1)
        setChangeItem([...changeItem])
    })

    return(
        <div>
            <b style={{
                position:"absolute",
                top:'2%',
                left:'30%',
                color:"black",
                fontSize:'30px'
            }}>
                2021-2022年综合测评加分项列表
            </b>
            <div style={{color:"black",
                top:'8.5%',
                left:'5%',
                fontSize:'25px',
                position:"absolute",
            }}>
                <span style={{color:'gray'}}>你的实时排名:</span> 10
            </div>

            <BonusPointsPageBonusScoreList  ifAddBonusPointFunction={ifAddBonusPointFunction} ifChangeBonusPointFunction={ifChangeBonusPointFunction}/>

            <AddBonusPoint ifAddBonusPoint={ifAddBonusPoint} ifAddBonusPointFunction={ifAddBonusPointFunction}/>

            <ChangeBonusPoint ifChangeBonusPoint={ifChangeBonusPoint} ifChangeBonusPointFunction={ifChangeBonusPointFunction}/>
        </div>
    )
}

export default BonusPointsPage