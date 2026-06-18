import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DetailSection from "./about/DetailSection";
import CodeSnippets from "./about/CodeSnippets";
import { motion } from "framer-motion";
import { TECH_STACK } from "../constants";

const infoItems = [
  {
    id: 0,
    name: "bio",
    img: "folder-1.png",
    detail: `
    As a dynamic Full Stack Developer, I have successfully delivered robust web and mobile applications, leveraging technologies like React.js, Next.js, React Native, Django, and Laravel. My career is marked by impactful contributions to various high-profile projects at Upwork, Qbatch, and qunions, where I developed responsive web applications, automated backend processes, and optimized performance. My expertise in database management, cloud services with AWS and Firebase, and containerization with Docker has consistently driven project success. I excel in e-commerce solutions, utilizing WordPress and Shopify to enhance user experience and functionality.
    <br />
    <br />
    With a Bachelor’s degree in Computer Science and numerous accolades like the Dean’s List of Honors, I bring a solid educational foundation. I thrive in collaborative environments, aligning project goals with organizational objectives, and ensuring seamless communication across all levels. Open to new opportunities, I am eager to bring my expertise and innovative mindset to your team. Connect with me to explore how we can achieve remarkable outcomes together.
    `,
    html: true,
  },
  {
    id: 1,
    name: "skills",
    img: "folder-2.png",
    detail: TECH_STACK,
  },
  {
    id: 2,
    name: "interset",
    img: "folder-3.png",
    detail: `
    <p>
      Amidst the bustling world of technology, my interests form a rich tapestry of diverse pursuits that enrich both my personal and professional life. At its core, coding stands as the foundation of my passion, an ever-evolving journey of discovery and innovation that fuels my creative spirit.
    </p>
    <br/>
    - Delving deeper, the strategic intricacies of <strong>chess</strong> offer a mental sanctuary, a realm where foresight and tactics intertwine, mirroring the strategic planning essential in various aspects of life. <br/><br/>
    - Beyond the digital realm, I find solace and camaraderie in the exhilarating world of <strong>football</strong>, where teamwork and adaptability reign supreme, fostering invaluable traits that transcend into my collaborative endeavors. <br/><br/>
    - And when the hum of algorithms fades, I embark on journeys of exploration and enlightenment, traversing the globe to immerse myself in diverse cultures, weaving the tapestry of human experience into the fabric of my creations. <br/><br/>
    <p>
      👨🏻‍💻 ♟️ ⚽️ 🌎
    </p>    
    `,
    html: true,
  },
];

const About = () => {
  const [selected, setSelected] = useState(infoItems[0]);
  const variants = {
    hidden: {
      x: -300,
    },
    visible: {
      x: 0,
      transition: {
        ease: "linear",
      },
    },
  };

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid xs={12} lg={2}>
          <Box
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate="visible"
            sx={{
              borderRight: "1px solid #1E2D3D",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                borderBottom: "1px solid #1E2D3D",
                p: "10px 2px",
              }}
            >
              <ArrowDropDownIcon />
              <Typography variant="body1">personal-info</Typography>
            </Box>
            <Box sx={{ p: "10px 2px", borderBottom: "1px solid #1E2D3D" }}>
              {infoItems.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#607B96",
                    gap: "8px",
                    mb: "8px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => setSelected(infoItems[item.id])}
                >
                  <ArrowForwardIosIcon fontSize="10px" />
                  <img src={item.img} alt="" />
                  <Typography
                    variant="body2"
                    sx={{ color: selected.id === item.id ? "#fff" : "" }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#fff",
                  borderBottom: "1px solid #1E2D3D",
                  p: "10px 2px",
                }}
              >
                <ArrowDropDownIcon />
                <Typography variant="body1">contacts</Typography>
              </Box>
              <Box sx={{ p: "10px 2px", ml: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#607B96",
                    gap: "8px",
                    mb: "8px",
                  }}
                >
                  <EmailIcon fontSize="small" />
                  <a href="mailto:abubakararif159@gmail.com">
                    <Typography variant="caption">
                      abubakararif159@gmail.com
                    </Typography>
                  </a>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#607B96",
                    gap: "8px",
                    mb: "8px",
                  }}
                >
                  <LocalPhoneIcon fontSize="small" />
                  <Typography variant="caption">+923278528854</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* -------------------------------------details--------------------------------------------------------- */}
        <Grid item xs={12} lg={5}>
          <Box sx={{ borderRight: "1px solid #1E2D3D", height: "100%" }}>
            <DetailSection selected={selected} />
          </Box>
        </Grid>
        {/* -----------------------------------code Snippets------------------------------------------------------- */}
        <Grid item xs={12} lg={5}>
          <Box sx={{ height: "100%" }}>
            <CodeSnippets />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
