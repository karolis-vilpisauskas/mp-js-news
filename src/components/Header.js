import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              JS News by Mediapark
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
