---
title: "pmax: Wasm SIMD Arithmetikinstruktion"
short-title: pmax
slug: WebAssembly/Reference/SIMD/arithmetic/pmax
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`pmax`**-Instruktion vergleicht zwei [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Gleitkommawert-Interpretationen und liefert eine neue Interpretation zurück, bei der jeder Ausgabekanal auf den größeren der entsprechenden Eingabekanäle gesetzt ist. Sie ist definiert als `a < b ? b : a`, was bedeutet, dass NaN im ersten Operanden an die Ausgabe weitergegeben wird, aber NaN im zweiten Operanden nicht — im Gegensatz zu [`max`](/de/docs/WebAssembly/Reference/Numeric/max), das NaN aus beiden Operanden weitergibt.

{{InteractiveExample("Wat Demo: pmax", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load two v128 f32x4s onto the stack
    v128.const f32x4 52.6 101.2 78.0 9.9
    v128.const f32x4 51.9 102.0 78.1 -0.9

    ;; return a f32x4 containing the largest values from each input lane
    f32x4.pmax
    f32x4.extract_lane 3 ;; Extract a single lane
    call $log ;; log the result
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
value_type.pmax
```

- `value_type`
  - : Der Werttyp, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `pmax`:
    - `f32x4`
    - `f64x2`
- `pmax`
  - : Die `pmax`-Instruktion. Muss stets nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert.

### Binärkodierung

| Instruktion  | Binärformat    | Beispieltext => binär            |
| ------------ | -------------- | -------------------------------- |
| `f32x4.pmax` | `0xfd 235:u32` | `f32x4.pmax` => `0xfd 0xeb 0x01` |
| `f64x2.pmax` | `0xfd 247:u32` | `f64x2.pmax` => `0xfd 0xf7 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
- [`max_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
- [`max_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
