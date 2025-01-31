---
title: br
slug: WebAssembly/Reference/Control_flow/br
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`br`**-Anweisung springt zu einer Schleife, einem Block oder einem if.

Andere Varianten von `br` sind `br_if` zum Bedingen des Sprungs und `br_table` zum Springen zu verschiedenen Blöcken basierend auf einem Argument.

{{EmbedInteractiveExample("pages/wat/br.html", "tabbed-taller")}}

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

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `br`       | `0x0c`         |
| `br_if`    | `0x0d`         |
| `br_table` | `0x0e`         |
