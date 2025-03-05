---
title: Lokale Zuweisung
slug: WebAssembly/Reference/Variables/Local_set
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`local.set`** Anweisung setzt die Werte einer lokalen Variable.

{{InteractiveExample("Wat Demo: local", "tabbed-taller")}}

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

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
local.set $val
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `local.set` | `0x21`         |
