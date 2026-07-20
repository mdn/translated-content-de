---
title: "return: Wasm-Textinstruktion"
short-title: return
slug: WebAssembly/Reference/Control_flow/return
l10n:
  sourceCommit: 25dddb3e99e238788a27b33a7965076b3df57d44
---

**`return`** kehrt aus einer Funktion zurück.

- Wenn keine Werte auf dem Stapel verbleiben, wird nichts/void zurückgegeben.
- Wenn die gleiche Anzahl von Werten auf dem Stapel verbleibt, wie in der Typensignatur der Funktion angegeben, werden diese Werte zurückgegeben.
- Wenn mehr Werte als vom Rückgabewert der Funktion angegeben vorhanden sind, werden die obersten N Werte zurückgegeben und die verbleibenden Werte auf dem Stapel verworfen.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
