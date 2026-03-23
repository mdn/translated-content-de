---
title: "floor: Wasm SIMD Umwandlungsanweisung"
short-title: floor
slug: WebAssembly/Reference/SIMD/conversion/floor
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`floor`** [SIMD-Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) rundet den Wert in jedem Feld einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation nach unten auf die nächste ganze Zahl.

{{InteractiveExample("Wat Demo: floor", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const f32x4 1.9 2.5 0.5 12.1

    f32x4.floor
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
value_type.floor
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `floor`:
    - `f32x4`
    - `f64x2`
- `floor`
  - : Die `floor`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-Wertinterpretation.

### Binäre Kodierung

| Anweisung     | Binärformat    | Beispieltext => binär        |
| ------------- | -------------- | ---------------------------- |
| `f32x4.floor` | `0xfd 104:u32` | `f32x4.floor` => `0xfd 0x68` |
| `f64x2.floor` | `0xfd 117:u32` | `f64x2.floor` => `0xfd 0x75` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
