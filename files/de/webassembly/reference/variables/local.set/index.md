---
title: "local.set: Wasm-Variablenanweisung"
short-title: local.set
slug: WebAssembly/Reference/Variables/local.set
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`local.set`** [Variablenanweisung](/de/docs/WebAssembly/Reference/Variables) setzt den Wert einer lokalen Variablen.

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
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
local.set $val
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `local.set` | `0x21`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
