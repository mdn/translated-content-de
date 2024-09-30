---
title: Division
slug: WebAssembly/Reference/Numeric/Division
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`div`** Anweisungen, Kurzform für _Division_, werden verwendet, um eine Zahl durch eine andere zu teilen, ähnlich wie der **`/`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/div.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 12
i32.const 3

;; divide one number by the other
i32.div_u

;; the top item on the stack will now be 4 (12 / 3 = 4)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.div_s` | `0x6d`         |
| `i32.div_u` | `0x6e`         |
| `i64.div_s` | `0x7f`         |
| `i64.div_u` | `0x80`         |
| `f32.div`   | `0x95`         |
| `f64.div`   | `0xa3`         |
