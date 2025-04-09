---
title: Restwert
slug: WebAssembly/Reference/Numeric/Remainder
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`rem`**-Anweisungen, kurz für _Restwert_, werden verwendet, um den Rest zu berechnen, der übrig bleibt, wenn ein ganzzahliger Wert durch einen anderen ganzzahligen Wert geteilt wird, ähnlich dem **`%`**-Operator in anderen Programmiersprachen. Die **`rem`**-Anweisungen sind nur für die Ganzzahltypen verfügbar und nicht für die Fließkommatypen.

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

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.rem_s` | `0x6f`         |
| `i32.rem_u` | `0x70`         |
| `i64.rem_s` | `0x81`         |
| `i64.rem_u` | `0x82`         |
