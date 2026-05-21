---
title: "extend_low_i32x4_u: Wasm SIMD Umwandlungsinstruktion"
short-title: extend_low_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extend_low_i32x4_u`** [SIMD Umwandlungsinstruktion](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt die Lanes 0–1 einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4`-Wertinterpretation in eine `i64x2`-Wertinterpretation um.

{{InteractiveExample("Wat Demo: extend_low_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 2090 2091 2092 2093

    i64x2.extend_low_i32x4_u
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
i64x2.extend_low_i32x4_u
```

- `i64x2.extend_low_i32x4_u`
  - : Die `i64x2.extend_low_i32x4_u` Instruktion.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die `v128` `i32x4` Eingabewertinterpretation.
- `output`
  - : Die `v128` `i64x2` Ausgabewertinterpretation.

### Binäre Kodierung

| Instruktion                | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i64x2.extend_low_i32x4_u` | `0xfd 201:u32` | `i64x2.extend_low_i32x4_u` => `0xfd 0xc9 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Umwandlungsinstruktionen](/de/docs/WebAssembly/Reference/SIMD/conversion)
