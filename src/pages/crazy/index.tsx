import React, { FC } from "react";
import './style.scss'


const CrazyComp: FC = () => {
    React.useEffect(() => {
        const intersectionObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(it => {
                    console.log(it.target, it.intersectionRatio)
                })
            }, {
            // 监听是否到窗口显示区
            threshold: [0.5, 1]
        }
        )
        intersectionObserver.observe(document.querySelector('.box1')!)
        intersectionObserver.observe(document.querySelector('.box2')!)
    }, [])
    return <>
        <h2>Js练习</h2>
        <div className="box1">box111</div>
        <div className="box2">box222</div>
    </>
}

export default CrazyComp