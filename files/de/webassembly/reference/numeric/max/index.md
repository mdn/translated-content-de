---
title: Max
slug: WebAssembly/Reference/Numeric/Max
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`max`** Anweisungen werden verwendet, um die höhere von zwei Zahlen zu erhalten.

{{EmbedInteractiveExample("pages/wat/max.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get higher number
f32.max

;; the top item on the stack will now be 10
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `f32.max` | `0x97`         |
| `f64.max` | `0xa5`         |
