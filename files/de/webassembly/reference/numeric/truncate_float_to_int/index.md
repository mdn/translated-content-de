---
title: Truncate (float zu int)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_int
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`trunc`**-Anweisungen werden zum Konvertieren von Gleitkommazahlen in ganze Zahlen verwendet. Der Name "truncate" leitet sich davon ab, dass der Bruchteil der Zahl bei der Konvertierung abgeschnitten wird. Es gibt sowohl signierte als auch unsignierte Versionen dieser Anweisung.

Es gibt eine andere [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float)-Anweisung, die den Bruchteil einer Gleitkommazahl abschneidet, ohne sie in eine ganze Zahl zu konvertieren.

{{InteractiveExample("Wat Demo: trunc_float_to_int", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f32.const 10.5 ;; push an f32 onto the stack

    i32.trunc_f32_s ;; convert from f32 to signed i32 rounding towards zero (.5 will be lost)

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
;; push an f32 onto the stack
f32.const 10.5

;; convert from f32 to signed i32 rounding towards zero (.5 will be lost)
i32.trunc_f32_s

;; the top item on the stack will now be the value 10 of type f32
```

| Anweisung         | Binärer Opcode |
| ----------------- | -------------- |
| `i32.trunc_f32_s` | `0xa8`         |
| `i32.trunc_f32_u` | `0xa9`         |
| `i32.trunc_f64_s` | `0xaa`         |
| `i32.trunc_f64_u` | `0xab`         |
| `i64.trunc_f32_s` | `0xae`         |
| `i64.trunc_f32_u` | `0xaf`         |
| `i64.trunc_f64_s` | `0xb0`         |
| `i64.trunc_f64_u` | `0xb1`         |
