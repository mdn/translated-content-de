---
title: Absolut
slug: WebAssembly/Reference/Numeric/Absolute
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`abs`** Anweisungen, kurz für _absolute_, werden verwendet, um den Absolutwert einer Zahl zu erhalten. Das bedeutet, sie gibt x zurück, wenn x positiv ist, und die Negation von x, wenn x negativ ist.

{{InteractiveExample("Wat Demo: abs", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -10 ;; load a number onto the stack
    f32.abs ;; calculate the absolute value
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
f32.const -2

;; absolute
f32.abs

;; the top item on the stack will now be 2
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `f32.abs` | `0x8b`         |
| `f64.abs` | `0x99`         |
