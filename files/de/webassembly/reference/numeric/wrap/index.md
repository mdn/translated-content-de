---
title: Umschlagen
slug: WebAssembly/Reference/Numeric/Wrap
l10n:
  sourceCommit: c681ed89305afd56d54ba6671673680bea041670
---

{{WebAssemblySidebar}}

Die **`wrap`**-Instruktion wird verwendet, um Zahlen des Typs `i64` in den Typ `i32` zu konvertieren. Wenn die Zahl größer ist, als es ein `i32` halten kann, wird diese Operation umschlagen, was zu einer anderen Zahl führt.

Man kann sich das Umschlagen entweder als Reduzierung des Wertes [mod](https://en.wikipedia.org/wiki/Modular_arithmetic) 2<sup>32</sup> vorstellen oder als das Verwerfen der hohen 32 Bits, um einen Wert zu erzeugen, der nur die niedrigen 32 Bits enthält.

{{EmbedInteractiveExample("pages/wat/wrap.html", "tabbed-taller")}}

## Syntax

```wasm
;; eine i64 auf den Stack schieben
i64.const 10

;; Umschlagen von i64 zu i32
i32.wrap_i64

;; das oberste Element auf dem Stack wird nun der Wert 10 vom Typ `i32` sein
```

| Instruktion    | Binärcode |
| -------------- | ---------- |
| `i32.wrap_i64` | `0xa7`     |
