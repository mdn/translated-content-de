---
title: Wrap
slug: WebAssembly/Reference/Numeric/Wrap
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`wrap`**-Anweisung wird verwendet, um Zahlen vom Typ `i64` in den Typ `i32` umzuwandeln. Wenn die Zahl größer ist als das, was ein `i32` speichern kann, wird diese Operation überlaufen, was zu einer anderen Zahl führt.

Man kann sich das Überlaufen entweder als Reduzierung des Werts [mod](https://en.wikipedia.org/wiki/Modular_arithmetic) 2<sup>32</sup> oder als Verwerfen der oberen 32 Bits vorstellen, um einen Wert zu erzeugen, der nur die unteren 32 Bits enthält.

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
