/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

function Main() {
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
