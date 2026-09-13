---
title: "trunc_sat_f32x4_s: Wasm-SIMD-Konvertierungsinstruktion"
short-title: trunc_sat_f32x4_s
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Die **`trunc_sat_f32x4_s`**-[SIMD-Konvertierungsinstruktion](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Konvertierung der Lanes einer `f32x4`-Wertinterpretation von [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) in eine vorzeichenbehaftete `i32x4`-Wertinterpretation durch, wobei die Ausgabe auf den vom Werttyp erlaubten Bereich begrenzt wird.

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die von der Wertinterpretation erlaubt sind. Zulässige Ausgabewerte sind `−2,147,483,648` bis `2,147,483,647` (der vollständige Bereich einer vorzeichenbehafteten 32-Bit-Ganzzahl). {{jsxref("NaN")}}-Werte werden in `0` konvertiert.

{{InteractiveExample("Wat Demo: trunc_sat_f32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f32x4 1300.5 60.4 0.5 780000.4

    i32x4.trunc_sat_f32x4_s
    i32x4.extract_lane 2
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
value_type.trunc_sat_f32x4_s
```

- `value_type`
  - : Der Werttyp, auf dem die Instruktion ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `trunc_sat_f32x4_s`:
    - `i32x4`
- `trunc_sat_f32x4_s`
  - : Die Instruktion `trunc_sat_f32x4_s`. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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
| `i32x4.trunc_sat_f32x4_s` | `0xfd 248:u32` | `i32x4.trunc_sat_f32x4_s` => `0xfd 0xf8 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
