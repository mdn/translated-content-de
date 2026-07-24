---
title: "trunc_sat_f32x4_u: Wasm SIMD Konvertierungsanweisung"
short-title: trunc_sat_f32x4_u
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`trunc_sat_f32x4_u`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Konvertierung der Bahnen einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `f32x4`-Wertinterpretation in eine ungesättigte `i32x4`-Wertinterpretation durch und begrenzt die Ausgabe auf den durch den Wertetyp erlaubten Bereich.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt sind, die durch die Wertinterpretation erlaubt sind. Erlaubte Ausgabewerte reichen von `0` bis `4.294.967.295` (der volle Bereich eines ungesättigten 32-Bit-Ganzzahlwerts). {{jsxref("NaN")}}-Werte werden in `0` umgewandelt.

## Syntax

```plain
value_type.trunc_sat_f32x4_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen unterstützen `trunc_sat_f32x4_u`:
    - `i32x4`
- `trunc_sat_f32x4_u`
  - : Die `trunc_sat_f32x4_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4`-Wertinterpretation.

### Binärcodierung

| Anweisung                 | Binärformat    | Beispieltext => binär                         |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_u` | `0xfd 249:u32` | `i32x4.trunc_sat_f32x4_u` => `0xfd 0xf9 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
