---
title: br
slug: WebAssembly/Reference/Control_flow/br
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`br`**-Anweisung verzweigt zu einer Schleife, einem Block oder einem if.

Andere Varianten von `br` sind `br_if` zum Verzweigen bei einer Bedingung und `br_table` für das Verzweigen zu verschiedenen Blöcken basierend auf einem Argument.

{{EmbedInteractiveExample("pages/wat/br.html", "tabbed-taller")}}

## Syntax

```wasm
;; kennzeichne die Schleife, damit sie verzweigt werden kann
(loop $my_loop

  ;; verzweige zu der Schleife.
  ;; meistens möchten Sie dies in eine if-Anweisung setzen und nur bei Bedingung verzweigen,
  ;; andernfalls haben Sie eine Endlosschleife.
  br $my_loop

)
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `br`       | `0x0c`         |
| `br_if`    | `0x0d`         |
| `br_table` | `0x0e`         |
