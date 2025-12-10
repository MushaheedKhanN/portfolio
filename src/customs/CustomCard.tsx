import { type FC, type HTMLAttributes } from "react";
import { memo } from "react";
import { cn } from "../helpers/className";

interface ICustomCardProps extends HTMLAttributes<HTMLDivElement> {
    header?: string;
    wrapperClassName?: string;
}

const CustomCard: FC<ICustomCardProps> = (props) => {
    const { className, wrapperClassName, header, children, ...rest } = props;

    return (
        <section
            className={cn("bg-white shadow dark:border dark:border-white/10 dark:bg-dark", wrapperClassName)}
            {...rest}>
            {header && (
                <div className="border-b p-4 dark:border-white/10">
                    <p className="text-dark dark:text-gray-100">{header}</p>
                </div>
            )}
            <div className={cn("p-4", className)}>{children}</div>
        </section>
    );
};

export default memo(CustomCard);
