---
title: "min_s: Wasm SIMD Arithmetikanweisung"
short-title: min_s
slug: WebAssembly/Reference/SIMD/arithmetic/min_s
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`min_s`**-Anweisung vergleicht zwei interpretierte, vorzeichenbehaftete Ganzzahlwerte des Typs [`v128`](/de/docs/WebAssembly/Reference/Types/v128) und gibt eine neue Interpretation zurück, bei der jede Lane auf den niedrigeren Wert des Lane-Index bei den beiden Eingaben gesetzt wird.

{{InteractiveExample("Wat Demo: min_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two v128 i16x8s onto the stack
    v128.const i16x8 10 400 0 86 87 9000 -5 19
    v128.const i16x8 200 20 0 -5 80 9 -6 283

    ;; return a i16x8 containing the smallest values from each input
    i16x8.min_s
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
value_type.min_s
```

- `value_type`
  - : Der Datentyp, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `min_s`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
- `min_s`
  - : Die `min_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert. Ein neuer `v128` des gleichen Typs wie die Eingaben, bei dem jede Lane auf den niedrigeren Wert des Lane-Index bei den beiden Eingaben gesetzt wird.

### Binärcodierung

| Anweisung     | Binärformat    | Beispieltext => Binär             |
| ------------- | -------------- | --------------------------------- |
| `i8x16.min_s` | `0xfd 118:u32` | `i8x16.min_s` => `0xfd 0x76`      |
| `i16x8.min_s` | `0xfd 150:u32` | `i16x8.min_s` => `0xfd 0x96 0x01` |
| `i32x4.min_s` | `0xfd 182:u32` | `i32x4.min_s` => `0xfd 0xb6 0x01` |

## Siehe auch

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
- [`min_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
