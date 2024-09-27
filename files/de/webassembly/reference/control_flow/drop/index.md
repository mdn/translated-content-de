---
title: Drop
slug: WebAssembly/Reference/Control_flow/Drop
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`drop`**-Anweisung entfernt einen Wert vom Stapel und verwirft ihn.

{{EmbedInteractiveExample("pages/wat/drop.html", "tabbed-taller")}}

## Syntax

```wasm
;; push multiple values onto the stack
i32.const 1
i32.const 2
i32.const 3

;; drop the top item from the stack (`3`)
drop

;; the top item on the stack will now be `2`
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `drop`    | `0x1a`         |
