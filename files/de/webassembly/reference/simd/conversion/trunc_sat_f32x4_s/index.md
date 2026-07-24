---
title: "trunc_sat_f32x4_s: Wasm SIMD-Konvertierungsanweisung"
short-title: trunc_sat_f32x4_s
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`trunc_sat_f32x4_s`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [saturierende](https://de.wikipedia.org/wiki/S%C3%A4ttigungsarithmetik) Konvertierung der Kanäle einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `f32x4`-Wertinterpretation in eine signierte `i32x4`-Wertinterpretation durch und klemmt die Ausgabe in den durch den Werttyp erlaubten Bereich.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind. Erlaubte Ausgabewerte liegen im Bereich von `−2.147.483.648` bis `2.147.483.647` (der vollständige Bereich eines signierten 32-Bit-Integer). {{jsxref("NaN")}}-Werte werden in `0` konvertiert.

## Syntax

```plain
value_type.trunc_sat_f32x4_s
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `trunc_sat_f32x4_s`:
    - `i32x4`
- `trunc_sat_f32x4_s`
  - : Die `trunc_sat_f32x4_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) erscheinen.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabewertinterpretation `v128` `f32x4`.
- `output`
  - : Die Ausgabewertinterpretation `v128` `i32x4`.

### Binärcodierung

| Anweisung                 | Binärformat    | Beispieltext => Binär                         |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_s` | `0xfd 248:u32` | `i32x4.trunc_sat_f32x4_s` => `0xfd 0xf8 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
