---
title: "local: Wasm Textanweisung"
short-title: local
slug: WebAssembly/Reference/Variables/local
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`local`**-Anweisung deklariert eine neue lokale Variable.

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

```wat
;; declare new variable named $val of type i32
(local $val i32)
```
