---
title: "extend_low_i16x8_s: Wasm SIMD-Konvertierungsanweisung"
short-title: extend_low_i16x8_s
slug: WebAssembly/Reference/SIMD/conversion/extend_low_i16x8_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extend_low_i16x8_s`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes 0–3 einer signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8`-Wert-Interpretation in eine `i32x4`-Wert-Interpretation.

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
  - : Die `i32x4.extend_low_i16x8_s`-Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i16x8`-Wert-Interpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4`-Wert-Interpretation.

### Binäre Codierung

| Anweisung                  | Binärformat    | Beispieltext => binär                          |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extend_low_i16x8_s` | `0xfd 167:u32` | `i32x4.extend_low_i16x8_s` => `0xfd 0xa7 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
