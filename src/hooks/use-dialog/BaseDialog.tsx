/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { PropsWithChildren } from "react";

export function BaseDialog({ children }: PropsWithChildren) {
    return (
        <div css={{ position: "fixed", left: 0, bottom: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div css={{ background: "white", borderRadius: "6px", padding: "15px" }}>{children}</div>
        </div>
    );
}
