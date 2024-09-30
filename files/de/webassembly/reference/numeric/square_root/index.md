---
title: Square root
slug: WebAssembly/Reference/Numeric/Square_root
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`sqrt`**-Anweisungen, abgekürzt für _square root_ (Quadratwurzel), werden verwendet, um die Quadratwurzel einer Zahl zu berechnen.

{{EmbedInteractiveExample("pages/wat/sqrt.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 289

;; get the square root of 289
f32.sqrt

;; the top item on the stack will now be 17
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.sqrt`  | `0x91`         |
| `f64.sqrt`  | `0x9f`         |
