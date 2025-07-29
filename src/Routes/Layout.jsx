import { Outlet, Link } from "react-router-dom";
import logo from "../assets/dnd_logo.png"

function Layout() {

    return(
        <>
            <div id="heading-container">
                <img id="dnd_logo" src={logo} alt="dnd logo" />
                <Link style={{ color: " rgb(187, 7, 7)" }} to="/">
                    <div className="button">See Characters</div>
                </Link>
            </div>
                
            <Outlet />
        </>
    )

}

export default Layout
