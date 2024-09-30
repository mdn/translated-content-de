---
title: Absolute
slug: WebAssembly/Reference/Numeric/Absolute
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`abs`**-Instruktionen, kurz für _absolute_, werden verwendet, um den absoluten Wert einer Zahl zu erhalten. Das bedeutet, sie gibt x zurück, wenn x positiv ist, und die Negation von x, wenn x negativ ist.

{{EmbedInteractiveExample("pages/wat/abs.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2

;; absolute
f32.abs

;; the top item on the stack will now be 2
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `f32.abs`   | `0x8b`         |
| `f64.abs`   | `0x99`         |
