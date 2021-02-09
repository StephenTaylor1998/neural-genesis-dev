<template>
    <div>
        <div id="graph"></div>
    </div>
</template>

<script>
    import G6 from '@antv/g6';

    export default {
        props: {
            graphData: Object,
        },
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

                this.graph = graph;
                this.graph.read(this.graphData); // 读取数据
            },
        },
    };
</script>

<style scoped>

</style>