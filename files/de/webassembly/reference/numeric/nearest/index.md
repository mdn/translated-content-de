---
title: Nearest
slug: WebAssembly/Reference/Numeric/Nearest
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`nearest`** Anweisungen werden verwendet, um den Wert einer Zahl auf die nächste ganze Zahl gerundet zu erhalten.

{{EmbedInteractiveExample("pages/wat/nearest.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2.7

;; round to the nearest integer
f32.nearest

;; the top item on the stack will now be -3
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `f32.nearest` | `0x90`         |
| `f64.nearest` | `0x9e`         |
