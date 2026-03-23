---
title: "shr_u: Wasm SIMD Bitweise-Anweisung"
short-title: shr_u
slug: WebAssembly/Reference/SIMD/bitwise/shr_u
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`shr_u`** [SIMD Bitweise-Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) verschiebt die Bits in jeder Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation um denselben angegebenen Betrag nach rechts und gibt unsignierte Werte aus. Dies ist ein logischer Rechtsschift.

{{InteractiveExample("Wat Demo: shr_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 8 16 32 64
    i32.const 3

    i32x4.shr_u
    i32x4.extract_lane 2
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
value_type.shr_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `shr_u`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `shr_u`
  - : Die `shr_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input, shift_value] -> [output]
```

- `input`
  - : Die Eingabewertinterpretation von `v128`.
- `shift_value`
  - : Der Wert, um den Sie die Lanes verschieben möchten.
- `output`
  - : Die Ausgabewertinterpretation von `v128`.

### Binärcodierung

| Anweisung     | Binärformat    | Beispieltext => Binär             |
| ------------- | -------------- | --------------------------------- |
| `i8x16.shr_u` | `0xfd 109:u32` | `i8x16.shr_u` => `0xfd 0x6d`      |
| `i16x8.shr_u` | `0xfd 141:u32` | `i16x8.shr_u` => `0xfd 0x8d 0x01` |
| `i32x4.shr_u` | `0xfd 173:u32` | `i32x4.shr_u` => `0xfd 0xad 0x01` |
| `i64x2.shr_u` | `0xfd 205:u32` | `i64x2.shr_u` => `0xfd 0xcd 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shl`](/de/docs/WebAssembly/Reference/SIMD/bitwise/shl)
- [`shr_s`](/de/docs/WebAssembly/Reference/SIMD/bitwise/shr_s)
