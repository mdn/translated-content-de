---
title: Herabstufen
slug: WebAssembly/Reference/Numeric/Demote
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`demote`**-Anweisung wird verwendet, um Zahlen vom Typ `f64` in den Typ `f32` zu konvertieren (herabzustufen).

{{InteractiveExample("Wat Demo: demote", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f64.const 10.5 ;; push an f64 onto the stack

    f32.demote_f64 ;; demote from f64 to f32

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

```wasm
;; push an f64 onto the stack
f64.const 10.5

;; demote from f64 to f32
f32.demote_f64

;; the top item on the stack will now be the value 10.5 of type f32
```

| Anweisung        | Binärer Opcode |
| ---------------- | -------------- |
| `f32.demote_f64` | `0xb6`         |
