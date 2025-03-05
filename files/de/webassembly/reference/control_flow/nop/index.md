---
title: nop
slug: WebAssembly/Reference/Control_flow/nop
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

**`nop`** steht für "no-operation". Es tut buchstäblich nichts.

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

```wasm
nop
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `nop`     | `0x01`         |
