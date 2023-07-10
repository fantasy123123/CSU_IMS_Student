//左边导航栏的个人信息部分

import PersonalInformationAvatar from "./PersonalInformationAvatar";
import PersonalDetailInformation from "./PersonalDetailInformation";
import {Button} from "@arco-design/web-react";
const PersonalInformation=()=>{
    return (
        <div style={{position:"absolute",
            top:'10%',
            left:'15%',
            right:'15%',
            fontSize:'22px'
        }}>

            <PersonalInformationAvatar/>
            <PersonalDetailInformation></PersonalDetailInformation>
            <Button
                type={"secondary"}
                size={"large"}
                style={{height:'40px',fontSize:'17px'}}
                long>
                详细个人信息
            </Button>

        </div>
    )
}

export default PersonalInformation;