---
title: "add_sat_u: Wasm SIMD-Arithmetikinstruktion"
short-title: add_sat_u
slug: WebAssembly/Reference/SIMD/arithmetic/add_sat_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`add_sat_u`** [SIMD-Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [sättigende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Addition von zwei vorzeichenlosen [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen durch und begrenzt die Ausgabe auf den durch den Werttyp erlaubten Bereich. Jede Lane des Ausgabewerts ist das Ergebnis der Addition der entsprechenden Lanes der Eingabewerte.

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

Sättigung bedeutet, dass die Ausgabewerte an die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind, anstatt zu überlaufen. Erlaubte Ausgabewerte sind:

- `i8x16.add_sat_u`: `0` bis `255` (der volle Bereich eines vorzeichenlosen 8-Bit-Integers)
- `i16x8.add_sat_u`: `0` bis `65.535` (der volle Bereich eines vorzeichenlosen 16-Bit-Integers)

## Syntax

```plain
value_type.add_sat_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `add_sat_u`:
    - `i8x16`
    - `i16x8`
- `add_sat_u`
  - : Die `add_sat_u`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

| Instruktion       | Binärformat    | Beispieltext => binär                 |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.add_sat_u` | `0xfd 112:u32` | `i8x16.add_sat_u` => `0xfd 0x70`      |
| `i16x8.add_sat_u` | `0xfd 144:u32` | `i16x8.add_sat_u` => `0xfd 0x90 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add`](/de/docs/WebAssembly/Reference/Numeric/add)
- [SIMD-Arithmetikinstruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
