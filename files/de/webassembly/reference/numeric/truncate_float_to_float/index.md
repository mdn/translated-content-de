---
title: Truncate (float zu float)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_float
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`trunc`**-Anweisungen, kurz für _truncate_, werden verwendet, um den Wert einer Zahl ohne ihren Bruchteil zu erhalten.

**`trunc`** unterscheidet sich von **`floor`** bei der Verwendung mit negativen Zahlen. **`floor`** rundet in diesen Fällen ab, während **`trunc`** nach oben rundet.

Es gibt eine andere [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)-Anweisung, die den Bruchteil eines Gleitkommazahl abschneidet und in einen Integer umwandelt.

{{EmbedInteractiveExample("pages/wat/trunc_float_to_float.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; discard the fractional part (.7)
f32.trunc

;; the top item on the stack will now be 2
```

| Anweisung   | Binäre Opcode |
| ----------- | ------------- |
| `f32.trunc` | `0x8f`        |
| `f64.trunc` | `0x9d`        |
