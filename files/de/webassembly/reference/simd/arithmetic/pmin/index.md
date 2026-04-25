---
title: "pmin: Wasm SIMD arithmetische Anweisung"
short-title: pmin
slug: WebAssembly/Reference/SIMD/arithmetic/pmin
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`pmin`**-Anweisung vergleicht zwei unterschiedlichen Interpretationen von gleitkommazahlen in [`v128`](/de/docs/WebAssembly/Reference/Types/v128) und liefert eine neue Interpretation zurück, bei der jede Ausgabespalte auf die kleinere der entsprechenden Eingabespalten gesetzt wird. Sie ist definiert als `b < a ? b : a`, was bedeutet, dass NaN im ersten Operanden an die Ausgabe weitergeleitet wird, während NaN im zweiten Operanden nicht weitergeleitet wird — im Gegensatz zu [`min`](/de/docs/WebAssembly/Reference/Numeric/min), das NaN von beiden Operanden weiterleitet.

{{InteractiveExample("Wat Demo: pmin", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load two v128 f32x4s onto the stack
    v128.const f32x4 52.6 101.2 78.0 9.9
    v128.const f32x4 51.9 102.0 78.1 -0.9

    ;; return a f32x4 containing the smallest values from each input lane
    f32x4.pmin
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
value_type.pmin
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `pmin`:
    - `f32x4`
    - `f64x2`
- `pmin`
  - : Die `pmin`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

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
| `f32x4.pmin` | `0xfd 234:u32` | `f32x4.pmin` => `0xfd 0xea 0x01` |
| `f64x2.pmin` | `0xfd 246:u32` | `f64x2.pmin` => `0xfd 0xf6 0x01` |

## Siehe auch

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
- [`min_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
- [`min_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
