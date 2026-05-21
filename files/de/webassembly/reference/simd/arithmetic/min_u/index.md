---
title: "min_u: Wasm SIMD Arithmetikanweisung"
short-title: min_u
slug: WebAssembly/Reference/SIMD/arithmetic/min_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`min_u`**-Anweisung vergleicht zwei [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen von Ganzzahlen ohne Vorzeichen und gibt eine neue Interpretation zurück, wobei jeder Lane auf den niedrigeren Wert des Lane-Index auf den beiden Eingaben gesetzt wird.

{{InteractiveExample("Wat Demo: min_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two v128 i16x8s onto the stack
    v128.const i16x8 10 400 0 86 87 9000 -5 19
    v128.const i16x8 200 20 0 -5 80 9 -6 283

    ;; return a i16x8 containing the smallest values from each input
    i16x8.min_u
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
value_type.min_u
```

- `value_type`
  - : Der Wertetyp, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `min_u`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
- `min_u`
  - : Die `min_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert. Ein neues `v128` des gleichen Typs wie die Eingaben, wobei jeder Lane auf den größeren Wert des Lane-Index auf den zwei Eingaben gesetzt wird.

### Binärkodierung

| Anweisung     | Binärformat    | Beispiel Text => Binär            |
| ------------- | -------------- | --------------------------------- |
| `i8x16.min_u` | `0xfd 119:u32` | `i8x16.min_u` => `0xfd 0x77`      |
| `i16x8.min_u` | `0xfd 151:u32` | `i16x8.min_u` => `0xfd 0x97 0x01` |
| `i32x4.min_u` | `0xfd 183:u32` | `i32x4.min_u` => `0xfd 0xb7 0x01` |

## Siehe auch

- [`min`](/de/docs/WebAssembly/Reference/Numeric/min)
- [`min_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
