---
title: "convert_i32x4_s: Wasm SIMD Konvertierungsanweisung"
short-title: convert_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/convert_i32x4_s
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`convert_i32x4_s`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Spuren einer vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4` Wertinterpretation in eine `f32x4` Wertinterpretation.

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
  - : Der Typ des Werts, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `convert_i32x4_s`:
    - `f32x4`
- `convert_i32x4_s`
  - : Die `convert_i32x4_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `f32x4` Wertinterpretation.

### Binärkodierung

| Anweisung               | Binärformat    | Beispieltext => Binär                       |
| ----------------------- | -------------- | ------------------------------------------- |
| `f32x4.convert_i32x4_s` | `0xfd 250:u32` | `f32x4.convert_i32x4_s` => `0xfd 0xfa 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
