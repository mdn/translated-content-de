---
title: "extmul_low_i16x8_u: Wasm SIMD-Arithmetik-Anweisung"
short-title: extmul_low_i16x8_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_low_i16x8_u`** [SIMD-Arithmetik-Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 0–3 von zwei unsigned [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in einer `i32x4`-Wertinterpretation aus.

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

Im obigen Beispiel werden die Lanes 0–3 der beiden `i16x8` Eingabewerte miteinander multipliziert und die Produkte als `i32x4` ausgegeben. Lane `0` des ersten Eingabewerts wird mit Lane `0` des zweiten Eingabewerts multipliziert und das Produkt wird zu Lane `0` der Ausgabe, und so weiter. Das Ergebnis ist, dass jede Lane der Ausgabe den Wert `6` (`3 * 2`) enthält.

Die `extmul_low_i16x8_u`-Anweisung ist eine leistungsfähigere Entsprechung dazu, die Ergebnisse von zwei [`extend_low_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_u)-Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung zu übergeben.

Mit anderen Worten:

```wat
(i32x4.extmul_low_i16x8_u
  (input1)
  (input2)
)
```

ist gleichbedeutend mit

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
  - : Die erste Eingabe `v128` `i16x8` Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i16x8` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binärcodierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extmul_low_i16x8_u` | `0xfd 190:u32` | `i32x4.extmul_low_i16x8_u` => `0xfd 0xbe 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetik-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
