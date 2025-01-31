---
title: Linksschieben
slug: WebAssembly/Reference/Numeric/Left_shift
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`shl`** Anweisungen, kurz für _shift-left_, werden verwendet, um ein bitweises Linksschieben durchzuführen, ähnlich dem **`<<`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/shl.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; left shift one spot

;; perform a bitwise left-shift
i32.shl

;; the top item on the stack will now be 14 (00001110)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.shl` | `0x74`         |
| `i64.shl` | `0x86`         |
