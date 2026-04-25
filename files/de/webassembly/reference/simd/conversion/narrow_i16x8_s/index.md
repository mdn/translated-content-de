---
title: "narrow_i16x8_s: Wasm SIMD Konvertierungsanweisung"
short-title: narrow_i16x8_s
slug: WebAssembly/Reference/SIMD/conversion/narrow_i16x8_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`narrow_i16x8_s`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert zwei signierte [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8` Wertinterpretationen in eine `i8x16` Wertinterpretation.

{{InteractiveExample("Wat Demo: narrow_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 2 4 6 8 10 12 14 16
    v128.const i16x8 18 20 22 24 26 28 30 32

    i8x16.narrow_i16x8_s
    i8x16.extract_lane_s 15
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
i8x16.narrow_i16x8_s
```

- `i8x16.narrow_i16x8_s`
  - : Die `i8x16.narrow_i16x8_s` Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i16x8` Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i16x8` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i8x16` Wertinterpretation.

### Binäre Codierung

| Anweisung              | Binärformat    | Beispieltext => binär                 |
| ---------------------- | -------------- | ------------------------------------- |
| `i8x16.narrow_i16x8_s` | `0xfd 101:u32` | `i8x16.narrow_i16x8_s` => `0xfd 0x65` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
