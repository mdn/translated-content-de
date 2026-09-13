---
title: "trunc_sat_f64x2_u_zero: Wasm-SIMD-Konvertierungsinstruktion"
short-title: trunc_sat_f64x2_u_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Die **`trunc_sat_f64x2_u_zero`**-[SIMD-Konvertierungsinstruktion](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Konvertierung der Lanes einer `f64x2`-Wertinterpretation vom Typ [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) in eine vorzeichenlose `i32x4`-Wertinterpretation durch und begrenzt die Ausgabe auf den durch den Werttyp erlaubten Bereich. Die beiden höheren Lanes des Ergebnisses werden mit null initialisiert.

Sättigung bedeutet, dass die Ausgabewerte auf die durch die Wertinterpretation erlaubten oberen und unteren Werte begrenzt werden. Zulässige Ausgabewerte reichen von `0` bis `4,294,967,295` (dem vollständigen Bereich einer vorzeichenlosen 32-Bit-Ganzzahl). {{jsxref("NaN")}}-Werte werden in `0` konvertiert.

{{InteractiveExample("Wat Demo: trunc_sat_f64x2_u_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f64x2 1345400000.9 90000000000.5

    i32x4.trunc_sat_f64x2_u_zero
    i32x4.extract_lane 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```plain
value_type.trunc_sat_f64x2_u_zero
```

- `value_type`
  - : Der Werttyp, auf dem die Instruktion ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `trunc_sat_f64x2_u_zero`:
    - `i32x4`
- `trunc_sat_f64x2_u_zero`
  - : Die `trunc_sat_f64x2_u_zero`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`f64x2`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-`i32x4`-Wertinterpretation.

### Binäre Kodierung

| Instruktion                    | Binärformat    | Beispieltext => binär                              |
| ------------------------------ | -------------- | -------------------------------------------------- |
| `i32x4.trunc_sat_f64x2_u_zero` | `0xfd 253:u32` | `i32x4.trunc_sat_f64x2_u_zero` => `0xfd 0xfd 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
