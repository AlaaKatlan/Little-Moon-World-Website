import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import BublesImage from "../../assets/images/home/bubles.svg";
import { pxToRem } from "../../shared";

export const AboutSection: FC = () => {
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
  const Theme = useTheme();
  const isSmall = useMediaQuery(Theme.breakpoints.down("sm"));
  const sectionRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(sectionRef.current);

    // return () => {
    //   observer.unobserve(sectionRef.current);
    // };
  }, []);

  return (
    <Box
      style={{
        position: "relative",
        paddingBlock: "40px",
      }}
    >
      {!isSmall && (
        <img
          src={BublesImage}
          style={{
            position: "absolute",
            zIndex: "-9999",
            left: 0,
            width: "100%",
          }}
          alt="Background bubbles"
        />
      )}
      <Box
      className={`tracking-in-expand ${selectedLanguage}-ltm-ptext`}
        sx={{
          background: "linear-gradient(125.65deg, #DBFEFD 0.81%, #E4DFFF 100%)",
          borderRadius: isSmall ? "26px" : "176.08px 26.41px 26.41px 26.41px",
          paddingTop: "80px",
          paddingBottom: "50px",
          paddingInline: {
            xs: 4,
            md: "95px",
          },
          margin: {
            xs: 1,
            md: "110px",
          },
        }}
      >
        <Typography
          ref={sectionRef}
          className={`tracking-in-expand ${selectedLanguage}-ltm-font`}
          sx={{
            fontWeight: "700",
            fontSize: {
              xs: pxToRem(50),
              md: pxToRem(70),
            },
            marginBottom: "83px",
            textAlign: "center",
          }}
        >
          <h3>{t("aboutSection.title")}</h3>
        </Typography>
        <Typography
          className={isVisible ? "tracking-in-expand" : ""}
          sx={{
            fontWeight: "400",
            fontSize: {
              xs: pxToRem(26),
              md: pxToRem(40),
            },
          }}
        >
          {t("aboutSection.history")}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
