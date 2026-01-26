---
title: "ceil: Wasm-Textanweisung"
short-title: ceil
slug: WebAssembly/Reference/Numeric/ceil
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`ceil`**-Anweisungen werden verwendet, um den Wert einer Zahl abzurufen, die auf die nächste ganze Zahl aufgerundet wird.

{{InteractiveExample("Wat Demo: ceil", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2.7 ;; load a number onto the stack
    f32.ceil ;; round up
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
f32.const 2.7

;; round up
f32.ceil

;; the top item on the stack will now be 3
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `f32.ceil` | `0x8d`         |
| `f64.ceil` | `0x9b`         |
