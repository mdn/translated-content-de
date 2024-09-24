---
title: Rechtsrotation
slug: WebAssembly/Reference/Numeric/Right_rotate
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`rotr`**-Instruktionen, kurz für _rotate-right_, werden verwendet, um eine bitweise Rechtsrotation durchzuführen.

{{EmbedInteractiveExample("pages/wat/rotr.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
i32.const 7   ;; 00000000_00000000_00000000_00000111
i32.const 1   ;; rechts um eine Stelle rotieren

;; eine bitweise Rechtsrotation durchführen
i32.rotr

;; das oberste Element auf dem Stapel ist jetzt 2147483651
;; (10000000_00000000_00000000_00000011)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.rotr`  | `0x78`         |
| `i64.rotr`  | `0x8a`         |
