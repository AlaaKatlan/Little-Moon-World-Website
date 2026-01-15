import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { FC } from "react";

const HeroCardBorder = "/images/hero-dashed-border.svg";

interface HeroCardProps {
  img: string;
  name: string;
}

export const HeroCard: FC<HeroCardProps> = ({ img, name }) => {
  const random_boolean = Math.random() < 0.5;

  return (
    <Box
      sx={{
        position: "relative",
        // backgroundColor: "blue",
        // overflow: "hidden",
        width: "376px",
        height: "350px",
        p: 0,
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <img
        src={HeroCardBorder}
        style={{
          position: "absolute",
          width: "376px",
          height: "390px",
          top: "-38px",
          left: "-14px",
          transform: random_boolean ? "scaleX(1)" : "scaleX(-1)",

          // zIndex: -99,
        }}
      />
      <Box
        sx={{
          width: "356px",
          height: "312px",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "10px",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F0582B",
            position: "relative",
            left: "-80px",
            borderRadius: "6px",
            paddingInline: "12px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: "23px",
            }}
          >
            {name}
          </Typography>
        </Box>
        <motion.img
          src={img}
          style={{ height: "200px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroCard;
