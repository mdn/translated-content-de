---
title: "extmul_low_i16x8_s: Wasm SIMD Arithmetik-Instruktion"
short-title: extmul_low_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_s
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extmul_low_i16x8_s`** [SIMD Arithmetik-Instruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Lanes 0–3 von zwei vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Lanes und gibt das Ergebnis dieser Operationen in einer `i32x4` Wertinterpretation aus.

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

Im obigen Beispiel werden die Lanes 0–3 der beiden `i16x8` Eingabewerte miteinander multipliziert, und die Produkte werden als `i32x4` ausgegeben. Lane `0` des ersten Eingangs wird mit Lane `0` des zweiten Eingangs multipliziert, und das Produkt wird zu Lane `0` der Ausgabe, und so weiter. Dadurch enthält jede Lane der Ausgabe den Wert `6` (`3 * 2`).

Die `extmul_low_i16x8_s` Instruktion ist eine leistungsfähigere Variante, die Ergebnisse von zwei [`extend_low_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_s) Instruktionen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Instruktion zu führen.

Mit anderen Worten:

```wat
(i32x4.extmul_low_i16x8_s
  (input1)
  (input2)
)
```

ist gleichwertig mit

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
  - : Die `i32x4.extmul_low_i16x8_s` Instruktion.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste `v128` `i16x8` Wertinterpretation.
- `input2`
  - : Die zweite `v128` `i16x8` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binäre Codierung

| Instruktion                | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extmul_low_i16x8_s` | `0xfd 188:u32` | `i32x4.extmul_low_i16x8_s` => `0xfd 0xbc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
