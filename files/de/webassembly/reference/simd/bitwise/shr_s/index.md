---
title: "shr_s: Wasm SIMD Bitweiser Befehl"
short-title: shr_s
slug: WebAssembly/Reference/SIMD/bitwise/shr_s
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Der **`shr_s`** [SIMD Bitweiser Befehl](/de/docs/WebAssembly/Reference/SIMD/bitwise) verschiebt die Bits in jeder Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretation nach rechts um denselben angegebenen Betrag und gibt signierte Werte aus. Dies ist ein arithmetisches rechtes Verschieben.

{{InteractiveExample("Wat Demo: shr_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 8 16 32 64
    i32.const 3

    i32x4.shr_s
    i32x4.extract_lane 3
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
value_type.shr_s
```

- `value_type`
  - : Der Wertetyp, auf dem der Befehl ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `shr_s`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `shr_s`
  - : Der `shr_s`-Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) folgen.

### Typ

```plain
[input, shift_value] -> [output]
```

- `input`
  - : Die Eingabe `v128` Wertinterpretation.
- `shift_value`
  - : Der Wert, um den Sie die Lanes verschieben möchten.
- `output`
  - : Die Ausgabe `v128` Wertinterpretation.

### Binäre Kodierung

| Befehl        | Binäre Formatierung | Beispieltext => Binär             |
| ------------- | ------------------- | --------------------------------- |
| `i8x16.shr_s` | `0xfd 108:u32`      | `i8x16.shr_s` => `0xfd 0x6c`      |
| `i16x8.shr_s` | `0xfd 140:u32`      | `i16x8.shr_s` => `0xfd 0x8c 0x01` |
| `i32x4.shr_s` | `0xfd 172:u32`      | `i32x4.shr_s` => `0xfd 0xac 0x01` |
| `i64x2.shr_s` | `0xfd 204:u32`      | `i64x2.shr_s` => `0xfd 0xcc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`shl`](/de/docs/WebAssembly/Reference/SIMD/bitwise/shl)
- [`shr_u`](/de/docs/WebAssembly/Reference/SIMD/bitwise/shr_u)
