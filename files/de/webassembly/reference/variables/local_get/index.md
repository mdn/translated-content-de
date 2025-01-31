---
title: Local get
slug: WebAssembly/Reference/Variables/Local_get
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`local.get`**-Anweisung lädt den Wert einer lokalen Variablen auf den Stapel.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the value of a local variable onto the stack
local.get $val
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `local.get` | `0x20`         |
