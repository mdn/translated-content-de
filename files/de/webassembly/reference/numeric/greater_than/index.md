---
title: Größer als
slug: WebAssembly/Reference/Numeric/Greater_than
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`gt`**-Anweisungen, kurz für _greater than_ (größer als), überprüfen, ob eine Zahl größer als eine andere Zahl ist. Wenn die erste Zahl größer als die zweite Zahl ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Die Ganzzahltypen haben separate größer als-Anweisungen für vorzeichenbehaftete (**`gt_s`**) und vorzeichenlose (**`gt_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/gt.html", "tabbed-taller")}}

## Syntax

```wasm
;; 2 Zahlen auf den Stapel laden
local.get $num
i32.const 2

;; überprüfen, ob $num größer als '2' ist
i32.gt_u

;; wenn $num größer als `2` ist, wird `1` auf den Stapel geschoben,
;; andernfalls wird `0` auf den Stapel geschoben.
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.gt_s`  | `0x4a`         |
| `i32.gt_u`  | `0x4b`         |
| `i64.gt_s`  | `0x55`         |
| `i64.gt_u`  | `0x56`         |
| `f32.gt`    | `0x5e`         |
| `f64.gt`    | `0x64`         |
