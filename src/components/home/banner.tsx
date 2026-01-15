import {
  Box,
  Stack,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import GifLogo from "../../assets/القمر_الصغيرed2.gif";
import { pxToRem } from "../../shared";

const PaperAirPlaneImage = "/images/home/paper-air-plane.svg";
const DoubleQouteImage = "/images/home/banner-double-quote.svg";

const AirPlane: FC = () => {
  return (
    <Box sx={{ position: "absolute", zIndex: "-9999", right: 0, top: "122px" }}>
      <img
        src={PaperAirPlaneImage}
        alt="little-moon-world-banner-image"
        width="331px"
        height="218px"
      />
    </Box>
  );
};

const DoubleQuote: FC<{ scale?: boolean; customSx?: SxProps }> = ({
  scale = false,
  customSx,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: "-9999",
        right: 0,
        top: "30px",
        ...(!!scale && { transform: "scale(-1, -1)" }),
        ...customSx,
      }}
    >
      <img
        src={DoubleQouteImage}
        alt="little-moon-world-banner-image"
        width="83px"
        height="69px"
      />
    </Box>
  );
};

export const Banner: FC = () => {
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

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        marginInline: {
          xs: "40px",
          md: "110px",
        },
      }}
    >
      {!!isSmall ? <></> : <AirPlane />}
      <Box>
        <Typography
          className={`tracking-in-expand ${selectedLanguage}-ltm-font text-primary`}
          sx={{
            fontSize: {
              xs: pxToRem(50),
              md: pxToRem(70),
            },
            fontWeight: "bold",
            mt: {
              xs: "30px",
              md: 0,
            },
          }}
        >
          {t("banner.title")}
          <br />
          {t("banner.subtitle")}
        </Typography>
      </Box>

      <Box sx={{ position: "relative" }}>
        {!!isSmall ? <></> : <DoubleQuote />}
        <img
          src={GifLogo}
          alt="little-moon-world-banner-image"
          width={!!isSmall ? "300px" : "400px"}
        />
        <DoubleQuote scale customSx={{ bottom: "60px", left: 0 }} />
      </Box>
    </Stack>
  );
};

export default Banner;
