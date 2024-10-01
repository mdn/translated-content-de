---
title: Select
slug: WebAssembly/Reference/Control_flow/Select
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`select`** Anweisung wählt einen ihrer ersten beiden Operanden basierend darauf aus, ob der dritte Operand null ist oder nicht. Sie weist einige Ähnlichkeiten mit dem ternären Operator in anderen Sprachen auf (z.B. `false ? 10 : 20`), ohne dass sie [kurzschließt](https://en.wikipedia.org/wiki/Short-circuit_evaluation). Der Anweisung kann ein unmittelbarer Werttyp folgen: `select (result T)`. `select (result T)` verwendet einen anderen binären Opcode und erlaubt Typen zusätzlich zu denen, die durch das WebAssembly MVP eingeführt wurden (`i32`, `i64`, `f32`, `f64`), beispielsweise erlaubt es die Auswahl zwischen zwei `externref` Werten.

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

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `select`   | `0x1b`         |
| `select t` | `0x1c`         |
