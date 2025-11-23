---
title: "return: Wasm-Textanweisung"
short-title: return
slug: WebAssembly/Reference/Control_flow/return
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

**`return`** kehrt von einer Funktion zurück.

- Wenn sich keine Werte mehr auf dem Stack befinden, wird nichts/void zurückgegeben.
- Wenn sich die gleiche Anzahl von Werten auf dem Stack befindet, wie in der Typsignatur der Funktion angegeben, werden diese Werte zurückgegeben.
- Wenn mehr Werte vorhanden sind, als der Rückgabetyp der Funktion angibt, werden die obersten N Werte zurückgegeben und die verbleibenden Werte auf dem Stack verworfen.

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

```wat
f32.const 4.3
return
```

```wat
i32.const 7
f32.const 4.3
return
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `return`  | `0x0f`         |
