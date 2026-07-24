---
title: "extmul_high_i8x16_u: Wasm SIMD Arithmetikinstruktion"
short-title: extmul_high_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_u
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extmul_high_i8x16_u`** [SIMD Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 8–15 von zwei unsigned [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8`-Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_high_i8x16_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3
    v128.const i8x16 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5

    i16x8.extmul_high_i8x16_u
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Lanes 8–15 der beiden `i8x16`-Eingabewerte miteinander multipliziert und die Produkte als `i16x8` ausgegeben. Lane `8` des ersten Eingangs wird mit Lane `8` des zweiten Eingangs multipliziert, und das Produkt wird zu Lane `0` des Ausgangs und so weiter. Dadurch enthält jede Lane des Ausgangs den Wert `15` (`3 * 5`).

Die `extmul_high_i8x16_u`-Instruktion ist eine performantere Entsprechung zur Übergabe der Ergebnisse von zwei [`extend_high_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_u)-Instruktionen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Instruktion.

Mit anderen Worten:

```wat
(i16x8.extmul_high_i8x16_u
  (input1)
  (input2)
)
```

entspricht

```wat
(i16x8.mul
  (i16x8.extend_high_i8x16_u
    (input1)
  )
  (i16x8.extend_high_i8x16_u
    (input2)
  )
)
```

## Syntax

```plain
i16x8.extmul_high_i8x16_u
```

- `i16x8.extmul_high_i8x16_u`
  - : Die `i16x8.extmul_high_i8x16_u`-Instruktion.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i8x16`-Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i8x16`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8`-Wertinterpretation.

### Binärcodierung

| Instruktion                 | Binärformat    | Beispiels-Text => Binär                         |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i16x8.extmul_high_i8x16_u` | `0xfd 159:u32` | `i16x8.extmul_high_i8x16_u` => `0xfd 0x9f 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
