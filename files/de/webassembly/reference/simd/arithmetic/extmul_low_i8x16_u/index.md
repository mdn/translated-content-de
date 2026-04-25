---
title: "extmul_low_i8x16_u: Wasm SIMD arithmetische Anweisung"
short-title: extmul_low_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_low_i8x16_u`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 0–7 von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i8x16`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in einer `i16x8`-Wertinterpretation aus.

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

Im obigen Beispiel werden die Lanes 0–7 der beiden `i8x16`-Eingangswerte miteinander multipliziert und die Produkte als `i16x8` ausgegeben. Lane `0` des ersten Eingangs wird mit Lane `0` des zweiten Eingangs multipliziert, und das Produkt wird zu Lane `0` der Ausgabe, und so weiter. Als Ergebnis enthält jede Lane der Ausgabe den Wert `8` (`2 * 4`).

Die Anweisung `extmul_low_i8x16_u` ist eine leistungsfähigere Entsprechung dazu, die Ergebnisse von zwei [`extend_low_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_u) Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung weiterzuleiten.

Anders gesagt:

```wat
(i16x8.extmul_low_i8x16_u
  (input1)
  (input2)
)
```

ist äquivalent zu

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
  - : Die `i16x8.extmul_low_i8x16_u` Anweisung.

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

### Binärkodierung

| Anweisung                  | Binärformat    | Beispiel Text => binär                         |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extmul_low_i8x16_u` | `0xfd 158:u32` | `i16x8.extmul_low_i8x16_u` => `0xfd 0x9e 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD arithmetische Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
