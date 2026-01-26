---
title: "local.tee: Wasm-Textanweisung"
short-title: local.tee
slug: WebAssembly/Reference/Variables/local.tee
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`local.tee`**-Anweisung setzt den Wert einer lokalen Variablen und lädt den Wert auf den Stack.

Die Anweisung ist nach dem T-Stück benannt, das in der Klempnerei verwendet wird.

{{InteractiveExample("Wat Demo: local_tee", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    (local $var i32) ;; create a local variable named $var
    (i32.const 10) ;; load `10` onto the stack
    local.tee $var ;; set the $var to `10` and keep `10` on the stack
    call $log ;; log the top item on the stack (10)

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
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val and load it on the stack
local.tee $val
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `local.tee` | `0x22`         |
