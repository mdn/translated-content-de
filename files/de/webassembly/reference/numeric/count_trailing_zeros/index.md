---
title: Zähle nachfolgende Nullen
slug: WebAssembly/Reference/Numeric/Count_trailing_zeros
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`ctz`** Anweisungen, kurz für _count trailing zeros_, werden verwendet, um die Anzahl der Nullen am Ende der binären Darstellung einer Zahl zu zählen.

{{EmbedInteractiveExample("pages/wat/ctz.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count trailing zeros
i32.ctz

;; the top item on the stack will now be 23
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.ctz` | `0x68`         |
| `i64.ctz` | `0x7a`         |
