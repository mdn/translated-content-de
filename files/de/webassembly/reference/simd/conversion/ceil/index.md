---
title: "ceil: Wasm SIMD Umwandlungsanweisung"
short-title: ceil
slug: WebAssembly/Reference/SIMD/conversion/ceil
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`ceil`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) rundet den Wert in jedem Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretation auf die nächst höhere Ganzzahl auf.

{{InteractiveExample("Wat Demo: ceil", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const f32x4 1.9 2.5 0.5 12.1

    f32x4.ceil
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
value_type.ceil
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `ceil`:
    - `f32x4`
    - `f64x2`
- `ceil`
  - : Die `ceil` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` Wertinterpretation.

### Binärcodierung

| Anweisung    | Binärformat    | Beispieltext => binär       |
| ------------ | -------------- | --------------------------- |
| `f32x4.ceil` | `0xfd 103:u32` | `f32x4.ceil` => `0xfd 0x67` |
| `f64x2.ceil` | `0xfd 116:u32` | `f64x2.ceil` => `0xfd 0x74` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
