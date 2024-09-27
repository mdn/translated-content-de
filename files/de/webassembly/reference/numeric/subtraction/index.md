---
title: Subtraktion
slug: WebAssembly/Reference/Numeric/Subtraction
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`sub`**-Anweisungen, kurz für _Subtraktion_, werden verwendet, um eine Zahl von einer anderen Zahl zu subtrahieren, ähnlich dem **`-`**-Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/sub.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; subtract one number from the other
i32.sub

;; the top item on the stack will now be 7 (10 - 3 = 7)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.sub` | `0x6b`         |
| `i64.sub` | `0x7d`         |
| `f32.sub` | `0x93`         |
| `f64.sub` | `0xa1`         |
