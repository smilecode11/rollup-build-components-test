import { App } from "vue";

export {
  textDefaultProps,
  testStylePropNames,
  TextComponentProps,
  imageDefaultProps,
  imageStylePropNames,
  ImageDefaultProps,
  AllComponentProps,
} from "./defaultProps";

import LText from "./components/LText";
import LImage from "./components/LImage";
import FinalPage from './components/FinalPage'

const components = [LText, LImage, FinalPage];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { LText, LImage, FinalPage, install };

export default {
  install,
};
