---
title: "extmul_low_i16x8_u: Wasm SIMD arithmetische Anweisung"
short-title: extmul_low_i16x8_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_u
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extmul_low_i16x8_u`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Bahnen 0–3 von zwei unsignierten `i16x8`-Werten mit [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Elementtypen, multipliziert die Werte in den entsprechenden Bahnen und gibt das Ergebnis dieser Operationen in einer `i32x4`-Wertinterpretation aus.

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

Im obigen Beispiel werden die Bahnen 0–3 der beiden `i16x8`-Eingangswerte miteinander multipliziert und die Produkte als `i32x4` ausgegeben. Bahn `0` des ersten Eingangs wird mit Bahn `0` des zweiten Eingangs multipliziert, und das Produkt wird zu Bahn `0` der Ausgabe, und so weiter. Als Ergebnis enthält jede Bahn der Ausgabe den Wert `6` (`3 * 2`).

Die `extmul_low_i16x8_u`-Anweisung ist eine leistungsfähigere Alternative zum Übergang der Ergebnisse von zwei [`extend_low_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_u)-Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul)-Anweisung.

Mit anderen Worten:

```wat
(i32x4.extmul_low_i16x8_u
  (input1)
  (input2)
)
```

ist gleichwertig zu

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
  - : Die erste Eingangs-`v128` `i16x8`-Wertinterpretation.
- `input2`
  - : Die zweite Eingangs-`v128` `i16x8`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128` `i32x4`-Wertinterpretation.

### Binäre Codierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extmul_low_i16x8_u` | `0xfd 190:u32` | `i32x4.extmul_low_i16x8_u` => `0xfd 0xbe 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
