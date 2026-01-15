import { Box, Typography } from "@mui/material";
import whiteLogo from '../../assets/img/white-logo.png';
import '../../assets/css/style.css';

import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

// 1. تعريف مسارات الصور (تأكد من وجود صور اليوتيوب والتيك توك في ملفاتك)
const BannerMoonImage = "/images/home/banner-image.svg";
const LogoFacebook = "/images/footer/communication.png";
const LogoInstagram = "/images/footer/instagram.png";
// const LogoWhatsapp = "/images/footer/whatsapp.png";
const LogoYoutube = "/images/footer/youtube.png"; // تأكد من إضافة هذه الصورة
const LogoTiktok = "/images/footer/tik-tok.png";   // تأكد من إضافة هذه الصورة

// 2. تحديث مصفوفة الروابط
const SocialMedia: { img: string; link: string }[] = [
  { 
    img: LogoYoutube, 
    link: "https://youtube.com/@littlemoonworld9593?si=Uo7gGB8YHR1WOpxj" 
  },
  { 
    img: LogoInstagram, 
    // تنبيه: الرابط أدناه هو رابط يوتيوب كما ورد في طلبك، يرجى استبداله برابط الإنستغرام الصحيح عند توفره
    link: "https://youtube.com/@littlemoonworld9593?si=Uo7gGB8YHR1WOpxj" 
  },
  { 
    img: LogoFacebook, 
    link: "https://www.facebook.com/share/1CiG6s11cU/?mibextid=wwXIfr" 
  },
  { 
    img: LogoTiktok, 
    link: "https://www.tiktok.com/@.little.moon72?_r=1&_t=ZS-9305THhE3fw" 
  },
];

const Footer: FC = () => {
  const { t } = useTranslation();
  
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
          
          {/* العمود الأول: معلومات التواصل */}
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
              <p><a href="tel:+905312706322"> +905312706322</a></p>
              <p><a href="mailto:info@littlemoonworld.com">info@littlemoonworld.com</a></p>
            </div>
          </motion.div>
    
          {/* العمود الثاني: روابط سريعة */}
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
    
          {/* العمود الثالث: عن الشركة + السوشيال ميديا */}
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

              {/* 3. إضافة قسم عرض أيقونات التواصل الاجتماعي هنا */}
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                {SocialMedia.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    {/* تم تحديد حجم للصورة لضمان عدم تشوه التصميم */}
                    <img src={item.img} alt="social-icon" style={{ width: '30px', height: '30px' }} />
                  </a>
                ))}
              </div>

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