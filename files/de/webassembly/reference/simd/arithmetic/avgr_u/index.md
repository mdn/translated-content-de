---
title: "avgr_u: Wasm SIMD-Arithmetik-Instruktion"
short-title: avgr_u
slug: WebAssembly/Reference/SIMD/arithmetic/avgr_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`avgr_u`** [SIMD-Arithmetik-Instruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt einen aufgerundeten Durchschnitt von zwei unsigned [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen aus. Jede Lane des Ausgabewertes ist `(a + b + 1) / 2`, d.h. der Durchschnitt der entsprechenden Lanes der Eingabewerte, aufgerundet auf die nächste ganze Zahl.

{{InteractiveExample("Wat Demo: avgr_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i16x8.avgr_u
    i16x8.extract_lane_s 7
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
value_type.avgr_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `avgr_u`:
    - `i8x16`
    - `i16x8`
- `avgr_u`
  - : Die `avgr_u`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

| Instruktion    | Binärformat    | Beispieltext => binär              |
| -------------- | -------------- | ---------------------------------- |
| `i8x16.avgr_u` | `0xfd 123:u32` | `i8x16.avgr_u` => `0xfd 0x7b`      |
| `i16x8.avgr_u` | `0xfd 155:u32` | `i16x8.avgr_u` => `0xfd 0x9b 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetik-Instruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
