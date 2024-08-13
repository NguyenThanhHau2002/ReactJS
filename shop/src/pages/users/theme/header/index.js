import { memo, useState } from "react";
import "./style.scss";
import { AiFillFacebook, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fromater } from "utils/fomater";
import { ROUTERS } from "utils/router";
const Header = () => {
  const [isShowCategories, setShowCategories] = useState();
  const [menus] = useState([
    {
      name: "Trang Chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Của Hàng",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản Phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài Viết",
      path: "",
    },
    {
      name: "Liên Hệ",
      path: "",
    },
  ]);
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiTwotoneMail />
                  Hello@gmail.com
                </li>
                <li>Mien phi ship don tu {fromater(200000)} </li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiFillFacebook />
                  </Link>
                </li>

                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>

                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineGlobal />
                  </Link>
                </li>

                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng Nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header_logo">
              <h1>SIVI SHOP</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menukey) => (
                  <li key={menukey} className={menukey == 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menukey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* <li>
                  <ul>
                    <li>Thit</li>
                    <li>Thit</li>
                    <li>Thit</li>
                  </ul>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{fromater(1200000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_catagories">
            <div
              className="hero_catagories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh Sach San Pham
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hiden"}>
                <li>
                  <Link to={"#"}>Thit Tuoi</Link>
                </li>
                <li>
                  <Link to={"#"}>Rau Cu</Link>
                </li>
                <li>
                  <Link to={"#"}>Nuoc Trai Cay</Link>
                </li>
                <li>
                  <Link to={"#"}>Trai Cay</Link>
                </li>
                <li>
                  <Link to={"#"}>Hai San</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9 hero_search_container">
            <div className="hero_search">
              <div className="hero_search_form">
                <form>
                  <input type="text" placeholder="Ban Dang tim gi"></input>
                  <button type="submit"> Tim Kiem</button>
                </form>
              </div>
              <div className="hero_search_phone">
                <div className="hero_search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero_search_phone_text">
                  <p>0774008406</p>
                  <span>Ho tro 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero_item">
              <div className="hero_text">
                <span>Trai Cay Tuoi</span>
                <h2>
                  Rau Qua <br />
                  Sach 100%
                </h2>
                <p>Mien phi giao hang tan noi</p>
                <Link to={""} className="primary-btn">
                  Mua Ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
