---
title: "local.get: Wasm-Variablenanweisung"
short-title: local.get
slug: WebAssembly/Reference/Variables/local.get
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`local.get`** [Variablenanweisung](/de/docs/WebAssembly/Reference/Variables) lädt den Wert einer lokalen Variable auf den Stack.

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
;; load the value of a local variable onto the stack
local.get $val
```

| Anweisung   | Binärer Opcode |
| ----------- | -------------- |
| `local.get` | `0x20`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
