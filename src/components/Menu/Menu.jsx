import MenuLink from './MenuLink';

const Menu = () => {
    return (
        <header>
            <nav className="navigation">
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/about">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu;