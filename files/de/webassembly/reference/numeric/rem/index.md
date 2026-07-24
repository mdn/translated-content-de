---
title: "rem: Wasm numerische Anweisung"
short-title: rem
slug: WebAssembly/Reference/Numeric/rem
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`rem`** [numerischen Anweisungen](/de/docs/WebAssembly/Reference/Numeric), kurz für _remainder_, werden verwendet, um den Rest zu berechnen, der übrig bleibt, wenn ein ganzzahliger Wert durch einen anderen ganzzahligen Wert geteilt wird, ähnlich dem **`%`**-Operator in anderen Sprachen. Die **`rem`**-Anweisungen sind nur für die Ganzzahltypen verfügbar und nicht für die Gleitkommatypen.

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

| Anweisung   | Binäroperationscode |
| ----------- | ------------------- |
| `i32.rem_s` | `0x6f`              |
| `i32.rem_u` | `0x70`              |
| `i64.rem_s` | `0x81`              |
| `i64.rem_u` | `0x82`              |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
