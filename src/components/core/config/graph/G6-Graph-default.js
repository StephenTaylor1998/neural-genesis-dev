export default {
    container: 'graph',
    width: window.innerWidth,
    height: window.innerHeight,
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
}