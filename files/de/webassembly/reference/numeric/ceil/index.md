---
title: Aufrunden
slug: WebAssembly/Reference/Numeric/Ceil
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`ceil`** Anweisungen werden verwendet, um den Wert einer Zahl auf die nächste ganze Zahl nach oben gerundet zu erhalten.

{{EmbedInteractiveExample("pages/wat/ceil.html", "tabbed-standard")}}

## Syntax

```wasm
;; lade eine Zahl auf den Stapel
f32.const 2.7

;; aufrunden
f32.ceil

;; das oberste Element auf dem Stapel wird nun 3 sein
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.ceil`  | `0x8d`         |
| `f64.ceil`  | `0x9b`         |
