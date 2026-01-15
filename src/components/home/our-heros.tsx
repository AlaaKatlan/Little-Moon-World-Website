import { Box, Typography } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";

import Grid from "@mui/material/Grid";
import HeroCard from "../hero-card";
import { pxToRem } from "../../shared";
import { motion } from "framer-motion";

const base = "/images/heros/";
const hero1 = base + "abo.png";
const hero2 = base + "أرنوب.svg";
const hero3 = base + "أم الجدايل-01.svg";
const hero4 = base + "بطرريقو.svg";
const hero5 = base + "جمول.svg";
const hero6 = base + "حلزونو-01.svg";
const hero7 = base + "دودو مع أخته ديدي-01.svg";
const hero9 = base + "ديبو.svg";
const hero10 = base + "ديناصور-01.svg";
const hero11 = base + "رفرف-01.svg";
const hero12 = base + "ريشي-01.svg";
const hero13 = base + "سلحفاة-01.svg";
const hero14 = base + "سمسم.svg";
const hero15 = base + "سموكة.svg";
const hero16 = base + "سنجوب.svg";
const hero17 = base + "صوصو.svg";
const hero18 = base + "عصفر.svg";
const hero19 = base + "عم زعتر-01.svg";
const hero22 = base + "قمور.svg";
const hero24 = base + "قنفوذ.svg";
const hero25 = base + "hadi.png";
const hero26 = base + "walid.png";
const hero27 = base + "mm.png";

interface HeroProps {
  img: string;
  name: string;
}

const HerosList: HeroProps[] = [
  {
    img: hero1,
    name: "أبو وليد",
  },
  {
    img: hero25,
    name: "هادي",
  },
  {
    img: hero26,
    name: "وليد",
  },
  {
    img: hero27,
    name: "أم وليد",
  },
  {
    img: hero2,
    name: "أرنوب",
  },
  {
    img: hero3,
    name: "أم الجدايل",
  },
  {
    img: hero4,
    name: "بطرريقو",
  },
  {
    img: hero5,
    name: "جمول",
  },
  {
    img: hero6,
    name: "حلزونو",
  },
  {
    img: hero7,
    name: "دودو مع أخته ديدي",
  },
  {
    img: hero9,
    name: "ديبو",
  },
  {
    img: hero10,
    name: "ديناصور",
  },
  {
    img: hero11,
    name: "رفرف",
  },
  {
    img: hero12,
    name: "ريشي",
  },
  {
    img: hero13,
    name: "سلحفاة",
  },
  {
    img: hero14,
    name: "سمسم",
  },
  {
    img: hero15,
    name: "سموكة",
  },
  {
    img: hero16,
    name: "سنجوب",
  },
  {
    img: hero17,
    name: "صوصو",
  },
  {
    img: hero18,
    name: "عصفر",
  },
  {
    img: hero19,
    name: "عم زعتر",
  },
  {
    img: hero22,
    name: "قمور",
  },
  {
    img: hero24,
    name: "قنفوذ",
  },
];

export const OurHeros: FC = () => {
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

    return () => {
      // observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#FFF0CB",
        position: "relative",
        width: "100%",
        marginBlockStart: {
          xs: 6,
          md: 0,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "75px",
          // overflow: "hidden",
          position: "absolute",
          "&:before": {
            content: '""',
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            height: "130px",
            width: "100%",
            // width: "100%",
            borderRadius: "100%",
            background: "#FFF0CB",
            // background: "red",
            // [theme.breakpoints.up('desktop')]: {
            //   paddingBottom: '50px',
            //   top: '-26px',
            //   height: '100px',
            // },
            zIndex: -99,
          },
        }}
      />

      <Typography
        sx={{
          fontWeight: "700",
          fontSize: {
            xs: pxToRem(50),
            md: pxToRem(70),
          },
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        شخصياتنا
      </Typography>
      <Grid container spacing={2} ref={sectionRef}>
        {HerosList.map(({ img, name }) => (
          <Grid
            className={!!isVisible ? "scale-in-center" : ""}
            item
            key={img}
            xs={11}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
            }}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <HeroCard img={img} name={name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurHeros;
