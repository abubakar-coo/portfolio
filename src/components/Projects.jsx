import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { STACK_MAP } from "../constants";
import Tooltip from "@mui/material/Tooltip";

const Projects = () => {
  const projectsList = [
    {
      title: "Qunions",
      des: "A mobile application which facilitates opinion trading and beyond. It’s a Questions and Opinions platform, where there are only opinions to questions – no factual single correct answer! Be the most popular or most unique in your opinion to win.",
      img: "/projectImages/ProjectCover_Qunions.png",
      link: "https://qunions.com/",
      stack: [
        STACK_MAP["REACT.JS"],
        STACK_MAP.REACT_NATIVE,
        STACK_MAP["NODE.JS"],
        STACK_MAP.FIREBASE,
      ],
    },
    {
      title: "Kinetic Thinking",
      des: "Kinetic Thinking is the capacity of a manager to move intentionally among different ways of thinking based on the stage and circumstances of their challenges. Kinetic moves can attune managers to marketplace dynamics, open up their perception to new opportunities, and expands their range of actions.",
      img: "/projectImages/ProjectCover_KineticTinking.png",
      link: "https://mykineticstyle.com/",
      stack: [STACK_MAP["REACT.JS"], STACK_MAP.DJANGO, STACK_MAP.UBUNTU],
    },

    {
      title: "Venture Studio",
      des: "Venture Studio is a university platform that fosters creativity and collaboration among students. It allows users to interact, explore ventures, and showcase projects, encouraging idea exchange and venture development. As a hub for entrepreneurial minds, Venture Studio connects and inspires users.",
      img: "projectImages/Venture_Studio_Cover.png",
      link: "https://www.venture-studio.co.uk/",
      stack: [
        STACK_MAP["NEXT.JS"],
        STACK_MAP["REACT.JS"],
        STACK_MAP.DJANGO,
        STACK_MAP.UBUNTU,
      ],
    },
    {
      title: "Odin Luxury",
      des: "Odin Luxury is an ecommerce site that sells luxury items, including jewelry, watches, handbags, and clothing. Odin Luxury offers a curated selection of the finest luxury items, and it ships worldwide. Odin Luxury is the perfect place to find the perfect luxury item.",
      img: "projectImages/ProjectCover_odin.png",
      link: "https://odinluxury.com/",
      stack: [
        STACK_MAP.JQUERY,
        STACK_MAP.BOOTSTRAP,
        STACK_MAP.PHP,
        STACK_MAP.CPANEL,
      ],
    },
    {
      title: "Everyday Fresh Farm",
      des: "Everyday Freshfarm is an ecommerce site that sells fresh vegetables. Everyday Freshfarm offers a wide variety of fresh vegetables, and it ships nationwide. Everyday Freshfarm is the best way to buy fresh vegetables in the UK.",
      img: "projectImages/ProjectCover_EFF.png",
      link: "https://www.everydayfreshfood.com/",
      stack: [
        STACK_MAP["REACT.JS"],
        STACK_MAP.REACT_NATIVE,
        STACK_MAP.LARAVEL,
        STACK_MAP.CPANEL,
      ],
    },
    {
      title: "THPORTH",
      des: "Unleash the excitement of sports with our dynamic platform! Enjoy a user-friendly website, a sleek mobile app, and stay in the game with real-time scores. Our admin panel ensures hassle-free access to league schedules and online streaming channels. Elevate your sports-watching experience with THPORTH – where passion meets technology.",
      img: "projectImages/ProjectCover_THPORTH.png",
      link: "https://thporth.com/",
      stack: [STACK_MAP["REACT.JS"], STACK_MAP.DJANGO, STACK_MAP.UBUNTU],
    },
    {
      title: "Warehouse Management System",
      des: "Enhance your warehouse efficiency with our streamlined solution. Our WMS offers real-time inventory control, efficient order processing, and optimized logistics management. Elevate your warehouse performance effortlessly.",
      img: "projectImages/ProjectCover_WMS.png",
      link: "http://178.16.139.131/",
      stack: [STACK_MAP["REACT.JS"], STACK_MAP.DJANGO, STACK_MAP.UBUNTU],
    },
    // {
    //   title: "LefilParis",
    //   des: "LefilParis is an ecommerce site that sells jali wali kapray, a traditional Indian fabric. LefilParis offers a wide variety of jali wali kapray to choose from, and it ships worldwide. LefilParis is the best place to buy jali wali kapray in Paris.",
    //   img: "projectImages/Le fil Paris_cover.png",
    //   link: "https://lefilparis.com/",
    //   stack: [STACK_MAP.WORDPRESS, STACK_MAP.CPANEL],
    // },
    {
      title: "Tutoras",
      des: "Tutoras is a web app that improves novice programmers' skills with personalized, adaptive tutoring. It tracks progress, assesses skills through various tasks, and allows teachers to create educational content, offering a robust learning environment.",
      img: "projectImages/Tutoras_Cover.png",
      stack: [STACK_MAP["REACT.JS"], STACK_MAP.LARAVEL, STACK_MAP.CPANEL],
    },
    {
      title: "Pitstop",
      des: "PitStop is a mobile app that allows users to request a tow truck. PitStop is available for both Android and iOS users, and it uses real-time maps to show you the nearest tow truck. PitStop is a quick and easy way to get your car towed when you need it.",
      img: "projectImages/Pitstop_cover.png",
      stack: [STACK_MAP.REACT_NATIVE, STACK_MAP["NODE.JS"], STACK_MAP.FIREBASE],
    },
    {
      title: "Serai",
      des: "Serai is a mobile and web application that allows users to book hotel stays. Serai is available for both Android and iOS users, and it offers a wide variety of hotels to choose from, in all price ranges. Serai is a convenient and easy way to book your next hotel stay.",
      img: "projectImages/Serai_cover.png",
      stack: [
        STACK_MAP.REACT_NATIVE,
        STACK_MAP.JQUERY,
        STACK_MAP.BOOTSTRAP,
        STACK_MAP.PHP,
        STACK_MAP.CPANEL,
      ],
    },
  ];

  // @ Config for animations
  const variants = {
    hidden: {
      opacity: 0,
      translateX: -100,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        p: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {projectsList.map((item, i) => (
        <Box
          key={item.title}
          component={motion.div}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: i * 0.1, type: "spring" }}
          viewport={{ once: true }}
        >
          <Typography variant="body1" sx={{ color: "#5565E8" }} gutterBottom>
            {item.title}
          </Typography>
          <Card
            sx={{
              maxWidth: 400,
              border: "2px solid #1E2D3D",
              display: "flex",
              flexFlow: "column",
              background: "#011221",
              borderRadius: "8px",
              marginBottom: 2,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt="green iguana"
            />
            <CardContent sx={{ height: 170 }}>
              <Typography variant="body2">{item.des}</Typography>
            </CardContent>
            <Box
              sx={{
                height: 30,
                marginBottom: 2,
                padding: "0px 16px",
                display: "flex",
                gap: "5px",
              }}
            >
              {(item.stack || []).map((_item) => (
                <Tooltip title={_item.name} placement="top">
                  <img
                    src={_item.icon}
                    style={{ width: "30px", cursor: "pointer" }}
                  />
                </Tooltip>
              ))}
            </Box>
            <CardActions sx={{ p: "0px 20px 20px" }}>
              <a
                href={item?.link || "#"}
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  padding: "10px",
                  background: "#1C2B3A",
                  borderRadius: "8px",
                }}
                {...(item?.link && {
                  target: "_blank",
                })}
              >
                view-project
              </a>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
