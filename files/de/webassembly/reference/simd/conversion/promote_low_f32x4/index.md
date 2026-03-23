---
title: "promote_low_f32x4: Wasm SIMD-Umwandlungsanweisung"
short-title: promote_low_f32x4
slug: WebAssembly/Reference/SIMD/conversion/promote_low_f32x4
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`promote_low_f32x4`** [SIMD-Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die ersten beiden Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f32x4`-Wertdarstellung in eine `f64x2`-Wertdarstellung.

{{InteractiveExample("Wat Demo: promote_low_f32x4", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    v128.const f32x4 0x3 0x3a 0x4b 0x5a

    f64x2.promote_low_f32x4
    f64x2.extract_lane 1
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
value_type.promote_low_f32x4
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertdarstellungen unterstützen `promote_low_f32x4`:
    - `f64x2`
- `promote_low_f32x4`
  - : Die `promote_low_f32x4`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f32x4`-Wertdarstellung.
- `output`
  - : Die Ausgabe `v128` `f64x2`-Wertdarstellung.

### Binäre Kodierung

| Anweisung                 | Binärformat   | Beispieltext => binär                    |
| ------------------------- | ------------- | ---------------------------------------- |
| `f64x2.promote_low_f32x4` | `0xfd 95:u32` | `f64x2.promote_low_f32x4` => `0xfd 0x5f` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
