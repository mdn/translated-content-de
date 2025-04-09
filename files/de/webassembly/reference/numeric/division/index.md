---
title: Division
slug: WebAssembly/Reference/Numeric/Division
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`div`** Anweisungen, abgekürzt für _division_, werden verwendet, um eine Zahl durch eine andere zu teilen, ähnlich dem **`/`** Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: div", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `12` and `3` onto the stack
    i32.const 12
    i32.const 3

    i32.div_u ;; divide one number by the other
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
i32.const 12
i32.const 3

;; divide one number by the other
i32.div_u

;; the top item on the stack will now be 4 (12 / 3 = 4)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.div_s` | `0x6d`         |
| `i32.div_u` | `0x6e`         |
| `i64.div_s` | `0x7f`         |
| `i64.div_u` | `0x80`         |
| `f32.div`   | `0x95`         |
| `f64.div`   | `0xa3`         |
