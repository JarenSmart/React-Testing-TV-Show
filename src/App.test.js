// import libraries
import React from "react";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

import App from "./App";

//mock *before* test setup
jest.mock("./api/fetchShow");

//mock the data
const mockData = {
  mockedData: {
    name: "name",
    summary: "Summary",
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    },
    _embedded: {
      episodes: [
        {
          season: 1,
          number: 1,
        },
        {
          season: 2,
          number: 1,
        },
        {
          season: 3,
          number: 1,
        },
        {
          season: 4,
          number: 1,
        },
      ],
    },
  },
};
//Dropdown feature used
test("Using *dropdown* allows selecting of season", async () => {
  //use resolved data
  mockFetchShow.mockResolvedValueOnce(mockData);

  //App renders
  const { getByText, queryAllByRole } = render(<App />);

  //await fetching of data
  await wait(() => {});
  expect(mockFetchShow).toHaveBeenCalledTimes(1);

  //User clicks *Dropdown*
  userEvent.click(getByText(/Select a season/i));

  //All 4 seasons should appear in *Dropdown*
  const options = queryAllByRole(/option/i);
  expect(options).toHaveLength(4);
  expect(options[0]).toHaveTextContent("Season 1");
  expect(options[1]).toHaveTextContent("Season 2");
  expect(options[2]).toHaveTextContent("Season 3");
  expect(options[3]).toHaveTextContent("Season 4");
});
