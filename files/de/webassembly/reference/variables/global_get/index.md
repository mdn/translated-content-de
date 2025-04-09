---
title: Global get
slug: WebAssembly/Reference/Variables/Global_get
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`global.get`**-Anweisung lädt den Wert einer globalen Variable auf den Stapel.

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

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `global.get` | `0x23`         |
