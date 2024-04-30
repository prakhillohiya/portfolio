"use client";

import { Icon } from "@iconify/react";
import { Box, Fab, IconButton, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { useState } from "react";
import myPhoto from "../public/my-photo.jpg";

function Portfolio() {
  const [loading, setLoading] = useState(false);

  const icons = [
    {
      id: 1,
      name: "devicon:github",
      tooltip: "Github",
      link: "https://www.github.com/prakhillohiya",
    },
    {
      id: 2,
      name: "logos:facebook",
      tooltip: "Facebook",
      link: "https://www.facebook.com/prakhillohiya",
    },
    {
      id: 3,
      name: "logos:twitter",
      tooltip: "Twitter",
      link: "https://www.twitter.com/prakhil_lohiya",
    },
    {
      id: 4,
      name: "logos:reddit-icon",
      tooltip: "Reddit",
      link: "https://www.reddit.com/user/prakhillohiya",
    },
    {
      id: 5,
      name: "skill-icons:discord",
      tooltip: "Discord",
      link: "https://discord.com/users/717400041630990446",
    },
    {
      id: 6,
      name: "logos:google-gmail",
      tooltip: "Gmail",
      link: "mailto:prakhillohiya@gmail.com",
    },
    {
      id: 7,
      name: "devicon:linkedin",
      tooltip: "LinkedIn",
      link: "https://www.linkedin.com/in/prakhillohiya",
    },
    {
      id: 8,
      name: "logos:telegram",
      tooltip: "Telegram",
      link: "https://t.me/prakhillohiya",
    },
    {
      id: 9,
      name: "logos:whatsapp-icon",
      tooltip: "Whatsapp",
      link: "https://wa.me/9024306056",
    },
    {
      id: 10,
      name: "skill-icons:instagram",
      tooltip: "Instagram",
      link: "https://www.instagram.com/prakhillohiya",
    },
    {
      id: 11,
      name: "icon-park:phone-call",
      tooltip: "Phone",
      link: "tel:+919024306056",
    },
  ];

  const handleResumeDownload = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/download-resume");

      if (!response.ok) {
        throw new Error(
          `Failed to download resume: ${response.status} ${response.statusText}`
        );
      }

      const fileName = "Prakhil_Lohiya.pdf";

      const blob = await response.blob();

      const tempAnchor = document.createElement("a");
      tempAnchor.href = window.URL.createObjectURL(blob);
      tempAnchor.download = fileName;

      tempAnchor.click();

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error downloading file:", error);
    }
  };

  return (
    <Box
      justifyContent={"center"}
      display={"flex"}
      height={"550px"}
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2);",
        justifyContent: "flex-start",
      }}
      width={"400px"}
      flexDirection={"column"}
      borderRadius={"20px"}
    >
      <div className="mt-4 w-[inherit] flex items-center flex-col">
        <Image
          src={myPhoto}
          alt={"prakhillohiya"}
          priority={true}
          className="rounded-full h-[150px] w-[150px]  border-[5px] border-solid border-gray-300 drop-shadow-md"
        />
        <Typography variant="h5" padding={"1rem"}>
          Prakhil Lohiya
        </Typography>
        <Typography variant="h6">(Software Development Engineer)</Typography>
      </div>
      <div className="p-4 flex justify-center">
        <Fab
          color="primary"
          aria-label="download-resume"
          variant="extended"
          className="glow"
          onClick={handleResumeDownload}
          disabled={loading}
        >
          {!loading ? (
            <Icon
              icon="uil:down-arrow"
              width="24"
              height="24"
              className="m-[6px]"
            />
          ) : (
            <Icon
              icon="prime:spinner"
              width="24"
              height="24"
              className="animate-spin m-[6px]"
            />
          )}
          Resume
        </Fab>
      </div>
      <div className="flex-grow">
        <Grid
          container
          spacing={1}
          sx={{
            margin: "0",
            justifyContent: "center",
            height: "100%",
            alignContent: "space-evenly",
          }}
        >
          {icons.map((i) => (
            <Grid xs={4} key={i.id} sx={{ width: "fit-content" }}>
              <Tooltip title={i.tooltip} arrow>
                <IconButton href={i.link} target="_blank" rel="noopener">
                  <Icon icon={i.name} width="40" height="40" />
                </IconButton>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}

export default Portfolio;
