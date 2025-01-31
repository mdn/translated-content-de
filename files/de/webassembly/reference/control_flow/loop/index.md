---
title: loop
slug: WebAssembly/Reference/Control_flow/loop
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`loop`**-Anweisung erstellt ein Label, zu dem später mit einem `br` verzweigt werden kann. Die `loop`-Anweisung selbst führt keine Schleife aus; Sie müssen zu ihr verzweigen, um tatsächlich eine Schleife zu erstellen.

Die **`loop`**-Anweisung ist das Gegenteil der `block`-Anweisung, da beim Verzweigen zu einer `loop` zum Anfang der Schleife gesprungen wird, während beim Verzweigen zu einem `block` zum Ende des Blocks gesprungen wird, also aus dem Block heraus.

{{EmbedInteractiveExample("pages/wat/loop.html", "tabbed-taller")}}

## Syntax

```wasm
;; label the loop so that it can be branched to
(loop $my_loop

  ;; branch to the loop.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise you have an infinite loop.
  br $my_loop

)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `loop`    | `0x03`         |
