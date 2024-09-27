---
title: Max
slug: WebAssembly/Reference/Numeric/Max
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`max`**-Anweisungen werden verwendet, um die größere von zwei Zahlen zu ermitteln.

{{EmbedInteractiveExample("pages/wat/max.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get higher number
f32.max

;; the top item on the stack will now be 10
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `f32.max` | `0x97`         |
| `f64.max` | `0xa5`         |
