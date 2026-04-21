---
title: "extend_high_i16x8_u: Wasm SIMD Umwandlungsanweisung"
short-title: extend_high_i16x8_u
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extend_high_i16x8_u`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt die Lanes 4–7 einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8` Wertinterpretation in eine `i32x4` Wertinterpretation um.

{{InteractiveExample("Wat Demo: extend_high_i16x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 200 210 220 230 240 250 260 270

    i32x4.extend_high_i16x8_u
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
i32x4.extend_high_i16x8_u
```

- `i32x4.extend_high_i16x8_u`
  - : Die `i32x4.extend_high_i16x8_u` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i16x8` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binärcodierung

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i32x4.extend_high_i16x8_u` | `0xfd 170:u32` | `i32x4.extend_high_i16x8_u` => `0xfd 0xaa 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
