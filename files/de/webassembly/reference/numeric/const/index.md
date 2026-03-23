---
title: "const: Wasm-Text-Instruktion"
short-title: const
slug: WebAssembly/Reference/Numeric/const
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`const`** [WebAssembly numerische Instruktion](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um Zahlen zu deklarieren.

{{InteractiveExample("Wat Demo: const", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i32.const 10 ;; load a number onto the stack
    call $log ;; log the number

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
value_type.const
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `const`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - `v128`
- `const`
  - : Die `const`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[] -> [value]
```

- `value`
  - : Der Wert, der auf den Stack geschoben wird:
    - Für einen nicht-SIMD `value_type` wird dies ein grundlegender numerischer Wert sein, wie `3` oder `3.5`.
    - Für einen [SIMD](/de/docs/WebAssembly/Reference/SIMD) `value_type` wird dies eine [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation gefolgt von einem SIMD-Wert sein, zum Beispiel `f32x4 0x9 0xa 0xb 0xc`.

### Binäre Kodierung

| Instruktion  | Binäres Äquivalent     | Beispieltext => binär                                                                                                             |
| ------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `i32.const`  | `0x41 i:leb128`        | `i32.const 2` => `0x41 0x02`                                                                                                      |
| `i64.const`  | `0x42 i:leb128`        | `i64.const 1` => `0x42 0x01`                                                                                                      |
| `f32.const`  | `0x43 f:float32`       | `f32.const 2.0` => `0x43 0x00 0x00 0x00 0x40`                                                                                     |
| `f64.const`  | `0x44 f:float64`       | `f64.const 1.0` => `0x44 0x00 0x00 0x00 0x00 0x00 0x00 0xF0 0x3F`                                                                 |
| `v128.const` | `0xFD 0x0C (b:byte)¹⁶` | `v128.const f32x4 0x9 0xa 0xb 0xc` => `0xFD 0x0C 0x00 0x00 0x10 0x41 0x00 0x00 0x20 0x41 0x00 0x00 0x30 0x41 0x00 0x00 0x40 0x41` |
