---
title: Max
slug: WebAssembly/Reference/Numeric/Max
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`max`** Anweisungen werden verwendet, um die höhere von zwei Zahlen zu erhalten.

{{EmbedInteractiveExample("pages/wat/max.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
f32.const 10
f32.const 3

;; höhere Zahl erhalten
f32.max

;; das oberste Element auf dem Stapel wird nun 10 sein
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.max`   | `0x97`         |
| `f64.max`   | `0xa5`         |
