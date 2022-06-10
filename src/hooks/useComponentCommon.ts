import { computed } from "vue";
import { pick } from "lodash-es";
import { CommonDefaultProps } from "@/defaultProps";

export const useComponentCommon = (
  props: Readonly<Partial<CommonDefaultProps & { isEditing: boolean }>>,
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks));
  const handleClick = () => {
    if (props.actionType === "url" && props.url && !props.isEditing) {
      window.location.href = props.url;
    }
  };
  return {
    styleProps,
    handleClick,
  };
};
