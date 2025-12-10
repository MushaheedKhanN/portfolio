import { Tooltip } from "antd";

import React from "react";

interface CustomTooltipProps {
  title: string | React.ReactNode;
  placement?: "top" | "left" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | undefined;
  children: React.ReactNode;
  className?: string;
  trigger?: any;
  color?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = (props) => {
  const { title, placement = "bottom", children = <></>, className, trigger = "hover", color = "text-gray-50" } = props;
  return (
    <Tooltip
      trigger={trigger}
      title={title}
      placement={placement}
      className={className}
      arrow={false}
      color={color}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
