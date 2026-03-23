---
title: "shuffle: Wasm SIMD-Konvertierungsanweisung"
short-title: shuffle
slug: WebAssembly/Reference/SIMD/conversion/shuffle
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`shuffle`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) gibt einen neuen [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wert zurück, dessen Lanes aus zwei Eingabe-`v128`-Werten ausgewählt werden, die durch gegebene Indexwerte bestimmt werden.

{{InteractiveExample("Wat Demo: shuffle", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 10 23 56 15 25 29 92 45 36 4 78 12 34 25 72 82
    v128.const i8x16 0 80 5 7 3 5 9 2 4 6 1 7 0 3 5 1
    i8x16.shuffle 0 17 2 3 8 9 10 11 31 30 28 27 16 17 18 19

    i8x16.extract_lane_u 14
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel extrahieren und protokollieren wir den Wert an der Indexposition 14 des `shuffle`-Anweisungsausgabewerts. Dies wird `5` sein, da die `shuffle`-Anweisung den Wert an Indexposition 3 des zweiten `v128`-Eingabewertes (dargestellt durch den Indexwert `18`) ausgewählt hat, um ihn an Indexposition 14 des `output` zu setzen.

## Syntax

```plain
value_type.shuffle indices
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `shuffle`:
    - `i8x16`
- `shuffle`
  - : Die `shuffle`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.
- `indices`
  - : 16 ganze Zahlen im Bereich von `0` bis `31` inklusive, die die Indizes der Werte darstellen, die von den beiden Eingabewerten genommen werden sollen. Werte von `0` bis `15` repräsentieren die 16 Indizes des ersten Eingabewerts, und Werte von `16` bis `31` repräsentieren die 16 Indizes des zweiten Eingabewerts.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i8x16` Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i8x16` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` Wertinterpretation.

### Binäre Kodierung

| Anweisung       | Binäres Format            | Beispieltext => binär                                                                                                                                     |
| --------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `i8x16.shuffle` | `0xfd 13:u32 l:laneidx¹⁶` | `i8x16.shuffle 0 17 2 3 8 9 10 11 31 30 28 27 16 17 18 19` => `0xfd 0x0d 0x00 0x11 0x02 0x03 0x08 0x09 0x0a 0x0b 0x1f 0x1e 0x1c 0x1b 0x10 0x11 0x12 0x13` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
