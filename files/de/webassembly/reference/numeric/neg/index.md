---
title: "neg: Wasm-Textanweisung"
short-title: neg
slug: WebAssembly/Reference/Numeric/neg
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`neg`**-Anweisungen, kurz für _negate_, werden verwendet, um eine Zahl zu negieren. Das bedeutet, eine positive Zahl in eine negative Zahl und eine negative Zahl in eine positive Zahl umzuwandeln.

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

| Anweisung | Binäropcode |
| --------- | ----------- |
| `f32.neg` | `0x8c`      |
| `f64.neg` | `0x9a`      |
