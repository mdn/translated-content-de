---
title: Lokal get
slug: WebAssembly/Reference/Variables/Local_get
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`local.get`** Anweisung lädt den Wert einer lokalen Variablen auf den Stack.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the value of a local variable onto the stack
local.get $val
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `local.get` | `0x20`         |
