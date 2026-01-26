---
title: "trunc (to int): Wasm-Textbefehl"
short-title: trunc (to int)
slug: WebAssembly/Reference/Numeric/trunc_int
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`trunc`**-Befehle, abgeleitet von _truncate_, werden verwendet, um Gleitkommazahlen in ganze Zahlen zu konvertieren. Der Name "truncate" stammt daher, dass der Bruchteil der Zahl bei der Umwandlung abgeschnitten wird. Es gibt signierte und unsignierte Versionen dieses Befehls.

Es gibt einen weiteren [**`trunc`**](/de/docs/WebAssembly/Reference/Numeric/trunc_float)-Befehl, der den Bruchteil eines Gleitkommas abschneidet, ohne in eine ganze Zahl umzuwandeln.

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

```wat
;; push an f32 onto the stack
f32.const 10.5

;; convert from f32 to signed i32 rounding towards zero (.5 will be lost)
i32.trunc_f32_s

;; the top item on the stack will now be the value 10 of type f32
```

| Befehl            | Binärer Opcode |
| ----------------- | -------------- |
| `i32.trunc_f32_s` | `0xa8`         |
| `i32.trunc_f32_u` | `0xa9`         |
| `i32.trunc_f64_s` | `0xaa`         |
| `i32.trunc_f64_u` | `0xab`         |
| `i64.trunc_f32_s` | `0xae`         |
| `i64.trunc_f32_u` | `0xaf`         |
| `i64.trunc_f64_s` | `0xb0`         |
| `i64.trunc_f64_u` | `0xb1`         |
