---
title: Drop
slug: WebAssembly/Reference/Control_flow/Drop
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`drop`** Anweisung entfernt einen Wert vom Stapel und verwirft ihn.

{{EmbedInteractiveExample("pages/wat/drop.html", "tabbed-taller")}}

## Syntax

```wasm
;; mehrere Werte auf den Stapel legen
i32.const 1
i32.const 2
i32.const 3

;; das oberste Element vom Stapel entfernen (`3`)
drop

;; das oberste Element auf dem Stapel ist jetzt `2`
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `drop`    | `0x1a`         |
