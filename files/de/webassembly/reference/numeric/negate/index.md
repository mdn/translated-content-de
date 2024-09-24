---
title: Negieren
slug: WebAssembly/Reference/Numeric/Negate
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die Anweisungen **`neg`**, kurz für _negieren_, werden verwendet, um eine Zahl zu negieren. Das heißt, eine positive Zahl in eine negative umwandeln und eine negative Zahl in eine positive.

{{EmbedInteractiveExample("pages/wat/neg.html", "tabbed-standard")}}

## Syntax

```wasm
;; Zahl auf den Stack laden
f32.const 2.7

;; negieren
f32.neg

;; das oberste Element auf dem Stack ist jetzt -2.7
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.neg`   | `0x8c`         |
| `f64.neg`   | `0x9a`         |
