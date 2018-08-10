# postcss-calc emits a lot of `undefined [undefined]` warnings

![Screenshot](screenshot.png)

## Summary
With `warnWhenCannotResolve` enabled, postcss-calc starts to emit a lot of warnings saying `undefined [undefined]` in addition to a valid one `⚠  Could not reduce expression: ...`.

## Steps to reproduce

1. `git clone`
2. `yarn install`
3. `node index.js`
