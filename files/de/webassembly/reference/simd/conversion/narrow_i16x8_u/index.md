---
title: "narrow_i16x8_u: Wasm SIMD Umwandlungsanweisung"
short-title: narrow_i16x8_u
slug: WebAssembly/Reference/SIMD/conversion/narrow_i16x8_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`narrow_i16x8_u`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt zwei signierte [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertdarstellungen in eine `i8x16` Wertdarstellung unter Verwendung von unsignierter Sättigung (Eingrenzung auf den Bereich zwischen `0` bis `255`) um.

{{InteractiveExample("Wat Demo: narrow_i16x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 2 4 6 8 10 12 14 16
    v128.const i16x8 18 20 22 24 26 28 30 32

    i8x16.narrow_i16x8_u
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
i8x16.narrow_i16x8_u
```

- `i8x16.narrow_i16x8_u`
  - : Die `i8x16.narrow_i16x8_u` Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i16x8` Wertdarstellung.
- `input2`
  - : Die zweite Eingabe `v128` `i16x8` Wertdarstellung.
- `output`
  - : Die Ausgabe `v128` `i8x16` Wertdarstellung.

### Binärcodekodierung

| Anweisung              | Binärformat    | Beispieltext => Binär                 |
| ---------------------- | -------------- | ------------------------------------- |
| `i8x16.narrow_i16x8_u` | `0xfd 102:u32` | `i8x16.narrow_i16x8_u` => `0xfd 0x66` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
