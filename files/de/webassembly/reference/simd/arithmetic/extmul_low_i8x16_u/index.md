---
title: "extmul_low_i8x16_u: Wasm SIMD Arithmetikinstruktion"
short-title: extmul_low_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_u
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extmul_low_i8x16_u`** [SIMD Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Bahnen 0–7 von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Bahnen und gibt das Ergebnis dieser Operationen in einer `i16x8`-Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_low_i8x16_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3
    v128.const i8x16 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5

    i16x8.extmul_low_i8x16_u
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Bahnen 0–7 der beiden `i8x16`-Eingangswerte miteinander multipliziert und die Produkte als `i16x8` ausgegeben. Bahn `0` des ersten Eingangs wird mit Bahn `0` des zweiten Eingangs multipliziert, und das Produkt wird zu Bahn `0` der Ausgabe, und so weiter. Als Ergebnis enthält jede Bahn der Ausgabe den Wert `8` (`2 * 4`).

Die `extmul_low_i8x16_u`-Instruktion ist eine leistungsfähigere Entsprechung zum Durchreichen der Ergebnisse von zwei [`extend_low_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_u) Instruktionen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Instruktion.

Mit anderen Worten:

```wat
(i16x8.extmul_low_i8x16_u
  (input1)
  (input2)
)
```

entspricht

```wat
(i16x8.mul
  (i16x8.extend_low_i8x16_u
    (input1)
  )
  (i16x8.extend_low_i8x16_u
    (input2)
  )
)
```

## Syntax

```plain
i16x8.extmul_low_i8x16_u
```

- `i16x8.extmul_low_i8x16_u`
  - : Die `i16x8.extmul_low_i8x16_u`-Instruktion.

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

| Instruktion                | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extmul_low_i8x16_u` | `0xfd 158:u32` | `i16x8.extmul_low_i8x16_u` => `0xfd 0x9e 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
