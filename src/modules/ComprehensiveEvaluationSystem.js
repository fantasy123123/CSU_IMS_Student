//总页面，包括左边的导航栏以及右边展示的各种界面，采用了组件库的布局

import {Layout} from "@arco-design/web-react";
import PersonalInformation from "./PersonalInformation";
import MenuItems from "./MenuItems";
import ConfirmScorePage from "./ConfirmScorePage";
import IMSPage from "./IMSPage";
import BonusPointsPage from "./BonusPointsPage";

const Sider = Layout.Sider;
const Content = Layout.Content;
const ComprehensiveEvaluationSystem=()=>{
    return (
        <div className='layout-basic-demo'>
            <Layout style={{ position:'absolute',height: '100%',width:'100%' }}>
                <Layout>
                    <Sider style={{
                        position:'absolute',
                        height: '100%',
                        width:'17.5%',
                    }}
                    >
                        <PersonalInformation></PersonalInformation>
                        <MenuItems></MenuItems>
                    </Sider>
                    <Content style={{
                        position:'absolute',
                        height: '100%',
                        width:'82.5%',
                        right:'0'
                    }}>
                        {/*<IMSPage/>*/}
                        <BonusPointsPage/>
                        {/*<ConfirmScorePage/>*/}
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default ComprehensiveEvaluationSystem