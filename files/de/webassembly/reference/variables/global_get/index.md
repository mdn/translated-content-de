---
title: Globale get
slug: WebAssembly/Reference/Variables/Global_get
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`global.get`** Anweisung lädt den Wert einer globalen Variable auf den Stapel.

{{EmbedInteractiveExample("pages/wat/global_get.html", "tabbed-standard")}}

## Syntax

```wasm
;; load the value of a global variable onto the stack
global.get $val
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `global.get` | `0x23`         |
