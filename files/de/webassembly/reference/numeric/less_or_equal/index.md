---
title: Weniger oder gleich
slug: WebAssembly/Reference/Numeric/Less_or_equal
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`le`**-Anweisungen, kurz für _weniger oder gleich_, überprüfen, ob eine Zahl kleiner oder gleich einer anderen Zahl ist. Wenn die erste Zahl kleiner oder gleich der zweiten Zahl ist, wird `1` auf den Stapel geschoben, ansonsten wird `0` auf den Stapel geschoben.

Die Ganzzahltypen haben separate Anweisungen für weniger oder gleich für vorzeichenbehaftete (**`le_s`**) und vorzeichenlose (**`le_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/le.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is less then or equal to '2'
i32.le_u

;; if $num is less than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `i32.le_s` | `0x4C`         |
| `i32.le_u` | `0x4D`         |
| `i64.le_s` | `0x57`         |
| `i64.le_u` | `0x58`         |
| `f32.le`   | `0x5F`         |
| `f64.le`   | `0x65`         |
