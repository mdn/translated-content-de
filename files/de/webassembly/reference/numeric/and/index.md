---
title: AND
slug: WebAssembly/Reference/Numeric/AND
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`and`**-Anweisungen werden verwendet, um eine bitweise UND-Operation durchzuführen, ähnlich dem **`&`**-Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/and.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise AND
i32.and

;; the top item on the stack will now be 1 (00000001)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.and` | `0x71`         |
| `i64.and` | `0x83`         |
