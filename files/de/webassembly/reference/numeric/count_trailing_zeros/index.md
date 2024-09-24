---
title: Nachfolgende Nullen zählen
slug: WebAssembly/Reference/Numeric/Count_trailing_zeros
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`ctz`**-Anweisungen, kurz für _count trailing zeros_, werden verwendet, um die Anzahl der Nullen am Ende der binären Darstellung einer Zahl zu zählen.

{{EmbedInteractiveExample("pages/wat/ctz.html", "tabbed-taller")}}

## Syntax

```wasm
;; laden Sie eine Zahl auf den Stapel
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; nachfolgende Nullen zählen
i32.ctz

;; das oberste Element auf dem Stapel wird nun 23 sein
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.ctz`   | `0x68`         |
| `i64.ctz`   | `0x7a`         |
