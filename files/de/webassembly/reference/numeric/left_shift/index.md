---
title: Logische Linksverschiebung
slug: WebAssembly/Reference/Numeric/Left_shift
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`shl`**-Anweisungen, Kurzform für _shift-left_, werden verwendet, um eine bitweise Linksverschiebung durchzuführen, ähnlich dem **`<<`**-Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/shl.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
i32.const 7   ;; 00000111
i32.const 1   ;; links um eine Stelle verschieben

;; eine bitweise Linksverschiebung durchführen
i32.shl

;; das oberste Element auf dem Stapel ist nun 14 (00001110)
```

| Anweisung   | Binär-Opcode  |
| ----------- | ------------- |
| `i32.shl`   | `0x74`        |
| `i64.shl`   | `0x86`        |
