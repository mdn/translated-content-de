---
title: "demote: Wasm-Zahlenanweisung"
short-title: demote
slug: WebAssembly/Reference/Numeric/demote
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`demote`**-[Zahlenanweisung](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um Zahlen vom Typ `f64` in den Typ `f32` umzuwandeln (herabzustufen).

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

```wat
;; push an f64 onto the stack
f64.const 10.5

;; demote from f64 to f32
f32.demote_f64

;; the top item on the stack will now be the value 10.5 of type f32
```

| Anweisung        | Binäre Opcode |
| ---------------- | ------------- |
| `f32.demote_f64` | `0xb6`        |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
