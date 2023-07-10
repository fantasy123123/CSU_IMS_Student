//左端导航栏的下方的导航部分，采用了组件库的组件

import React from 'react';
import {Menu} from '@arco-design/web-react';
import '../css/menuItems.css'
import {
    IconExport,
    IconFile,
    IconList,
    IconNotification,
    IconQuestion,
    IconSettings,
    IconSubscribe
} from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;

const MenuItems=()=>{
    return(
        <Menu
              theme={"dark"}
              style={{position:'absolute',
              bottom:"0",
              fontSize:'17px'}}
              defaultOpenKeys={['IMS']}
              defaultSelectedKeys={['IMS']}
        >
            <MenuItem key='IMS'>
                <IconFile />
                综合测评
            </MenuItem>
            <MenuItem key='messages'>
                <IconNotification />
                消息通知
            </MenuItem>
            <MenuItem key='affairs'>
                <IconSubscribe />
                待办事项
            </MenuItem>
            <MenuItem key='linkings'>
                <IconList />
                常用链接
            </MenuItem>
            <MenuItem key='helping'>
                <IconQuestion />
                帮助
            </MenuItem>
            <MenuItem key='settings'>
                <IconSettings />
                设置
            </MenuItem>
            <MenuItem key='exit'>
                <IconExport />
                退出
            </MenuItem>
        </Menu>
    )
}

export default MenuItems