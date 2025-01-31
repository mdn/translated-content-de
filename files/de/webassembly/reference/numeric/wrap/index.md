---
title: Wrap
slug: WebAssembly/Reference/Numeric/Wrap
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die Anweisung **`wrap`** wird verwendet, um Zahlen vom Typ `i64` in den Typ `i32` zu konvertieren. Wenn die Zahl größer ist, als `i32` halten kann, wird diese Operation eine Umwicklung durchführen, was zu einer anderen Zahl führt.

Man kann sich wrap entweder als die Reduktion des Wertes [mod](https://en.wikipedia.org/wiki/Modular_arithmetic) 2<sup>32</sup> vorstellen oder als das Verwerfen der oberen 32 Bits, um einen Wert zu erzeugen, der nur die unteren 32 Bits enthält.

{{EmbedInteractiveExample("pages/wat/wrap.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i64 onto the stack
i64.const 10

;; wrap from i64 to i32
i32.wrap_i64

;; the top item on the stack will now be the value 10 of type `i32`
```

| Anweisung      | Binärer Opcode |
| -------------- | -------------- |
| `i32.wrap_i64` | `0xa7`         |
