---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`unreachable`** wird verwendet, um einen Punkt im Code zu kennzeichnen, der nicht erreicht werden sollte. `unreachable` ist eine bedingungslose Falle: Wenn ein `unreachable` erreicht und ausgeführt wird, erzeugt die Anweisung eine Falle.

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
