import logo from "./img/Logo/Logotype.png"

function Header(){
    return (
        <div className="header flex">
            <div className="logo flex allign__center">
                <a href="#"><img src={logo} width="135px"/></a>
            </div>
            <div className="nav__bar flex">
                <div className="nav__bar__links__container">
                    <ul className="flex">
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Why</a></li>
                    </ul>
                </div>
                <div className="button__container flex allign__center">
                    <button>Download</button>
                </div>

            </div>
        </div>
    );
};

export default Header;