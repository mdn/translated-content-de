---
title: "extend_low_i8x16_u: Wasm SIMD Umwandlungsanweisung"
short-title: extend_low_i8x16_u
slug: WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_u
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`extend_low_i8x16_u`** [SIMD-Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes 0–7 einer als `i8x16` interpretierten `v128`-Wert zu einer als `i16x8` interpretierten Wertdarstellung.

{{InteractiveExample("Wat Demo: extend_low_i8x16_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32

    i16x8.extend_low_i8x16_u
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
i16x8.extend_low_i8x16_u
```

- `i16x8.extend_low_i8x16_u`
  - : Die `i16x8.extend_low_i8x16_u`-Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die als `i8x16` interpretierte Eingabe-Wertdarstellung von `v128`.
- `output`
  - : Die als `i16x8` interpretierte Ausgabe-Wertdarstellung von `v128`.

### Binäre Kodierung

| Anweisung                  | Binärformat    | Beispieltext => Binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extend_low_i8x16_u` | `0xfd 137:u32` | `i16x8.extend_low_i8x16_u` => `0xfd 0x89 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
