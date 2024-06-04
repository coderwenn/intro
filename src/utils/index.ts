import { Irouters } from "@/types"

/*
* 处理ment路由
* */
export const getMent = (path: Irouters[]): { label: string, key: string }[] => {
    const filtrationArr: string[] = []
    return path.filter(
        it => !filtrationArr.includes(it.path)
    ).map(it => ({ label: it.name ?? '', key: it.path ?? '' }))
} 