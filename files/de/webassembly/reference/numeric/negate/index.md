---
title: Negate
slug: WebAssembly/Reference/Numeric/Negate
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`neg`** Anweisungen, kurz für _negieren_, werden verwendet, um eine Zahl zu negieren. Das bedeutet, eine positive Zahl in eine negative Zahl und eine negative Zahl in eine positive Zahl umzuwandeln.

{{EmbedInteractiveExample("pages/wat/neg.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; negate
f32.neg

;; the top item on the stack will now be -2.7
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `f32.neg` | `0x8c`         |
| `f64.neg` | `0x9a`         |
