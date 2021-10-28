import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Box bgcolor="#fffffc">
      <Header />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
