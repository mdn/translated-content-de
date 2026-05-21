---
title: "add_sat_u: Wasm SIMD Arithmetikinstruktion"
short-title: add_sat_u
slug: WebAssembly/Reference/SIMD/arithmetic/add_sat_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`add_sat_u`** [SIMD Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Addition von zwei unsigned [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen durch — wobei das Ausgabeergebnis auf den Bereich begrenzt wird, der durch den Werttyp erlaubt ist. Jede Spur des Ausgabeergebnisses ist das Resultat der Addition der entsprechenden Spuren des Eingabewerts.

{{InteractiveExample("Wat Demo: add_sat_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i16x8.add_sat_u
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Sättigung bedeutet, dass die Ausgabewerte an die oberen und unteren Werte angepasst werden, die durch die Wertinterpretation erlaubt sind, anstatt zu überlaufen. Erlaubte Ausgabewerte sind:

- `i8x16.add_sat_u`: `0` bis `255` (der volle Bereich eines unsigned 8-Bit-Integers)
- `i16x8.add_sat_u`: `0` bis `65,535` (der volle Bereich eines unsigned 16-Bit-Integers)

## Syntax

```plain
value_type.add_sat_u
```

- `value_type`
  - : Der Werttyp, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `add_sat_u`:
    - `i8x16`
    - `i16x8`
- `add_sat_u`
  - : Die `add_sat_u` Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

### Binärcodekodierung

| Instruktion       | Binärformat    | Beispieltext => Binär                 |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.add_sat_u` | `0xfd 112:u32` | `i8x16.add_sat_u` => `0xfd 0x70`      |
| `i16x8.add_sat_u` | `0xfd 144:u32` | `i16x8.add_sat_u` => `0xfd 0x90 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add`](/de/docs/WebAssembly/Reference/Numeric/add)
- [SIMD Arithmetikinstruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
