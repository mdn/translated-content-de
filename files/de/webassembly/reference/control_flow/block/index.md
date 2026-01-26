---
title: "block: Wasm-Textinstruktion"
short-title: block
slug: WebAssembly/Reference/Control_flow/block
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`block`**-Anweisung erstellt ein Label, das später mit einem `br` verlassen werden kann.

Die **`loop`**-Anweisung ist das Gegenteil der `block`-Anweisung, in dem Sinne, dass das Springen zu einem `loop` zum Anfang der Schleife führt, während das Springen zu einem `block` zum Ende des Blocks führt; das heißt, aus dem Block heraus.

{{InteractiveExample("Wat Demo: block", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  ;; create a function that takes in a number as a param,
  ;; and logs that number if it's not equal to 100.
  (func (export "log_if_not_100") (param $num i32)
    (block $my_block

      ;; $num is equal to 100
      local.get $num
      i32.const 100
      i32.eq

      (if
        (then

          ;; branch to the end of the block
          br $my_block

        )
      )

      ;; not reachable when $num is 100
      local.get $num
      call $log

    )
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const log_if_not_100 = result.instance.exports.log_if_not_100;

    log_if_not_100(99);
    // Expected output: 99
    log_if_not_100(100);
    // Should not log anything
    log_if_not_100(101);
    // Expected output: 101
  },
);
```

## Syntax

```wat
;; label the block so that it can be branched to.
(block $my_block

  ;; branch to the block.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise the following control flow are unreachable.
  br $my_block

  ;; this will never be reached, since the br jumped out of the block already.
  unreachable

)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `block`   | `0x02`         |
