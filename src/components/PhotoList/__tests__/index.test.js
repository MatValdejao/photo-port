import React from "react"
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhotoList from "../";


afterEach(cleanup);

describe("photolist is rendering", () => {
    it("renders", () => {
        render(<PhotoList/>)
    })
})

it("matches snapshot", () => {
    const { asFragment } = render(<PhotoList />)
    expect(asFragment()).toMatchSnapshot();
})

