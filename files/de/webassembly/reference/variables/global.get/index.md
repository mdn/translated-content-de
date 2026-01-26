---
title: "global.get: Wasm-Textinstruktion"
short-title: global.get
slug: WebAssembly/Reference/Variables/global.get
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`global.get`**-Instruktion lädt den Wert einer globalen Variablen auf den Stack.

{{InteractiveExample("Wat Demo: global_get", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (global $var i32 (i32.const 10))
  (func $main

    global.get $var ;; load the value of $var variable onto the stack
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
;; load the value of a global variable onto the stack
global.get $val
```

| Instruktion  | Binärer Opcode |
| ------------ | -------------- |
| `global.get` | `0x23`         |
