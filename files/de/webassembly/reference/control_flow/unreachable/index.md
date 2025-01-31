---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

**`unreachable`** wird verwendet, um einen Punkt im Code zu kennzeichnen, der nicht erreichbar sein sollte. `unreachable` ist eine bedingungslose Falle: Falls ein `unreachable` erreicht und ausgeführt wird, löst die Anweisung die Falle aus.

{{EmbedInteractiveExample("pages/wat/unreachable.html", "tabbed-shorter")}}

## Syntax

```wasm
unreachable
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `unreachable` | `0x00`         |
