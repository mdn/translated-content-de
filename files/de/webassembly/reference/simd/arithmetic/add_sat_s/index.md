---
title: "add_sat_s: Wasm SIMD Arithmetik-Anweisung"
short-title: add_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/add_sat_s
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`add_sat_s`** [SIMD Arithmetik-Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [saturierte](https://en.wikipedia.org/wiki/Saturation_arithmetic) Addition von zwei signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen durch — wobei der Ausgabewert auf den Bereich begrenzt wird, der durch den Wertetyp erlaubt ist. Jedes Lane des Ausgabewerts ist das Ergebnis der Addition der entsprechenden Lanes des Eingangswerts.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind, anstatt zu umwickeln. Erlaubte Ausgabewerte sind:

- `i8x16.add_sat_s`: `−128` bis `127` (der volle Bereich eines signierten 8-Bit-Integer)
- `i16x8.add_sat_s`: `−32,768` bis `32,767` (der volle Bereich eines signierten 16-Bit-Integer)

## Syntax

```plain
value_type.add_sat_s
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `add_sat_s`:
    - `i8x16`
    - `i16x8`
- `add_sat_s`
  - : Die `add_sat_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

| Anweisung         | Binärformat    | Beispieltext => binär                 |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.add_sat_s` | `0xfd 111:u32` | `i8x16.add_sat_s` => `0xfd 0x6f`      |
| `i16x8.add_sat_s` | `0xfd 143:u32` | `i16x8.add_sat_s` => `0xfd 0x8f 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add`](/de/docs/WebAssembly/Reference/Numeric/add)
