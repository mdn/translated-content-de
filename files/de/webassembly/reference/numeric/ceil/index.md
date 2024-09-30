---
title: Ceil
slug: WebAssembly/Reference/Numeric/Ceil
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`ceil`**-Anweisungen werden verwendet, um den Wert einer Zahl zu erhalten, der auf die nächste ganze Zahl aufgerundet wird.

{{EmbedInteractiveExample("pages/wat/ceil.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; round up
f32.ceil

;; the top item on the stack will now be 3
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.ceil`  | `0x8d`         |
| `f64.ceil`  | `0x9b`         |
