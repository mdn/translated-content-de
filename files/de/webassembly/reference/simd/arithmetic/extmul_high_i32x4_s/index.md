---
title: "extmul_high_i32x4_s: Wasm SIMD Arithmetikanweisung"
short-title: extmul_high_i32x4_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_high_i32x4_s`** [SIMD Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Spuren 2–3 von zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4` Wertinterpretationen, multipliziert die Werte in den entsprechenden Spuren und gibt das Ergebnis dieser Operationen als `i64x2` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_high_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 25 25 50 50
    v128.const i32x4 20 20 40 40

    i64x2.extmul_high_i32x4_s
    i64x2.extract_lane 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Spuren 2–3 der beiden `i32x4` Eingabewerte miteinander multipliziert und die Produkte als `i64x2` ausgegeben. Spur `2` des ersten Eingabewertes wird mit Spur `2` des zweiten Eingabewertes multipliziert, und das Produkt wird Spur `0` der Ausgabe, und so weiter. Als Ergebnis enthält jede Spur der Ausgabe den Wert `2000` (`50 * 40`).

Die Anweisung `extmul_high_i32x4_s` ist eine effizientere Äquivalenz dazu, die Ergebnisse von zwei [`extend_high_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_s) Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung zu übergeben.

Mit anderen Worten:

```wat
(i64x2.extmul_high_i32x4_s
  (input1)
  (input2)
)
```

ist äquivalent zu

```wat
(i64x2.mul
  (i64x2.extend_high_i32x4_s
    (input1)
  )
  (i64x2.extend_high_i32x4_s
    (input2)
  )
)
```

## Syntax

```plain
i64x2.extmul_high_i32x4_s
```

- `i64x2.extmul_high_i32x4_s`
  - : Die `i64x2.extmul_high_i32x4_s` Anweisung.

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

### Binärcodierung

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i64x2.extmul_high_i32x4_s` | `0xfd 221:u32` | `i64x2.extmul_high_i32x4_s` => `0xfd 0xdd 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetikanweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
