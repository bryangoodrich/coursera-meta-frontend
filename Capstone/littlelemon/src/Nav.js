const Nav = () => {
    return (
        <nav>
            <ul className="nav">
                <li>
                    <span className="nav-left">Hamburger</span>
                </li>
                <li>
                    <span className="nav-center">
                        <a href="/">
                            <img src="logo.jpg" alt="Company logo" />
                        </a>
                    </span>
                </li>
                <li>
                    <span className="nav-right">
                        <a href="/">
                            <img src="icon.jpg" alt="Add menu item icon" />
                        </a>
                    </span>
                </li>
            </ul>
        </nav >
    );
}

export default Nav;
