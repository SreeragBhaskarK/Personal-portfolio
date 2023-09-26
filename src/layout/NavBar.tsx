



export const NavBar = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
                <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
            <header className="header">
                <a href="#" className="logo">Sreerag</a>

                <div className="bx bx-manu" id="menu-icon">
                    <i className="bx bx-menu"></i>
                </div>

                <nav className="navbar">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        </>
    )
}

export default NavBar