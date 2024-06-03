import { render, screen } from "@testing-library/react";
import { About } from "../components/About";
import "@testing-library/jest-dom";

describe("About", () => {
    beforeEach(() => {
        render (
            <About />
        )
    });

    it('should load About component', () => {
        const aboutElement = screen.getByText(/About/);
        expect(aboutElement).toBeInTheDocument();
    });
    
    it('should load submit button', () => {
        const buttonElement = screen.getByRole('button', { name: 'Submit' });
        expect(buttonElement).toBeInTheDocument();
    })
});
