//综测流程界面的综测流程列表部分的单个卡片，采用了组件库的卡片

import { Card } from '@arco-design/web-react';
const { Meta } = Card;

const IMSPageFlowCard=(props)=>{
    return(
        <Card
            hoverable
            style={{ width: 310,marginRight:'15px'}}
            cover={
                <div style={{ height: 204, overflow: 'hidden' }}>
                    <img
                        style={{ width: '100%'}}
                        alt='综合测评年份'
                        src={props.img}
                    />
                </div>
            }
        >
            <Meta
                description={
                    <>
                        <div style={{fontSize:'25px'}}>综合测评</div>
                        <div style={{display: 'flex',
                            justifyContent: 'space-between',
                            fontSize:'20px'
                        }}>
                            <div style={{display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'}}>
                                已结束
                            </div>

                            <a style={{display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                textDecoration:'none'}}
                                href={'about:blank'}
                            >
                                查看详情
                            </a>
                        </div>
                        <div style={{color:'red'}}>状态持续到</div>
                        <div style={{color:'red'}}>{props.continueTime}</div>
                    </>
                }
            />
        </Card>
    )
}

export default IMSPageFlowCard