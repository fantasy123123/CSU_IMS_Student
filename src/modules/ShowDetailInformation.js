import React, {useState} from "react";
import {Button} from "@arco-design/web-react";

const ShowDetailInformation=({ifShowDetailsFunction,detail})=>{

    return (
            <div style={{
                backgroundColor:'white',
                position:'absolute',
                left:'25%',
                right:'30%',
                top:'15%',
                bottom:"20%",
                borderRadius:'15px',
                boxShadow:"0px 0px 10px 5px #aaa"
            }}>
                <br/>
                <b style={{color:'black',fontSize:'25px'}}>详细信息</b>
                <br/><br/>

                <div style={{
                    color:'black',
                    fontSize:'20px',
                    wordBreak:'break-all',
                    width:'75%',
                    position:'relative',
                    left:'12.5%',
                    textAlign:'left'
                }}>
                    {detail[detail.length-1].detailInformation}
                </div>

                <Button
                    onClick={() => {
                        ifShowDetailsFunction(false)//关闭此表单
                    }}
                    type={"primary"}
                    style={{
                        fontSize:'17px',
                        height:'40px',
                        borderRadius:'5px',
                        position:'absolute',
                        top:'85%',
                        left:'42%',
                        right:'42%',
                    }}
                >
                    关闭
                </Button>
            </div>
    )
}

export default ShowDetailInformation