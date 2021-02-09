<template>
    <div>
        <!--  Navigation Bar  -->

        <!--  Left Node Panel  -->

        <!--  tool bar  -->
        <div id="minimap"></div>

        <!--  Center Graph  -->
        <div id="graph"/>

        <!--  Right cfg Panel  -->

        <!--  Tools in Bottom  -->
    </div>
</template>

<script>
    import G6 from "@antv/g6";
    import Plugin from "./plugin/plugin-default"
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
                plugins: Plugin.plugins
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.createGraphic();
            });

            if (typeof window !== 'undefined') {
                const container = document.getElementById('container');
                window.onresize = () => {
                    if (!this.graph || this.graph.get('destroyed')) return;
                    if (!container || !container.scrollWidth || !container.scrollHeight) return;
                    this.graph.changeSize(container.scrollWidth, container.scrollHeight);
                };
            }
        },
        beforeDestroy() {
            this.graph.destroy();
        },
        methods: {
            createGraphic() {
                this.g6GraphConfig.plugins = this.plugins;
                this.graph = new G6.Graph(this.g6GraphConfig);
                this.graph.read(this.graphData);
            },
        },
    }
</script>

<style scoped>
#minimap {
    position: fixed;
    top: 55px;
    left: 5px;
}

</style>
