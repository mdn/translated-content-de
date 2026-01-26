---
title: "rem: Wasm Text-Instruktion"
short-title: rem
slug: WebAssembly/Reference/Numeric/rem
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`rem`**-Instruktionen, kurz für _remainder_, werden verwendet, um den Rest zu berechnen, der übrig bleibt, wenn eine ganze Zahl durch eine andere ganze Zahl geteilt wird, ähnlich dem **`%`**-Operator in anderen Sprachen. Die **`rem`**-Instruktionen sind nur für die Ganzzahltypen verfügbar und nicht für die Gleitkommatypen.

{{InteractiveExample("Wat Demo: rem", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.rem_u ;; calculate the remainder
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

;; calculate the remainder of dividing one number by the other
i32.rem

;; the top item on the stack will now be 1 (10 % 3 = 1)
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.rem_s` | `0x6f`         |
| `i32.rem_u` | `0x70`         |
| `i64.rem_s` | `0x81`         |
| `i64.rem_u` | `0x82`         |
