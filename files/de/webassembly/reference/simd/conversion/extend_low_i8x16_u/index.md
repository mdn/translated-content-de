---
title: "extend_low_i8x16_u: Wasm SIMD-Konvertierungsanweisung"
short-title: extend_low_i8x16_u
slug: WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extend_low_i8x16_u`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes 0–7 einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i8x16` Werteinterpretation in eine `i16x8` Werteinterpretation.

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
  - : Die `i16x8.extend_low_i8x16_u` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i8x16` Werteinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Werteinterpretation.

### Binärcode

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extend_low_i8x16_u` | `0xfd 137:u32` | `i16x8.extend_low_i8x16_u` => `0xfd 0x89 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
