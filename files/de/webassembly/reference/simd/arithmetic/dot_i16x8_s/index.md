---
title: "dot_i16x8_s: Wasm SIMD-Arithmetik-Befehl"
short-title: dot_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/dot_i16x8_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Der **`dot_i16x8_s`** [SIMD-Arithmetik-Befehl](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [Skalarprodukt](https://de.wikipedia.org/wiki/Skalarprodukt)-Berechnung auf zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8`-Wertinterpretationen durch. Die entsprechenden Lanes der Eingabewerte werden miteinander multipliziert, dann wird jedes benachbarte Paar von Produkten zusammen addiert. Die vier Ergebnisse dieser Additionen werden als `i32x4`-Wertinterpretation ausgegeben.

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

In dem obigen Beispiel werden die entsprechenden Lanes jeder Eingabe multipliziert, um acht Zwischenwerte zu erzeugen:

```plain
input1   4 6 16 8 23 65 82 9
input2   0 25 2 30 2 34 45 80
product  0 150 32 240 46 2210 3690 720
```

Jedes benachbarte Paar von Produkten wird dann addiert, und das Ergebnis wird als `i32x4` auf den Stack ausgegeben, der die folgenden Werte enthält:

```plain
150 272 2256 4410
```

## Syntax

```plain
i32x4.dot_i16x8_s
```

- `i32x4.dot_i16x8_s`
  - : Der Befehl `i32x4.dot_i16x8_s`.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i16x8`-Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i16x8`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4`-Wertinterpretation.

### Binäre Kodierung

| Befehl              | Binärformat    | Beispieltext => Binär                   |
| ------------------- | -------------- | --------------------------------------- |
| `i32x4.dot_i16x8_s` | `0xfd 186:u32` | `i32x4.dot_i16x8_s` => `0xfd 0xba 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetik-Befehle](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
