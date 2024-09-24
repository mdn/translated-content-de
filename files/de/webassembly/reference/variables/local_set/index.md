---
title: Lokales Setzen
slug: WebAssembly/Reference/Variables/Local_set
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`local.set`**-Anweisung setzt die Werte einer lokalen Variablen.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; Die Zahl 2 auf den Stapel laden
i32.const 2

;; Die Zahl 2 in der Variable $val speichern
local.set $val
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `local.set` | `0x21`         |
