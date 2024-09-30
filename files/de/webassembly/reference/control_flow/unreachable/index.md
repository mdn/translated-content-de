---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

**`unreachable`** wird verwendet, um einen Punkt im Code zu kennzeichnen, der nicht erreichbar sein sollte. `unreachable` ist eine bedingungslose Falle: Wenn ein `unreachable` erreicht und ausgeführt wird, löst die Anweisung eine Falle aus.

{{EmbedInteractiveExample("pages/wat/unreachable.html", "tabbed-shorter")}}

## Syntax

```wasm
unreachable
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `unreachable` | `0x00`         |
