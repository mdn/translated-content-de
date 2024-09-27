---
title: Right shift
slug: WebAssembly/Reference/Numeric/Right_shift
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`shr`** Anweisungen, kurz für _shift-right_, werden verwendet, um einen bitweisen Rechts-Shift durchzuführen, ähnlich wie der **`>>>`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/shr.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; right shift one spot

;; perform a bitwise right-shift
i32.shr_u

;; the top item on the stack will now be 3 (00000011)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.shr_s` | `0x75`         |
| `i32.shr_u` | `0x76`         |
| `i64.shr_s` | `0x87`         |
| `i64.shr_u` | `0x88`         |
