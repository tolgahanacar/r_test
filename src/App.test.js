import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  console.log("Before All");
});

beforeEach(() => {
  render(<App />);
  console.log("Before Each");
});

afterAll(() => {
  console.log("After All");
});

afterEach(() => {
  console.log("After Each");
  //cleanup(); -- old
});

test("toBeDisabled", () => {
  const rbutton = screen.getByTestId("r_button"); //get id
  const rinput  = screen.getByTestId("r_input");
  const rlink   = screen.getByTestId("r_link");
  // or 
  // const rlink   = screen.getByText("r_link");
  expect(rbutton).toBeDisabled();
  expect(rinput).toBeDisabled();
  expect(rlink).not.toBeDisabled();
  screen.debug();
});

/* access dom */
// test("Header render correctly", () => {
//   const headerElement = screen.getByText(/React_Test/i);
//   expect(headerElement).toBeInTheDocument(); //The title fits the document correctly.
//   expect(headerElement).toHaveTextContent("React_Test");
// });

// test("Button Element render correctly", () => {
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement).toHaveTextContent("Test Button");
//   //expect(buttonElement).toBeDisabled(); //Test Fail, Button is disable or enable?
//   expect(buttonElement).toBeEnabled(); //Test Success, Button is disable or enable?
// });

// test("Blue Element render correctly", () => {
//   const blueElement = screen.getByText(/this color is blue/i);
//   expect(blueElement).toBeInTheDocument();
//   expect(blueElement).toHaveTextContent("this color is blue");
//   expect(blueElement).toHaveClass("rtest");
//   screen.debug();
// });
