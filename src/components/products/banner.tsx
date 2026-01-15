import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import { FC } from "react";
import { pxToRem } from "../../shared";

const LittleBlondieGirl = "/images/products/picture.png";
const SwipeDown = "/images/products/swipe-down.svg";

export const ProductsBanner: FC = () => {
  const Theme = useTheme();
  const isSmall = useMediaQuery(Theme.breakpoints.down("sm"));
  const isMideum = useMediaQuery(Theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        position: "relative",
        margin: {
          // md: "110px",
        },
      }}
    >
      {!!isMideum ? (
        <></>
      ) : (
        <img
          src={LittleBlondieGirl}
          style={{
            position: "absolute",
            width: "561px",
            height: "564px",
            top: "-130px",
            left: "50px",
            // zIndex: -99,
          }}
        />
      )}
      <Box
        sx={{
          marginInlineStart: {
            xs: 0,
            lg: "110px",
          },
          marginTop: {
            md: "100px",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ...(!!isMideum && {
            marginBlockStart: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }),
        }}
      >
        <Typography
          className="tracking-in-expand"
          sx={{
            fontSize: {
              xs: pxToRem(50),
              md: "50px",
            },
            fontWeight: "700",
          }}
        >
          أكتشف عالم القمر الصغير
        </Typography>
        <Typography
          className="tracking-in-expand"
          sx={{
            fontSize: {
              xs: pxToRem(26),
              md: "26px",
            },
            fontWeight: "700",
            width: {
              xs: "80%",
              lg: "500px",
            },
            marginTop: {
              md: "70px",
            },
          }}
        >
          نقدم لأطفالكم كتبًا تدمج بين التسلية والتعليم، لتكون كل قصة رحلة جديدة
          نحو اكتشاف الذات والعالم. حيث نمنح أطفالكم فرصة للغوص في حكايات ممتعة
          تُغني خيالهم وتعزز قيمهم، وتترك أثراً إيجابياً في نفوسهم.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "120px",
            width: {
              md: "50vw",
            },
          }}
        >
          <img
            src={SwipeDown}
            style={{
              width: "27px",
              height: "45px",
              marginBottom: "8px",
            }}
          />
          <Typography sx={{ fontSize: "26px", fontWeight: "700" }}>
            اسحب للأسفل للمزيد
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsBanner;
