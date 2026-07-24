---
title: "extend_low_i8x16_s: Wasm SIMD Konvertierungsanweisung"
short-title: extend_low_i8x16_s
slug: WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_s
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`extend_low_i8x16_s`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes 0–7 einer vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16`-Wertinterpretation in eine `i16x8`-Wertinterpretation.

{{InteractiveExample("Wat Demo: extend_low_i8x16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32

    i16x8.extend_low_i8x16_s
    i16x8.extract_lane_s 0
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
i16x8.extend_low_i8x16_s
```

- `i16x8.extend_low_i8x16_s`
  - : Die `i16x8.extend_low_i8x16_s`-Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i8x16`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8`-Wertinterpretation.

### Binäre Codierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extend_low_i8x16_s` | `0xfd 135:u32` | `i16x8.extend_low_i8x16_s` => `0xfd 0x87 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
