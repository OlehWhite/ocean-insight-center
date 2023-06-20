import Link from "next/link";
import { Box } from "@mui/material";
import IMGLogo from "../../public/Ocean-Insight-02.png";
import React from "react";
import Image from "next/image";

const LogoImgDark = () => {
  return (
    <Link href="/" id="logo">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Image src={IMGLogo} width={60} alt="Logo" title="Logo" />
        </Box>
        <Box>
          <Box
            sx={{
              color: "rgba(53,189,248,0.98)",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            OCEAN INSIGHT CENTER
          </Box>
          <Box
            sx={{
              color: "#7d7d7d",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Metal Health Clinic
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default LogoImgDark;
