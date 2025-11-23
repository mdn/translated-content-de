---
title: "nop: Wasm-Textanweisung"
short-title: nop
slug: WebAssembly/Reference/Control_flow/nop
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

**`nop`** steht für keine Operation. Es tut buchstäblich nichts.

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

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `nop`     | `0x01`         |
