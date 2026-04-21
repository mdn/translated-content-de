---
title: "extmul_low_i32x4_s: Wasm SIMD Arithmetik-Anweisung"
short-title: extmul_low_i32x4_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_low_i32x4_s`** [SIMD Arithmetik-Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 0–1 von zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in einer `i64x2`-Wertinterpretation aus.

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

Im obigen Beispiel werden die Lanes 0–1 der beiden `i32x4`-Eingabewerte miteinander multipliziert, und die Produkte als `i64x2` ausgegeben. Die Lane `0` des ersten Eingangs wird mit der Lane `0` des zweiten Eingangs multipliziert, und das Produkt wird zu Lane `0` der Ausgabe, und so weiter. Als Ergebnis enthält jede Lane der Ausgabe den Wert `500` (`25 * 20`).

Die `extmul_low_i32x4_s`-Anweisung ist eine effizientere Entsprechung zur Übergabe der Ergebnisse von zwei [`extend_low_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_s)-Anweisungen an eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung.

Mit anderen Worten:

```wat
(i64x2.extmul_low_i32x4_s
  (input1)
  (input2)
)
```

ist gleichwertig mit

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
  - : Die erste `v128` `i32x4`-Wertinterpretation als Eingang.
- `input2`
  - : Die zweite `v128` `i32x4`-Wertinterpretation als Eingang.
- `output`
  - : Die Ausgabe `v128` `i64x2`-Wertinterpretation.

### Binärcode-Kodierung

| Anweisung                  | Binärformat    | Beispieltext => Binärcode                      |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i64x2.extmul_low_i32x4_s` | `0xfd 220:u32` | `i64x2.extmul_low_i32x4_s` => `0xfd 0xdc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetik-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
