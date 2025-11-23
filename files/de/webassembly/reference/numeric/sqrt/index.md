---
title: "sqrt: Wasm-Textanweisung"
short-title: sqrt
slug: WebAssembly/Reference/Numeric/sqrt
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`sqrt`** Anweisungen, kurz für _square root_ (Quadratwurzel), werden verwendet, um die Quadratwurzel einer Zahl zu berechnen.

{{InteractiveExample("Wat Demo: sqrt", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2 ;; load a number onto the stack
    f32.sqrt ;; calculate the square root
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
f32.const 289

;; get the square root of 289
f32.sqrt

;; the top item on the stack will now be 17
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `f32.sqrt` | `0x91`         |
| `f64.sqrt` | `0x9f`         |
