---
title: Promote
slug: WebAssembly/Reference/Numeric/Promote
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`promote`**-Anweisung wird verwendet, um Zahlen des Typs `f32` in den Typ `f64` zu konvertieren (promoten).

{{EmbedInteractiveExample("pages/wat/promote.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f32 onto the stack
f32.const 10.5

;; promote from f32 to f64
f64.promote_f32

;; the top item on the stack will now be the value 10.5 of type f64
```

| Anweisung         | Binärer Opcode |
| ----------------- | -------------- |
| `f64.promote_f32` | `0xbb`         |
