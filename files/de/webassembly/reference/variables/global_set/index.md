---
title: Global set
slug: WebAssembly/Reference/Variables/Global_set
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`global.set`**-Anweisung legt die Werte einer globalen Variable fest.

{{EmbedInteractiveExample("pages/wat/global_set.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
global.set $val
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `global.set` | `0x24`         |
