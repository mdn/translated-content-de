---
title: "nop: Wasm-Textinstruktion"
short-title: nop
slug: WebAssembly/Reference/Control_flow/nop
l10n:
  sourceCommit: 25dddb3e99e238788a27b33a7965076b3df57d44
---

**`nop`** steht für No-Operation. Es tut buchstäblich nichts.

{{InteractiveExample("Wat Demo: nop", "tabbed-shorter")}}

```wat interactive-example
(module
  (func (export "do_nothing")
    nop
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  result.instance.exports.do_nothing();
});
```

## Syntax

```wat
nop
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `nop`       | `0x01`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
