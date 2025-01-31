---
title: Quadratwurzel
slug: WebAssembly/Reference/Numeric/Square_root
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`sqrt`**-Anweisungen, kurz für _square root_, werden verwendet, um die Quadratwurzel einer Zahl zu berechnen.

{{EmbedInteractiveExample("pages/wat/sqrt.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 289

;; get the square root of 289
f32.sqrt

;; the top item on the stack will now be 17
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `f32.sqrt` | `0x91`         |
| `f64.sqrt` | `0x9f`         |
