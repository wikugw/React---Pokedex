import React from "react";
import { AppBar, Toolbar, Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

const pokemonCard = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>HI</CardContent>
      </Card>
    </Grid>
  );
};

const Pokedex = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container className={classes.pokedexContainer}>
        {pokemonCard()}
      </Grid>
    </>
  );
};

export default Pokedex;
