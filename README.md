# How to reenact

## action

1. Create any `*.tsx` or `*.ts` file in src
2. Rename that file to `*.spec.tsx` or `*.spec.ts`
3. Run unit test

```
yarn test:unit:open
yarn test:unit
```

The scripts executes `cypress open-ct` and `cypress run-ct`, respectively.

## result

1. Then no tests found error for new file
2. Tests cannot be found for all \*.spec.ts files created afterwards. In order to solve it, `node_modules` had to be erased. This phenomenon does not occur inside the cypress folder. It occurs only for component unit tests.
