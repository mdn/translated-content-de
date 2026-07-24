---
title: "extmul_low_i8x16_s: Wasm SIMD arithmetische Anweisung"
short-title: extmul_low_i8x16_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_s
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extmul_low_i8x16_s`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 0–7 von zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_low_i8x16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3
    v128.const i8x16 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5

    i16x8.extmul_low_i8x16_s
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Lanes 0–7 der beiden `i8x16` Eingangswerte miteinander multipliziert und die Produkte als `i16x8` ausgegeben. Lane `0` des ersten Eingangs wird mit Lane `0` des zweiten Eingangs multipliziert, und das Produkt wird zu Lane `0` der Ausgabe, und so weiter. Dadurch enthält jede Lane der Ausgabe den Wert `8` (`2 * 4`).

Die `extmul_low_i8x16_s` Anweisung ist eine leistungsfähigere Alternative zum Übergeben der Ergebnisse von zwei [`extend_low_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_s) Anweisungen an eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung.

Anders ausgedrückt:

```wat
(i16x8.extmul_low_i8x16_s
  (input1)
  (input2)
)
```

ist äquivalent zu

```wat
(i16x8.mul
  (i16x8.extend_low_i8x16_s
    (input1)
  )
  (i16x8.extend_low_i8x16_s
    (input2)
  )
)
```

## Syntax

```plain
i16x8.extmul_low_i8x16_s
```

- `i16x8.extmul_low_i8x16_s`
  - : Die `i16x8.extmul_low_i8x16_s` Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste `v128` `i8x16` Wertinterpretation.
- `input2`
  - : Die zweite `v128` `i8x16` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Wertinterpretation.

### Binärcodierung

| Anweisung                  | Binärformat    | Beispieltext => Binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extmul_low_i8x16_s` | `0xfd 156:u32` | `i16x8.extmul_low_i8x16_s` => `0xfd 0x9c 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
