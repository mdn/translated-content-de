---
title: "extmul_low_i16x8_s: Wasm SIMD-Arithmetikanweisung"
short-title: extmul_low_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_low_i16x8_s`** [SIMD-Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Spuren 0–3 von zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Spuren und gibt das Ergebnis dieser Operationen in einer `i32x4`-Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_low_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 3 3 3 3 6 6 6 6
    v128.const i16x8 2 2 2 2 4 4 4 4

    i32x4.extmul_low_i16x8_s
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Spuren 0–3 der beiden `i16x8`-Eingabewerte miteinander multipliziert, und die Produkte werden als `i32x4` ausgegeben. Spur `0` des ersten Eingangs wird mit Spur `0` des zweiten Eingangs multipliziert, und das Produkt wird zu Spur `0` des Ausgangs, und so weiter. Als Ergebnis enthält jede Spur des Ausgangs den Wert `6` (`3 * 2`).

Die Anweisung `extmul_low_i16x8_s` ist eine leistungsfähigere Alternative zur Weitergabe der Ergebnisse von zwei [`extend_low_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_s)-Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung.

Mit anderen Worten:

```wat
(i32x4.extmul_low_i16x8_s
  (input1)
  (input2)
)
```

entspricht

```wat
(i32x4.mul
  (i32x4.extend_low_i16x8_s
    (input1)
  )
  (i32x4.extend_low_i16x8_s
    (input2)
  )
)
```

## Syntax

```plain
i32x4.extmul_low_i16x8_s
```

- `i32x4.extmul_low_i16x8_s`
  - : Die `i32x4.extmul_low_i16x8_s`-Anweisung.

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

### Binärcodierung

| Anweisung                  | Binärformat    | Beispieltext => Binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extmul_low_i16x8_s` | `0xfd 188:u32` | `i32x4.extmul_low_i16x8_s` => `0xfd 0xbc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetikanweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
