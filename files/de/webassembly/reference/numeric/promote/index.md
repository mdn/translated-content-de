---
title: Promote
slug: WebAssembly/Reference/Numeric/Promote
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`promote`**-Anweisung wird verwendet, um Zahlen vom Typ `f32` in den Typ `f64` umzuwandeln (zu fördern).

{{InteractiveExample("Wat Demo: promote", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main

    f32.const 10.5 ;; push an f32 onto the stack

    f64.promote_f32 ;; promote from f32 to f64

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
;; push an f32 onto the stack
f32.const 10.5

;; promote from f32 to f64
f64.promote_f32

;; the top item on the stack will now be the value 10.5 of type f64
```

| Anweisung         | Binärer Opcode |
| ----------------- | -------------- |
| `f64.promote_f32` | `0xbb`         |
