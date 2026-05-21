---
title: "max_s: Wasm SIMD Arithmetik-Instruktion"
short-title: max_s
slug: WebAssembly/Reference/SIMD/arithmetic/max_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`max_s`**-Instruktion vergleicht zwei signierte Ganzzahlwertinterpretationen von [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) und gibt eine neue Interpretation zurück, bei der jede Lane auf den höheren Wert des Lane-Index der beiden Eingaben gesetzt ist.

{{InteractiveExample("Wat Demo: max_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two v128 i16x8s onto the stack
    v128.const i16x8 10 400 0 86 87 9000 -5 19
    v128.const i16x8 200 20 0 -5 80 9 -6 283

    ;; return a i16x8 containing the greatest values from each input
    i16x8.max_s
    i16x8.extract_lane_s 5 ;; Extract a single lane
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
value_type.max_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `max_s`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
- `max_s`
  - : Die `max_s`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert. Ein neues `v128` des gleichen Typs wie die Eingaben, wobei jede Lane auf den höheren Wert des Lane-Index der beiden Eingaben gesetzt ist.

### Binäre Kodierung

| Instruktion   | Binärformat    | Beispieltext => binär             |
| ------------- | -------------- | --------------------------------- |
| `i8x16.max_s` | `0xfd 120:u32` | `i8x16.max_s` => `0xfd 0x78`      |
| `i16x8.max_s` | `0xfd 152:u32` | `i16x8.max_s` => `0xfd 0x98 0x01` |
| `i32x4.max_s` | `0xfd 184:u32` | `i32x4.max_s` => `0xfd 0xb8 0x01` |

## Siehe auch

- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
- [`max_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
