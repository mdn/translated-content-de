---
title: Const
slug: WebAssembly/Reference/Numeric/Const
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
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

```wat
;; push `5` onto the stack
i32.const 5
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `i32.const` | `0x41`         |
| `i64.const` | `0x42`         |
| `f32.const` | `0x43`         |
| `f64.const` | `0x44`         |
