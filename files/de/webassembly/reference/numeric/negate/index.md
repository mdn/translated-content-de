---
title: Negate
slug: WebAssembly/Reference/Numeric/Negate
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`neg`** Anweisungen, abgekürzt für _negate_, werden verwendet, um eine Zahl zu negieren. Das heißt, eine positive Zahl in eine negative Zahl und eine negative Zahl in eine positive Zahl umzuwandeln.

{{EmbedInteractiveExample("pages/wat/neg.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; negate
f32.neg

;; the top item on the stack will now be -2.7
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `f32.neg` | `0x8c`         |
| `f64.neg` | `0x9a`         |
