---
title: "any_true: Wasm SIMD bitweise Anweisung"
short-title: any_true
slug: WebAssembly/Reference/SIMD/bitwise/any_true
l10n:
  sourceCommit: 7d6773a8ee41048b915cd566b0c67f97be6ea249
---

Die **`any_true`** [SIMD bitweise Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) überprüft, ob ein `v128` Eingabewert irgendwelche von null verschiedene Bits enthält.

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
  - : Die `v128.any_true` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Interpretation des `v128` Eingabewertes. Dies kann ein Ganzzahltyp (zum Beispiel `i16x8`) oder ein Fließkommatyp (zum Beispiel `f32x4`) sein.
- `output`
  - : Der Ausgabewert. Dies ist ein `i32` Typ, der `1` ist, wenn der `v128` Eingabewert irgendwelche von null verschiedenen Bits enthält, oder `0`, wenn alle Bits `0` sind.

### Binäre Codierung

| Anweisung       | Binärformat   | Beispieltext => binär          |
| --------------- | ------------- | ------------------------------ |
| `v128.any_true` | `0xfd 83:u32` | `v128.any_true` => `0xfd 0x53` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
