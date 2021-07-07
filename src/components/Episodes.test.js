import React from "react";
import { render, getAllByTestId } from "@testing-library/react";

import Episodes from "./Episodes";

test("string from Episodes renders", async () => {
  //arrange
  const { getAllByTestId } = render(
    <Episodes episodes={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
  );
  //act
  const appTest = getAllByTestId(/episode/i);
  //assert
  expect(appTest).toHaveLength(3);
});
