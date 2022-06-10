import { shallowMount } from "@vue/test-utils";
import LText from "../../src/components/LText";
import { textDefaultProps } from "../../src/defaultProps";

describe(`LText 组件测试`, () => {
  const { location } = window;
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: {
        href: "",
      },
    });
  });
  afterEach(() => {
    window.location = location;
  });
  it(`测试默认 render`, () => {
    const msg = "test";
    const props = {
      ...textDefaultProps,
      text: msg,
    };
    const wrapper = shallowMount(LText, { props });
    expect(wrapper.text()).toBe(msg);
    expect(wrapper.element.tagName).toBe("DIV");
    const style = wrapper.attributes().style;
    console.log(style);
    expect(style.includes("font-size")).toBeTruthy();
    expect(style.includes("actionType")).toBeFalsy();
  });

  it(`测试行为 - actionType & url & isEditing=false`, async () => {
    const props = {
      ...textDefaultProps,
      actionType: "url",
      url: "http://dummy.url",
      tag: "h2",
    };
    const wrapper = shallowMount(LText, { props });
    expect(wrapper.element.tagName).toBe("H2");
    await wrapper.trigger("click");
    expect(window.location.href).toBe(props.url);
  });

  it(`测试行为 - isEditiong=true`, async () => {
    const props = {
      ...textDefaultProps,
      actionType: "url",
      url: "http://dummy.url",
      tag: "h2",
      isEditing: true,
    };
    const wrapper = shallowMount(LText, { props });
    expect(wrapper.element.tagName).toBe("H2");
    await wrapper.trigger("click");
    expect(window.location.href).not.toBe(props.url);
  });
});
