---
title: Division
slug: WebAssembly/Reference/Numeric/Division
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`div`** Anweisungen, abgekürzt für _division_, werden verwendet, um eine Zahl durch eine andere zu teilen, ähnlich dem **`/`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/div.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
i32.const 12
i32.const 3

;; eine Zahl durch die andere teilen
i32.div_u

;; das oberste Element auf dem Stapel wird nun 4 sein (12 / 3 = 4)
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `i32.div_s`   | `0x6d`         |
| `i32.div_u`   | `0x6e`         |
| `i64.div_s`   | `0x7f`         |
| `i64.div_u`   | `0x80`         |
| `f32.div`     | `0x95`         |
| `f64.div`     | `0xa3`         |
