import { mount } from "@cypress/react";

import App from "./App";

describe("App", () => {
  it("test", () => {
    mount(<App />);

    expect(true).to.eq(true);
  });
});
