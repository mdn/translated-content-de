---
title: "sub_sat_u: Wasm SIMD-Arithmetikbefehl"
short-title: sub_sat_u
slug: WebAssembly/Reference/SIMD/arithmetic/sub_sat_u
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Der **`sub_sat_u`** [SIMD-Arithmetikbefehl](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Subtraktion von zwei unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen durch — wobei der Ausgabewert auf den Bereich begrenzt wird, der durch den Werttyp erlaubt ist. Jedes Lane des Ausgabewerts ist das Ergebnis der Subtraktion des entsprechenden Lanes des zweiten Eingabewerts von dem entsprechenden Lane des ersten Eingabewerts.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind, anstatt zu überschreiten. Erlaubte Ausgabewerte sind:

- `i8x16.sub_sat_u`: `0` bis `255` (der volle Bereich eines unsignierten 8-Bit-Ganzzahlwertes)
- `i16x8.sub_sat_u`: `0` bis `65.535` (der volle Bereich eines unsignierten 16-Bit-Ganzzahlwertes)

## Syntax

```plain
value_type.sub_sat_u
```

- `value_type`
  - : Der Typ des Werts, auf dem der Befehl ausgeführt wird. Die folgenden Typen unterstützen `sub_sat_u`:
    - `i8x16`
    - `i16x8`
- `sub_sat_u`
  - : Der `sub_sat_u`-Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

### Binäre Codierung

| Befehl            | Binärformat    | Beispieltext => binär                 |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.sub_sat_u` | `0xfd 115:u32` | `i8x16.sub_sat_u` => `0xfd 0x73`      |
| `i16x8.sub_sat_u` | `0xfd 147:u32` | `i16x8.sub_sat_u` => `0xfd 0x93 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
