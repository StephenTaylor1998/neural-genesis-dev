<template>
    <div id="graph"/>

</template>

<script>
    import G6 from "@antv/g6";
    import G6GraphConfig from './config/graph/G6-Graph-default'
    // test data
    import TestData from "@/components/data/testdata";

    export default {
        name: 'Main',
        data() {
            return {
                graph: null,
                graphData: TestData,
                g6GraphConfig: G6GraphConfig,
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
                this.graph = new G6.Graph(this.g6GraphConfig);
                this.graph.read(this.graphData);
            },
        },
    }
</script>

<style scoped>

</style>
