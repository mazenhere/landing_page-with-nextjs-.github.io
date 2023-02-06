import React from "react";
import Link from "next/link";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img6.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import Image from "next/image";

const Navigation = () => (
  <header className="col-sm-12 col-md-12 col-lg-12">
    <nav>
      <Link
        href="#"
        onClick={() => Router.back()}
        style={{ textDecoration: "none", color: "black" }}
      >
        Back
      </Link>
    </nav>
    <div className="header">
      <h2 className="subtitle">digital artist</h2>
      <h1 className="title">banksy_is_dead</h1>
    </div>
    <button>
      <FontAwesomeIcon icon={faBars} />
    </button>
  </header>
);

const Body = () => (
  <main className="col-sm-12 col-md-12 col-lg-12">
    <div className="d-flex mt-5 col-12">
      <div className="image-container col-md-3 col-6">
        <Image src={img1} alt="Image" className="pb-4" />
        <p className="image-description">
          Id dignissim nulla tortor adipiscing tortor euismod.
        </p>
        <h6>22,600</h6>
      </div>
      <div className="image-container col-md-3 col-6">
        <Image src={img2} alt="Image" className="pb-4" />
        <div className="description">
          <p className="image-description">Ut enim donec gravida mollis</p>
          <h6>7,850</h6>
        </div>
      </div>
      <div className="image-container col-md-2 col-4 ">
        <Image src={img3} alt="Image" className="pb-4" />
        <div className="description">
          <p className="image-description">
            Tellus vel enim curabitur neque amet amet
          </p>
          <h6>10,330</h6>
        </div>
      </div>
      <div className="image-container col-md-2 col-4">
        <Image src={img4} alt="Image" className="pb-4" />
        <div className="description">
          <p className="image-description">Ut enim donec gravida</p>
          <h6>2,150</h6>
        </div>
      </div>
      <div className="image-container  col-md-2 col-4">
        <Image src={img5} alt="Image" className="pb-4" />
        <div className="description">
          <p className="image-description">Et nulla et facilisi</p>
          <h6>2,150</h6>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-end p-4 text-uppercase">
      <div className="d-flex flex-column col-3">
        <h6>children of </h6>
        <h2>forgotton</h2>
        <h2>god</h2>
      </div>
      <div className="arrow-content d-flex flex-row p-4 col-3">
        <p>Explore More art works</p>
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          style={{ backgroundColor: "white", color: "black" }}
        />
      </div>
      <div className="d-flex flex-column p-4 ">
        <button className="text-uppercase">start bidding</button>
      </div>
    </div>
    <div className="plentesque col-md-12 col-6 pt-4">
      <p>Pellentesque ut consectetur nulla</p>
      <h1>
        <b>Eget quis</b> ultrices id
      </h1>
      <h1>
        eu nec <b>nulla.</b>
        <input
          type="button"
          value={"sometimes"}
          className="btn-sometimes rounded-pill"
        />
      </h1>
    </div>
    <div className="image-container-2 d-flex mt-5 col-12">
      <div className="image-container col-md-4 col-6 ">
        <Image src={img6} alt="Image" className="pb-4" />
        <p className="image-description">Ultrices fames neque pharetra</p>
        <p style={{ color: "GrayText" }}>Nulla faucibus</p>
      </div>
      <div className="image-container col-md-4 col-6">
        <Image src={img7} alt="Image" className="pb-4" />
        <p className="image-description">Ultrices fames neque pharetra</p>
        <p style={{ color: "GrayText" }}>Nulla faucibus</p>
      </div>
      <div className="image-container col-md-4 col-6">
        <Image src={img8} alt="Image" className="pb-4" />
        <p className="image-description">Ultrices fames neque pharetra</p>
        <p style={{ color: "GrayText" }}>Nulla faucibus</p>
      </div>
    </div>
    <div className="footer">
      <div>
        <div className="">
          <p className="odio">Odio morbi</p>
          <h1 className="Urna">Urna aliquam tinc</h1>
          <h1>Aliquam pellentesque</h1>
        </div>
        <blockquote className="p-5 m-0">
          Sed nunc nunc sagittis nulla varius. Vitae justo volutpat dolor ac.
          Elementum sed aliquet lorem sapien volutpat. In sed velit pretium sed.
          In quisque adipiscing congue faucibus. Enim orci feugiat mattis
          ultricies enim arcu cras mattis aliquet. Consequat amet amet mauris ac
          at est erat. Diam egestas volutpat purus accumsan nulla tellus
          faucibus. Viverra eleifend amet egestas tincidunt posuere.
        </blockquote>
      </div>
      <div>
        <Image src={img9} alt="img9" height={500} />
      </div>
    </div>
  </main>
);

const Layout = () => (
  <div className="p-5">
    <Navigation />
    <Body />
  </div>
);

export default Layout;
