---
title: Remainder
slug: WebAssembly/Reference/Numeric/Remainder
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`rem`**-Anweisungen, kurz für _Remainder_ (Rest), werden verwendet, um den Rest zu berechnen, der übrig bleibt, wenn eine ganze Zahl durch eine andere ganze Zahl geteilt wird, ähnlich dem Operator **`%`** in anderen Sprachen. Die **`rem`**-Anweisungen sind nur für die Ganzzahltypen verfügbar und nicht für die Gleitkommatypen.

{{EmbedInteractiveExample("pages/wat/rem.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; calculate the remainder of dividing one number by the other
i32.rem

;; the top item on the stack will now be 1 (10 % 3 = 1)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.rem_s` | `0x6f`         |
| `i32.rem_u` | `0x70`         |
| `i64.rem_s` | `0x81`         |
| `i64.rem_u` | `0x82`         |
