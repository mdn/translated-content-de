---
title: "any_true: Wasm SIMD Bitweise-Anweisung"
short-title: any_true
slug: WebAssembly/Reference/SIMD/bitwise/any_true
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

Die **`any_true`** [SIMD Bitweise-Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) prüft, ob ein `v128`-Eingabewert nicht-null Bits enthält.

{{InteractiveExample("Wat Demo: any_true", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f32x4 0 0 0 1.2
    v128.any_true

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
v128.any_true
```

- `v128.any_true`
  - : Die `v128.any_true`-Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Interpretation des `v128`-Eingabewertes. Dies kann ein ganzzahliger Typ (zum Beispiel, `i16x8`) oder ein Gleitkommatyp (zum Beispiel, `f32x4`) sein.
- `output`
  - : Der Ausgabe-Wert. Dieser ist ein `i32`-Typ, der `1` ist, wenn der `v128`-Eingabewert nicht-null Bits enthält, oder `0`, wenn alle Bits `0` sind.

### Binärcodierung

| Anweisung       | Binärformat   | Beispieltext => binär          |
| --------------- | ------------- | ------------------------------ |
| `v128.any_true` | `0xfd 83:u32` | `v128.any_true` => `0xfd 0x53` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
