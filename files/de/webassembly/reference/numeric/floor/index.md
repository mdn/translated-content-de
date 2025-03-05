---
title: Floor
slug: WebAssembly/Reference/Numeric/Floor
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`floor`**-Anweisungen werden verwendet, um den Wert einer Zahl auf die nächste ganze Zahl abzurunden.

**`floor`** unterscheidet sich von **`trunc`** bei negativen Zahlen. In diesen Fällen wird **`floor`** abrunden, während **`trunc`** aufrunden wird.

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

```wasm
;; load a number onto the stack
f32.const -2.7

;; round down
f32.floor

;; the top item on the stack will now be -3
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.floor` | `0x8e`         |
| `f64.floor` | `0x9c`         |
