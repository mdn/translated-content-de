---
title: Min
slug: WebAssembly/Reference/Numeric/Min
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`min`** Anweisungen werden verwendet, um die niedrigere von zwei Zahlen zu ermitteln.

{{EmbedInteractiveExample("pages/wat/min.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get lower number
f32.min

;; the top item on the stack will now be 3
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `f32.min` | `0x96`         |
| `f64.min` | `0xa4`         |
