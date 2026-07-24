---
title: "extend_high_i32x4_s: Wasm SIMD Konvertierungsanweisung"
short-title: extend_high_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_s
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`extend_high_i32x4_s`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes 2–3 einer signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4` Wertinterpretation in eine `i64x2` Wertinterpretation.

{{InteractiveExample("Wat Demo: extend_high_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 2090 2091 2092 2093

    i64x2.extend_high_i32x4_s
    i64x2.extract_lane 0
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
i64x2.extend_high_i32x4_s
```

- `i64x2.extend_high_i32x4_s`
  - : Die Anweisung `i64x2.extend_high_i32x4_s`.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i64x2` Wertinterpretation.

### Binäre Kodierung

| Anweisung                   | Binärformat    | Beispiel Text => binär                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i64x2.extend_high_i32x4_s` | `0xfd 200:u32` | `i64x2.extend_high_i32x4_s` => `0xfd 0xc8 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
