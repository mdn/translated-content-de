---
title: Truncate (float zu float)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_float
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`trunc`**-Anweisungen, kurz für _truncate_, werden verwendet, um den Wert einer Zahl ohne ihren Bruchteil zu erhalten.

**`trunc`** unterscheidet sich von **`floor`**, wenn es bei negativen Zahlen eingesetzt wird. **`floor`** wird in diesen Fällen abrunden, während **`trunc`** aufrunden wird.

Es gibt eine weitere [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)-Anweisung, die den Bruchteil eines Gleitkommawerts abschneidet und in eine ganze Zahl umwandelt.

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

```wasm
;; load a number onto the stack
f32.const 2.7

;; discard the fractional part (.7)
f32.trunc

;; the top item on the stack will now be 2
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.trunc` | `0x8f`         |
| `f64.trunc` | `0x9d`         |
