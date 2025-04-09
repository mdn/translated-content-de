---
title: Addition
slug: WebAssembly/Reference/Numeric/Addition
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`add`**-Anweisungen werden verwendet, um zwei Zahlen zu addieren, ähnlich dem **`+`**-Operator in anderen Sprachen.

{{InteractiveExample("Wat Demo: add", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.add ;; add up both numbers
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

;; add up both numbers
i32.add

;; the top item on the stack will now be 13  (10 + 3 = 13)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.add` | `0x6a`         |
| `i64.add` | `0x7c`         |
| `f32.add` | `0x92`         |
| `f64.add` | `0xa0`         |
