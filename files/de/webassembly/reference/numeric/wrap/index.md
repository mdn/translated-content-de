---
title: Wrap
slug: WebAssembly/Reference/Numeric/Wrap
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`wrap`**-Anweisung wird verwendet, um Zahlen des Typs `i64` in den Typ `i32` zu konvertieren. Wenn die Zahl größer ist, als ein `i32` halten kann, wird diese Operation eine Rundung verursachen und zu einer anderen Zahl führen.

Man kann sich `wrap` entweder als eine Reduzierung des Wertes nach [mod](https://en.wikipedia.org/wiki/Modular_arithmetic) 2<sup>32</sup> vorstellen oder als das Verwerfen der oberen 32 Bits, um einen Wert zu erhalten, der nur die unteren 32 Bits enthält.

{{EmbedInteractiveExample("pages/wat/wrap.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i64 onto the stack
i64.const 10

;; wrap from i64 to i32
i32.wrap_i64

;; the top item on the stack will now be the value 10 of type `i32`
```

| Anweisung      | Binäroperationscode |
| -------------- | ------------------- |
| `i32.wrap_i64` | `0xa7`              |
