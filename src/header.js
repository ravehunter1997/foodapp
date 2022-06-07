import React from "react";
import './header.css'

const Header = () => {
  return (
    <>
       <header>
            <div id="brand">
                Developer Funnel
            </div>
            <div id="social">
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" class="socialImg"/>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" class="socialImg"/>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" class="socialImg"/>
                </a>
            </div> 
        </header>
    </>
  );
};

export default Header;
