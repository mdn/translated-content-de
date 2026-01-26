---
title: "lt: Wasm-Textinstruktion"
short-title: lt
slug: WebAssembly/Reference/Numeric/lt
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`lt`**-Instruktion, abgekürzt für _less than_ (weniger als), prüft, ob eine Zahl kleiner als eine andere Zahl ist. Wenn die erste Zahl kleiner als die zweite Zahl ist, wird `1` auf den Stapel geschoben, andernfalls wird `0` auf den Stapel geschoben.

Die ganzzahligen Typen haben separate "weniger als"-Instruktionen für vorzeichenbehaftete (**`lt_s`**) und vorzeichenlose (**`lt_u`**) Zahlen.

{{InteractiveExample("Wat Demo: lt", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.lt_u ;; check if `10` is less than '2'
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: false
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

;; check if $num is less than '2'
i32.lt_u

;; if $num is less than the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.lt_s`  | `0x48`         |
| `i32.lt_u`  | `0x49`         |
| `i64.lt_s`  | `0x53`         |
| `i64.lt_u`  | `0x54`         |
| `f32.lt`    | `0x5d`         |
| `f64.lt`    | `0x63`         |
