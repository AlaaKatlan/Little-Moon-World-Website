import { Box, Typography } from "@mui/material";
import whiteLogo from '../../assets/img/white-logo.png';
import '../../assets/css/style.css';

import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // استيراد الدالة useTranslation

const BannerMoonImage = "/images/home/banner-image.svg";
const LogoFacebook = "/images/footer/facebook.svg";
const LogoInstagram = "/images/footer/instagram.svg";
const LogoWhatsapp = "/images/footer/whatsapp.svg";
const SocialMedia: { img: string; link: string }[] = [
  { img: LogoInstagram, link: "www.facebook.com" },
  { img: LogoFacebook, link: "www.facebook.com" },
  { img: LogoWhatsapp, link: "www.facebook.com" },
];

const Footer: FC = () => {
  const { t } = useTranslation(); // استخدام الدالة t لترجمة النصوص
  const openInNewTab = (url: string): void => {
    window.open(url, "_blank");
  };

  return (
    <motion.footer
      id="newsletter"
      
      className="wow fadeInUp"
      data-wow-delay="0.1s"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row">
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="footer-widget" dir="ltr">
              <h4>{t('footer.contact')}</h4>
              <p>{t('footer.location')}</p>
              <p><a href="tel:+966123456789"> +905312706322</a></p>
              <p><a href="mailto:info@littlemoonworld.com">info@littlemoonworld.com</a></p>
            </div>
          </motion.div>
    
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="footer-widget">
              <h4>{t('footer.about_us')}</h4>
              <ul>
                <li><a href="#">{t('footer.about')}</a></li>
                <li><a href="#">{t('footer.features')}</a></li>
                <li><a href="#">{t('footer.pricing')}</a></li>
              </ul>
            </div>
          </motion.div>
    
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="footer-widget">
              <h4>{t('footer.about_company')}</h4>
              <div className="logo">
                <motion.img
                  src={whiteLogo}
                  alt="عالم القمر الصغير"
                  className="wow fadeIn"
                  data-wow-delay="0.5s"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <p>{t('footer.company_description')}</p>
            </div>
          </motion.div>
        </div>
    
        <motion.div
          className="row mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-12 text-center">
            <div className="copyright-text">
              <p>
                {t('footer.copyright')} &copy; 2025 {t('footer.all_rights_reserved')}
                <br /> {t('footer.developed_by')}: <a href="https://dar-alzaibak.com/" target="_blank" title="Z.WorkShop">Z.WorkShop</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
