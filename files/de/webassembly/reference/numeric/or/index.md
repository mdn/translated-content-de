---
title: OR
slug: WebAssembly/Reference/Numeric/OR
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`or`**-Anweisungen werden verwendet, um ein bitweises OR durchzuführen, ähnlich dem **`|`**-Operator in anderen Programmiersprachen.

{{EmbedInteractiveExample("pages/wat/or.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise OR
i32.or

;; the top item on the stack will now be 7 (00000111)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.or`  | `0x72`         |
| `i64.or`  | `0x84`         |
