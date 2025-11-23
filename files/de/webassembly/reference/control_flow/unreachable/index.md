---
title: "unreachable: Wasm Textanweisung"
short-title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

**`unreachable`** wird verwendet, um einen Punkt im Code zu kennzeichnen, der nicht erreichbar sein sollte. `unreachable` ist eine bedingungslose Falle: Im Fall, dass ein `unreachable` erreicht und ausgeführt wird, löst die Anweisung eine Falle aus.

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

```wat
unreachable
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `unreachable` | `0x00`         |
