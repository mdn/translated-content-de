---
title: block
slug: WebAssembly/Reference/Control_flow/block
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`block`**-Anweisung erstellt ein Label, aus dem später mit einem `br` verzweigt werden kann.

Die **`loop`**-Anweisung ist das Gegenteil der `block`-Anweisung, in dem Sinne, dass während die Verzweigung zu einer `loop` zum Anfang der Schleife springt, die Verzweigung zu einem `block` zum Ende des Blocks springt; das heißt, aus dem Block heraus.

{{EmbedInteractiveExample("pages/wat/block.html", "tabbed-taller")}}

## Syntax

```wasm
;; label the block so that it can be branched to.
(block $my_block

  ;; branch to the block.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise the following control flow are unreachable.
  br $my_block

  ;; this will never be reached, since the br jumped out of the block already.
  unreachable

)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `block`     | `0x02`         |
