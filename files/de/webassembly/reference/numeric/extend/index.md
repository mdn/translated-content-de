---
title: Extend
slug: WebAssembly/Reference/Numeric/Extend
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`extend`**-Anweisungen werden verwendet, um Zahlen vom Typ `i32` in den Typ `i64` zu konvertieren (erweitern). Es gibt signierte und unsignierte Versionen dieser Anweisung.

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

```wasm
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
