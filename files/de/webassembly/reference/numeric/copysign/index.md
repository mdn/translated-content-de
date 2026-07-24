---
title: "copysign: Wasm numerische Anweisung"
short-title: copysign
slug: WebAssembly/Reference/Numeric/copysign
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`copysign`**-[numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um nur das Vorzeichenbit von einer Zahl auf eine andere zu kopieren.

{{InteractiveExample("Wat Demo: copysign", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load `10` and a negative number onto the stack
    f32.const 10
    f32.const -2

    f32.copysign ;; copy just the sign bit from second to the first number
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
f32.const 10
f32.const -1

;; copy just the sign bit from the second number (-1) to the first (10)
f32.copysign

;; the top item on the stack will now be -10
```

| Anweisung      | Binärer Opcode |
| -------------- | -------------- |
| `f32.copysign` | `0x98`         |
| `f64.copysign` | `0xa6`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
