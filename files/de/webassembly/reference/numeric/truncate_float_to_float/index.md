---
title: Truncate (float to float)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_float
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`trunc`**-Anweisungen, kurz für _truncate_, werden verwendet, um den Wert einer Zahl ohne ihren Bruchteil zu erhalten.

**`trunc`** unterscheidet sich von **`floor`**, wenn es auf negative Zahlen angewendet wird. **`floor`** rundet in diesen Fällen ab, während **`trunc`** aufrundet.

Es gibt eine andere [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)-Anweisung, die den Bruchteil einer Gleitkommazahl abschneidet und in eine Ganzzahl umwandelt.

{{EmbedInteractiveExample("pages/wat/trunc_float_to_float.html", "tabbed-taller")}}

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
