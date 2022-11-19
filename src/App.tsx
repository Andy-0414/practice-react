/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Sub from "./pages/sub";
import { DialogProvider } from "./hooks/use-dialog/DialogProvider";

function App() {
    return (
        <DialogProvider>
            <RecoilRoot>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/sub" element={<Sub />}></Route>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </DialogProvider>
    );
}

export default App;
