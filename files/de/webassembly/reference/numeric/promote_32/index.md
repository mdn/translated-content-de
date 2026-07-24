---
title: "promote_32: Wasm numerische Anweisung"
short-title: promote_32
slug: WebAssembly/Reference/Numeric/promote_32
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`promote_32`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um Zahlen vom Typ `f32` in den Typ `f64` umzuwandeln (zu fördern).

{{InteractiveExample("Wat Demo: promote_32", "tabbed-taller")}}

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

| Anweisung         | Binär-Opcode |
| ----------------- | ------------ |
| `f64.promote_f32` | `0xbb`       |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
