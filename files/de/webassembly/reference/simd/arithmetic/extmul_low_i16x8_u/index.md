---
title: "extmul_low_i16x8_u: Wasm SIMD-Arithmetikanweisung"
short-title: extmul_low_i16x8_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extmul_low_i16x8_u`** [SIMD-Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 0–3 von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in einer `i32x4`-Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_low_i16x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 3 3 3 3 6 6 6 6
    v128.const i16x8 2 2 2 2 4 4 4 4

    i32x4.extmul_low_i16x8_u
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden Lanes 0–3 der beiden `i16x8`-Eingabewerte miteinander multipliziert und die Produkte als `i32x4` ausgegeben. Lane `0` des ersten Eingabewertes wird mit Lane `0` des zweiten Eingabewertes multipliziert und das Produkt wird Lane `0` der Ausgabe, und so weiter. Dadurch enthält jede Lane der Ausgabe den Wert `6` (`3 * 2`).

Die `extmul_low_i16x8_u`-Anweisung ist eine leistungsfähigere Entsprechung, die Ergebnisse von zwei [`extend_low_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_u)-Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung zu übergeben.

Mit anderen Worten:

```wat
(i32x4.extmul_low_i16x8_u
  (input1)
  (input2)
)
```

ist äquivalent zu

```wat
(i32x4.mul
  (i32x4.extend_low_i16x8_u
    (input1)
  )
  (i32x4.extend_low_i16x8_u
    (input2)
  )
)
```

## Syntax

```plain
i32x4.extmul_low_i16x8_u
```

- `i32x4.extmul_low_i16x8_u`
  - : Die `i32x4.extmul_low_i16x8_u`-Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i16x8`-Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i16x8`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4`-Wertinterpretation.

### Binärcodekodierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extmul_low_i16x8_u` | `0xfd 190:u32` | `i32x4.extmul_low_i16x8_u` => `0xfd 0xbe 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetikanweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
