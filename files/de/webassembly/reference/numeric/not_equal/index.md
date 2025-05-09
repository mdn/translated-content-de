---
title: Ungleich
slug: WebAssembly/Reference/Numeric/Not_equal
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`ne`** Anweisungen, kurz für _ungleich_, überprüfen, ob zwei Zahlen ungleich sind. Wenn die Zahlen ungleich sind, wird `1` auf den Stapel gedrückt, andernfalls wird `0` auf den Stapel gedrückt.

{{InteractiveExample("Wat Demo: ne", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.ne ;; check if `10` is not equal to `2`
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

```wat
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is not equal to '2'
i32.ne

;; if $num is not equal to `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung | Binärer Opcodes |
| --------- | --------------- |
| `i32.ne`  | `0x47`          |
| `i64.ne`  | `0x52`          |
| `f32.ne`  | `0x5c`          |
| `f64.ne`  | `0x62`          |
