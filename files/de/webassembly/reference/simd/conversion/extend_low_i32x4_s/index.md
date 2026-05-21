---
title: "extend_low_i32x4_s: Wasm SIMD Umwandlungsanweisung"
short-title: extend_low_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extend_low_i32x4_s`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt die Lanes 0–1 einer vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4` Wertinterpretation in eine `i64x2` Wertinterpretation um.

{{InteractiveExample("Wat Demo: extend_low_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 2090 2091 2092 2093

    i64x2.extend_low_i32x4_s
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
i64x2.extend_low_i32x4_s
```

- `i64x2.extend_low_i32x4_s`
  - : Die `i64x2.extend_low_i32x4_s` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i64x2` Wertinterpretation.

### Binärcodierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i64x2.extend_low_i32x4_s` | `0xfd 199:u32` | `i64x2.extend_low_i32x4_s` => `0xfd 0xc7 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
