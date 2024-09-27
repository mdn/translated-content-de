---
title: Multiplication
slug: WebAssembly/Reference/Numeric/Multiplication
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`mul`**-Anweisungen, kurz für _Multiplikation_, werden verwendet, um eine Zahl mit einer anderen Zahl zu multiplizieren, ähnlich dem **`*`**-Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/mul.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; multiply one number by the other
i32.mul

;; the top item on the stack will now be 30 (10 * 3 = 30)
```

| Anweisung | Binärcode |
| --------- | --------- |
| `i32.mul` | `0x6c`    |
| `i64.mul` | `0x7e`    |
| `f32.mul` | `0x94`    |
| `f64.mul` | `0xa2`    |
