---
title: "shuffle: Wasm SIMD Umwandlungsanweisung"
short-title: shuffle
slug: WebAssembly/Reference/SIMD/conversion/shuffle
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`shuffle`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) gibt einen neuen [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wert zurück, dessen Lane-Werte basierend auf bereitgestellten Indexwerten aus zwei Eingabe-`v128`-Werten ausgewählt werden.

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

Im obigen Beispiel extrahieren und protokollieren wir den Wert an der Indexposition 14 des `shuffle`-Anweisungsausgabewerts. Dies wird `5` sein, da die `shuffle`-Anweisung den Wert an der Indexposition 3 des zweiten `v128`-Eingabewerts (dargestellt durch den Indexwert `18`) ausgewählt hat, um an Indexposition 14 des `output` platziert zu werden.

## Syntax

```plain
value_type.shuffle indices
```

- `value_type`
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgende [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `shuffle`:
    - `i8x16`
- `shuffle`
  - : Die `shuffle`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.
- `indices`
  - : 16 Ganzzahlen im Bereich von `0` bis einschließlich `31`, die die Indizes der Werte darstellen, die aus den beiden Eingabewerten entnommen werden sollen. Werte von `0` bis `15` repräsentieren die 16 Indizes des ersten Eingabewerts, und Werte von `16` bis `31` repräsentieren die 16 Indizes des zweiten Eingabewerts.

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

### Binärcodierung

| Anweisung       | Binärformat                | Beispiel-Text => Binär                                                                                                                                    |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `i8x16.shuffle` | `0xfd 13:u32 l:lane_idx¹⁶` | `i8x16.shuffle 0 17 2 3 8 9 10 11 31 30 28 27 16 17 18 19` => `0xfd 0x0d 0x00 0x11 0x02 0x03 0x08 0x09 0x0a 0x0b 0x1f 0x1e 0x1c 0x1b 0x10 0x11 0x12 0x13` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
