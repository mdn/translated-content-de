---
title: Kleiner als
slug: WebAssembly/Reference/Numeric/Less_than
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`lt`** Anweisungen, kurz für _kleiner als_, überprüfen, ob eine Zahl kleiner als eine andere Zahl ist. Wenn die erste Zahl kleiner als die zweite Zahl ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Die Ganzzahltypen haben separate Anweisungen für kleinere Zahlen, unterschieden nach vorzeichenbehaftet (**`lt_s`**) und vorzeichenlos (**`lt_u`**).

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

| Anweisung  | Binäroperanden |
| ---------- | -------------- |
| `i32.lt_s` | `0x48`         |
| `i32.lt_u` | `0x49`         |
| `i64.lt_s` | `0x53`         |
| `i64.lt_u` | `0x54`         |
| `f32.lt`   | `0x5d`         |
| `f64.lt`   | `0x63`         |
