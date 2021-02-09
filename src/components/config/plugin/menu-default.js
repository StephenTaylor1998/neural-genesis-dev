export default {
    offsetX: 6,
    offsetY: 10,
    itemTypes: ['node'],
    // eslint-disable-next-line no-unused-vars
    getContent(e) {
        const outDiv = document.createElement('div');
        outDiv.style.width = '180px';
        outDiv.innerHTML = `<ul>
        <li>测试01</li>
        <li>测试01</li>
        <li>测试01</li>
        <li>测试01</li>
        <li>测试01</li>
      </ul>`
        return outDiv
    },
    handleMenuClick(target, item) {
        console.log(target, item)
    },
};