---
title: Local set
slug: WebAssembly/Reference/Variables/Local_set
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`local.set`** Anweisung setzt die Werte einer lokalen Variable.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
local.set $val
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `local.set`  | `0x21`         |
