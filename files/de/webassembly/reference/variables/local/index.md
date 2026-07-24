---
title: "local: Wasm-Variablenanweisung"
short-title: local
slug: WebAssembly/Reference/Variables/local
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`local`** [Variablenanweisung](/de/docs/WebAssembly/Reference/Variables) deklariert eine neue lokale Variable.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
