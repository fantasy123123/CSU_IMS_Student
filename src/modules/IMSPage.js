//综测流程界面，包括标题、文字说明以及各个年份的综测流程

import {Divider} from "@arco-design/web-react";
import IMSPageFlowCardTable from "./IMSPageFlowCardTable";
import IMSPageTextDescription from "./IMSPageTextDescription";
const IMSPage=()=>{
    return(
           <div style={{
               color:'black',
               fontSize:'30px',
               position:'absolute',
               width:'100%',
               top:'2%'
               }}>
               <b>2022级综合测评实施方法</b>
               <Divider/>

               <IMSPageTextDescription/>

               <IMSPageFlowCardTable/>
           </div>
    )
}

export default IMSPage