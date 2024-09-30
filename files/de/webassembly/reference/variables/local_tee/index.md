---
title: Local tee
slug: WebAssembly/Reference/Variables/Local_tee
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`local.tee`**-Anweisung setzt den Wert einer lokalen Variablen und lädt den Wert auf den Stapel.

Die Anweisung ist nach dem T-Stück benannt, das in der Klempnerei verwendet wird.

{{EmbedInteractiveExample("pages/wat/local_tee.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val and load it on the stack
local.tee $val
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `local.tee` | `0x22`         |
