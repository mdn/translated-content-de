---
title: "wrap_i64: Wasm numerische Anweisung"
short-title: wrap_i64
slug: WebAssembly/Reference/Numeric/wrap_i64
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`wrap_i64`**-[numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um Zahlen des Typs `i64` in den Typ `i32` zu konvertieren. Wenn die Zahl größer ist, als was ein `i32` speichern kann, wird diese Operation eine Überlauf erzeugen, was zu einer anderen Zahl führt.

Man kann sich `wrap` entweder als eine Reduktion des Wertes [mod](https://en.wikipedia.org/wiki/Modular_arithmetic) 2<sup>32</sup> oder als das Verwerfen der oberen 32 Bits vorstellen, um einen Wert zu erzeugen, der nur die unteren 32 Bits enthält.

{{InteractiveExample("Wat Demo: wrap_i64", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i64.const 10 ;; push an i64 onto the stack

    i32.wrap_i64 ;; wrap from i64 to i32

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
;; push an i64 onto the stack
i64.const 10

;; wrap from i64 to i32
i32.wrap_i64

;; the top item on the stack will now be the value 10 of type `i32`
```

| Anweisung      | Binärer Opcode |
| -------------- | -------------- |
| `i32.wrap_i64` | `0xa7`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
