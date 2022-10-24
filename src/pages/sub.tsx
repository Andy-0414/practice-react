/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

function Sub() {
    return (
        <div
            css={{
                width: "100vw",
                height: "100vh",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "center",

                background: "#333333",
            }}
        >
            Hello React Router!
            <br />
            <br />
            Sub Page
        </div>
    );
}

export default Sub;
