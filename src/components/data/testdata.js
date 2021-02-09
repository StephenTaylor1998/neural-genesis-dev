export default {
    nodes: [
        {
            id: '1',
            label: 'InputBlock',
            type: 'rect',
            style: {
                rx: 50,
                ry: 20,
            },
        },
        {
            id: '2',
            label: 'Conv2d',
            type: 'rect',
            style: {
                rx: 50,
                ry: 20,
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
            style: {
                rx: 50,
                ry: 20,
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
}