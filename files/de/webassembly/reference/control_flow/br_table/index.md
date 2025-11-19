---
title: br_table
slug: WebAssembly/Reference/Control_flow/br_table
l10n:
  sourceCommit: c81e6b0eabd3c4132767f8f422648247cd9cf3cd
---

Die **`br_table`**-Anweisung verzweigt je nach Argument zu verschiedenen [`loop`](/de/docs/WebAssembly/Reference/Control_flow/loop)-, [`block`](/de/docs/WebAssembly/Reference/Control_flow/block)- oder [`if`](/de/docs/WebAssembly/Reference/Control_flow/if...else)-Anweisungen.

In mancher Hinsicht ist `br_table` ähnlich der [`switch`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Anweisung, da sie je nach Argument zu unterschiedlichen Codeblöcken verzweigt.

{{InteractiveExample("Wat Demo: br_table", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the browser console object, which you'll need to pass in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    ;; Label each block for easy reference
    ;; (they can also be referenced by their index)
    (block $outer_block
      (block $middle_block
        (block $inner_block

          ;; Choose which block to break out of based on their order in the br_table
          ;; 0 is `$inner_block`, 1 is `$outer_block`, 2 is `$middle_block`
          i32.const 0

          ;; Create a br_table with three targets
          (br_table $inner_block $outer_block $middle_block)

          ;; The code will never reach this point since we broke out of the block
          unreachable

        )

        ;; If you jump out of `$inner_block` but stay in `$middle_block`,
        ;; 42 will be logged
        ;; If you jump out of `$middle_block` also,
        ;; by jumping out of either `$middle_block` or `$outer_block`,
        ;; this will be skipped
        i32.const 42
        call $log

      )
    )
  )

  (start 1) ;; Run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wat
;; Add true to the top of the stack so that the `if` statement is executed.
i32.const 1
(if ;; 2
  (then
    (block ;; 1
      (loop ;; 0
        ;; Add a variable to the top of the stack
        i32.const 2

        ;; 0 = jump to `block`; since item 0 in br_table is 1, it jumps up one level
        ;; 1 = jump to `if`; since item 1 in br_table is 2, it jumps up two levels
        ;; 2 = jump to `loop`; since item 2 in br_table is 0, it doesn't jump any levels (causing an infinite loop)
        ;; Create a br_table with the targets
        (br_table 1 2 0)
      )
    )
  )
)
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `br_table` | `0x0e`         |
