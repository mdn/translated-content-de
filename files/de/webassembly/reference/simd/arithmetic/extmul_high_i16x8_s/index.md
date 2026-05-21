---
title: "extmul_high_i16x8_s: Wasm SIMD Arithmetikanweisung"
short-title: extmul_high_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extmul_high_i16x8_s`** [SIMD Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) nimmt die Spuren 4–7 von zwei vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertinterpretationen, multipliziert die Werte in den entsprechenden Spuren und gibt das Ergebnis dieser Operationen in einer `i32x4` Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extmul_high_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 3 3 3 3 6 6 6 6
    v128.const i16x8 2 2 2 2 4 4 4 4

    i32x4.extmul_high_i16x8_s
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel werden die Spuren 4–7 der beiden `i16x8` Eingabewerte miteinander multipliziert und die Produkte als `i32x4` ausgegeben. Spur `4` des ersten Eingabewerts wird mit Spur `4` des zweiten Eingabewerts multipliziert und das Produkt wird zu Spur `0` der Ausgabe und so weiter. Dadurch enthält jede Spur der Ausgabe den Wert `24` (`6 * 4`).

Die Anweisung `extmul_high_i16x8_s` ist eine leistungsfähigere Entsprechung zum Durchlauf der Ergebnisse von zwei [`extend_high_i16x8_s`](/de/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_s) Anweisungen in eine [`mul`](/de/docs/WebAssembly/Reference/Numeric/mul) Anweisung.

Anders ausgedrückt:

```wat
(i32x4.extmul_high_i16x8_s
  (input1)
  (input2)
)
```

ist gleichbedeutend mit

```wat
(i32x4.mul
  (i32x4.extend_high_i16x8_s
    (input1)
  )
  (i32x4.extend_high_i16x8_s
    (input2)
  )
)
```

## Syntax

```plain
i32x4.extmul_high_i16x8_s
```

- `i32x4.extmul_high_i16x8_s`
  - : Die `i32x4.extmul_high_i16x8_s` Anweisung.

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

### Binärcode

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i32x4.extmul_high_i16x8_s` | `0xfd 189:u32` | `i32x4.extmul_high_i16x8_s` => `0xfd 0xbd 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetikanweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
