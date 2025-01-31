---
title: Floor
slug: WebAssembly/Reference/Numeric/Floor
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`floor`**-Instruktionen werden verwendet, um den Wert einer Zahl abzurunden auf die nächstkleinere ganze Zahl.

**`floor`** unterscheidet sich von **`trunc`** bei negativen Zahlen, da **`floor`** in diesen Fällen nach unten rundet, während **`trunc`** nach oben rundet.

{{EmbedInteractiveExample("pages/wat/floor.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2.7

;; round down
f32.floor

;; the top item on the stack will now be -3
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.floor` | `0x8e`         |
| `f64.floor` | `0x9c`         |
