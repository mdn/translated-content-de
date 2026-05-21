---
title: "dot_i16x8_s: Wasm SIMD Arithmetikinstruktion"
short-title: dot_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/dot_i16x8_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`dot_i16x8_s`** [SIMD Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [Punktprodukt](https://de.wikipedia.org/wiki/Punktprodukt)-Berechnung auf zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertinterpretationen durch. Die entsprechenden Lanes der Eingabewerte werden miteinander multipliziert, dann wird jedes benachbarte Paar von Produkten zusammen addiert. Die vier Ergebnisse dieser Additionen werden als `i32x4` Wertinterpretation ausgegeben.

{{InteractiveExample("Wat Demo: dot_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i32x4.dot_i16x8_s
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die entsprechenden Lanes jeder Eingabe miteinander multipliziert, um acht Zwischenwerte zu erzeugen:

```plain
input1   4 6 16 8 23 65 82 9
input2   0 25 2 30 2 34 45 80
product  0 150 32 240 46 2210 3690 720
```

Jedes benachbarte Paar von Produkten wird dann addiert, und das Ergebnis als `i32x4` auf den Stapel ausgegeben, der die folgenden Werte enthält:

```plain
150 272 2256 4410
```

## Syntax

```plain
i32x4.dot_i16x8_s
```

- `i32x4.dot_i16x8_s`
  - : Die `i32x4.dot_i16x8_s`-Instruktion.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i16x8` Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i16x8` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binärcodierung

| Instruktion         | Binärformat    | Beispielt <=> Binär                     |
| ------------------- | -------------- | --------------------------------------- |
| `i32x4.dot_i16x8_s` | `0xfd 186:u32` | `i32x4.dot_i16x8_s` => `0xfd 0xba 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetikinstruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
