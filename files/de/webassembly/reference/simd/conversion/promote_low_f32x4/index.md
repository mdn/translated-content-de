---
title: "promote_low_f32x4: Wasm SIMD Konvertierungsanweisung"
short-title: promote_low_f32x4
slug: WebAssembly/Reference/SIMD/conversion/promote_low_f32x4
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`promote_low_f32x4`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die ersten zwei Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `f32x4` Wertinterpretation in eine `f64x2` Wertinterpretation.

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen unterstützen `promote_low_f32x4`:
    - `f64x2`
- `promote_low_f32x4`
  - : Die `promote_low_f32x4` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `f64x2` Wertinterpretation.

### Binärcodierung

| Anweisung                 | Binärformat   | Beispieltext => binär                    |
| ------------------------- | ------------- | ---------------------------------------- |
| `f64x2.promote_low_f32x4` | `0xfd 95:u32` | `f64x2.promote_low_f32x4` => `0xfd 0x5f` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
