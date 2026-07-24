---
title: "extend_high_i8x16_s: Wasm SIMD Konvertierungsanweisung"
short-title: extend_high_i8x16_s
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_s
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`extend_high_i8x16_s`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Bahnen 8–15 einer signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16` Wertinterpretation in eine `i16x8` Wertinterpretation.

{{InteractiveExample("Wat Demo: extend_high_i8x16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32

    i16x8.extend_high_i8x16_s
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
i16x8.extend_high_i8x16_s
```

- `i16x8.extend_high_i8x16_s`
  - : Die `i16x8.extend_high_i8x16_s` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i8x16` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Wertinterpretation.

### Binärcode

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i16x8.extend_high_i8x16_s` | `0xfd 136:u32` | `i16x8.extend_high_i8x16_s` => `0xfd 0x88 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
