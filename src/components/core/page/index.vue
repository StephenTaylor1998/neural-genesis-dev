<template>
    <div>
        <div id="graph"></div>
    </div>
</template>

<script>
    import G6 from '@antv/g6';

    export default {
        data() {
            return {
                graph: null,
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.createGraphic();
            });
        },
        beforeDestroy() {
            this.graph.destroy();
        },
        methods: {
            createGraphic() {
                const graph = new G6.Graph({
                    container: document.getElementById('graph'),
                    width: window.innerWidth,
                    height: window.innerHeight - 40,
                    layout: {
                        type: 'dagre',
                    },
                    modes: {
                        default: ['drag-node', 'drag-canvas', 'zoom-canvas', 'brush-select'],
                    },
                    defaultNode: {
                        type: 'rect',
                        style: {
                            radius: 4,
                            lineWidth: 2,
                            fill: '#EDF5FF',
                            stroke: '#1890ff',
                            shadowColor: '#1890ff',
                            shadowBlur: 20,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            cursor: 'move',
                        },
                        labelCfg: {
                            style: {
                                fontSize: 14,
                                fill: '#1890ff',
                                cursor: 'move',
                            },
                        },
                    },
                    defaultEdge: {
                        type: 'polyline',
                    },
                    fitView: true,
                    fitViewPadding: 100,
                });

                // 待渲染数据
                const data = {
                    nodes: [
                        {
                            id: '1',
                            label: 'InputBlock',
                            type: 'rect',
                            style: {
                                r: 40,
                                stroke: '#1890ff',
                                lineWidth: 5,
                            },
                        },
                        {
                            id: '2',
                            label: 'Conv2d',
                            type: 'rect',
                            style: {
                                width: 100,
                                height: 40,
                                radius: 6,
                                lineWidth: 2,
                            },
                        },
                        {
                            id: '3',
                            label: 'Conv2d',
                            type: 'rect',
                            style: {
                                rx: 50,
                                ry: 20,
                            },
                        },
                        {
                            id: '4',
                            label: 'OutputBlock',
                            type: 'rect',
                            size: [100, 50],
                            style: {
                                lineWidth: 2,
                            },
                        },
                    ],
                    edges: [
                        {
                            source: '1',
                            target: '2',
                            label: '[32, 3, 28, 28]',
                            type: 'line',
                        },
                        {
                            source: '1',
                            target: '3',
                            label: '[32, 3, 28, 28]',
                            type: 'line',
                        },
                        {
                            source: '2',
                            target: '4',
                            label: '[32, 3, 14, 14]',
                            type: 'line',
                        },
                        {
                            source: '3',
                            target: '4',
                            label: '[32, 3, 14, 14]',
                            type: 'line',
                        },
                    ],
                };

                this.graph = graph;
                this.graph.read(data); // 读取数据
            },
        },
    };
</script>

<style scoped>

</style>