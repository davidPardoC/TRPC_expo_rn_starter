import { render, screen, fireEvent, act } from "@testing-library/react-native";
import App from "./App";
import { trpc } from "./src/trpc";

jest.mock("./src/trpc", () => ({
  trpc: { getUsers: { query: jest.fn() }, createUser: { mutate: jest.fn() } },
}));

describe("<App/>", () => {
  it("App snapshot", async () => {
    const component = render(<App />);

    await act(async () => {
      expect(component).toMatchSnapshot();
    });
  });

  it("Should call trpc createUser", async () => {
    const spy = jest
      .spyOn(trpc.createUser, "mutate")
      .mockResolvedValueOnce({
        email: "test-email",
        password: "test-password",
      });
    const { getByRole } = render(<App />);

    await act(async () => {
      const btn = getByRole("button");
      fireEvent.press(btn);
    });

    expect(spy).toHaveBeenCalledWith({
      email: "some@email.com",
      password: "some-password",
    });
  });
});
