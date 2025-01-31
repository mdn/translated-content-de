---
title: Min
slug: WebAssembly/Reference/Numeric/Min
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`min`**-Anweisungen werden verwendet, um die kleinere von zwei Zahlen zu erhalten.

{{EmbedInteractiveExample("pages/wat/min.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get lower number
f32.min

;; the top item on the stack will now be 3
```

| Anweisung | Binäre-Opcode |
| --------- | ------------- |
| `f32.min` | `0x96`        |
| `f64.min` | `0xa4`        |
