---
title: "not: Wasm SIMD Bitweise-Instruktion"
short-title: not
slug: WebAssembly/Reference/SIMD/bitwise/not
l10n:
  sourceCommit: 7d6773a8ee41048b915cd566b0c67f97be6ea249
---

Die **`not`** [SIMD Bitweise-Instruktion](/de/docs/WebAssembly/Reference/SIMD/bitwise) führt ein bitweises NOT auf jedem Byte eines [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werts aus und gibt einen neuen `v128`-Wert zurück, der das Ergebnis enthält.

{{InteractiveExample("Wat Demo: not", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 10 23 56 15 25 29 92 45
    v128.not

    i8x16.extract_lane_u 15
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel wird der Wert `i16x8 10 23 56 15 25 29 92 45` als eine Reihe von 16 hexadezimalen Werten im `v128` gespeichert:

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0A 00 17 00 38 00 0F 00 19 00 1D 00 5C 00 2D 00
```

Bei Ausführung von `v128.not` auf dem Wert wird auf jeden Wert ein bitweises NOT ausgeführt, was bedeutet, dass jedes Byte `b` zu `0xFF - b` wird:

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0A 00 17 00 38 00 0F 00 19 00 1D 00 5C 00 2D 00
Hex after NOT  F5 FF E8 FF C7 FF F0 FF E6 FF E2 FF A3 FF D2 FF
```

Der resultierende Ausgabe-`v128`-Wert ist ein `i8x16`, daher gibt `i8x16.extract_lane_u 15` den Wert in der letzten Spur aus. Dies entspricht `255` (`0xff`), was das bitweise NOT von `00` (`0x00`) ist.

Mit anderen Worten:

```plain
    0 0 0 0 0 0 0 0
NOT 1 1 1 1 1 1 1 1
```

## Syntax

```plain
v128.not
```

- `v128.not`
  - : Die `v128.not` Instruktion.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Interpretation des Eingabe-`v128`-Werts.
- `output`
  - : Die Interpretation des Ausgabe-`v128`-Werts.

### Binäre Codierung

| Instruktion | Binärformat   | Beispiel Text => binär    |
| ----------- | ------------- | ------------------------- |
| `v128.not`  | `0xfd 77:u32` | `v128.not` => `0xfd 0x4d` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
