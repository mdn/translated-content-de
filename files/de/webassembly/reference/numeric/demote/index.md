---
title: Demote
slug: WebAssembly/Reference/Numeric/Demote
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`demote`**-Anweisung wird verwendet, um Zahlen vom Typ `f64` in den Typ `f32` zu konvertieren (herabzustufen).

{{EmbedInteractiveExample("pages/wat/demote.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f64 onto the stack
f64.const 10.5

;; demote from f64 to f32
f32.demote_f64

;; the top item on the stack will now be the value 10.5 of type f32
```

| Anweisung        | Binärer Opcode |
| ---------------- | -------------- |
| `f32.demote_f64` | `0xb6`         |
