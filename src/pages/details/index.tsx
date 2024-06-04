import React, { memo } from "react";
import { Typography, Descriptions, Avatar, Card } from 'antd';
import { EllipsisOutlined, ApiOutlined } from '@ant-design/icons';
import { items } from './'
import { myURL } from '@/config/url/index'
import './style.scss'
import Chart from "./comp/Chart";


const { Title } = Typography;
const { Meta } = Card;


const jumpTo = () => {
    const w = window.open('_black') //这里是打开新窗口
    let url = myURL.blog
    if (w) {
        w.location.href = url //这样就可以跳转了
    }
}

const Details: React.FC = () => {

    return (
        <div>
            <Descriptions title={<Title level={3}>个人信息</Title>} items={items} />
            <Title level={3}>博客</Title>
            <div className="blog-box">
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <ApiOutlined key="link" onClick={() => jumpTo()} />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                        title="温千禧的个人博客"
                        description="This is the description"
                    />
                </Card>
                <div className="chart">
                    <Title level={3}>技能图表展示</Title>
                    <div className="chart-box">
                        <Chart />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default memo(Details)