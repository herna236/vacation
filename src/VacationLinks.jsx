import React from "react";
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

function VacationLinks() {

  const links = [
    {
      country: "Italy",
      url: "https://www.goaheadtours.com/tours/europe-tours/italy-tours?utm_source=google&utm_medium=cpc&utm_campaign=US_Search_Europe_Italy_EXM&utm_group=Italy_Trip&utm_term=trip%20italy&utm_content=681093148960&mt=e&utm_device=c&gad_source=1&gclid=CjwKCAiA2cu9BhBhEiwAft6IxNcNCd-ZC1v2aZz7YSCNNsnC54Eza0srhCIOk41833IUoCfBSarnqBoCa7oQAvD_BwE&gclsrc=aw.ds",
      image: "/assets/italy.jpeg",
    },
    {
      country: "Germany",
      url: "https://www.tourvacationstogo.com/germany_tours.cfm?source=google&nlp=k&cn=tours&ag=germany&gad_source=1&gclid=CjwKCAiA2cu9BhBhEiwAft6IxA3Unaab9HuNnQLgc5zaz_jaA18rRoSHMsq0HCIrY2XQWqeaur8o7BoCTqAQAvD_BwE",
      image: "/assets/germany.webp",
    },
    {
      country: "Mexico",
      url: "https://www.expedia.com/Mexico.d117.Destination-Travel-Guides?locale=en_US&siteid=1&semcid=US.UB.GOOGLE.DT-c-EN.PACKAGE&semcid=US.UB.GOOGLE.DT-c-EN.PACKAGE&semdtl=a121358431485.b1167830670081.g1kwd-12196071.e1c.m1CjwKCAiA2cu9BhBhEiwAft6IxFi9T4hyn210YpeIS0flZiF24ZDeujf2h-jbatb8Hv6vkiIYsjHJXxoC-DYQAvD_BwE.r1.c1.j19016988.k1.d1721491423574.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&gad_source=1&gclid=CjwKCAiA2cu9BhBhEiwAft6IxFi9T4hyn210YpeIS0flZiF24ZDeujf2h-jbatb8Hv6vkiIYsjHJXxoC-DYQAvD_BwE",
      image: "/assets/mexico.jpeg",
    },
    {
      country: "Brazil",
      url: "https://www.besttraveldestinations.co/web?gad_source=1&gclid=CjwKCAiA2cu9BhBhEiwAft6IxIAer2ajnLkdDcutOoNJWfZedfzcAsvCx8AeAXdCd1LFGKpu3HUtohoCLxMQAvD_BwE&o=1673269&q=vacation+brazil+all+inclusive&qo=semQuery&an=google_s&tt=rmd&ad=semD&akid=37e43f4f-f8e0-4e56-909c-7a6d45cd246f-0-bd_gsb",
      image: "/assets/brazil.jpeg",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2, // space between cards
        p: 2,
      }}
    >
      {links.map((link, index) => (
        <Card key={index} sx={{ width: "100%", maxWidth: 600 }}>
          <CardActionArea component="a" href={link.url} target="_blank" rel="noopener">
            <CardMedia
              component="img"
              height="200"
              image={link.image}
              alt={link.country}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {link.country}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default VacationLinks;
