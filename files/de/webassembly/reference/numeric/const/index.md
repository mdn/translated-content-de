---
title: "const: Wasm-Text-Anweisung"
short-title: const
slug: WebAssembly/Reference/Numeric/const
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`const`** [WebAssembly numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) wird verwendet, um Zahlen zu deklarieren.

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
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `const`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)
- `const`
  - : Die `const`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[] -> [output]
```

- `output`
  - : Der Wert, der auf den Stack geschoben wird:
    - Für einen nicht-SIMD `value_type` ist dies ein einfacher numerischer Wert wie `3` oder `3.5`.
    - Für einen [SIMD](/de/docs/WebAssembly/Reference/SIMD) `value_type` ist dies ein [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Typ, gefolgt von einer SIMD-Wertinterpretation, zum Beispiel `i32x4 0x9 0xa 0xb 0xc`.

### Binäre Kodierung

| Anweisung    | Binärformat            | Beispieltext => binär                                                                                                             |
| ------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `i32.const`  | `0x41 i:leb128`        | `i32.const 2` => `0x41 0x02`                                                                                                      |
| `i64.const`  | `0x42 i:leb128`        | `i64.const 1` => `0x42 0x01`                                                                                                      |
| `f32.const`  | `0x43 f:float32`       | `f32.const 2.5` => `0x43 0x00 0x00 0x20 0x40`                                                                                     |
| `f64.const`  | `0x44 f:float64`       | `f64.const 2.5` => `0x44 0x00 0x00 0x00 0x00 0x00 0x00 0x04 0x40`                                                                 |
| `v128.const` | `0xfd 0x0c (b:byte)¹⁶` | `v128.const i32x4 0x9 0xa 0xb 0xc` => `0xfd 0x0c 0x09 0x00 0x00 0x00 0x0a 0x00 0x00 0x00 0x0b 0x00 0x00 0x00 0x0c 0x00 0x00 0x00` |
