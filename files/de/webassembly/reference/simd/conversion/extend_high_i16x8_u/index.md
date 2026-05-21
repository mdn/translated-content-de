---
title: "extend_high_i16x8_u: Wasm SIMD-Konvertierungsbefehl"
short-title: extend_high_i16x8_u
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`extend_high_i16x8_u`** [SIMD-Konvertierungsbefehl](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes 4–7 einer unvorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8`-Wertinterpretation in eine `i32x4`-Wertinterpretation.

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
  - : Der `i32x4.extend_high_i16x8_u`-Befehl.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i16x8`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4`-Wertinterpretation.

### Binärcode

| Befehl                      | Binärformat    | Beispieltext => Binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i32x4.extend_high_i16x8_u` | `0xfd 170:u32` | `i32x4.extend_high_i16x8_u` => `0xfd 0xaa 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
