import React from "react";
import ProfilePhoto from "../images/about-me.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
// import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from "@mui/icons-material/Email";

function AboutMe() {
  return (
    <div className="main-container">
      <div className="avatar-container">
        <div className="avatar">
          <img src={ProfilePhoto} alt="Prabhudev V" />
        </div>
      </div>
      <div className="name-container">
        <div className="name">
          <h2>Prabhudev Vatnal</h2>
        </div>
        <div className="desc">
          <h4>Software developer</h4>
        </div>
      </div>
      <div className="icons-container-1">
        <div className="icons">
          <a href="https://www.instagram.com/prabhudevv" target="_blank">
            <InstagramIcon fontSize="large" className="icon icon-1" />
          </a>
          <a href="https://www.facebook.com/prabhudevvatnal/" target="_blank">
            <FacebookIcon fontSize="large" className="icon icon-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/prabhudev-vatnal-49690ba6/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" className="icon icon-3" />
          </a>
          <a href="https://twitter.com/Prabhudev_V" target="_blank">
            <TwitterIcon fontSize="large" className="icon icon-4" />
          </a>
        </div>
      </div>
      <div className="icons-container-2">
        <div className="icons">
          <a href="mailto: prabhudev.vatnal55@gmail.com" target="_blank">
            <EmailIcon fontSize="large" className="icon icon-5" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+918904317204&text=Send Message to Prabhudev"
            target="_blank"
          >
            <WhatsAppIcon fontSize="large" className="icon icon-6" />
          </a>
          {/* <a href="" target="_blank">
          <TelegramIcon fontSize="large" className="icon icon-7" />
          </a> */}
          <a href="https://github.com/prabhudevv" target="_blank">
            <GitHubIcon fontSize="large" className="icon icon-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
