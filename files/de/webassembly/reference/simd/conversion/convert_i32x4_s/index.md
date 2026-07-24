---
title: "convert_i32x4_s: Wasm SIMD-Umwandlungsanweisung"
short-title: convert_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/convert_i32x4_s
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`convert_i32x4_s`** [SIMD-Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt die Lanes einer als signiert interpretierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4`-Wertinterpretation in eine `f32x4`-Wertinterpretation um.

{{InteractiveExample("Wat Demo: convert_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const i32x4 0x3 0x3a 0xa9 0xff

    f32x4.convert_i32x4_s
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
value_type.convert_i32x4_s
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen unterstützen `convert_i32x4_s`:
    - `f32x4`
- `convert_i32x4_s`
  - : Die `convert_i32x4_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`i32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-`f32x4`-Wertinterpretation.

### Binäre Codierung

| Anweisung               | Binärformat    | Beispieltext => binär                       |
| ----------------------- | -------------- | ------------------------------------------- |
| `f32x4.convert_i32x4_s` | `0xfd 250:u32` | `f32x4.convert_i32x4_s` => `0xfd 0xfa 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
