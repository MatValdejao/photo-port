import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
	name: "Park bench",
	category: "landscape",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	index: 1,
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal component", () => {
	it("renders", () => {
		render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
	});
});

it("matches snapshot DOM node structure", () => {
	const { asFragment } = render(
		<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
	);
	expect(asFragment()).toMatchSnapshot();
});

describe("click event", () => {
	it("calls onClose hnadler", () => {
		render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
		fireEvent.click(screen.getByText("Close this modal"));
		expect(mockToggleModal).toHaveBeenCalledTimes(1);
	});
});
