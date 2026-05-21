---
title: "extmul_low_i32x4_s: Wasm SIMD arithmetic instruction"
short-title: extmul_low_i32x4_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extmul_low_i32x4_s`** [SIMD-arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 0–1 von zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in einer `i64x2`-Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_low_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 25 25 50 50
    v128.const i32x4 20 20 40 40

    i64x2.extmul_low_i32x4_s
    i64x2.extract_lane 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Lanes 0–1 der beiden `i32x4`-Eingabewerte miteinander multipliziert und die Produkte als `i64x2` ausgegeben. Lane `0` des ersten Eingabewerts wird mit Lane `0` des zweiten Eingabewerts multipliziert und das Produkt wird zu Lane `0` der Ausgabe, und so weiter. Dadurch enthält jede Lane der Ausgabe den Wert `500` (`25 * 20`).

Die `extmul_low_i32x4_s`-Anweisung ist eine leistungsfähigere Entsprechung zum Übergeben der Ergebnisse von zwei [`extend_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_s)-Anweisungen an eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung.

Mit anderen Worten:

```wat
(i64x2.extmul_low_i32x4_s
  (input1)
  (input2)
)
```

entspricht

```wat
(i64x2.mul
  (i64x2.extend_low_i32x4_s
    (input1)
  )
  (i64x2.extend_low_i32x4_s
    (input2)
  )
)
```

## Syntax

```plain
i64x2.extmul_low_i32x4_s
```

- `i64x2.extmul_low_i32x4_s`
  - : Die `i64x2.extmul_low_i32x4_s`-Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i32x4`-Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i64x2`-Wertinterpretation.

### Binärcode

| Anweisung                  | Binärformat    | Beispieltext => Binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i64x2.extmul_low_i32x4_s` | `0xfd 220:u32` | `i64x2.extmul_low_i32x4_s` => `0xfd 0xdc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-arithmetische Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
