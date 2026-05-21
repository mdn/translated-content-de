---
title: "pmin: Wasm SIMD Arithmetische Anweisung"
short-title: pmin
slug: WebAssembly/Reference/SIMD/arithmetic/pmin
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`pmin`** Anweisung vergleicht zwei Gleitkomma-Wertinterpretationen von [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) und gibt eine neue Interpretation zurück, bei der jede Ausgabelane auf den kleineren der entsprechenden Eingabelanes gesetzt wird. Sie ist definiert als `b < a ? b : a`, was bedeutet, dass NaN im ersten Operand in die Ausgabe propagiert, aber NaN im zweiten Operand nicht — im Gegensatz zu [`min`](/de/docs/WebAssembly/Reference/Numeric/min), das NaN von beiden Operanden propagiert.

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `pmin`:
    - `f32x4`
    - `f64x2`
- `pmin`
  - : Die `pmin` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

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

| Anweisung    | Binärformat    | Beispieltext => binär            |
| ------------ | -------------- | -------------------------------- |
| `f32x4.pmin` | `0xfd 234:u32` | `f32x4.pmin` => `0xfd 0xea 0x01` |
| `f64x2.pmin` | `0xfd 246:u32` | `f64x2.pmin` => `0xfd 0xf6 0x01` |

## Siehe auch

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
- [`min_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
- [`min_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
