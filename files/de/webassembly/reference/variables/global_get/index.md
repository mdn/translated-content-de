---
title: Global get
slug: WebAssembly/Reference/Variables/Global_get
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`global.get`**-Anweisung lädt den Wert einer globalen Variablen auf den Stapel.

{{EmbedInteractiveExample("pages/wat/global_get.html", "tabbed-standard")}}

## Syntax

```wasm
;; load the value of a global variable onto the stack
global.get $val
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `global.get` | `0x23`         |
