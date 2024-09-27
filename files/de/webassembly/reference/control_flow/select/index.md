---
title: Select
slug: WebAssembly/Reference/Control_flow/Select
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`select`**-Anweisung wählt einen ihrer ersten beiden Operanden basierend darauf aus, ob ihr dritter Operand null ist oder nicht. Sie teilt einige Ähnlichkeiten mit dem ternären Operator in anderen Sprachen (z.B. `false ? 10 : 20`), jedoch findet keine [Kurzschlussauswertung](https://en.wikipedia.org/wiki/Short-circuit_evaluation) statt. Der Anweisung kann ein unmittelbarer Werttyp folgen: `select (result T)`. `select (result T)` verwendet einen anderen Binärcode und ermöglicht Typen neben denen, die durch den WebAssembly MVP eingeführt wurden (`i32`, `i64`, `f32`, `f64`). Zum Beispiel erlaubt es die Auswahl zwischen zwei `externref`-Werten.

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

| Anweisung  | Binärcode |
| ---------- | --------- |
| `select`   | `0x1b`    |
| `select t` | `0x1c`    |
