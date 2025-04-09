---
title: Floor
slug: WebAssembly/Reference/Numeric/Floor
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`floor`**-Anweisungen werden verwendet, um den Wert einer Zahl auf den nächsten ganzzahligen Wert abzurunden.

**`floor`** unterscheidet sich von **`trunc`**, wenn sie bei negativen Zahlen verwendet werden. In diesen Fällen wird **`floor`** nach unten runden, während **`trunc`** nach oben runden wird.

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

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `f32.floor` | `0x8e`         |
| `f64.floor` | `0x9c`         |
