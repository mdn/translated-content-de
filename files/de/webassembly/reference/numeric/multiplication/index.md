---
title: Multiplikation
slug: WebAssembly/Reference/Numeric/Multiplication
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`mul`**-Instruktionen, kurz für _Multiplikation_, werden verwendet, um eine Zahl mit einer anderen Zahl zu multiplizieren, ähnlich dem **`*`**-Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/mul.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
i32.const 10
i32.const 3

;; eine Zahl mit der anderen multiplizieren
i32.mul

;; das oberste Element auf dem Stapel ist jetzt 30 (10 * 3 = 30)
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.mul`   | `0x6c`         |
| `i64.mul`   | `0x7e`         |
| `f32.mul`   | `0x94`         |
| `f64.mul`   | `0xa2`         |
