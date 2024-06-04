// import { Producer } from "immer"
import {
    useRef,
    useEffect,
    useImperativeHandle,
    // createContext,
    // useContext
} from 'react'
import React from 'react'


const Guang: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {

    console.log(props)
    const iptRef = useRef<HTMLInputElement>(null)

    // 但是我如果要是不想暴露原生组件的一些东西时
    useImperativeHandle(ref, () => {
        return {
            aaa: () => {
                iptRef.current?.focus()
            }
        }
    }, [iptRef])

    return <>
        <input type="text" ref={iptRef} />
    </>
}

const WrapedGuang = React.forwardRef(Guang)


const Study = () => {
    // 假如State的数据嵌套太深可以使用producer

    const inputRef = useRef<HTMLInputElement>(null)
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        // 通过ref 自动聚焦
        inputRef.current?.focus()
        setTimeout(() => {
            console.log(ref);
            ref.current?.aaa()
        }, 3000);
    }, [])


    return (
        <>
            <input type="text" ref={inputRef} />
            <div>
                <WrapedGuang ref={ref}></WrapedGuang>
            </div>
        </>
    )
}

export default Study