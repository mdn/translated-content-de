---
title: "extmul_high_i16x8_u: Wasm SIMD Rechenanweisung"
short-title: extmul_high_i16x8_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_u
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extmul_high_i16x8_u`** [SIMD Rechenanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Spuren 4–7 von zwei unsigned [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Spuren und gibt das Ergebnis dieser Operationen als `i32x4` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_high_i16x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 3 3 3 3 6 6 6 6
    v128.const i16x8 2 2 2 2 4 4 4 4

    i32x4.extmul_high_i16x8_u
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Spuren 4–7 der beiden `i16x8` Eingabewerte miteinander multipliziert und die Produkte als `i32x4` ausgegeben. Spur `4` der ersten Eingabe wird mit Spur `4` der zweiten Eingabe multipliziert, und das Produkt wird zur Spur `0` der Ausgabe, und so weiter. Dadurch enthält jede Spur der Ausgabe den Wert `24` (`6 * 4`).

Die `extmul_high_i16x8_u` Anweisung ist eine leistungsfähigere Entsprechung zum Übergeben der Ergebnisse von zwei [`extend_high_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_u) Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung.

Mit anderen Worten:

```wat
(i32x4.extmul_high_i16x8_u
  (input1)
  (input2)
)
```

ist äquivalent zu

```wat
(i32x4.mul
  (i32x4.extend_high_i16x8_u
    (input1)
  )
  (i32x4.extend_high_i16x8_u
    (input2)
  )
)
```

## Syntax

```plain
i32x4.extmul_high_i16x8_u
```

- `i32x4.extmul_high_i16x8_u`
  - : Die `i32x4.extmul_high_i16x8_u` Anweisung.

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

| Anweisung                   | Binärformat    | Beispielttext => binär                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i32x4.extmul_high_i16x8_u` | `0xfd 191:u32` | `i32x4.extmul_high_i16x8_u` => `0xfd 0xbf 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
