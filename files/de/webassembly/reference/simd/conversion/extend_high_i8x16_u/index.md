---
title: "extend_high_i8x16_u: Wasm SIMD Konvertierungsanweisung"
short-title: extend_high_i8x16_u
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extend_high_i8x16_u`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes 8–15 einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16` Wertinterpretation in eine `i16x8` Wertinterpretation.

{{InteractiveExample("Wat Demo: extend_high_i8x16_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32

    i16x8.extend_high_i8x16_u
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
i16x8.extend_high_i8x16_u
```

- `i16x8.extend_high_i8x16_u`
  - : Die `i16x8.extend_high_i8x16_u` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i8x16` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Wertinterpretation.

### Binärcodierung

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i16x8.extend_high_i8x16_u` | `0xfd 138:u32` | `i16x8.extend_high_i8x16_u` => `0xfd 0x8a 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
