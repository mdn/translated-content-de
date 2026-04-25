---
title: "avgr_u: Wasm SIMD Rechenoperation"
short-title: avgr_u
slug: WebAssembly/Reference/SIMD/arithmetic/avgr_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`avgr_u`** [SIMD-Rechenoperation](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt einen aufgerundeten Durchschnitt von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen durch. Jede Lane des Ausgabewerts ist `(a + b + 1) / 2`, das heißt der Durchschnittswert der entsprechenden Lanes der Eingabewerte, aufgerundet auf die nächstgelegene ganze Zahl.

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `avgr_u`:
    - `i8x16`
    - `i16x8`
- `avgr_u`
  - : Die `avgr_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

### Binäre Kodierung

| Anweisung      | Binärformat    | Beispieltext => binär              |
| -------------- | -------------- | ---------------------------------- |
| `i8x16.avgr_u` | `0xfd 123:u32` | `i8x16.avgr_u` => `0xfd 0x7b`      |
| `i16x8.avgr_u` | `0xfd 155:u32` | `i16x8.avgr_u` => `0xfd 0x9b 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Rechenoperationen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
