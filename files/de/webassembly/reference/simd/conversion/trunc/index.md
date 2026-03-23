---
title: "trunc: Wasm SIMD Konvertierungsanweisung"
short-title: trunc
slug: WebAssembly/Reference/SIMD/conversion/trunc
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`trunc`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) rundet den Wert in jedem Kanal einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation auf die nächstgelegene ganze Zahl in Richtung Null mit einem Betragswert, der nicht größer als der Eingabewert ist.

{{InteractiveExample("Wat Demo: trunc", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const f32x4 0.5 4.9 34.3 33.5

    f32x4.trunc
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
value_type.trunc
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `trunc`:
    - `f32x4`
    - `f64x2`
- `trunc`
  - : Die `trunc`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` Wertinterpretation.

### Binäre Kodierung

| Anweisung     | Binärformat    | Beispieltext => binär        |
| ------------- | -------------- | ---------------------------- |
| `f32x4.trunc` | `0xfd 105:u32` | `f32x4.trunc` => `0xfd 0x69` |
| `f64x2.trunc` | `0xfd 122:u32` | `f64x2.trunc` => `0xfd 0x7a` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
