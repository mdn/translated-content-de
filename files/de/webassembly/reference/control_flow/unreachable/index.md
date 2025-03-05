---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

**`unreachable`** wird verwendet, um einen Punkt im Code zu kennzeichnen, der nicht erreichbar sein sollte. `unreachable` ist eine bedingungslose Falle: Wenn ein `unreachable` erreicht und ausgeführt wird, löst die Anweisung eine Falle aus.

{{InteractiveExample("Wat Demo: unreachable", "tabbed-shorter")}}

```wat interactive-example
(module
  (func (export "throw")
    unreachable
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  result.instance.exports.throw();
  // Expected output: RuntimeError: unreachable
});
```

## Syntax

```wasm
unreachable
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `unreachable` | `0x00`         |
