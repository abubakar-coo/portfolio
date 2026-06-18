import { Box, IconButton, ListItem } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const icons = [
    {
      Icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/ceo-abubakar-arif/",
    },
    {
      Icon: InstagramIcon,
      href: "https://www.instagram.com/abubakar_co/",
    },
  ];
  const FooterIcon = ({ Icon, href }) => {
    return (
      <ListItem
        sx={{
          borderRight: "1px solid #1E2D3D",
          width: "max-content",
          pt: "0px",
          pb: "0px",
        }}
      >
        <a href={href || "#"} target="_blank" rel="noopener noreferrer">
          <IconButton>
            <Icon
              sx={{
                color: "#607B96",
                "&:hover": {
                  color: "#fff",
                },
              }}
            />
          </IconButton>
        </a>
      </ListItem>
    );
  };
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <footer>
        <Box
          sx={{
            color: "#607B96",
            borderTop: "1px solid #1E2D3D",
            display: "flex",
            background: "#011627",
          }}
        >
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <ListItem
              sx={{
                borderRight: "1px solid #1E2D3D",
                width: "max-content",
                pt: "8px",
                pb: "8px",
              }}
            >
              find-me-on
            </ListItem>
            {icons.map((icon) => (
              <FooterIcon {...icon} />
            ))}
          </Box>

        </Box>
      </footer>
    </Box>
  );
};

export default Footer;
