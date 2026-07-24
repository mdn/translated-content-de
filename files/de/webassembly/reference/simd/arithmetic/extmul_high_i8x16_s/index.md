---
title: "extmul_high_i8x16_s: Wasm SIMD Arithmetikinstruktion"
short-title: extmul_high_i8x16_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_s
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extmul_high_i8x16_s`** [SIMD-Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Bahnen 8–15 von zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16` Wertinterpretationen, multipliziert die Werte in den entsprechenden Bahnen und gibt das Ergebnis dieser Operationen in einer `i16x8` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_high_i8x16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3
    v128.const i8x16 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5

    i16x8.extmul_high_i8x16_s
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Bahnen 8–15 der beiden `i8x16` Eingabewerte miteinander multipliziert und die Produkte als `i16x8` ausgegeben. Die Bahn `8` des ersten Eingangs wird mit der Bahn `8` des zweiten Eingangs multipliziert, und das Produkt wird zu Bahn `0` der Ausgabe, und so weiter. Dadurch enthält jede Bahn der Ausgabe den Wert `15` (`3 * 5`).

Die `extmul_high_i8x16_s`-Instruktion ist eine leistungsfähigere Alternative zum Übergeben der Ergebnisse von zwei [`extend_high_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_s) Instruktionen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Instruktion.

Mit anderen Worten:

```wat
(i16x8.extmul_high_i8x16_s
  (input1)
  (input2)
)
```

ist gleichwertig zu

```wat
(i16x8.mul
  (i16x8.extend_high_i8x16_s
    (input1)
  )
  (i16x8.extend_high_i8x16_s
    (input2)
  )
)
```

## Syntax

```plain
i16x8.extmul_high_i8x16_s
```

- `i16x8.extmul_high_i8x16_s`
  - : Die `i16x8.extmul_high_i8x16_s` Instruktion.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i8x16` Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i8x16` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Wertinterpretation.

### Binärcodierung

| Instruktion                 | Binärformat    | Beispiel Text => Binär                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i16x8.extmul_high_i8x16_s` | `0xfd 157:u32` | `i16x8.extmul_high_i8x16_s` => `0xfd 0x9d 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
