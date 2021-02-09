<template>
    <div>
        <div id="graph"></div>
    </div>
</template>

<script>
    import G6 from '@antv/g6';
    import G6GraphConfig from '../config/graph/G6-Graph-default'

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
                const graph = new G6.Graph(G6GraphConfig);

                this.graph = graph;
                this.graph.read(this.graphData); // 读取数据
            },
        },
    };
</script>

<style scoped>

</style>