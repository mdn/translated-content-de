---
title: Select
slug: WebAssembly/Reference/Control_flow/Select
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`select`**-Anweisung wählt einen ihrer ersten beiden Operanden basierend darauf aus, ob ihr dritter Operand null ist oder nicht. Sie weist einige Ähnlichkeiten mit dem ternären Operator in anderen Sprachen auf (z.B. `false ? 10 : 20`), aber sie nutzt keine [Short-Circuit-Bewertung](https://en.wikipedia.org/wiki/Short-circuit_evaluation). Die Anweisung kann von einem unmittelbaren Werttyp gefolgt sein: `select (result T)`. `select (result T)` verwendet einen anderen Binäroperand und erlaubt Typen, die neben denen eingeführt durch den WebAssembly-MVP (`i32`, `i64`, `f32`, `f64`) existieren, beispielsweise ermöglicht es die Auswahl zwischen zwei `externref`-Werten.

{{EmbedInteractiveExample("pages/wat/select.html", "tabbed-taller")}}

## Syntax

```wasm
;; push two values onto the stack
i32.const 10
i32.const 20

;; change to `1` (true) to get the first value (`10`)
i32.const 0
select
```

```plain
f32.const nan
f32.const -54.1

;; change to `1` (true) to get the first value (`nan`)
i32.const 0
select (result f32)
```

| Anweisung  | Binäroperand |
| ---------- | ------------ |
| `select`   | `0x1b`       |
| `select t` | `0x1c`       |
