---
title: "unreachable: Wasm-Textanweisung"
short-title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
l10n:
  sourceCommit: 25dddb3e99e238788a27b33a7965076b3df57d44
---

**`unreachable`** wird verwendet, um einen Punkt im Code anzugeben, der nicht erreichbar sein sollte. `unreachable` ist eine bedingungslose Falle: Im Fall, dass ein `unreachable` erreicht und ausgeführt wird, löst die Anweisung eine Falle aus.

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

| Anweisung     | Binär-Opcode |
| ------------- | ------------ |
| `unreachable` | `0x00`       |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
