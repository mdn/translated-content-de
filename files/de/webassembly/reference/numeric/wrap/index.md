---
title: "wrap: Wasm-Textanweisung"
short-title: wrap
slug: WebAssembly/Reference/Numeric/wrap
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`wrap`**-Anweisung wird verwendet, um Zahlen vom Typ `i64` in den Typ `i32` zu konvertieren. Wenn die Zahl größer ist als das, was ein `i32` halten kann, wird diese Operation `wrap`, was zu einer anderen Zahl führt.

Man kann sich wrap entweder als Reduzierung des Wertes [mod](https://en.wikipedia.org/wiki/Modular_arithmetic) 2<sup>32</sup> vorstellen oder als das Verwerfen der oberen 32 Bits, um einen Wert zu erzeugen, der nur die unteren 32 Bits enthält.

{{InteractiveExample("Wat Demo: wrap", "tabbed-taller")}}

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

| Anweisung      | Binärer Operationscode |
| -------------- | ---------------------- |
| `i32.wrap_i64` | `0xa7`                 |
