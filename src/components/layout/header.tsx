import {
  AppBar,
  Box,
  IconButton,
  Popover,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../language-switcher";

// const Logo = "/images/little-moon-world-logo.svg";
const Logo = "/images/heros/قمور.svg";

const PopoverContent: FC = () => {
  const navigate = useNavigate();
  const navigateToProducts = (): void => navigate("/products");
 const navigateToPolicyPage = (): void => navigate("/policies");
  return (
    <Box
      sx={{
        direction: "rtl",
        display: "flex",
        padding: "16px",
      }}
    >
      <Box sx={{ width: "max-content" }}>
        <Typography
          sx={{
            color: "#0164EA",
            fontSize: "16px",
            fontWeight: "700",
            paddingBlock: "16px",
          }}
        >
          منتاجتنا
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            paddingBottom: "12px",
            cursor: "pointer",
            "&:hover": {
              color: "gray",
            },
          }}
          onClick={() => navigateToProducts()}
        >
          الفئة العمرية 2-6
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            paddingBottom: "12px",
            cursor: "pointer",
            "&:hover": {
              color: "gray",
            },
          }}
        >
          الفئة العمرية 7-10
        </Typography>

    
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            paddingBottom: "12px",
            cursor: "pointer",
            "&:hover": {
              color: "gray",
            },
          }}
          onClick={() => navigateToPolicyPage()}
        >
سياسة الخصوصية       
<br />
privacy policyS 
 </Typography>
        {/* <Typography
          sx={{ fontSize: "14px", fontWeight: "400", paddingBottom: "12px" }}
        >
          الفئة العمرية 11-15
        </Typography> */}
        {/* <Typography
          sx={{ fontSize: "14px", fontWeight: "400", paddingBottom: "12px" }}
        >
          الفئة العمرية فوق 16
        </Typography> */}
      </Box>
    </Box>
  );
};

const BurgerMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const openPopover = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ position: "absolute", right: 0 }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={openPopover}
      >
        <MenuIcon sx={{ color: "#D9D9D9" }} />
      </IconButton>
      <Typography
        sx={{
          marginInlineStart: 2,
          fontSize: "16px",
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        قائمة
      </Typography>
      <Popover
        // id={id}
        open={open}
        // anchorEl={anchorEl}
        anchorReference="anchorPosition"
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        anchorPosition={{ top: 120, left: 1210 }}
        // sx={{ borderRadius: "100px" }}
      >
        <PopoverContent />
      </Popover>
    </Stack>
  );
};

export const NavBar: FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            marginInline: {
              xs: "0px",
              lg: "110px",
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "red",
              flexGrow: 1,
              position: "relative",
            }}
          >
            <BurgerMenu />
            <LanguageSwitcher></LanguageSwitcher>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "400",
                cursor: "pointer",
                display: {
                  xs: "none",
                  lg: "block",
                },
              }}
              onClick={() => navigate("/")}
            >
              عالم القمر الصغير
            </Typography>
            <img
              src={Logo}
              alt="little-moon-world-logo"
              style={{
                marginInline: "44px",
                width: "100px",
                height: "100px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "400",
                cursor: "pointer",
                display: {
                  xs: "none",
                  lg: "block",
                },
              }}
              onClick={() => navigate("/")}
            >
              Little Moon World
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
