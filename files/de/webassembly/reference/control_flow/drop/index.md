---
title: "drop: Wasm Textanweisung"
short-title: drop
slug: WebAssembly/Reference/Control_flow/drop
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`drop`**-Anweisung entfernt einen Wert vom Stapel und verwirft ihn.

{{InteractiveExample("Wat Demo: drop", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two values onto the stack
    i32.const 10
    i32.const 20

    ;; drop the top item from the stack (`20`)
    drop

    call $log ;; log the top value on the stack (`10`)
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
;; push multiple values onto the stack
i32.const 1
i32.const 2
i32.const 3

;; drop the top item from the stack (`3`)
drop

;; the top item on the stack will now be `2`
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `drop`    | `0x1a`         |
