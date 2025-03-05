---
title: Rest
slug: WebAssembly/Reference/Numeric/Remainder
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`rem`** Anweisungen, kurz für _remainder_, werden verwendet, um den Rest zu berechnen, der übrig bleibt, wenn eine ganze Zahl durch eine andere ganze Zahl geteilt wird, ähnlich dem **`%`** Operator in anderen Sprachen. Die **`rem`** Anweisungen sind nur für die Ganzzahltypen und nicht für die Gleitkommatypen verfügbar.

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

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; calculate the remainder of dividing one number by the other
i32.rem

;; the top item on the stack will now be 1 (10 % 3 = 1)
```

| Anweisung   | Binäropcode |
| ----------- | ----------- |
| `i32.rem_s` | `0x6f`      |
| `i32.rem_u` | `0x70`      |
| `i64.rem_s` | `0x81`      |
| `i64.rem_u` | `0x82`      |
