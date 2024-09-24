---
title: Kopiere Vorzeichen
slug: WebAssembly/Reference/Numeric/Copy_sign
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`copysign`**-Anweisungen werden verwendet, um nur das Vorzeichenbit von einer Zahl auf eine andere zu kopieren.

{{EmbedInteractiveExample("pages/wat/copysign.html", "tabbed-taller")}}

## Syntax

```wasm
;; lade zwei Zahlen auf den Stapel
f32.const 10
f32.const -1

;; kopiere nur das Vorzeichenbit von der zweiten Zahl (-1) auf die erste (10)
f32.copysign

;; das oberste Element auf dem Stapel wird nun -10 sein
```

| Anweisung      | Binärer Opcodes |
| -------------- | --------------- |
| `f32.copysign` | `0x98`          |
| `f64.copysign` | `0xa6`          |
