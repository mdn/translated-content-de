---
title: "extend_low_i16x8_s: Wasm SIMD Konvertierungsanweisung"
short-title: extend_low_i16x8_s
slug: WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extend_low_i16x8_s`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt die Lanes 0–3 einer signierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8` Wertinterpretation in eine `i32x4` Wertinterpretation um.

{{InteractiveExample("Wat Demo: extend_low_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 200 210 220 230 240 250 260 270

    i32x4.extend_low_i16x8_s
    i32x4.extract_lane 0
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
i32x4.extend_low_i16x8_s
```

- `i32x4.extend_low_i16x8_s`
  - : Die `i32x4.extend_low_i16x8_s` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i16x8` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binärcodierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extend_low_i16x8_s` | `0xfd 167:u32` | `i32x4.extend_low_i16x8_s` => `0xfd 0xa7 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
