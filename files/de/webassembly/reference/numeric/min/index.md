---
title: Min
slug: WebAssembly/Reference/Numeric/Min
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`min`**-Anweisungen werden verwendet, um die kleinere der beiden Zahlen zu ermitteln.

{{EmbedInteractiveExample("pages/wat/min.html", "tabbed-taller")}}

## Syntax

```wasm
;; zwei Zahlen auf den Stapel laden
f32.const 10
f32.const 3

;; kleinere Zahl erhalten
f32.min

;; das oberste Element auf dem Stapel wird jetzt 3 sein
```

| Anweisung   | Binärer Opcodes |
| ----------- | --------------- |
| `f32.min`   | `0x96`          |
| `f64.min`   | `0xa4`          |
