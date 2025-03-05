---
title: Größer oder gleich
slug: WebAssembly/Reference/Numeric/Greater_or_equal
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`ge`**-Anweisungen, Abkürzung für _größer oder gleich_, überprüfen, ob eine Zahl größer oder gleich einer anderen Zahl ist. Wenn die erste Zahl größer oder gleich der zweiten Zahl ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Die Ganzzahltypen haben separate Anweisungen für größer oder gleich für vorzeichenbehaftete (**`ge_s`**) und vorzeichenlose (**`ge_u`**) Zahlen.

{{InteractiveExample("Wat Demo: ge", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.ge_u ;; check if `10` is greater than or equal to '2'
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: true
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is greater than or equal to '2'
i32.ge_u

;; if $num is greater than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung  | Binärer Opcode |
| ---------- | -------------- |
| `i32.ge_s` | `0x4e`         |
| `i32.ge_u` | `0x4f`         |
| `i64.ge_s` | `0x59`         |
| `i64.ge_u` | `0x5a`         |
| `f32.ge`   | `0x60`         |
| `f64.ge`   | `0x66`         |
