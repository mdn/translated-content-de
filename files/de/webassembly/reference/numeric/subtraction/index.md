---
title: Subtraktion
slug: WebAssembly/Reference/Numeric/Subtraction
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`sub`**-Anweisungen, Abkürzung für _Subtraktion_, werden verwendet, um eine Zahl von einer anderen Zahl zu subtrahieren, ähnlich dem **`-`**-Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/sub.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
i32.const 10
i32.const 3

;; eine Zahl von der anderen subtrahieren
i32.sub

;; das oberste Element auf dem Stapel ist jetzt 7 (10 - 3 = 7)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.sub`   | `0x6b`        |
| `i64.sub`   | `0x7d`        |
| `f32.sub`   | `0x93`        |
| `f64.sub`   | `0xa1`        |
