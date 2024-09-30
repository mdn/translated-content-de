---
title: Addition
slug: WebAssembly/Reference/Numeric/Addition
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`add`**-Instruktionen werden verwendet, um zwei Zahlen zu addieren, ähnlich dem **`+`**-Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/add.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; add up both numbers
i32.add

;; the top item on the stack will now be 13  (10 + 3 = 13)
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.add`   | `0x6a`         |
| `i64.add`   | `0x7c`         |
| `f32.add`   | `0x92`         |
| `f64.add`   | `0xa0`         |
