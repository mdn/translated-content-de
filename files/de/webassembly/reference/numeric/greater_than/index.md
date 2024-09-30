---
title: Greater than
slug: WebAssembly/Reference/Numeric/Greater_than
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`gt`**-Anweisungen, kurz für _greater than_ (größer als), überprüfen, ob eine Zahl größer als eine andere Zahl ist. Wenn die erste Zahl größer als die zweite Zahl ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Die Ganzzahltypen haben separate Anweisungen für größer als für vorzeichenbehaftete (**`gt_s`**) und vorzeichenlose (**`gt_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/gt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is greater than '2'
i32.gt_u

;; if $num is greater than the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.gt_s`  | `0x4a`         |
| `i32.gt_u`  | `0x4b`         |
| `i64.gt_s`  | `0x55`         |
| `i64.gt_u`  | `0x56`         |
| `f32.gt`    | `0x5e`         |
| `f64.gt`    | `0x64`         |
