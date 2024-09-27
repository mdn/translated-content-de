---
title: Not equal
slug: WebAssembly/Reference/Numeric/Not_equal
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`ne`** Anweisungen, kurz für _not equal_, überprüfen, ob zwei Zahlen ungleich sind. Wenn die Zahlen ungleich sind, wird `1` auf den Stapel gelegt, ansonsten wird `0` auf den Stapel gelegt.

{{EmbedInteractiveExample("pages/wat/ne.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is not equal to '2'
i32.ne

;; if $num is not equal to `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.ne`  | `0x47`         |
| `i64.ne`  | `0x52`         |
| `f32.ne`  | `0x5c`         |
| `f64.ne`  | `0x62`         |
