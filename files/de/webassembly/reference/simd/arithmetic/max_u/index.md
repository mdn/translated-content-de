---
title: "max_u: Wasm SIMD arithmetische Anweisung"
short-title: max_u
slug: WebAssembly/Reference/SIMD/arithmetic/max_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`max_u`** Anweisung vergleicht zwei [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Interpretationen von Ganzzahlen ohne Vorzeichen und gibt eine neue Interpretation zurück, bei der jeder Kanal auf den größeren Wert des jeweiligen Kanalindex der beiden Eingaben gesetzt ist.

{{InteractiveExample("Wat Demo: max_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two v128 i16x8s onto the stack
    v128.const i16x8 10 400 0 86 87 9000 -5 19
    v128.const i16x8 200 20 0 -5 80 9 -6 283

    ;; return a i16x8 containing the greatest values from each input
    i16x8.max_u
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
value_type.max_u
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `max_u`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
- `max_u`
  - : Die `max_u` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert. Ein neuer `v128` vom gleichen Typ wie die Eingaben, wobei jeder Kanal auf den größeren Wert des jeweiligen Kanalindex der beiden Eingaben gesetzt ist.

### Binärcode Kodierung

| Anweisung     | Binärformat    | Beispieltext => Binär             |
| ------------- | -------------- | --------------------------------- |
| `i8x16.max_u` | `0xfd 121:u32` | `i8x16.max_u` => `0xfd 0x79`      |
| `i16x8.max_u` | `0xfd 153:u32` | `i16x8.max_u` => `0xfd 0x99 0x01` |
| `i32x4.max_u` | `0xfd 185:u32` | `i32x4.max_u` => `0xfd 0xb9 0x01` |

## Siehe auch

- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
- [`max_s`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
