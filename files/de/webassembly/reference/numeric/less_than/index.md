---
title: Weniger als
slug: WebAssembly/Reference/Numeric/Less_than
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`lt`**-Anweisungen, kurz für _weniger als_, überprüfen, ob eine Zahl kleiner als eine andere Zahl ist. Wenn die erste Zahl kleiner als die zweite Zahl ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Bei Ganzzahltypen gibt es separate "weniger als"-Anweisungen für vorzeichenbehaftete (**`lt_s`**) und vorzeichenlose (**`lt_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/lt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is less then '2'
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
