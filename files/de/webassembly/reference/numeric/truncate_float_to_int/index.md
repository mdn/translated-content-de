---
title: Truncate (float zu int)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_int
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`trunc`**-Anweisungen werden verwendet, um Gleitkommazahlen in ganze Zahlen zu konvertieren. Sie werden als "truncate" (abschneiden) bezeichnet, da der Bruchteil der Zahl bei der Konvertierung abgeschnitten wird. Es gibt signierte und unsignierte Versionen dieser Anweisung.

Es gibt eine andere [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float)-Anweisung, die den Bruchteil einer Gleitkommazahl abschneidet, ohne sie in eine ganze Zahl zu konvertieren.

{{EmbedInteractiveExample("pages/wat/trunc_float_to_int.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f32 onto the stack
f32.const 10.5

;; convert from f32 to signed i32 rounding towards zero (.5 will be lost)
i32.trunc_f32_s

;; the top item on the stack will now be the value 10 of type f32
```

| Anweisung        | Binärcode     |
| ---------------- | ------------- |
| `i32.trunc_f32_s`| `0xa8`        |
| `i32.trunc_f32_u`| `0xa9`        |
| `i32.trunc_f64_s`| `0xaa`        |
| `i32.trunc_f64_u`| `0xab`        |
| `i64.trunc_f32_s`| `0xae`        |
| `i64.trunc_f32_u`| `0xaf`        |
| `i64.trunc_f64_s`| `0xb0`        |
| `i64.trunc_f64_u`| `0xb1`        |
