import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  console.log("Before All: Test suite initialized.");
});

beforeEach(() => {
  console.log("Before Each: Preparing test case.");
});

afterEach(() => {
  console.log("After Each: Test case completed.");
});

afterAll(() => {
  console.log("After All: Test suite completed.");
});

test("Button, input, and link elements render and have correct states", () => {
  render(<App />);

  // Button
  const rbutton = screen.getByTestId("r_button");
  expect(rbutton).toBeInTheDocument();
  expect(rbutton).toBeDisabled();

  // Input
  const rinput = screen.getByTestId("r_input");
  expect(rinput).toBeInTheDocument();
  expect(rinput).toBeDisabled();

  // Link
  const rlink = screen.getByTestId("r_link");
  expect(rlink).toBeInTheDocument();
  expect(rlink).toHaveStyle("pointer-events: none");
});

test("Header renders correctly", () => {
  render(<App />);
  const headerElement = screen.getByText(/React_Test/i);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("React_Test");
});

test("Button element renders correctly", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Test Button" });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeEnabled();
});

test("Blue element renders correctly", () => {
  render(<App />);
  const blueElement = screen.getByText(/this color is blue/i);
  expect(blueElement).toBeInTheDocument();
  expect(blueElement).toHaveTextContent("this color is blue");
  expect(blueElement).toHaveClass("rtest");
});
