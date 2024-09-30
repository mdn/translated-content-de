---
title: Population count
slug: WebAssembly/Reference/Numeric/Population_count
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`popcnt`**-Anweisungen, abgekürzt für _Population Count_, werden verwendet, um die Anzahl der `1`en in der binären Darstellung einer Zahl zu zählen.

{{EmbedInteractiveExample("pages/wat/popcnt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 130 ;; 10000010

;; count the 1s
i32.popcnt

;; the top item on the stack will now be 2
```

| Anweisung   | Binärer Opcode |
| ------------ | ------------- |
| `i32.popcnt` | `0x69`        |
| `i64.popcnt` | `0x7b`        |
