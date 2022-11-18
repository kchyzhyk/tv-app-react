import {
    BrowserRouter,
    Routes,
    Route, Link,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/Detailpage";
import TestPage from "./pages/TestPage";


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    <Route exact path="/test" element={<TestPage/>} />
                    <Route path="details/:id" element={<DetailPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
