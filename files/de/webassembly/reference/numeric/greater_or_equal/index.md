---
title: Greater or equal
slug: WebAssembly/Reference/Numeric/Greater_or_equal
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`ge`**-Anweisungen, kurz für _greater or equal_, prüfen, ob eine Zahl größer oder gleich einer anderen Zahl ist. Wenn die erste Zahl größer oder gleich der zweiten Zahl ist, wird `1` auf den Stack geschoben, andernfalls wird `0` auf den Stack geschoben.

Die ganzzahligen Typen haben separate Anweisungen für größer oder gleich für vorzeichenbehaftete (**`ge_s`**) und vorzeichenlose (**`ge_u`**) Zahlen.

{{EmbedInteractiveExample("pages/wat/ge.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is greater than or equal to '2'
i32.ge_u

;; if $num is greater than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `i32.ge_s` | `0x4e`         |
| `i32.ge_u` | `0x4f`         |
| `i64.ge_s` | `0x59`         |
| `i64.ge_u` | `0x5a`         |
| `f32.ge`   | `0x60`         |
| `f64.ge`   | `0x66`         |
