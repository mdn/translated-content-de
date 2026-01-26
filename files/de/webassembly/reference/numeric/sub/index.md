---
title: "sub: Wasm-Textanweisung"
short-title: sub
slug: WebAssembly/Reference/Numeric/sub
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`sub`** Anweisungen, kurz für _Subtraktion_, werden verwendet, um eine Zahl von einer anderen Zahl zu subtrahieren, ähnlich dem **`-`** Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: sub", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.sub ;; subtract on number from the other
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wat
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; subtract one number from the other
i32.sub

;; the top item on the stack will now be 7 (10 - 3 = 7)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.sub` | `0x6b`         |
| `i64.sub` | `0x7d`         |
| `f32.sub` | `0x93`         |
| `f64.sub` | `0xa1`         |
