import * as React from "react";
import { getPodcasts } from "../src/queries/Podcasts";
import { useLazyQuery } from "@apollo/client";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Grid,
  LinearProgress,
  Link,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

export default function Index() {
  const [doGetPodcasts, { data, loading }] = useLazyQuery(getPodcasts, {
    fetchPolicy: "cache-and-network",
  });

  React.useEffect(() => {
    doGetPodcasts();
  }, [doGetPodcasts]);

  const podcasts = data?.podcasts ?? [];

  if (loading) return <LinearProgress />;

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Latest podcasts
      </Typography>
      <Grid container spacing={2} align="center">
        {podcasts.map((podcast) => (
          <Grid item key={podcast.id}>
            <Card>
              <CardActionArea>
                {podcast.url}
                <CardMedia
                  component="img"
                  height="140"
                  alt={podcast.title}
                  src={podcast.thumbnail.url}
                />
                <CardContent sx={{ backgroundColor: "#fca311" }}>
                  <Typography gutterBottom variant="h5" component="h5">
                    {podcast.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
