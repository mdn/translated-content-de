---
title: "extmul_high_i16x8_u: Wasm SIMD arithmetische Anweisung"
short-title: extmul_high_i16x8_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extmul_high_i16x8_u`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Bahnen 4–7 von zwei unsigned [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Bahnen und gibt das Ergebnis dieser Operationen als `i32x4` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_high_i16x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 3 3 3 3 6 6 6 6
    v128.const i16x8 2 2 2 2 4 4 4 4

    i32x4.extmul_high_i16x8_u
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Bahnen 4–7 der zwei `i16x8` Eingabewerte miteinander multipliziert und die Produkte als `i32x4` ausgegeben. Die Bahn `4` des ersten Eingabewerts wird mit der Bahn `4` des zweiten Eingabewerts multipliziert, und das Produkt wird zu Bahn `0` der Ausgabe, und so weiter. Als Ergebnis enthält jede Bahn der Ausgabe den Wert `24` (`6 * 4`).

Die Anweisung `extmul_high_i16x8_u` ist eine performantere Variante im Vergleich dazu, die Ergebnisse von zwei [`extend_high_i16x8_u`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_u) Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung zu übergeben.

Anders ausgedrückt:

```wat
(i32x4.extmul_high_i16x8_u
  (input1)
  (input2)
)
```

ist äquivalent zu

```wat
(i32x4.mul
  (i32x4.extend_high_i16x8_u
    (input1)
  )
  (i32x4.extend_high_i16x8_u
    (input2)
  )
)
```

## Syntax

```plain
i32x4.extmul_high_i16x8_u
```

- `i32x4.extmul_high_i16x8_u`
  - : Die `i32x4.extmul_high_i16x8_u` Anweisung.

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

### Binäre Kodierung

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i32x4.extmul_high_i16x8_u` | `0xfd 191:u32` | `i32x4.extmul_high_i16x8_u` => `0xfd 0xbf 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD arithmetische Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
