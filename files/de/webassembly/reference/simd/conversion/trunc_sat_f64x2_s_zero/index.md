---
title: "trunc_sat_f64x2_s_zero: Wasm-SIMD-Konvertierungsanweisung"
short-title: trunc_sat_f64x2_s_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Die **`trunc_sat_f64x2_s_zero`**-[SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Konvertierung der Lanes einer `f64x2`-Wertinterpretation von [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) in eine vorzeichenbehaftete `i32x4`-Wertinterpretation durch und begrenzt die Ausgabe auf den durch den Werttyp zulässigen Bereich. Die beiden höheren Lanes des Ergebnisses werden mit null initialisiert.

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation zulässig sind. Zulässige Ausgabewerte sind `−2,147,483,648` bis `2,147,483,647` (der vollständige Bereich einer vorzeichenbehafteten 32-Bit-Ganzzahl). {{jsxref("NaN")}}-Werte werden in `0` konvertiert.

{{InteractiveExample("Wat Demo: trunc_sat_f64x2_s_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f64x2 1300.5 1345400000.9

    i32x4.trunc_sat_f64x2_s_zero
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
value_type.trunc_sat_f64x2_s_zero
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `trunc_sat_f64x2_s_zero`:
    - `i32x4`
- `trunc_sat_f64x2_s_zero`
  - : Die Anweisung `trunc_sat_f64x2_s_zero`. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`f64x2`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-`i32x4`-Wertinterpretation.

### Binärkodierung

| Anweisung                      | Binärformat    | Beispieltext => Binär                              |
| ------------------------------ | -------------- | -------------------------------------------------- |
| `i32x4.trunc_sat_f64x2_s_zero` | `0xfd 252:u32` | `i32x4.trunc_sat_f64x2_s_zero` => `0xfd 0xfc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
