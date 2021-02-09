import G6 from "@antv/g6";
// import MenuConfig from "../../config/plugin/menu-default"

const grid = new G6.Grid();

const minimap = new G6.Minimap();

const menu = new G6.Menu({
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
});

const tooltip = new G6.Tooltip({
    offsetX: 10,
    offsetY: 10,
});

export default {
    plugins: [grid, minimap, menu, tooltip]
    // plugins: [grid, minimap, menu]
}
