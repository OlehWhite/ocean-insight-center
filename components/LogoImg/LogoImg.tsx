import Link from "next/link";
import { Box } from "@mui/material";
import IMGLogoFooter from "../../public/Ocean-Insight-01-1.png";
import React from "react";
import Image from "next/image";

const LogoImg = () => {
  return (
    <Link href="/" id="logo">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Image src={IMGLogoFooter} width="60" alt="Logo" title="Logo" />
        </Box>
        <Box>
          <Box sx={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            OCEAN INSIGHT CENTER
          </Box>
          <Box
            sx={{
              color: "rgba(59,170,237,0.98)",
              fontWeight: "600",
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

export default LogoImg;
