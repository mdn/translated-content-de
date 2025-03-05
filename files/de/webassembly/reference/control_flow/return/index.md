---
title: return
slug: WebAssembly/Reference/Control_flow/return
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

**`return`** kehrt aus einer Funktion zurück.

- Wenn sich keine Werte mehr auf dem Stapel befinden, wird nichts/void zurückgegeben.
- Wenn sich die gleiche Anzahl an Werten auf dem Stapel befindet, wie im Typsignatur der Funktion angegeben, werden diese Werte zurückgegeben.
- Wenn mehr Werte vorhanden sind, als der Rückgabetyp der Funktion angibt, werden die obersten N Werte zurückgegeben und die übrigen Werte auf dem Stapel werden verworfen.

{{InteractiveExample("Wat Demo: return", "tabbed-taller")}}

```wat interactive-example
(module
  (func (export "get_90") (result i32)
    ;; load 10 onto the stack
    i32.const 10
    ;; load 90 onto the stack
    i32.const 90
    ;; return the second value (90); the first is discarded
    return
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  const { get_90 } = result.instance.exports;
  console.log(get_90());
  // Expected output: 90
});
```

## Syntax

```wasm
f32.const 4.3
return
```

```wasm
i32.const 7
f32.const 4.3
return
```

| Anweisung | Binäres Opcode |
| --------- | -------------- |
| `return`  | `0x0f`         |
