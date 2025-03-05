---
title: Const
slug: WebAssembly/Reference/Numeric/Const
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`const`** Anweisungen werden verwendet, um Zahlen zu deklarieren.

{{InteractiveExample("Wat Demo: const", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i32.const 10 ;; load a number onto the stack
    call $log ;; log the number

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
;; push `5` onto the stack
i32.const 5
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.const` | `0x41`         |
| `i64.const` | `0x42`         |
| `f32.const` | `0x43`         |
| `f64.const` | `0x44`         |
