---
title: "extmul_high_i8x16_u: Wasm SIMD-Arithmetikanweisung"
short-title: extmul_high_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extmul_high_i8x16_u`** [SIMD-Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 8–15 von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in eine `i16x8`-Wertinterpretation aus.

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

Im obigen Beispiel werden die Lanes 8–15 der beiden `i8x16`-Eingabewerte miteinander multipliziert und die Produkte als `i16x8` ausgegeben. Lane `8` des ersten Eingabewertes wird mit Lane `8` des zweiten Eingabewertes multipliziert, und das Produkt wird zu Lane `0` der Ausgabe, und so weiter. Als Ergebnis enthält jede Lane der Ausgabe den Wert `15` (`3 * 5`).

Die `extmul_high_i8x16_u`-Anweisung ist ein leistungsstärkeres Äquivalent zum Durchreichen der Ergebnisse von zwei [`extend_high_i8x16_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_u)-Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung.

Mit anderen Worten:

```wat
(i16x8.extmul_high_i8x16_u
  (input1)
  (input2)
)
```

ist gleichbedeutend mit

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
  - : Die `i16x8.extmul_high_i8x16_u`-Anweisung.

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

### Binärcode-Kodierung

| Anweisung                   | Binärformat    | Beispieltext => Binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i16x8.extmul_high_i8x16_u` | `0xfd 159:u32` | `i16x8.extmul_high_i8x16_u` => `0xfd 0x9f 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetikanweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
