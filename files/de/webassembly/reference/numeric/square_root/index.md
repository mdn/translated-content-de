---
title: Quadratwurzel
slug: WebAssembly/Reference/Numeric/Square_root
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`sqrt`**-Anweisungen, kurz für _Quadratwurzel_, werden verwendet, um die Quadratwurzel einer Zahl zu erhalten.

{{EmbedInteractiveExample("pages/wat/sqrt.html", "tabbed-standard")}}

## Syntax

```wasm
;; eine Zahl auf den Stapel laden
f32.const 289

;; die Quadratwurzel von 289 erhalten
f32.sqrt

;; das oberste Element auf dem Stapel ist jetzt 17
```

| Anweisung    | Binärer Opcode |
| ------------ | ------------- |
| `f32.sqrt`   | `0x91`        |
| `f64.sqrt`   | `0x9f`        |
