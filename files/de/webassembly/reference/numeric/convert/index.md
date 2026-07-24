---
title: "convert: Wasm numerische Anweisung"
short-title: convert
slug: WebAssembly/Reference/Numeric/convert
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`convert`** [numerische Anweisungen](/de/docs/WebAssembly/Reference/Numeric) werden verwendet, um Ganzzahlen in Fließkommazahlen umzuwandeln. Es gibt signierte und unsignierte Versionen dieser Anweisung.

{{InteractiveExample("Wat Demo: convert", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    i32.const 10 ;; push an i32 onto the stack

    f32.convert_i32_s ;; convert from signed i32 to f32

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

;; convert from signed i32 to f32
f32.convert_i32_s

;; the top item on the stack will now be the value 10 of type f32
```

| Anweisung           | Binärer Opcode |
| ------------------- | -------------- |
| `f32.convert_i32_s` | `0xb2`         |
| `f32.convert_i32_u` | `0xb3`         |
| `f32.convert_i64_s` | `0xb4`         |
| `f32.convert_i64_u` | `0xb5`         |
| `f64.convert_i32_s` | `0xb7`         |
| `f64.convert_i32_u` | `0xb8`         |
| `f64.convert_i64_s` | `0xb9`         |
| `f64.convert_i64_u` | `0xba`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
