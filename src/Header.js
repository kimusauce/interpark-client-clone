import "./styles/header.css";
export default function Header() {
  return (
    <header className="header">
      {/* <!-- layout area --> */}
      <div className="header-inner">
        {/* <!-- logo, search, etc area --> */}
        <div className="header-top">
          {/* <!-- logo,search area --> */}
          <div className="header-top-left">
            {/* <!-- logo area --> */}
            <a href="#" className="logo"></a>
            {/* <!-- search area --> */}
            <div className="header-search">
              {/* <!-- input data --> */}
              <form className="search-form">
                <input type="text" className="search-word" name="search" />
                <input type="button" value="검색" className="search-bt" />
              </form>
            </div>
          </div>
          {/* <!-- etc area --> */}
          <div className="header-top-right">
            <ul className="member-menu">
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#" id="mypage-bt" className="mypage-bt">
                  마이페이지
                  <img src="/images/icon_arrow.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- category button area --> */}
        <div className="header-bottom">
          <ul className="header-category">
            <li>
              <a href="#">
                <img src="../images/icon_tour.png" alt="" />
                투어
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/icon_ticket.png" alt="" />
                티켓
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/icon_shopping.png" alt="" />
                쇼핑
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/icon_book.png" alt="" />
                도서
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/icon_triple.png" alt="" />
                트리플
              </a>
            </li>
            <li>
              <a href="#" className="last-image">
                <img src="../images/icon_special.png" alt="" />
                여행초특가
              </a>
            </li>
          </ul>

          <ul className="header-event">
            {/* <!-- <span className="bar"></span> --> */}
            <li>
              <a href="#">
                <img src="../images/icon_gnb_nol.png" alt="" />
                항공 즉시할인
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
