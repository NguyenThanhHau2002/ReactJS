import { memo } from "react";

import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_about">
                <h1 className="footer_about_logo">SIVI SHOP</h1>
                <ul>
                    <li>Dia Chi: 213 Duong Dinh Nghe</li>
                    <li>Phone: 0977-232-232</li>
                    <li>Email: ngthanhhau.dev@gmail.com</li>

                </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_widget">
                <h6>Cua Hang</h6>
                <ul>
                    <li>
                        <Link to={""}>Lien He</Link>
                    </li>
                    <li>
                        <Link to={""}>Thong tin ve chung toi</Link>
                    </li>
                    <li>
                        <Link to={""}>San Pham Kinh Doanh</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={""}>Thong Tin Tai Khoan</Link>
                    </li>
                    <li>
                        <Link to={""}>Gio Hang</Link>
                    </li>
                    <li>
                        <Link to={""}>Danh Sach Yeu Thich</Link>
                    </li>
                </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_widget">
                <h6>Khuyen Mai && Uu Dai</h6>
                <p>Dang ki nhan thong tin tai day:</p>
                <form action="#">
                    <div className="input-group">
                        <input type="text" placeholder="Nhap email:"/>
                        <button type="submit " className="button_submit"> Dang Ky</button>
                    </div>
                    <div className="footer_widget_social">
                        <div>
                            <AiOutlineFacebook/>
                        </div>
                        <div>
                            <AiOutlineInstagram/>
                        </div>
                        <div>
                            <AiOutlineLinkedin/>
                        </div>
                       
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);
