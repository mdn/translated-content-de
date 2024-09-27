---
title: Copy sign
slug: WebAssembly/Reference/Numeric/Copy_sign
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die Anweisungen **`copysign`** werden verwendet, um nur das Vorzeichenbit von einer Zahl auf eine andere zu kopieren.

{{EmbedInteractiveExample("pages/wat/copysign.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const -1

;; copy just the sign bit from the second number (-1) to the first (10)
f32.copysign

;; the top item on the stack will now be -10
```

| Anweisung      | Binärer Opcode |
| -------------- | -------------- |
| `f32.copysign` | `0x98`         |
| `f64.copysign` | `0xa6`         |
