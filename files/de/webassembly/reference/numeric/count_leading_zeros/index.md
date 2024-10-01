---
title: Zählung führender Nullen
slug: WebAssembly/Reference/Numeric/Count_leading_zeros
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die Anweisungen **`clz`**, kurz für _count leading zeros_, werden verwendet, um die Anzahl der Nullen am Anfang der binären Darstellung einer Zahl zu zählen.

{{EmbedInteractiveExample("pages/wat/clz.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count leading zeros
i32.clz

;; the top item on the stack will now be 8
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.clz` | `0x67`         |
| `i64.clz` | `0x79`         |
