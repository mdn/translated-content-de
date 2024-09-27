---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

**`unreachable`** wird verwendet, um einen Punkt im Code zu kennzeichnen, der nicht erreichbar sein sollte. `unreachable` ist eine bedingungslose Falle: Im Fall, dass ein `unreachable` erreicht und ausgeführt wird, tritt der Anweisungsfalle auf.

{{EmbedInteractiveExample("pages/wat/unreachable.html", "tabbed-shorter")}}

## Syntax

```wasm
unreachable
```

| Anweisung     | Binäropcode |
| ------------- | ----------- |
| `unreachable` | `0x00`      |
