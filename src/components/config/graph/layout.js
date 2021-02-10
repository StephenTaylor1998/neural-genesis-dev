export default {
    Grid: {
        type: 'grid',
        begin: [0, 0],          // 可选，
        preventOverlap: true,     // 可选，必须配合 nodeSize
        preventOverlapPdding: 20, // 可选
        nodeSize: 30,             // 可选
        condense: false,          // 可选
        rows: 5,                  // 可选
        cols: 5,                  // 可选
        sortBy: 'degree',         // 可选
        workerEnabled: true,      // 可选，开启 web-worker
    },
    Dagre: {
        type: 'dagre',
        rankdir: 'LR', // 可选，默认为图的中心
        // align: 'DL', // 可选
        nodesep: 20, // 可选
        ranksep: 50, // 可选
        controlPoints: true, // 可选
    },
}