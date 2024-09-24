---
title: Kleiner oder gleich
slug: WebAssembly/Reference/Numeric/Less_or_equal
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`le`** Anweisungen, kurz für _kleiner oder gleich_, überprüfen, ob eine Zahl kleiner oder gleich einer anderen Zahl ist. Wenn die erste Zahl kleiner oder gleich der zweiten Zahl ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Die Ganzzahltypen haben separate Anweisungen für kleiner oder gleich für vorzeichenbehaftete (**`le_s`**) und vorzeichenlose (**`le_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/le.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
local.get $num
i32.const 2

;; prüfen, ob $num kleiner oder gleich '2' ist
i32.le_u

;; wenn $num kleiner oder gleich der `2` ist, wird `1` auf den Stapel geschoben,
;; andernfalls wird `0` auf den Stapel geschoben.
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.le_s`  | `0x4C`         |
| `i32.le_u`  | `0x4D`         |
| `i64.le_s`  | `0x57`         |
| `i64.le_u`  | `0x58`         |
| `f32.le`    | `0x5F`         |
| `f64.le`    | `0x65`         |
