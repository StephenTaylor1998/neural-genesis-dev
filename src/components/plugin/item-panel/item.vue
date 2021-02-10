<template>
    <ul>
        <li
                v-for="(item,index) in list"
                :key="index"
                class="getItem"
                :data-shape="item.shape"
                :data-type="item.type"
                :data-size="item.size"
                draggable="true"
                @dragstart="handleDragstart"
                @dragend="handleDragEnd($event,item)"
        >
            <span class="pannel-type-icon" :style="{background:'url('+item.image+')'}"></span>
            {{item.name}}
        </li>
    </ul>
</template>

<script>
    import okSvg from "@/assets/icons/ok.svg";
    import bgImg from "@/assets/bg.jpg";

    export default {
        data() {
            return {
                page: null,
                command: null,
                offsetX: 0,
                offsetY: 0,
                list: [
                    {
                        name: "Conv2d",
                        label: "Conv2d",
                        size: "170*34",
                        type: "node",
                        x: 0,
                        y: 0,
                        shape: "customNode",
                        color: "#1890ff",
                        image:
                            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
                        stateImage: okSvg,
                        inPoints: [[0, 0.5]],
                        outPoints: [[1, 0.5]]
                    },
                    {
                        name: "Conv3d",
                        label: "Conv3d",
                        size: "170*34",
                        type: "node",
                        x: 0,
                        y: 0,
                        shape: "customNode",
                        color: "#1890ff",
                        image:
                            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
                        stateImage: okSvg,
                        backImage: bgImg,
                        inPoints: [[0, 0.5]],
                        outPoints: [[1, 0.5]]
                    },
                    {
                        name: "Linear",
                        label: "Linear",
                        size: "170*34",
                        type: "node",
                        x: 0,
                        y: 0,
                        shape: "customNode",
                        color: "#1890ff",
                        image:
                            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
                        stateImage: okSvg,
                        inPoints: [[0, 0.5]],
                        outPoints: [[1, 0.4], [1, 0.6]]
                    },
                    {
                        name: "Pool2d",
                        label: "Pool2d",
                        size: "340*34",
                        type: "node",
                        x: 0,
                        y: 0,
                        shape: "customNode",
                        color: "#1890ff",
                        image:
                            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
                        stateImage: okSvg,
                        inPoints: [[0, 0.5]],
                        outPoints: [[1, 0.5]]
                    },
                    {
                        name: "InputData",
                        label: "InputData",
                        size: "170*34",
                        type: "node",
                        x: 0,
                        y: 0,
                        shape: "customNode",
                        color: "#1890ff",
                        image:
                            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
                        stateImage: okSvg,
                        inPoints: [[0, 0.5]],
                        outPoints: [[1, 0.5]],
                        isDoingStart: true
                    },
                    {
                        name: "OutputData",
                        label: "OutputData",
                        size: "170*34",
                        type: "node",
                        x: 0,
                        y: 0,
                        shape: "customNode",
                        color: "#1890ff",
                        image:
                            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
                        stateImage: okSvg,
                        inPoints: [[0, 0.5]],
                        outPoints: [[1, 0.5]],
                        isDoingEnd: true
                    },
                    {
                        name: "MY_NODE",
                        label: "MY_NODE",
                        size: "170*34",
                        type: "node",
                        x: 0,
                        y: 0,
                        shape: "customNode",
                        color: "#1890ff",
                        image:
                            "https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg",
                        stateImage: okSvg,
                        inPoints: [[0.5, 0]],
                        outPoints: [[0.5, 1]],
                        isDoingEnd: true
                    }
                ]
            };
        },
    };
</script>

<style scoped>
    .itempannel {
        height: 50%;
        position: absolute;
        left: 0px;
        z-index: 2;
        background: #f7f9fb;
        width: 200px;
        padding-top: 8px;
        border-right: 1px solid #e6e9ed;
    }

    .itempannel ul {
        padding: 0px;
        padding-left: 16px;
    }

    .itempannel li {
        color: rgba(0, 0, 0, 0.65);
        border-radius: 4px;
        width: 160px;
        height: 28px;
        line-height: 26px;
        padding-left: 8px;
        border: 1px solid rgba(0, 0, 0, 0);
        list-style-type: none;
    }

    .itempannel li:hover {
        background: white;
        border: 1px solid #ced4d9;
        cursor: move;
    }

    .itempannel .pannel-type-icon {
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
    }
</style>