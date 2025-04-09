---
title: nop
slug: WebAssembly/Reference/Control_flow/nop
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
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
