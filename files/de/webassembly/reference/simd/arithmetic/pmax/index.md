---
title: "pmax: Wasm SIMD Arithmetische Anweisung"
short-title: pmax
slug: WebAssembly/Reference/SIMD/arithmetic/pmax
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`pmax`**-Anweisung vergleicht zwei [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Gleitkommawertinterpretationen und gibt eine neue Interpretation zurück, bei der jeder Ausgabelane auf den größeren der entsprechenden Eingabelanes gesetzt wird. Sie ist definiert als `a < b ? b : a`, was bedeutet, dass `NaN` im ersten Operand an die Ausgabe weitergegeben wird, jedoch nicht `NaN` im zweiten Operanden — im Gegensatz zu [`max`](/de/docs/WebAssembly/Reference/Numeric/max), das `NaN` von einem der beiden Operanden weitergibt.

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
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `pmax`:
    - `f32x4`
    - `f64x2`
- `pmax`
  - : Die `pmax`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

### Binärcodierung

| Anweisung    | Binärformat    | Beispieltext => binär            |
| ------------ | -------------- | -------------------------------- |
| `f32x4.pmax` | `0xfd 235:u32` | `f32x4.pmax` => `0xfd 0xeb 0x01` |
| `f64x2.pmax` | `0xfd 247:u32` | `f64x2.pmax` => `0xfd 0xf7 0x01` |

## Siehe auch

- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
- [`max_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
- [`max_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
