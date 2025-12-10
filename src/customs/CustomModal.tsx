import { Modal } from "antd";
import type { FC, ReactElement, ReactNode } from "react";
import CustomTooltip from "./CustomTooltip";
import { CloseOutlined } from '@ant-design/icons';


interface CustomModalProps {
    open: boolean;
    modalBody: ReactNode | ReactElement;
    okCancel: () => void;
    footer?: ReactElement;
    title?: ReactNode | string;
    centered?: boolean;
    width?: number | string;
    className?: string;
    zIndex?: number;
    closeClassname?: string;
    modalBodyClassName?: string
    destroyOnClose?: boolean;
}

const CustomModal: FC<CustomModalProps> = (props: CustomModalProps) => {
    const {
        open,
        modalBody,
        okCancel,
        footer,
        title = "",
        centered = false,
        width = "",
        className,
        zIndex = 1000,
        closeClassname,
        modalBodyClassName = "mt-4",
        destroyOnClose,
    } = props;

    return (
        <Modal
            className={className}
            open={open}
            title={title}
            onCancel={okCancel}
            footer={footer ? footer : null}
            maskClosable={false}
            centered={centered}
            width={width}
            zIndex={zIndex}
            closable={title ? true : false}
            destroyOnClose={destroyOnClose}
            closeIcon={
                <CustomTooltip title={"Close"} >
                    <CloseOutlined onPointerOverCapture={() => { }}
                        onPointerMoveCapture={() => { }} className={closeClassname} />
                </CustomTooltip>
            }>
            <section className={modalBodyClassName}>
                {modalBody}
            </section>
        </Modal>
    );
};

export default CustomModal;
