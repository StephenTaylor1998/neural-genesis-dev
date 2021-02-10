<template>
    <div>
        <!--  Navigation Bar  -->
        <div id="navigator"></div>
        <!--  Left Node Panel  -->
        <ItemPanel></ItemPanel>

        <!--  Center Graph  -->
        <div id="graph"/>

        <!--  tool bar  -->
        <div id="minimap"></div>

        <!--  Right cfg Panel  -->

        <!--  Tools in Bottom  -->
    </div>
</template>

<script>
    import G6 from "@antv/g6";
    import Plugin from "./plugin/plugin-default"
    import G6GraphConfig from "./config/graph/G6-Graph-default"
    import ItemPanel from "./plugin/item-panel"
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
        components: {
            ItemPanel,
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

    #navigator {
        height: 30px;
    }

    #graph {
        margin-left: 200px;
    }

    #minimap {
        clear: both; /* 清除浮动元素格式 */
        position: relative;
        margin-top: -250px; /* Footer 高度的负值 */
        height: 203px;
        width: 203px;
        left: 200px;
        border: 3px solid #e2e4e6;

    }

</style>
