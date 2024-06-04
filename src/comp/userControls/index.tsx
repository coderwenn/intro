import React, { memo } from "react"
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'


const items: MenuProps['items'] = [
    {
        label: '退出登陆',
        key: '1',
    },
    {
        label: '修改信息',
        key: '2',
    }
];

const UserInfo: React.FC = () => {
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = ({ key }) => {
        if (key == '1') {
            // 跳转到登录页
            navigate(`/login`)
        }
        message.info(`Click on item ${key}`);
    };

    return <>
        <Dropdown menu={{ items, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </a>
        </Dropdown>

    </>
}

export default memo(UserInfo)