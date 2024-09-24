---
title: nicht erreichbar
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Der **`unreachable`**-Befehl wird verwendet, um einen Punkt im Code zu kennzeichnen, der nicht erreichbar sein sollte. `unreachable` ist eine bedingungslose Falle: Wenn ein `unreachable` erreicht und ausgeführt wird, gerät die Anweisung in eine Falle.

{{EmbedInteractiveExample("pages/wat/unreachable.html", "tabbed-shorter")}}

## Syntax

```wasm
unreachable
```

| Anweisung     | Binärer Opcode |
| ------------- | --------------- |
| `unreachable` | `0x00`          |
