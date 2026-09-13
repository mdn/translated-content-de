---
title: "trunc_sat_f32x4_u: Wasm-SIMD-Konvertierungsinstruktion"
short-title: trunc_sat_f32x4_u
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Die **`trunc_sat_f32x4_u`**-[SIMD-Konvertierungsinstruktion](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Konvertierung der Lanes einer `f32x4`-Wertinterpretation von [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) in eine vorzeichenlose `i32x4`-Wertinterpretation durch, wobei die Ausgabe auf den durch den Werttyp zulässigen Bereich begrenzt wird.

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation zulässig sind. Zulässige Ausgabewerte reichen von `0` bis `4,294,967,295` (der vollständige Bereich einer vorzeichenlosen 32-Bit-Ganzzahl). {{jsxref("NaN")}}-Werte werden in `0` konvertiert.

{{InteractiveExample("Wat Demo: trunc_sat_f32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f32x4 1300.5 60.4 0.5 780000.4

    i32x4.trunc_sat_f32x4_u
    i32x4.extract_lane 3
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
value_type.trunc_sat_f32x4_u
```

- `value_type`
  - : Der Werttyp, auf dem die Instruktion ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `trunc_sat_f32x4_u`:
    - `i32x4`
- `trunc_sat_f32x4_u`
  - : Die Instruktion `trunc_sat_f32x4_u`. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`f32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-`i32x4`-Wertinterpretation.

### Binärkodierung

| Instruktion               | Binärformat    | Beispieltext => Binärdarstellung              |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_u` | `0xfd 249:u32` | `i32x4.trunc_sat_f32x4_u` => `0xfd 0xf9 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
