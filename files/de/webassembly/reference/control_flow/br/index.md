---
title: br
slug: WebAssembly/Reference/Control_flow/br
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Der **`br`**-Befehl verzweigt zu einer Schleife, einem Block oder einer `if`-Anweisung.

Andere Varianten von `br` sind `br_if` für bedingtes Verzweigen und `br_table` für das Verzweigen zu verschiedenen Blöcken basierend auf einem Argument.

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

| Befehl     | Binärer Opcode |
| ---------- | -------------- |
| `br`       | `0x0c`         |
| `br_if`    | `0x0d`         |
| `br_table` | `0x0e`         |
