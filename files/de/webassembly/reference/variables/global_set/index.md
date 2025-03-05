---
title: Global set
slug: WebAssembly/Reference/Variables/Global_set
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die Anweisung **`global.set`** setzt die Werte einer globalen Variable.

{{InteractiveExample("Wat Demo: global_set", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (global $var (mut i32) (i32.const 0))
  (func $main
    i32.const 10 ;; load a number onto the stack
    global.set $var ;; set the $var

    global.get $var ;; load $var onto the stack
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
global.set $val
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `global.set` | `0x24`         |
