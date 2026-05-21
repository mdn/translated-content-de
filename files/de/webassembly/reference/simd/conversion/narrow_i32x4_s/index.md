---
title: "narrow_i32x4_s: Wasm SIMD-Umwandlungsanweisung"
short-title: narrow_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/narrow_i32x4_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`narrow_i32x4_s`** [SIMD-Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert zwei signierte [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4` Wertinterpretationen in eine `i16x8` Wertinterpretation.

{{InteractiveExample("Wat Demo: narrow_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 200 210 220 230
    v128.const i32x4 300 310 320 330

    i16x8.narrow_i32x4_s
    i16x8.extract_lane_s 7
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
i16x8.narrow_i32x4_s
```

- `i16x8.narrow_i32x4_s`
  - : Die `i16x8.narrow_i32x4_s` Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i32x4` Wertinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Wertinterpretation.

### Binäre Kodierung

| Anweisung              | Binärformat    | Beispieltext => binär                      |
| ---------------------- | -------------- | ------------------------------------------ |
| `i16x8.narrow_i32x4_s` | `0xfd 133:u32` | `i16x8.narrow_i32x4_s` => `0xfd 0x85 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
