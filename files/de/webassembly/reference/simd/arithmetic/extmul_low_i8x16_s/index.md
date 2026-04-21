---
title: "extmul_low_i8x16_s: Wasm SIMD Arithmetik-Anweisung"
short-title: extmul_low_i8x16_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_low_i8x16_s`** [SIMD Arithmetik-Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 0–7 von zwei vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i8x16` Werteinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen als `i16x8` Werteinterpretation aus.

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

Im obigen Beispiel werden die Lanes 0–7 der beiden `i8x16` Eingabewerte miteinander multipliziert und die Produkte als `i16x8` ausgegeben. Lane `0` des ersten Eingabewertes wird mit Lane `0` des zweiten Eingabewertes multipliziert, und das Produkt wird zu Lane `0` der Ausgabe, usw. Infolgedessen enthält jede Lane der Ausgabe den Wert `8` (`2 * 4`).

Die `extmul_low_i8x16_s` Anweisung ist eine leistungsfähigere Entsprechung zum Übergeben der Ergebnisse von zwei [`extend_low_i8x16_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_s) Anweisungen an eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung.

Mit anderen Worten:

```wat
(i16x8.extmul_low_i8x16_s
  (input1)
  (input2)
)
```

ist gleichbedeutend mit

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
  - : Die erste Eingabe `v128` `i8x16` Werteinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i8x16` Werteinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Werteinterpretation.

### Binäre Kodierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extmul_low_i8x16_s` | `0xfd 156:u32` | `i16x8.extmul_low_i8x16_s` => `0xfd 0x9c 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetik-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
