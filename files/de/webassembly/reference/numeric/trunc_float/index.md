---
title: "trunc (zu float): Wasm-Text-Instruktion"
short-title: trunc (zu float)
slug: WebAssembly/Reference/Numeric/trunc_float
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`trunc`**-Instruktionen, kurz für _truncate_ (abschneiden), werden verwendet, um den Wert einer Zahl ohne ihren Nachkommateil zu erhalten.

**`trunc`** unterscheidet sich von **`floor`**, wenn es auf negative Zahlen angewendet wird. **`floor`** wird in diesen Fällen abrunden, während **`trunc`** aufrundet.

Es gibt eine andere [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/trunc_int)-Instruktion, die den Nachkommateil eines Gleitkommas abschneidet und es in eine Ganzzahl konvertiert.

{{InteractiveExample("Wat Demo: trunc_float_to_float", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -2.7 ;; load a number onto the stack
    f32.trunc ;; discard everything after the decimal point
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

;; discard the fractional part (.7)
f32.trunc

;; the top item on the stack will now be 2
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `f32.trunc` | `0x8f`         |
| `f64.trunc` | `0x9d`         |
