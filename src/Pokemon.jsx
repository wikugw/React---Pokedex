import React from "react";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  return (
    <div>
      <h1>{`this is pokemon #${pokemonId}`}</h1>
    </div>
  );
};

export default Pokemon;
