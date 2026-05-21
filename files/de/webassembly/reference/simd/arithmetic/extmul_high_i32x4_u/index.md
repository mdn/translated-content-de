---
title: "extmul_high_i32x4_u: Wasm SIMD-Arithmetikinstruktion"
short-title: extmul_high_i32x4_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extmul_high_i32x4_u`** [SIMD-Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Spuren 2–3 von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4` Wertinterpretationen, multipliziert die Werte in den entsprechenden Spuren und gibt das Ergebnis dieser Operationen als `i64x2` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_high_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 25 25 50 50
    v128.const i32x4 20 20 40 40

    i64x2.extmul_high_i32x4_u
    i64x2.extract_lane 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Spuren 2–3 der beiden `i32x4` Eingabewerte miteinander multipliziert und die Produkte als `i64x2` ausgegeben. Spur `2` des ersten Eingabewerts wird mit Spur `2` des zweiten Eingabewerts multipliziert, und das Produkt wird Spur `0` der Ausgabe. Und so weiter. Als Ergebnis enthält jede Spur der Ausgabe den Wert `2000` (`50 * 40`).

Die `extmul_high_i32x4_u`-Instruktion ist eine leistungsfähigere Entsprechung zum Übergeben der Ergebnisse von zwei [`extend_high_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_u) Instruktionen an eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Instruktion.

Mit anderen Worten:

```wat
(i64x2.extmul_high_i32x4_u
  (input1)
  (input2)
)
```

ist äquivalent zu

```wat
(i64x2.mul
  (i64x2.extend_high_i32x4_u
    (input1)
  )
  (i64x2.extend_high_i32x4_u
    (input2)
  )
)
```

## Syntax

```plain
i64x2.extmul_high_i32x4_u
```

- `i64x2.extmul_high_i32x4_u`
  - : Die `i64x2.extmul_high_i32x4_u`-Instruktion.

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

| Instruktion                 | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i64x2.extmul_high_i32x4_u` | `0xfd 223:u32` | `i64x2.extmul_high_i32x4_u` => `0xfd 0xdf 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetikinstruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
