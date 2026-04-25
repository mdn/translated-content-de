---
title: "sub_sat_u: Wasm SIMD Arithmetic Instruction"
short-title: sub_sat_u
slug: WebAssembly/Reference/SIMD/arithmetic/sub_sat_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`sub_sat_u`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [saturierte](https://en.wikipedia.org/wiki/Saturation_arithmetic) Subtraktion von zwei unbedeuteten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen durch — indem der Ausgang auf den durch den Werttyp erlaubten Bereich geklemmt wird. Jede Lane des Ausgabe-Wertes ist das Ergebnis der Subtraktion der entsprechenden Lane der zweiten Eingabe von der entsprechenden Lane der ersten Eingabe.

{{InteractiveExample("Wat Demo: sub_sat_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i16x8.sub_sat_u
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren durch die Wertinterpretation erlaubten Werte geklemmt werden, anstatt zu überschreiten. Erlaubte Ausgabewerte sind:

- `i8x16.sub_sat_u`: `0` bis `255` (der vollständige Bereich eines unbedeuteten 8-Bit-Integers)
- `i16x8.sub_sat_u`: `0` bis `65,535` (der vollständige Bereich eines unbedeuteten 16-Bit-Integers)

## Syntax

```plain
value_type.sub_sat_u
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `sub_sat_u`:
    - `i8x16`
    - `i16x8`
- `sub_sat_u`
  - : Die `sub_sat_u` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabe-Wert.

### Binäre Codierung

| Anweisung         | Binärformat    | Beispieltext => Binär                 |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.sub_sat_u` | `0xfd 115:u32` | `i8x16.sub_sat_u` => `0xfd 0x73`      |
| `i16x8.sub_sat_u` | `0xfd 147:u32` | `i16x8.sub_sat_u` => `0xfd 0x93 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
- [SIMD arithmetische Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
