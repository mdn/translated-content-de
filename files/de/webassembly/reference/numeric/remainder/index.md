---
title: Restwert
slug: WebAssembly/Reference/Numeric/Remainder
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`rem`** Anweisungen, kurz für _Restwert_, werden verwendet, um den Rest zu berechnen, der übrig bleibt, wenn eine ganze Zahl durch eine andere ganze Zahl geteilt wird, ähnlich dem **`%`** Operator in anderen Sprachen. Die **`rem`** Anweisungen sind nur für ganzzahlige Typen verfügbar und nicht für Fließkommatypen.

{{EmbedInteractiveExample("pages/wat/rem.html", "tabbed-taller")}}

## Syntax

```wasm
;; laden Sie zwei Zahlen auf den Stack
i32.const 10
i32.const 3

;; berechnen Sie den Restwert der Division einer Zahl durch die andere
i32.rem

;; das oberste Element auf dem Stack ist jetzt 1 (10 % 3 = 1)
```

| Anweisung   | Binäroperand |
| ----------- | ------------- |
| `i32.rem_s` | `0x6f`        |
| `i32.rem_u` | `0x70`        |
| `i64.rem_s` | `0x81`        |
| `i64.rem_u` | `0x82`        |
