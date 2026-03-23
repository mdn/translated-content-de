---
title: "shl: Wasm SIMD Bitweisinstruktion"
short-title: shl
slug: WebAssembly/Reference/SIMD/bitwise/shl
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`shl`** [SIMD Bitweisinstruktion](/de/docs/WebAssembly/Reference/SIMD/bitwise) verschiebt die Bits in jeder Spur einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretation um den angegebenen Betrag nach links.

{{InteractiveExample("Wat Demo: shl", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 1 2 4 6
    i32.const 3

    i32x4.shl
    i32x4.extract_lane 1
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
value_type.shl
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `shl`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `shl`
  - : Die `shl` Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input, shift_value] -> [output]
```

- `input`
  - : Die Eingabe `v128` Wertinterpretation.
- `shift_value`
  - : Der Wert, um den Sie die Spuren verschieben möchten.
- `output`
  - : Die Ausgabe `v128` Wertinterpretation.

### Binäre Kodierung

| Instruktion | Binärformat    | Beispiel Text => Binär          |
| ----------- | -------------- | ------------------------------- |
| `i8x16.shl` | `0xfd 107:u32` | `i8x16.shl` => `0xfd 0x6b`      |
| `i16x8.shl` | `0xfd 139:u32` | `i16x8.shl` => `0xfd 0x8b 0x01` |
| `i32x4.shl` | `0xfd 171:u32` | `i32x4.shl` => `0xfd 0xab 0x01` |
| `i64x2.shl` | `0xfd 203:u32` | `i64x2.shl` => `0xfd 0xcb 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shr_s`](/de/docs/WebAssembly/Reference/SIMD/bitwise/shr_s)
- [`shr_u`](/de/docs/WebAssembly/Reference/SIMD/bitwise/shr_u)
