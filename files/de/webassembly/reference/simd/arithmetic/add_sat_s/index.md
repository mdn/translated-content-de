---
title: "add_sat_s: Wasm SIMD Arithmetikinstruktion"
short-title: add_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/add_sat_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`add_sat_s`** [SIMD-Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Addition von zwei vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen durch – wobei das Ergebnis auf den Bereich begrenzt wird, der durch den Werttyp erlaubt ist. Jeder Kanal des Ausgabewerts ist das Ergebnis der Addition der entsprechenden Kanäle der Eingabewerte.

{{InteractiveExample("Wat Demo: add_sat_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i16x8.add_sat_s
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Saturation bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind, anstatt zu überschreiten. Erlaubte Ausgabewerte sind:

- `i8x16.add_sat_s`: `−128` bis `127` (der vollständige Bereich eines vorzeichenbehafteten 8-Bit-Integer)
- `i16x8.add_sat_s`: `−32,768` bis `32,767` (der vollständige Bereich eines vorzeichenbehafteten 16-Bit-Integer)

## Syntax

```plain
value_type.add_sat_s
```

- `value_type`
  - : Der Werttyp, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `add_sat_s`:
    - `i8x16`
    - `i16x8`
- `add_sat_s`
  - : Die `add_sat_s` Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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
| `i8x16.add_sat_s` | `0xfd 111:u32` | `i8x16.add_sat_s` => `0xfd 0x6f`      |
| `i16x8.add_sat_s` | `0xfd 143:u32` | `i16x8.add_sat_s` => `0xfd 0x8f 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add`](/de/docs/WebAssembly/Reference/Numeric/add)
- [SIMD-Arithmetikinstruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
