---
title: Negate
slug: WebAssembly/Reference/Numeric/Negate
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`neg`**-Anweisungen, als Abkürzung für _negieren_, werden verwendet, um eine Zahl zu negieren. Das bedeutet, eine positive Zahl in eine negative umzuwandeln und eine negative Zahl in eine positive.

{{InteractiveExample("Wat Demo: neg", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 10 ;; load a number onto the stack
    f32.neg ;; negate the values
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
;; load a number onto the stack
f32.const 2.7

;; negate
f32.neg

;; the top item on the stack will now be -2.7
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `f32.neg` | `0x8c`         |
| `f64.neg` | `0x9a`         |
