---
title: "swizzle: Wasm SIMD-Konvertierungsanweisung"
short-title: swizzle
slug: WebAssembly/Reference/SIMD/conversion/swizzle
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`swizzle`**-Anweisung [SIMD-Konvertierung](/de/docs/WebAssembly/Reference/SIMD/conversion) gibt einen neuen [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wert mit Lanes zurück, die aus einem Eingabe-`v128`-Wert ausgewählt werden, bestimmt durch Indizes, die in einem zweiten Eingabe-`v128` bereitgestellt werden.

{{InteractiveExample("Wat Demo: swizzle", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 10 23 56 15 25 29 92 45 36 4 78 12 34 25 72 82
    v128.const i8x16 0 2 5 7 3 5 9 2 4 6 1 7 0 3 5 1
    i8x16.swizzle

    i8x16.extract_lane_u 6
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel extrahieren und protokollieren wir den Wert an der Indexposition 6 des `swizzle`-Anweisungsausgangswerts. Dieser wird `4` sein, da die `swizzle`-Anweisung den Wert an der Indexposition 9 des Eingabewerts ausgewählt hat, um ihn an der Indexposition 6 des Ausgangswerts zu platzieren.

## Syntax

```plain
value_type.swizzle
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgende [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretation unterstützt `swizzle`:
    - `i8x16`
- `swizzle`
  - : Die `swizzle`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) hinzugefügt werden.

### Typ

```plain
[input, indices] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`i8x16`-Wertinterpretation.
- `indices`
  - : Der `v128`-Wert, der die Indizes enthält, die verwendet werden sollen, um zu bestimmen, welche Werte aus dem Eingabewert genommen und in den Ausgang eingefügt werden sollen. In jedem Fall repräsentiert die Indexnummer die Position im Eingabewert, die übernommen werden soll, und die Position des Index repräsentiert die Position, an der sie im `output`-Wert erscheinen soll.

    Diese Werte müssen zwischen `0` und `15` liegen, einschließlich. Für Indizes außerhalb dieses Bereichs werden die resultierenden Lanes auf `0` gesetzt.

- `output`
  - : Die Ausgangs-`v128`-Wertinterpretation.

### Binärcodierung

| Anweisung       | Binärformat   | Beispieltext => Binär          |
| --------------- | ------------- | ------------------------------ |
| `i8x16.swizzle` | `0xfd 14:u32` | `i8x16.swizzle` => `0xfd 0x0e` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
