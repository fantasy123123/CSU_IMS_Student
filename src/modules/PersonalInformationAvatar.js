//导航栏的个人信息部分的头像部分

import { Avatar,Space } from '@arco-design/web-react';

const PersonalInformationAvatar = () => {
    return (
        <Space size='large'>
            <Avatar size={84}>
                <img
                    alt='avatar'
                    src='/avatar.img'
                />
            </Avatar>
        </Space>
    );
};

export default PersonalInformationAvatar;