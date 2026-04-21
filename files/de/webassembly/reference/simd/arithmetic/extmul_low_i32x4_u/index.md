---
title: "extmul_low_i32x4_u: Wasm SIMD arithmetische Anweisung"
short-title: extmul_low_i32x4_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_low_i32x4_u`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Spuren 0–1 von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4` Wertinterpretationen, multipliziert die Werte in den entsprechenden Spuren und gibt das Ergebnis dieser Operationen in eine `i64x2` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_low_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 25 25 50 50
    v128.const i32x4 20 20 40 40

    i64x2.extmul_low_i32x4_u
    i64x2.extract_lane 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Spuren 0–1 der beiden `i32x4` Eingabewerte miteinander multipliziert, und die Produkte werden als `i64x2` ausgegeben. Spur `0` der ersten Eingabe wird mit Spur `0` der zweiten Eingabe multipliziert, und das Produkt wird zu Spur `0` der Ausgabe, und so weiter. Somit enthält jede Spur der Ausgabe den Wert `500` (`25 * 20`).

Die `extmul_low_i32x4_u` Anweisung ist eine leistungsfähigere Entsprechung zum Übergeben der Ergebnisse von zwei [`extend_low_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_u) Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung.

Anders ausgedrückt:

```wat
(i64x2.extmul_low_i32x4_u
  (input1)
  (input2)
)
```

entspricht

```wat
(i64x2.mul
  (i64x2.extend_low_i32x4_u
    (input1)
  )
  (i64x2.extend_low_i32x4_u
    (input2)
  )
)
```

## Syntax

```plain
i64x2.extmul_low_i32x4_u
```

- `i64x2.extmul_low_i32x4_u`
  - : Die `i64x2.extmul_low_i32x4_u` Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i32x4` Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i64x2` Wertinterpretation.

### Binäre Kodierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i64x2.extmul_low_i32x4_u` | `0xfd 222:u32` | `i64x2.extmul_low_i32x4_u` => `0xfd 0xde 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD arithmetische Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
