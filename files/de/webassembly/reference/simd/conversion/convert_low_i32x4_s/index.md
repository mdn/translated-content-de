---
title: "convert_low_i32x4_s: Wasm SIMD Konvertierungsanweisung"
short-title: convert_low_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_s
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`convert_low_i32x4_s`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die ersten beiden Lanes einer vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4` Wertinterpretation in eine `f64x2` Wertinterpretation.

{{InteractiveExample("Wat Demo: convert_low_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    v128.const i32x4 0x3 0x3a 0xa9 0xff

    f64x2.convert_low_i32x4_s
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
value_type.convert_low_i32x4_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen unterstützen `convert_low_i32x4_s`:
    - `f64x2`
- `convert_low_i32x4_s`
  - : Die `convert_low_i32x4_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `f64x2` Wertinterpretation. Die ersten beiden Werte der Eingabe `i32x4` sind in der Ausgabe `f64x2` enthalten.

### Binärcode

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `f64x2.convert_low_i32x4_s` | `0xfd 254:u32` | `f64x2.convert_low_i32x4_s` => `0xfd 0xfe 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
