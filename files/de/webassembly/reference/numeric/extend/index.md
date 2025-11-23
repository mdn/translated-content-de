---
title: "extend: Wasm-Textanweisung"
short-title: extend
slug: WebAssembly/Reference/Numeric/extend
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`extend`**-Anweisungen werden verwendet, um Zahlen des Typs `i32` in den Typ `i64` zu konvertieren (erweitern). Es gibt signierte und unsignierte Versionen dieser Anweisung.

{{InteractiveExample("Wat Demo: extend", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i32.const 10 ;; push an i32 onto the stack

    i64.extend_i32_s ;; sign-extend from i32 to i64

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
;; push an i32 onto the stack
i32.const 10

;; sign-extend from i32 to i64
i64.extend_i32_s

;; the top item on the stack will now be the value 10 of type i64
```

| Anweisung          | Binärer Opcode |
| ------------------ | -------------- |
| `i64.extend_i32_s` | `0xac`         |
| `i64.extend_i32_u` | `0xad`         |
