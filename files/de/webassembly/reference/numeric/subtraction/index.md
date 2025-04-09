---
title: Subtraktion
slug: WebAssembly/Reference/Numeric/Subtraction
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`sub`**-Instruktionen, kurz für _Subtraktion_, werden verwendet, um eine Zahl von einer anderen Zahl zu subtrahieren, ähnlich wie der **`-`**-Operator in anderen Sprachen.

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

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.sub`   | `0x6b`         |
| `i64.sub`   | `0x7d`         |
| `f32.sub`   | `0x93`         |
| `f64.sub`   | `0xa1`         |
