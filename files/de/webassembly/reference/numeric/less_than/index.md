---
title: Weniger als
slug: WebAssembly/Reference/Numeric/Less_than
l10n:
  sourceCommit: 916104c5348505f0921811af34d3f7499e9ac9f6
---

Die **`lt`**-Anweisungen, Abkürzung für _less than_, prüfen, ob eine Zahl kleiner als eine andere Zahl ist. Wenn die erste Zahl kleiner als die zweite Zahl ist, wird `1` auf den Stapel gepusht; andernfalls wird `0` auf den Stapel gepusht.

Für Ganzzahltypen gibt es separate `less than`-Anweisungen für vorzeichenbehaftete (**`lt_s`**) und vorzeichenlose (**`lt_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/lt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is less than '2'
i32.lt_u

;; if $num is less than the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `i32.lt_s` | `0x48`         |
| `i32.lt_u` | `0x49`         |
| `i64.lt_s` | `0x53`         |
| `i64.lt_u` | `0x54`         |
| `f32.lt`   | `0x5d`         |
| `f64.lt`   | `0x63`         |
