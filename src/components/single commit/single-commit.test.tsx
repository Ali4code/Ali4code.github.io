import { render, screen } from "@testing-library/react";
import SingleCommit from "./single-commit";


const mockData = { message: "this is a test", author: "test author", date: new Date() };

test("renders commit message", () => {
  render(<SingleCommit {...mockData} />);
  const linkElement = screen.getByText("this is a test");
  expect(linkElement).toBeInTheDocument();
});
