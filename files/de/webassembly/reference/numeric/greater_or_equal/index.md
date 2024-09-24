---
title: Größer oder gleich
slug: WebAssembly/Reference/Numeric/Greater_or_equal
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`ge`**-Instruktionen, kurz für _größer oder gleich_, überprüfen, ob eine Zahl größer oder gleich einer anderen Zahl ist. Wenn die erste Zahl größer oder gleich der zweiten Zahl ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Die Ganzzahltypen haben separate Instruktionen für größer oder gleich für vorzeichenbehaftete (**`ge_s`**) und vorzeichenlose (**`ge_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/ge.html", "tabbed-taller")}}

## Syntax

```wasm
;; lädt 2 Zahlen auf den Stapel
local.get $num
i32.const 2

;; überprüft, ob $num größer oder gleich '2' ist
i32.ge_u

;; wenn $num größer oder gleich `2` ist, wird `1` auf den Stapel geschoben,
;; andernfalls wird `0` auf den Stapel geschoben.
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.ge_s`  | `0x4e`         |
| `i32.ge_u`  | `0x4f`         |
| `i64.ge_s`  | `0x59`         |
| `i64.ge_u`  | `0x5a`         |
| `f32.ge`    | `0x60`         |
| `f64.ge`    | `0x66`         |
