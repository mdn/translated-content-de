---
title: Boden
slug: WebAssembly/Reference/Numeric/Floor
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`floor`**-Anweisungen werden verwendet, um den Wert einer Zahl auf die nächste ganze Zahl abzurunden.

**`floor`** unterscheidet sich von **`trunc`**, wenn es auf negative Zahlen angewendet wird. **`floor`** wird in diesen Fällen nach unten runden, während **`trunc`** nach oben runden wird.

{{EmbedInteractiveExample("pages/wat/floor.html", "tabbed-standard")}}

## Syntax

```wasm
;; lade eine Zahl auf den Stapel
f32.const -2.7

;; runde ab
f32.floor

;; das oberste Element auf dem Stapel wird nun -3 sein
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.floor` | `0x8e`         |
| `f64.floor` | `0x9c`         |
