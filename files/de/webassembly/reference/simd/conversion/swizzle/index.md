---
title: "swizzle: Wasm SIMD-Konvertierungsanweisung"
short-title: swizzle
slug: WebAssembly/Reference/SIMD/conversion/swizzle
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`swizzle`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) gibt einen neuen [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wert zurück, dessen Lane-Werte aus einem Eingabe-`v128`-Wert gewählt werden. Die Auswahl erfolgt anhand der Indizes, die in einem zweiten Eingabe-`v128` angegeben sind.

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

Im obigen Beispiel extrahieren und protokollieren wir den Wert an der Indexposition 6 des Ausgabewerts der `swizzle`-Anweisung. Dieser wird `4` sein, weil die swizzle-Anweisung den Wert an der Indexposition 9 des Eingabewerts gewählt hat, um ihn an der Indexposition 6 des Ausgabewerts zu platzieren.

## Syntax

```plain
value_type.swizzle
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `swizzle`:
    - `i8x16`
- `swizzle`
  - : Die `swizzle`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input, indices] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`i8x16`-Wertinterpretation.
- `indices`
  - : Der `v128`-Wert, der die Indizes enthält, die Sie verwenden möchten, um auszuwählen, welche Werte aus dem Eingabewert genommen und in die Ausgabe aufgenommen werden sollen. In jedem Fall repräsentiert die Indexnummer die zu entnehmende Position aus dem Eingabewert, und die Position des Index gibt an, wo sie im `output`-Wert erscheinen soll.

    Diese Werte müssen zwischen `0` und `15` liegen, einschließlich. Für Indizes außerhalb dieses Bereichs werden die resultierenden Lanes auf `0` initialisiert.

- `output`
  - : Die Ausgabe-`v128`-Wertinterpretation.

### Binärcodierung

| Anweisung       | Binärformat   | Beispieltext => binär          |
| --------------- | ------------- | ------------------------------ |
| `i8x16.swizzle` | `0xfd 14:u32` | `i8x16.swizzle` => `0xfd 0x0e` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
