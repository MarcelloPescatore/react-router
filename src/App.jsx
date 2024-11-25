import { BrowserRouter, Route, Routes } from "react-router-dom"
import Posts from './pages/Posts.jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import DefaultLayout from "./pages/DefaultLayout.jsx"

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />} >
                        <Route path="/" element={<Home/>}/>
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


