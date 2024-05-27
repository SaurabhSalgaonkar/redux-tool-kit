import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <>
            <div className="header-container">
                <div className="brand-name">
                    Saurabh's Website Zomato
                </div>
                <div className="nav-link">
                    <Link className="links" to={"home"}>Home</Link>
                    <Link className="links" to={"about"}>About</Link>
                    <Link className="links" to={"cart"}>Cart {"2 items"}</Link>
                </div>
            </div>
        </>
    )
}