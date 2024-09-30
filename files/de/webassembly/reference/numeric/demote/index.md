---
title: Demote
slug: WebAssembly/Reference/Numeric/Demote
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`demote`**-Anweisung wird verwendet, um Zahlen des Typs `f64` in den Typ `f32` zu konvertieren (herabzustufen).

{{EmbedInteractiveExample("pages/wat/demote.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f64 onto the stack
f64.const 10.5

;; demote from f64 to f32
f32.demote_f64

;; the top item on the stack will now be the value 10.5 of type f32
```

| Anweisung        | Binärer Opcode |
| ---------------- | -------------- |
| `f32.demote_f64` | `0xb6`         |
