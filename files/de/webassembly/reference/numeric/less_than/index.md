---
title: Kleiner als
slug: WebAssembly/Reference/Numeric/Less_than
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`lt`**-Instruktionen, kurz für _kleiner als_, prüfen, ob eine Zahl kleiner als eine andere Zahl ist. Wenn die erste Zahl kleiner als die zweite Zahl ist, wird `1` auf den Stapel gelegt, andernfalls wird `0` auf den Stapel gelegt.

Die ganzzahligen Typen haben separate "kleiner als" Instruktionen für vorzeichenbehaftete (**`lt_s`**) und vorzeichenlose (**`lt_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/lt.html", "tabbed-taller")}}

## Syntax

```wasm
;; lade 2 Zahlen auf den Stapel
local.get $num
i32.const 2

;; prüfe, ob $num kleiner als '2' ist
i32.lt_u

;; wenn $num kleiner als die `2` ist, wird `1` auf den Stapel gelegt,
;; andernfalls wird `0` auf den Stapel gelegt.
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.lt_s`  | `0x48`         |
| `i32.lt_u`  | `0x49`         |
| `i64.lt_s`  | `0x53`         |
| `i64.lt_u`  | `0x54`         |
| `f32.lt`    | `0x5d`         |
| `f64.lt`    | `0x63`         |
