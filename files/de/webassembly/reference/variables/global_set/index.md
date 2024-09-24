---
title: Global setzen
slug: WebAssembly/Reference/Variables/Global_set
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`global.set`**-Anweisung setzt die Werte einer globalen Variablen.

{{EmbedInteractiveExample("pages/wat/global_set.html", "tabbed-taller")}}

## Syntax

```wasm
;; die Zahl 2 auf den Stapel laden
i32.const 2

;; die Zahl 2 in der Variablen $val speichern
global.set $val
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `global.set` | `0x24`         |
