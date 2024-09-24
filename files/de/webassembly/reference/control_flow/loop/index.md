---
title: Schleife
slug: WebAssembly/Reference/Control_flow/loop
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`loop`**-Anweisung erstellt ein Label, das später mit einem `br` angesprungen werden kann. Die Schleifenanweisung selbst führt keine Wiederholung durch; Sie müssen zu ihr verzweigen, um tatsächlich eine Schleife zu erstellen.

Die **`loop`**-Anweisung ist das Gegenteil der `block`-Anweisung, in dem Sinne, dass bei einer Verzweigung zu einer `loop` zum Anfang der Schleife gesprungen wird, während bei einer Verzweigung zu einem `block` zum Ende des Blocks gesprungen wird, also aus dem Block heraus.

{{EmbedInteractiveExample("pages/wat/loop.html", "tabbed-taller")}}

## Syntax

```wasm
;; die Schleife labeln, damit sie angesprungen werden kann
(loop $my_loop

  ;; zur Schleife verzweigen.
  ;; meistens möchte man dies in eine if-Anweisung einfügen und nur bei einer Bedingung verzweigen,
  ;; andernfalls hat man eine Endlosschleife.
  br $my_loop

)
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `loop`      | `0x03`         |
