---
title: loop
slug: WebAssembly/Reference/Control_flow/loop
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`loop`** Anweisung erstellt ein Label, zu dem später mit einem `br` verzweigt werden kann. Die `loop`-Anweisung führt nicht von selbst eine Schleife aus; Sie müssen zu dieser verzweigen, um tatsächlich eine Schleife zu erstellen.

Die **`loop`** Anweisung ist das Gegenteil der `block` Anweisung, da das Verzweigen zu einer `loop` zum Anfang der Schleife springt, während das Verzweigen zu einem `block` zum Ende des Blocks springt, also aus dem Block heraus.

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
