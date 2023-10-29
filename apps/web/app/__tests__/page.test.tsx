import { render } from "@testing-library/react";
import Page from "../page";

describe("Home Page", () => {
  it("Should render", () => {
    const component = render(<Page />);
    expect(component).toMatchSnapshot();
  });
});
