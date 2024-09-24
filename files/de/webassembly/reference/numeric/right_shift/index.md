---
title: Rechtsschiebung
slug: WebAssembly/Reference/Numeric/Right_shift
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`shr`**-Anweisungen, kurz für _shift-right_, werden genutzt, um eine bitweise Rechtsschiebung durchzuführen, ähnlich dem **`>>>`** Operator in anderen Sprachen.

{{EmbedInteractiveExample("pages/wat/shr.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stack laden
i32.const 7   ;; 00000111
i32.const 1   ;; um eine Stelle nach rechts schieben

;; eine bitweise Rechtsschiebung durchführen
i32.shr_u

;; das oberste Element auf dem Stack wird nun 3 sein (00000011)
```

| Anweisung   | Binäroperationscode |
| ----------- | -------------------- |
| `i32.shr_s` | `0x75`               |
| `i32.shr_u` | `0x76`               |
| `i64.shr_s` | `0x87`               |
| `i64.shr_u` | `0x88`               |
