---
title: block
slug: WebAssembly/Reference/Control_flow/block
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`block`**-Anweisung erstellt ein Label, das später mit einem `br` angesprungen werden kann.

Die **`loop`**-Anweisung ist das Gegenteil der `block`-Anweisung, in dem Sinne, dass beim Springen zu einer `loop` der Beginn der Schleife angesprungen wird, während ein Sprung zu einem `block` das Ende des Blocks erreicht, das heißt, aus dem Block heraus.

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
