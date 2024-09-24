---
title: Auswahl
slug: WebAssembly/Reference/Control_flow/Select
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`select`**-Anweisung wählt einen ihrer ersten beiden Operanden basierend darauf aus, ob ihr dritter Operand null ist oder nicht. Sie weist einige Ähnlichkeiten mit dem ternären Operator in anderen Sprachen auf (z.B. `false ? 10 : 20`), führt jedoch keine [Kurzschluss-Auswertung](https://en.wikipedia.org/wiki/Short-circuit_evaluation) durch. Die Anweisung kann von einem unmittelbaren Werttyp gefolgt sein: `select (result T)`. `select (result T)` verwendet einen anderen binären Opcode und erlaubt Typen neben denen, die durch den WebAssembly MVP eingeführt wurden (`i32`, `i64`, `f32`, `f64`), beispielsweise ermöglicht es die Auswahl zwischen zwei `externref`-Werten.

{{EmbedInteractiveExample("pages/wat/select.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Werte auf den Stapel legen
i32.const 10
i32.const 20

;; ändern zu `1` (wahr), um den ersten Wert (`10`) zu erhalten
i32.const 0
select
```

```plain
f32.const nan
f32.const -54.1

;; ändern zu `1` (wahr), um den ersten Wert (`nan`) zu erhalten
i32.const 0
select (result f32)
```

| Anweisung   | Binäroperand  |
| ----------- | ------------- |
| `select`    | `0x1b`        |
| `select t`  | `0x1c`        |
