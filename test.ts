/* eslint-disable no-magic-numbers */
import applicator from "./index";

test(() => {
  expect(applicator((value) => value + 1)(1)).toEqual(2);
});
