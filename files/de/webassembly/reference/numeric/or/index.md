---
title: ODER
slug: WebAssembly/Reference/Numeric/OR
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`or`**-Anweisungen werden verwendet, um ein bitweises ODER durchzuführen, ähnlich dem **`|`**-Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/or.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stack laden
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; ein bitweises ODER durchführen
i32.or

;; das oberste Element auf dem Stack wird jetzt 7 sein (00000111)
```

| Anweisung  | Binärer Opcode |
| -----------| -------------- |
| `i32.or`   | `0x72`         |
| `i64.or`   | `0x84`         |
