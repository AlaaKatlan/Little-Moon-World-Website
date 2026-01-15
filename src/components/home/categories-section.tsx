import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { pxToRem } from "../../shared";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import StoriesImage from "../../assets/images/home/categories/stories-categories.svg";
import TVImage from "../../assets/images/home/categories/tv.png";
import SingWithMeImage from "../../assets/images/home/categories/sign-with-me.svg";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

interface CardProps {
  bgColor: string;
  img: string;
  text: string;
  height: string;
  width: string;
  lang:string
}

const Card: FC<CardProps> = ({ bgColor, img, text, height, width,lang }) => {
  return (
    <Stack
     className={`${lang}-ltm-cat `}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "351px",
        height: "30rem",
        borderRadius: "40px",
        backgroundColor: bgColor,
        position: "relative",
        display: "flex",
      }}
    >
      <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        variants={{
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        src={img}
        alt={`categories-${text}`}
        width={width}
        height={height}
        style={{ position: "absolute", top: "-90px" }}
      />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "400",
          width: "200px",
          textAlign: "center",
          mt: "auto",
          mb: 2,
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

const CategoriesSection: FC = () => {

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
  const matches = useMediaQuery(Theme.breakpoints.up("md"));
  const isSmall = useMediaQuery(Theme.breakpoints.down("sm"));
  
  const cardsContent: CardProps[] = [
    {
      img: StoriesImage,
      text: t("categories_section.card1"), // Use t() for translation
      bgColor: "#B9E5FB",
      height: "240px",
      width: "240px",lang:selectedLanguage,
    },
    {
      img: TVImage,
      text: t("categories_section.card2"), // Use t() for translation
      bgColor: "#FFFDDD",
      height: "auto",
      width: "340px",lang:selectedLanguage,
    },
    {
      img: SingWithMeImage,
      text: t("categories_section.card3"), // Use t() for translation
      bgColor: "#FCE4EC",
      height: "280px",
      width: "280px",lang:selectedLanguage,
    },
  ];

  return (
    <Stack direction="column">
      <Typography
      className={`${selectedLanguage}-ltm-cat`}
        sx={{
          fontSize: {
            xs: pxToRem(50),
            md: pxToRem(70),
          },
color:"#315f24",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "106px",
          marginTop: {
            xs: "50px",
            md: 0,
          },
        }}
      >
        {t("categories_section.title")} {/* Translate the title */}
      </Typography>

      <Stack
        direction={!!matches ? "row" : "column"}
        justifyContent="space-between"
        alignItems="center"
        
        spacing={!!isSmall ? 15 : 0}
        sx={{
          marginInline: {
            md: "110px",
          },
        }}
      >
        {cardsContent.map(({ bgColor, height, img, text, width,lang }) => (
          <Card

            key={bgColor}
            bgColor={bgColor}
            height={height}
            img={img}
            text={text}
            width={width}
            lang={lang}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default CategoriesSection;
