---
title: Global set
slug: WebAssembly/Reference/Variables/Global_set
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`global.set`**-Anweisung setzt die Werte einer globalen Variablen.

{{EmbedInteractiveExample("pages/wat/global_set.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
global.set $val
```

| Anweisung    | Binäre Opcode |
| ------------ | ------------- |
| `global.set` | `0x24`        |
