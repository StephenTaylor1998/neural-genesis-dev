import Layout from "./layout"
export default {
    container: 'graph',
    width: window.innerWidth - 210,
    height: window.innerHeight - 100,
    // width: 800,
    // height: 600,
    layout: Layout.Dagre,
    // layout: Layout.Grid,
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
}