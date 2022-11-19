import { createContext, Fragment, PropsWithChildren, ReactNode, useCallback, useMemo, useState } from "react";
import { BaseDialog } from "./BaseDialog";

export const DialogContext = createContext<{
    showDialogById(id: string, node: ReactNode): void;
    hideDialogById(id: string): void;
} | null>(null);

export function DialogProvider({ children }: PropsWithChildren) {
    // 다이얼로그 데이터를 저장하는 Map
    const [dialogMap, setDialogMap] = useState<Map<string, ReactNode>>(new Map());

    // 다이얼로그 보여주기
    const showDialogById = useCallback(
        (id: string, node: ReactNode) =>
            setDialogMap((dialogMap) => {
                const cloned = new Map(dialogMap);
                cloned.set(id, node);
                return cloned;
            }),
        []
    );
    // 다이얼로그 닫기
    const hideDialogById = useCallback(
        (id: string) =>
            setDialogMap((dialogMap) => {
                const cloned = new Map(dialogMap);
                cloned.delete(id);
                return cloned;
            }),
        []
    );

    return (
        <DialogContext.Provider value={{ showDialogById, hideDialogById }}>
            {children}
            {[...dialogMap.entries()].map(([id, node]) => (
                <BaseDialog key={id}> {node}</BaseDialog>
            ))}
        </DialogContext.Provider>
    );
}
