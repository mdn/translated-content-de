---
title: "extmul_high_i16x8_s: Wasm SIMD Rechenanweisung"
short-title: extmul_high_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_s
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extmul_high_i16x8_s`** [SIMD Rechenanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 4–7 von zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in einer `i32x4` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_high_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 3 3 3 3 6 6 6 6
    v128.const i16x8 2 2 2 2 4 4 4 4

    i32x4.extmul_high_i16x8_s
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Lanes 4–7 der beiden `i16x8` Eingabewerte miteinander multipliziert und die Produkte als `i32x4` ausgegeben. Lane `4` des ersten Eingangs wird mit Lane `4` des zweiten Eingangs multipliziert, und das Produkt wird zu Lane `0` der Ausgabe, und so weiter. Als Ergebnis enthält jede Lane der Ausgabe den Wert `24` (`6 * 4`).

Die `extmul_high_i16x8_s` Anweisung ist eine leistungsfähigere Entsprechung zur Übergabe der Ergebnisse von zwei [`extend_high_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_s) Anweisungen zu einer [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung.

Anders gesagt:

```wat
(i32x4.extmul_high_i16x8_s
  (input1)
  (input2)
)
```

entspricht

```wat
(i32x4.mul
  (i32x4.extend_high_i16x8_s
    (input1)
  )
  (i32x4.extend_high_i16x8_s
    (input2)
  )
)
```

## Syntax

```plain
i32x4.extmul_high_i16x8_s
```

- `i32x4.extmul_high_i16x8_s`
  - : Die `i32x4.extmul_high_i16x8_s` Anweisung.

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

### Binäre Kodierung

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i32x4.extmul_high_i16x8_s` | `0xfd 189:u32` | `i32x4.extmul_high_i16x8_s` => `0xfd 0xbd 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
