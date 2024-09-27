---
title: Zähle abschließende Nullen
slug: WebAssembly/Reference/Numeric/Count_trailing_zeros
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`ctz`**-Anweisungen, kurz für _count trailing zeros_, werden verwendet, um die Anzahl der Nullen am Ende der binären Darstellung einer Zahl zu zählen.

{{EmbedInteractiveExample("pages/wat/ctz.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count trailing zeros
i32.ctz

;; the top item on the stack will now be 23
```

| Anweisung | Binäropcode |
| --------- | ----------- |
| `i32.ctz` | `0x68`      |
| `i64.ctz` | `0x7a`      |
