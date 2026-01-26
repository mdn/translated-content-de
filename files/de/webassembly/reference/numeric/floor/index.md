---
title: "floor: Wasm-Textinstruktion"
short-title: floor
slug: WebAssembly/Reference/Numeric/floor
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`floor`**-Instruktionen werden verwendet, um den Wert einer Zahl, abgerundet auf die nächste ganze Zahl, zu erhalten.

**`floor`** unterscheidet sich von **`trunc`** bei negativen Zahlen. **`floor`** rundet in diesen Fällen nach unten, während **`trunc`** nach oben rundet.

{{InteractiveExample("Wat Demo: floor", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -2.7 ;; load a number onto the stack
    f32.floor ;; round down
    call $log ;; log the result

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wat
;; load a number onto the stack
f32.const -2.7

;; round down
f32.floor

;; the top item on the stack will now be -3
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `f32.floor` | `0x8e`         |
| `f64.floor` | `0x9c`         |
