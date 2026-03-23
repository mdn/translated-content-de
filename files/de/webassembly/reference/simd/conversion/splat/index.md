---
title: "splat: Wasm SIMD-Umwandlungsanweisung"
short-title: splat
slug: WebAssembly/Reference/SIMD/conversion/splat
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`splat`** [SIMD-Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) kopiert denselben Wert in alle Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation.

{{InteractiveExample("Wat Demo: splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    (local $s v128)
    f32.const 16.2
    f32x4.splat
    local.set $s

    local.get $s
    f32x4.extract_lane 0
    call $log ;; log the result

    local.get $s
    f32x4.extract_lane 1
    call $log ;; log the result

    local.get $s
    f32x4.extract_lane 2
    call $log ;; log the result

    local.get $s
    f32x4.extract_lane 3
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
value_type.splat
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `splat`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
    - `f32x4`
    - `f64x2`
- `splat`
  - : Die `splat`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input, value] -> [output]
```

- `input`
  - : Die Eingabe `v128`-Wertinterpretation.
- `value`
  - : Der Wert, den Sie in alle Lanes des `v128` kopieren möchten.
- `output`
  - : Die resultierende `v128`-Wertinterpretation, nachdem alle Lanes des Eingabewerts auf den `value` gesetzt wurden.

### Binärkodierung

| Anweisung     | Binärformat   | Beispieltext => binär        |
| ------------- | ------------- | ---------------------------- |
| `i8x16.splat` | `0xfd 15:u32` | `i8x16.splat` => `0xfd 0x0f` |
| `i16x8.splat` | `0xfd 16:u32` | `i16x8.splat` => `0xfd 0x10` |
| `i32x4.splat` | `0xfd 17:u32` | `i32x4.splat` => `0xfd 0x11` |
| `i64x2.splat` | `0xfd 18:u32` | `i64x2.splat` => `0xfd 0x12` |
| `f32x4.splat` | `0xfd 19:u32` | `f32x4.splat` => `0xfd 0x13` |
| `f64x2.splat` | `0xfd 20:u32` | `f64x2.splat` => `0xfd 0x14` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
