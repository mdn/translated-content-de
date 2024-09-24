---
title: Bevölkerungszählung
slug: WebAssembly/Reference/Numeric/Population_count
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`popcnt`**-Anweisungen, kurz für _population count_, werden verwendet, um die Anzahl der `1`en in der binären Darstellung einer Zahl zu zählen.

{{EmbedInteractiveExample("pages/wat/popcnt.html", "tabbed-taller")}}

## Syntax

```wasm
;; Eine Zahl auf den Stapel laden
i32.const 130 ;; 10000010

;; Die 1en zählen
i32.popcnt

;; Der oberste Eintrag auf dem Stapel ist nun 2
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `i32.popcnt` | `0x69`         |
| `i64.popcnt` | `0x7b`         |
