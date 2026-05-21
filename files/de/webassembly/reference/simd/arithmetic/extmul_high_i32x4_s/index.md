---
title: "extmul_high_i32x4_s: Wasm SIMD-Arithmetikanweisung"
short-title: extmul_high_i32x4_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extmul_high_i32x4_s`** [SIMD-Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 2–3 von zwei signierten Interpretationen des `i32x4`-Wertes in `v128`, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in einer `i64x2`-Wertinterpretation aus.

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

Im obigen Beispiel werden die Lanes 2–3 der beiden `i32x4`-Eingabewerte miteinander multipliziert und die Produkte als `i64x2` ausgegeben. Lane `2` des ersten Eingabewerts wird mit Lane `2` des zweiten Eingabewerts multipliziert und das Produkt wird zu Lane `0` des Ausgabewerts, und so weiter. Dadurch enthält jede Lane des Ausgabewerts den Wert `2000` (`50 * 40`).

Die Anweisung `extmul_high_i32x4_s` ist eine leistungsfähigere Entsprechung des Übergabeergebnisses von zwei [`extend_high_i32x4_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_s)-Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung.

Mit anderen Worten:

```wat
(i64x2.extmul_high_i32x4_s
  (input1)
  (input2)
)
```

entspricht

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
  - : Die Anweisung `i64x2.extmul_high_i32x4_s`.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste `v128` `i32x4`-Wertinterpretation des Eingabewerts.
- `input2`
  - : Die zweite `v128` `i32x4`-Wertinterpretation des Eingabewerts.
- `output`
  - : Die `v128` `i64x2`-Wertinterpretation des Ausgabewerts.

### Binärcodierung

| Anweisung                   | Binärformat    | Beispieltext => Binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i64x2.extmul_high_i32x4_s` | `0xfd 221:u32` | `i64x2.extmul_high_i32x4_s` => `0xfd 0xdd 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetikanweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
