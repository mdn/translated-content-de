---
title: Lokal get
slug: WebAssembly/Reference/Variables/Local_get
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`local.get`** Anweisung lädt den Wert einer lokalen Variablen auf den Stack.

{{InteractiveExample("Wat Demo: lokal", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    (local $var i32) ;; create a local variable named $var
    (local.set $var (i32.const 10)) ;; set $var to 10
    local.get $var ;; load $var onto the stack
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
;; load the value of a local variable onto the stack
local.get $val
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `local.get` | `0x20`         |
