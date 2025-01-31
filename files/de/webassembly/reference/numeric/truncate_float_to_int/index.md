---
title: Truncate (float auf int)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_int
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`trunc`**-Instruktionen werden verwendet, um Gleitkommazahlen in Ganzzahlen zu konvertieren. Sie heißen "truncate", da sie den Bruchteil der Zahl bei der Konvertierung abschneiden. Es gibt signierte und unsignierte Versionen dieser Instruktion.

Es gibt eine andere [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float) Instruktion, die den Bruchteil einer Gleitkommazahl abschneidet, ohne sie in eine Ganzzahl zu konvertieren.

{{EmbedInteractiveExample("pages/wat/trunc_float_to_int.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f32 onto the stack
f32.const 10.5

;; convert from f32 to signed i32 rounding towards zero (.5 will be lost)
i32.trunc_f32_s

;; the top item on the stack will now be the value 10 of type f32
```

| Instruktion       | Binär-Opcode |
| ----------------- | ------------ |
| `i32.trunc_f32_s` | `0xa8`       |
| `i32.trunc_f32_u` | `0xa9`       |
| `i32.trunc_f64_s` | `0xaa`       |
| `i32.trunc_f64_u` | `0xab`       |
| `i64.trunc_f32_s` | `0xae`       |
| `i64.trunc_f32_u` | `0xaf`       |
| `i64.trunc_f64_s` | `0xb0`       |
| `i64.trunc_f64_u` | `0xb1`       |
