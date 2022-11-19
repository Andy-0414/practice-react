import { ReactNode, useContext, useMemo, useState } from "react";
import { DialogContext } from "./DialogProvider";

let globalDialogId = 0;

export function useDialog() {
    const context = useContext(DialogContext);
    if (context == null) throw new Error("useDialog는 사용하려면 DialogProvider가 필요합니다.");

    const { showDialogById, hideDialogById } = context;
    const [dialogId] = useState(() => String(globalDialogId++));

    return useMemo(
        () => ({
            showDialog(node: ReactNode) {
                showDialogById(dialogId, node);
            },
            hideDialog() {
                hideDialogById(dialogId);
            },
        }),
        [dialogId, showDialogById, hideDialogById]
    );
}
