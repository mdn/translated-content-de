---
title: "promote: Wasm Text-Instruktion"
short-title: promote
slug: WebAssembly/Reference/Numeric/promote
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`promote`**-Instruktion wird verwendet, um Zahlen des Typs `f32` in den Typ `f64` zu konvertieren (promoten).

{{InteractiveExample("Wat Demo: promote", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main

    f32.const 10.5 ;; push an f32 onto the stack

    f64.promote_f32 ;; promote from f32 to f64

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
;; push an f32 onto the stack
f32.const 10.5

;; promote from f32 to f64
f64.promote_f32

;; the top item on the stack will now be the value 10.5 of type f64
```

| Instruktion       | Binärer Opcode |
| ----------------- | -------------- |
| `f64.promote_f32` | `0xbb`         |
