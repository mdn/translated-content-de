---
title: "any_true: Wasm SIMD bitweise Anweisung"
short-title: any_true
slug: WebAssembly/Reference/SIMD/bitwise/any_true
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`any_true`** [SIMD Bitweise Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) prüft, ob ein `v128` Eingabewert irgendwelche ungleich null Bits enthält.

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
  - : Die Interpretation des `v128` Eingabewerts. Dies kann ein ganzzahliger Typ sein (zum Beispiel `i16x8`) oder ein Gleitkomma-Typ (zum Beispiel `f32x4`).
- `output`
  - : Der Ausgabewert. Dies ist ein `i32` Typ, der `1` ist, wenn der `v128` Eingabewert irgendwelche ungleich null Bits enthält, oder `0`, wenn alle Bits `0` sind.

### Binärcodierung

| Anweisung       | Binärformat   | Beispiel Text => binär         |
| --------------- | ------------- | ------------------------------ |
| `v128.any_true` | `0xfd 83:u32` | `v128.any_true` => `0xfd 0x53` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Bitweise Anweisungen](/de/docs/WebAssembly/Reference/SIMD/bitwise)
