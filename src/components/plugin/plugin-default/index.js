import G6 from "@antv/g6";
import GridConfig from "../../config/plugin/default-grid"
import MenuConfig from "../../config/plugin/default-menu"
import MinimapConfig from "../../config/plugin/default-minimap"
import ToolBarConfig from "../../config/plugin/default-toolbar"
import ToolTipConfig from "../../config/plugin/default-tooltip"


const grid = new G6.Grid(GridConfig);

const minimap = new G6.Minimap(MinimapConfig);

const menu = new G6.Menu(MenuConfig);

const toolBar = new G6.ToolBar(ToolBarConfig);

const tooltip = new G6.Tooltip(ToolTipConfig);

export default {
    plugins: [grid, minimap, menu, toolBar, tooltip]
}
