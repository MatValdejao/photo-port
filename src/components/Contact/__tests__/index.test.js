import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("contact component", () => {
	it("renders", () => {
		render(<ContactForm />);
	});
});

it("matches snapshot", () => {
	const { asFragment } = render(<ContactForm />);
	expect(asFragment()).toMatchSnapshot();
});

it("matches tag and button", () => {
	render(<ContactForm />);
    expect(screen.getByTestId("h1tag")).toHaveTextContent("Contact me");
    expect(screen.getByTestId("button")).toHaveTextContent("Submit");
});

