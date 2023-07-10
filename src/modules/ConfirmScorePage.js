//成绩确认界面，包括提示、标题、个人成绩以及综测加分等信息、确认按钮,采用了组件库的布局

import ConfirmScorePagePersonalScore from "./ConfirmScorePagePersonalScore";
import {Button} from "@arco-design/web-react";
import { Layout } from '@arco-design/web-react';
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const ConfirmScorePage=()=>{
    return (
        <>
            <div className='layout-basic-demo'>
                <Layout style={{position:'absolute',top:'5%'}}>
                    <Header>
                        <b style={{
                            color:"black",
                            fontSize:'30px'
                        }}>
                            2021-2022年综合测评结果
                        </b>

                        <div style={{
                            color:"grey",
                            fontSize:'15px',
                            textAlign:'left',
                            marginLeft:'20px',
                            marginBottom:'25px',
                            marginTop:'5px'
                            }}>*提示：请在公示阶段完成前点击“确认综测结果”按钮完成对自己综测结果的确认
                        </div>
                    </Header>
                    <Content>
                        <ConfirmScorePagePersonalScore/>
                    </Content>
                    <Footer>
                        <Button
                            type={"primary"}
                            style={{
                                width:'220px',
                                height:'50px',
                                borderRadius:'10px',
                                fontSize:'20px',
                                marginTop:'30px',
                                position:'relative',
                                right:'7%',
                            }}
                        >
                            确认综测结果
                        </Button>
                    </Footer>
                </Layout>
            </div>
        </>
    )
}

export default ConfirmScorePage