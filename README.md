# How to reproduce

## action

1. Create any `*.tsx` or `*.ts` file in `src`
2. Write any content in that new file and save it
3. Rename that file to `*.spec.tsx` or `*.spec.ts`
4. Write proper test code in that file like below and save it

```
import { mount } from "@cypress/react";

import App from "./App";

describe("App", () => {
  it("test", () => {
    mount(<App />);

    expect(true).to.eq(true);
  });
});
```

5. Run unit test

```
yarn test:unit:open
```

## result

1. Then we can see "No tests found" for new file
2. Tests cannot be found for all `*.spec.ts` files created afterwards. In order to solve it, I couldn't find any solution except for erasing `node_modules`. This phenomenon does not occur inside the cypress folder. It occurs only for component unit tests.
