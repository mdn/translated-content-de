---
title: UND
slug: WebAssembly/Reference/Numeric/AND
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`and`** Anweisungen werden verwendet, um eine bitweise UND-Operation durchzuführen, ähnlich dem **`&`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/and.html", "tabbed-taller")}}

## Syntax

```wasm
;; lade zwei Zahlen auf den Stapel
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; führe eine bitweise UND-Operation durch
i32.and

;; das oberste Element auf dem Stapel ist jetzt 1 (00000001)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.and`   | `0x71`         |
| `i64.and`   | `0x83`         |
