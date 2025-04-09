---
title: Nearest
slug: WebAssembly/Reference/Numeric/Nearest
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`nearest`**-Anweisungen werden verwendet, um den Wert einer Zahl auf die nächste ganze Zahl zu runden.

{{InteractiveExample("Wat Demo: nearest", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2.7 ;; load a number onto the stack
    f32.nearest ;; round to the nearest integer
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

;; round to the nearest integer
f32.nearest

;; the top item on the stack will now be -3
```

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `f32.nearest` | `0x90`         |
| `f64.nearest` | `0x9e`         |
