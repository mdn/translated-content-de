---
title: "extmul_high_i32x4_u: Wasm SIMD arithmetische Anweisung"
short-title: extmul_high_i32x4_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_high_i32x4_u`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Bahnen 2–3 von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4`-Wertinterpretationen, multipliziert die Werte in den entsprechenden Bahnen und gibt das Ergebnis dieser Operationen in einer `i64x2`-Wertinterpretation aus.

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

Im obigen Beispiel werden die Bahnen 2–3 der beiden `i32x4`-Eingabewerte miteinander multipliziert und die Produkte als `i64x2` ausgegeben. Bahn `2` des ersten Eingangs wird mit Bahn `2` des zweiten Eingangs multipliziert, und das Produkt wird zu Bahn `0` der Ausgabe, und so weiter. Daher enthält jede Bahn des Ausgabewertes den Wert `2000` (`50 * 40`).

Die `extmul_high_i32x4_u`-Anweisung ist eine leistungsfähigere Entsprechung zum Durchschleusen der Ergebnisse von zwei [`extend_high_i32x4_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_u)-Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung.

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
  - : Die `i64x2.extmul_high_i32x4_u`-Anweisung.

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

### Binäre Kodierung

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i64x2.extmul_high_i32x4_u` | `0xfd 223:u32` | `i64x2.extmul_high_i32x4_u` => `0xfd 0xdf 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD arithmetische Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
