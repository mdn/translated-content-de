---
title: block
slug: WebAssembly/Reference/Control_flow/block
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`block`**-Anweisung erstellt ein Label, aus dem später mit einem `br` heraus verzweigt werden kann.

Die **`loop`**-Anweisung ist das Gegenteil der `block`-Anweisung, insofern, dass beim Verzweigen zu einem `loop` zum Anfang der Schleife gesprungen wird, während beim Verzweigen zu einem `block` zum Ende des Blocks gesprungen wird; das heißt, heraus aus dem Block.

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

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `block`   | `0x02`         |
