import React, { useEffect } from "react";
import "../../assets/lib/animate/animate.min.css";
// import 'react-owl-carousel/dist/styles/owl.carousel.min.css';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { motion } from "framer-motion";

// استيراد الصور
import sty1 from "../../assets/img/sty-1.png";
import appScreen from "../../assets/img/app-screen.png";
import aboutImg from "../../assets/img/about-img.jpg";
import aboutIcon1 from "../../assets/img/about-icon-1.png";
import aboutIcon2 from "../../assets/img/about-icon-2.png";
// import whiteLogo from "../../assets/img/white-logo.png";
import { useTranslation } from "react-i18next";

const Application: React.FC = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  var dir;
  var rev_dir;
  const selectedLanguage = i18n.language;
  if (selectedLanguage == "ar") {
    dir = "rtl";
    rev_dir = "ltr";
  } else {
    dir = "ltr";
    rev_dir = "rtl";
  }
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = selectedLanguage === "ar" ? "style-ar.css" : "style-en.css";
    const numStars = 600; // عدد النجوم
    const container = document.querySelector(".stars-container");

    if (container) {
      for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // تحديد موقع عشوائي
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";

        // عشوائية في مدة الوميض
        let duration = Math.random() * 2 + 1 + "s"; // بين 1 و 3 ثوانٍ
        star.style.animationDuration = duration;

        container.appendChild(star);
      }
    }
  }, [selectedLanguage]); // [] تعني أن useEffect سيعمل مرة واحدة بعد التحميل

  return (
    <div className={` ${selectedLanguage}-body`}>
      {/* Features Section */}
      <div className="container-fluid feature pt-5">
        <div className="container py-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-center mx-auto pb-5"
            style={{ maxWidth: "800px" }}
          >
            {" "}
            <div
              className="text-center mx-auto pb-5 wow fadeInUp hero-header"
              data-wow-delay="0.1s"
              style={{ maxWidth: "800px" }}
            >
              <div className="rotate-img">
                <img src={sty1} className="img-fluid w-100" alt="" />
                <div className="rotate-sty-2"></div>
              </div>
              <h1
                className={`display-5 text-capitalize mb-3 ${selectedLanguage}-ltm-name text-center`}
              >
                {t("application.title")}
                <br />
                <span className="text-primary">
                  {t("application.subtitle")}
                </span>
              </h1>
              <p className="mb-0">{t("application.description")}</p>
            </div>
          </motion.div>

          <div className="row g-4 align-items-center">
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span
                        className="fas fa-book-open fa-2x"
                        style={{ background: "#B3D8A8", color: "#315f24" }}
                      ></span>
                    </div>
                    <div className={`${selectedLanguage}-me-4`}>
                      <h5 className="mb-3" style={{ color: "#315f24" }}>
                        {t("features.stories.title")}
                      </h5>
                      <p className="mb-0">
                        {t("features.stories.description")}
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span
                        className="fas fa-video fa-2x"
                        style={{ background: "#DAD2FF", color: "#6c5bb9" }}
                      ></span>
                    </div>
                    <div className={`${selectedLanguage}-me-4`}>
                      <h5 className="mb-3" style={{ color: "#6c5bb9" }}>
                        {t("features.series.title")}
                      </h5>
                      <p className="mb-0">{t("features.series.description")}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="col-lg-12 col-xl-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={appScreen}
                className="img-fluid w-100"
                style={{ objectFit: "cover" }}
                alt="App Screen"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div className="col-xl-4">
              <div className="row gy-4 gx-0" dir={`${rev_dir}`}>
                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-item ">
                    <div className="feature-icon">
                      <span
                        className="fas fa-music fa-2x"
                        style={{ background: "#A1E3F9", color: "#2886a6" }}
                      ></span>
                    </div>
                    <div
                      className={`${selectedLanguage}-text-end ${selectedLanguage}-ms-4`}
                      dir={`${dir}`}
                    >
                      <h5 className="mb-3" style={{ color: "#2886a6" }}>
                        {t("features.songs.title")}
                      </h5>
                      <p className="mb-0">{t("features.songs.description")}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="col-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span
                        className="fas fa-gamepad fa-2x"
                        style={{ background: "#FFB8E0", color: "#a4226b" }}
                      ></span>
                    </div>
                    <div
                      className={`${selectedLanguage}-text-end ${selectedLanguage}-ms-4`}
                      dir={`${dir}`}
                    >
                      <h5 className="mb-3" style={{ color: "#a4226b" }}>
                        {t("features.games.title")}
                      </h5>
                      <p className="mb-0">{t("features.games.description")}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="col-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-item justify-content-center">
                <div className="feature-icon">
                  <span
                    className="fas fa-quran fa-2x"
                    style={{ background: "#B4EBE6", color: "#247c74" }}
                  ></span>
                </div>
                <div className={`${selectedLanguage}-me-4`}>
                  <h5 className="mb-3" style={{ color: "#247c74" }}>
                    {t("features.quran.title")}
                  </h5>
                  <p className="mb-0">{t("features.quran.description")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Download Buttons */}

      <div className="row g-5 d-flex justify-content-center">
        <motion.div
          className="col-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <a className="btn-solid-lg" href="https://apps.apple.com/sa/app/عالم-القمر-الصغير/id6756599732">
            <i className={`fab fa-apple ${selectedLanguage}-fa-apple`}></i>{" "}
            DOWNLOAD
          </a>
        </motion.div>
        <motion.div
          className="col-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            className="btn-solid-lg"
            href="https://play.google.com/store/apps/details?id=com.zworkshop.littlemoon&pcampaignid=web_share"
          >
            <i
              className={`fab fa-google-play ${selectedLanguage}-fa-google-play`}
            ></i>{" "}
            DOWNLOAD
          </a>
        </motion.div>
      </div>

      {/* About Start */}
      <div className="container-fluid overflow-hidden about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <motion.div
              className="col-xl-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-item">
                <div className="pb-5">
                  <h1
                    className={`display-5 text-capitalize ${selectedLanguage}-ltm-name ${selectedLanguage}-text`}
                  >
                    {t("about.title")}{" "}
                    <span className="text-primary">{t("about.subtitle")}</span>
                  </h1>
                  <p className="mb-0">{t("about.description")}</p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div
                        className="about-icon mb-4"
                        style={{ background: "#A1E3F9" }}
                      >
                        <img
                          src={aboutIcon1}
                          className="img-fluid w-50 h-50"
                          alt="Icon"
                        />
                      </div>
                      <h5
                        className={`mb-3 bold-text ${selectedLanguage}-vision-text`}
                      >
                        {t("about.vision.title")}
                      </h5>
                      <p className="mb-0">{t("about.vision.description")}</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div
                        className="about-icon mb-4"
                        style={{ background: "#FFB8E0" }}
                      >
                        <img
                          src={aboutIcon2}
                          className="img-fluid h-50 w-50"
                          alt="Icon"
                        />
                      </div>
                      <h5
                        className={`mb-3 bold-text ${selectedLanguage}-vision-text`}
                      >
                        {t("about.mission.title")}
                      </h5>
                      <p className="mb-0">{t("about.mission.description")}</p>
                    </div>
                  </div>
                </div>
                <p className="text-item my-4">{t("about.goal")}</p>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="text-center rounded bg-secondary p-4">
                      <h1 className="display-6 text-white">+20</h1>
                      <h5 className="text-light mb-0">
                        {t("about.experience")}
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rounded">
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        {t("about.features.educational_content")}
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        {t("about.features.entertainment_experience")}
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        {t("about.features.positive_values")}
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-check-circle text-primary me-1"></i>{" "}
                        {t("about.features.safe_environment")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-xl-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-img">
                <div className="stars-container"></div>
                <div className="img-1">
                  <img
                    src={aboutImg}
                    className="img-fluid rounded w-100"
                    alt=""
                  />
                </div>
                <div className="stars-container"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Services Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <motion.div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "900px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1
              className={`display-5 text-capitalize mb-3 ${selectedLanguage}-header-font`}
              style={{ color: "#009990" }}
            >
              {t("services.title")}
            </h1>
            <p className="mb-0">{t("services.description")}</p>
          </motion.div>
          <div className="row g-4 justify-content-center">
            <motion.div
              className="col-md-6 col-lg-4 col-xl-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon" style={{ background: "#e46a96" }}>
                  <span
                    className="fas fa-child fa-3x"
                    style={{ color: "#fff" }}
                  ></span>
                </div>
                <h5
                  className={`mb-3 bold-text ${selectedLanguage}-features-text`}
                  style={{ color: "#e46a96" }}
                >
                  {t("services.features.children_experience.title")}
                </h5>
                <p className="mb-0">
                  {t("services.features.children_experience.description")}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-4 col-xl-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon">
                  <span
                    className="fas fa-mobile-alt fa-3x"
                    style={{ color: "#fff" }}
                  ></span>
                </div>
                <h5
                  className={`mb-3 bold-text ${selectedLanguage}-features-text`}
                  style={{ color: "#1e98ee" }}
                >
                  {t("services.features.easy_app.title")}
                </h5>
                <p className="mb-0">
                  {t("services.features.easy_app.description")}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-4 col-xl-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon" style={{ background: "#eb6c3e" }}>
                  <span
                    className="fas fa-gamepad fa-3x"
                    style={{ color: "#fff" }}
                  ></span>
                </div>
                <h5
                  className={`mb-3 bold-text ${selectedLanguage}-features-text`}
                  style={{ color: "#eb6c3e" }}
                >
                  {t("services.features.education_entertainment.title")}
                </h5>
                <p className="mb-0">
                  {t("services.features.education_entertainment.description")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Pricing Start */}
      <div className="container-fluid price py-5">
        <div className="container py-5">
          <motion.div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "900px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4  className={`text-primary ${selectedLanguage}-header-font`}>{t("pricing.plans")} </h4>
            <h1 className={`display-5 mb-4 ${selectedLanguage}-header-font`}>
              {t("pricing.choose_plan")}
            </h1>
            <p className="mb-0">{t("pricing.description")}</p>
          </motion.div>
          <div className="row g-5 justify-content-center">
            <motion.div
              className="col-md-6 col-lg-6 col-xl-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="price-item bg-light rounded text-center">
                <div
                  className="text-center text-dark border-bottom d-flex flex-column justify-content-center p-4"
                  style={{ width: "100%", height: "160px" }}
                >
                  <p className={`fs-2 fw-bold text-uppercase mb-0 ${selectedLanguage}-header-font`}>
                    {t("pricing.monthly.title")}
                  </p>
                  <div className="d-flex justify-content-center">
                    <strong className="align-self-start">$</strong>
                    <p className="mb-0">
                      <span className="display-5">
                        {t("pricing.monthly.price")}
                      </span>
                      /{t("pricing.monthly.unit")}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p>
                    <i className="fas fa-check text-success me-1"></i>{" "}
                    {t("pricing.features.unlimited_access")}
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1"></i>{" "}
                    {t("pricing.features.support")}
                  </p>
                  <button
                    className="btn btn-light rounded-pill py-2 px-5"
                    type="button"
                  >
                    {t("pricing.subscribe_now")}
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-md-6 col-lg-6 col-xl-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="price-item bg-light rounded text-center">
                <div className="pice-item-offer">{t("pricing.best_value")}</div>
                <div
                  className="text-center text-primary border-bottom d-flex flex-column justify-content-center p-4"
                  style={{ width: "100%", height: "160px" }}
                >
                  <p  
                  className={`fs-2 fw-bold text-uppercase mb-0 ${selectedLanguage}-header-font`}
                  >
                    {t("pricing.annual.title")}
                  </p>
                  <div className="d-flex justify-content-center">
                    <strong className="align-self-start">$</strong>
                    <p className="mb-0">
                      <span className="display-5">
                        {t("pricing.annual.price")}
                      </span>
                      /{t("pricing.annual.unit")}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p>
                    <i className="fas fa-check text-success me-1"></i>{" "}
                    {t("pricing.features.unlimited_access")}
                  </p>
                  <p>
                    <i className="fas fa-check text-success me-1"></i>{" "}
                    {t("pricing.features.support")}
                  </p>
                  <button
                    className="btn btn-light rounded-pill py-2 px-5"
                    type="button"
                  >
                    {t("pricing.subscribe_now")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Pricing End */}
    </div>
  );
};

export default Application;
