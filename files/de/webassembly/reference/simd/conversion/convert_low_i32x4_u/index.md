---
title: "convert_low_i32x4_u: Wasm SIMD-Konvertierungsanweisung"
short-title: convert_low_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`convert_low_i32x4_u`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt die ersten beiden Spuren einer als `i32x4` interpretierten unsigned [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) in eine als `f64x2` interpretierte Wertdarstellung um.

{{InteractiveExample("Wat Demo: convert_low_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    v128.const i32x4 0x3 0x3a 0xa9 0xff

    f64x2.convert_low_i32x4_u
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
value_type.convert_low_i32x4_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen unterstützen `convert_low_i32x4_u`:
    - `f64x2`
- `convert_low_i32x4_u`
  - : Die `convert_low_i32x4_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-Wertinterpretation von `v128` `i32x4`.
- `output`
  - : Die Ausgabe-Wertinterpretation von `v128` `f64x2`. Die ersten beiden Werte der Eingabe `i32x4` sind in der Ausgabe `f64x2` enthalten.

### Binärcode-Kodierung

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `f64x2.convert_low_i32x4_u` | `0xfd 255:u32` | `f64x2.convert_low_i32x4_u` => `0xfd 0xff 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
