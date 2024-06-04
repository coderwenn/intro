import React, { memo } from "react";
import {
    Menu,
} from 'antd';
import { routers } from "@/router";
import { getMent } from "@/utils";
import { useNavigate } from "react-router-dom";
import { MenuInfo } from "rc-menu/lib/interface";

const MenuComp: React.FC = () => {

    const nav = useNavigate()

    const items = getMent(routers[1].children!)

    const toPath = (evt: MenuInfo) => {
        nav(evt.key)
    }

    return <>
        <Menu
            theme="light" //dark
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            onClick={(evt) => toPath(evt)}
            style={{ flex: 1, minWidth: 0 }}
        />
    </>
}

export default memo(MenuComp)