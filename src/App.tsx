/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

function App() {
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
            React, Typescript, Emotion, Yarn Berry, React-Query(설치중), Recoil(설치중)
        </div>
    );
}

export default App;
