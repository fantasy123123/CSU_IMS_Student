//综测流程界面的综测流程列表部分

import IMSPageFlowCard from "./IMSPageFlowCard";

const IMSPageFlowCardTable=()=>{
    let data=[{img:'/IMSFlowYears.png',continueTime:'22-09-30 23：59：59'},{img:'/IMSFlowYears.png',continueTime:'23-09-30 23：59：59'},{img:'/IMSFlowYears.png',continueTime:'24-09-30 23：59：59'},{img:'/IMSFlowYears.png',continueTime:'25-09-30 23：59：59'}]
    const dataList=data.map(item=><div key={item.continueTime.substring(0,2)-1}><IMSPageFlowCard {...item}></IMSPageFlowCard></div>)

    return(
        <div style={{display:'flex',transform:'translate(2%,100%)'}}>
            {dataList}
        </div>
    )
}

export default IMSPageFlowCardTable