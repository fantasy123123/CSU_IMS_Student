//综测流程界面的文字说明部分，采用了组件库的组件

import {Collapse} from '@arco-design/web-react';
const CollapseItem = Collapse.Item;
const IMSPageTextDescription=()=>{
    return (
        <Collapse
            bordered={true}
            style={{ position:'absolute',left:'2%',right:'2%'}}
            expandIconPosition={"right"}
            accordion={true}
        >
            <CollapseItem header='一、计分方法' name='1'>

            </CollapseItem>

            <CollapseItem header='二、智育素质测评' name='2'>

            </CollapseItem>

            <CollapseItem header='三、德育素质测评' name='3'>

            </CollapseItem>

            <CollapseItem header='四、综合素质加分（上限为3分）' name='4'>

            </CollapseItem>
        </Collapse>
    );
}

export default IMSPageTextDescription