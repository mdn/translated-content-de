---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`if`** Anweisung führt eine Anweisung aus, wenn das letzte Element auf dem Stapel wahr (nicht null) ist. Ist die Bedingung falsch (0), kann eine andere Anweisung ausgeführt werden.

{{InteractiveExample("Wat Demo: if...else", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 0 ;; change to positive number (true) if you want to run the if block
    (if
      (then
        i32.const 1
        call $log ;; should log '1'
      )
      (else
        i32.const 0
        call $log ;; should log '0'
      )
    )
  )

  (start 1) ;; run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wat
i32.const 0
(if
  (then
    ;; do something
  )
  (else
    ;; do something else
  )
)
```

Um Rückgabewerte auf dem Stapel zu belassen, fügen Sie die `result` Anweisung hinzu.

```wat
i32.const 0
(if (result i32)
  (then
    ;; do something
    (i32.const 1)
  )
  (else
    ;; do something else
    (i32.const 2)
  )
)
(drop)
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `if`      | `0x04`         |
| `else`    | `0x05`         |
