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

const components = [LText, LImage];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { LText, LImage, install };

export default {
  install,
};
