/* eslint-disable no-magic-numbers */
import {test} from "tap"

import applicator from "./index"

test(({same, end}) => {
  same(
    applicator((value) => value + 1)(1),
    2
  )

  end()
})
