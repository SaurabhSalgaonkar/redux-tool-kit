import { Route, Routes } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Home } from "./Home"
import { Cart } from "./Cart"
import { About } from "./About"

export const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="cart" element={<Cart />} />
                <Route path="home" element={<Home />}/>
                <Route path="about" element={<About />}/>
            </Routes>
            <Footer/>
        </>
    )
}