---
title: Truncate (Float zu Float)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_float
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`trunc`**-Anweisungen, kurz für _truncate_, werden verwendet, um den Wert einer Zahl ohne ihren Bruchteil zu erhalten.

**`trunc`** unterscheidet sich von **`floor`**, wenn es auf negative Zahlen angewendet wird. **`floor`** wird in diesen Fällen abrunden, während **`trunc`** aufrunden wird.

Es gibt eine andere [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int) Anweisung, die den Bruchteil eines Gleitkommas abschneidet und in eine ganze Zahl umwandelt.

{{EmbedInteractiveExample("pages/wat/trunc_float_to_float.html", "tabbed-taller")}}

## Syntax

```wasm
;; Eine Zahl auf den Stapel laden
f32.const 2.7

;; Den Bruchteil (.7) verwerfen
f32.trunc

;; Das oberste Element auf dem Stapel wird jetzt 2 sein
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `f32.trunc` | `0x8f`        |
| `f64.trunc` | `0x9d`        |
