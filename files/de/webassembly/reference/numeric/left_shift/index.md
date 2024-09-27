---
title: Linksverschiebung
slug: WebAssembly/Reference/Numeric/Left_shift
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`shl`**-Anweisungen, Abkürzung für _shift-left_, werden für die Durchführung einer bitweisen Linksverschiebung verwendet, ähnlich wie der **`<<`**-Operator in anderen Sprachen.

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
