---
title: "nearest: Wasm-Textanweisung"
short-title: nearest
slug: WebAssembly/Reference/Numeric/nearest
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`nearest`** Anweisungen werden verwendet, um den Wert einer Zahl zu erhalten, die auf die nächste ganze Zahl gerundet ist.

{{InteractiveExample("Wat Demo: nearest", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2.7 ;; load a number onto the stack
    f32.nearest ;; round to the nearest integer
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
f32.const -2.7

;; round to the nearest integer
f32.nearest

;; the top item on the stack will now be -3
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `f32.nearest` | `0x90`         |
| `f64.nearest` | `0x9e`         |
