---
title: "eq: Wasm-Textanweisung"
short-title: eq
slug: WebAssembly/Reference/Numeric/eq
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`eq`** Anweisungen, kurz für _equal_, überprüfen, ob zwei Zahlen gleich sind. Wenn beide Zahlen gleich sind, wird `1` auf den Stack geschoben, andernfalls wird `0` auf den Stack geschoben.

Ähnlich überprüfen die **`eqz`** Anweisungen, ob eine Zahl gleich Null ist. Die **`eqz`** Anweisungen sind nur für die Ganzzahltypen verfügbar und nicht für die Fließkommatypen.

{{InteractiveExample("Wat Demo: eq", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.eq ;; check if `10` is equal to `2`
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

;; check if $num is equal to '2'
i32.eq

;; if $num is equal to `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Anweisung | Binärer Opcode |
| --------- | -------------- |
| `i32.eqz` | `0x45`         |
| `i32.eq`  | `0x46`         |
| `i64.eqz` | `0x50`         |
| `i64.eq`  | `0x51`         |
| `f32.eq`  | `0x5b`         |
| `f64.eq`  | `0x61`         |
