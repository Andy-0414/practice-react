/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useDialog } from "../hooks/use-dialog/useDianlog";

function Main() {
    const { showDialog, hideDialog } = useDialog();

    useEffect(() => {
        showDialog("다이얼로그 테스트");
        setTimeout(() => hideDialog(), 2000);
    }, []);

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
            Hello React!
            <br />
            <br />
            Main Page(React, Typescript, Emotion, Yarn Berry, React-Query, Recoil)
        </div>
    );
}

export default Main;
