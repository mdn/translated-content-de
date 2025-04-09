---
title: Wrap
slug: WebAssembly/Reference/Numeric/Wrap
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`wrap`**-Anweisung wird verwendet, um Zahlen vom Typ `i64` in den Typ `i32` zu konvertieren. Wenn die Zahl größer ist, als ein `i32` aufnehmen kann, wird diese Operation eine Umwicklung durchführen, was zu einer anderen Zahl führt.

Man kann sich `wrap` entweder als Reduktion des Wertes [mod](https://en.wikipedia.org/wiki/Modular_arithmetic) 2<sup>32</sup> vorstellen oder als Verwerfen der oberen 32 Bits, um einen Wert zu erhalten, der nur die unteren 32 Bits enthält.

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

| Anweisung      | Binärer Opcode |
| -------------- | -------------- |
| `i32.wrap_i64` | `0xa7`         |
