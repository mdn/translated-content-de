---
title: "ge: Wasm-Textinstruktion"
short-title: ge
slug: WebAssembly/Reference/Numeric/ge
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`ge`**-Instruktionen, kurz für _greater or equal_ (größer oder gleich), prüfen, ob eine Zahl größer oder gleich einer anderen Zahl ist. Wenn die erste Zahl größer oder gleich der zweiten Zahl ist, wird `1` auf den Stack gelegt, andernfalls wird `0` darauf gelegt.

Die Ganzzahltypen haben separate größer-oder-gleich-Instruktionen für vorzeichenbehaftete (**`ge_s`**) und vorzeichenlose (**`ge_u`**) Zahlen.

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

```wat
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is greater than or equal to '2'
i32.ge_u

;; if $num is greater than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruktion | Binärer Opcode |
| ----------- | -------------- |
| `i32.ge_s`  | `0x4e`         |
| `i32.ge_u`  | `0x4f`         |
| `i64.ge_s`  | `0x59`         |
| `i64.ge_u`  | `0x5a`         |
| `f32.ge`    | `0x60`         |
| `f64.ge`    | `0x66`         |
