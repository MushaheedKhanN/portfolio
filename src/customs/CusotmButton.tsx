import { Button, type ButtonProps } from "antd";
import { type ReactNode, type FC } from "react";

interface ICustomButton extends ButtonProps {
    label?: ReactNode;
}

const CustomButton: FC<ICustomButton> = (props) => {
    const { label, ...rest } = props;

    return <Button type="primary" className="!bg-amber-400" {...rest}>
        {label}
    </Button>
}

export default CustomButton;