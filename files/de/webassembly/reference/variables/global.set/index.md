---
title: "global.set: Wasm Textanweisung"
short-title: global.set
slug: WebAssembly/Reference/Variables/global.set
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`global.set`** Anweisung setzt die Werte einer globalen Variable.

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

```wat
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
global.set $val
```

| Anweisung    | Binärer Opcode |
| ------------ | -------------- |
| `global.set` | `0x24`         |
