import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  console.log("Before All");
});

beforeEach(() => {
  render(<App />);
  console.log("Before Each");
});

afterEach(() => {
  console.log("After Each");
});

afterAll(() => {
  console.log("After All");
});

test("Button, input, and link elements render and have correct states", () => {
  const rbutton = screen.getByTestId("r_button");
  const rinput = screen.getByTestId("r_input");
  const rlink = screen.getByTestId("r_link");

  // Button and input should be disabled
  expect(rbutton).toBeDisabled();
  expect(rinput).toBeDisabled();

  // Link should not be disabled
  expect(rlink).not.toBeDisabled();
  
  // Optional: Debugging the rendered elements
  screen.debug();
});

/* Uncomment and use these tests if needed */

// test("Header renders correctly", () => {
//   const headerElement = screen.getByText(/React_Test/i);
//   expect(headerElement).toBeInTheDocument();
//   expect(headerElement).toHaveTextContent("React_Test");
// });

// test("Button element renders correctly", () => {
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement).toHaveTextContent("Test Button");
//   expect(buttonElement).toBeEnabled();
// });

// test("Blue element renders correctly", () => {
//   const blueElement = screen.getByText(/this color is blue/i);
//   expect(blueElement).toBeInTheDocument();
//   expect(blueElement).toHaveTextContent("this color is blue");
//   expect(blueElement).toHaveClass("rtest");
//   screen.debug();
// });
