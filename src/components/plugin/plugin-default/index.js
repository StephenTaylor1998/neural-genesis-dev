import G6 from "@antv/g6";
import GridConfig from "../../config/plugin/grid-default"
import MenuConfig from "../../config/plugin/menu-default"
import MinimapConfig from "../../config/plugin/minimap-default"
import ToolBarConfig from "../../config/plugin/toolbar-default"
import ToolTipConfig from "../../config/plugin/tooltip-default"


const grid = new G6.Grid(GridConfig);

const minimap = new G6.Minimap(MinimapConfig);

const menu = new G6.Menu(MenuConfig);

const toolBar = new G6.ToolBar(ToolBarConfig);

const tooltip = new G6.Tooltip(ToolTipConfig);

export default {
    plugins: [grid, minimap, menu, toolBar, tooltip]
}
