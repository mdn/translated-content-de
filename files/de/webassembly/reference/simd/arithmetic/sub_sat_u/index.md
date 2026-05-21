---
title: "sub_sat_u: Wasm SIMD-Arithmetikinstruktion"
short-title: sub_sat_u
slug: WebAssembly/Reference/SIMD/arithmetic/sub_sat_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`sub_sat_u`** [SIMD-Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [sättigende](https://de.wikipedia.org/wiki/S%C3%A4ttigende_Arithmetik) Subtraktion zweier unsignierter [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen durch — und beschränkt die Ausgabe auf den vom Wertetyp erlaubten Bereich. Jede Spur des Ausgabewertes ist das Ergebnis der Subtraktion der entsprechenden Spur des zweiten Eingabewertes von der entsprechenden Spur des ersten Eingabewertes.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte beschränkt werden, die durch die Werteinterpretation erlaubt sind, anstatt sich zu überlaufen. Erlaubte Ausgabewerte sind:

- `i8x16.sub_sat_u`: `0` bis `255` (der vollständige Bereich eines unsignierten 8-Bit-Ganzzahl)
- `i16x8.sub_sat_u`: `0` bis `65,535` (der vollständige Bereich eines unsignierten 16-Bit-Ganzzahl)

## Syntax

```plain
value_type.sub_sat_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Instruktion ausgeführt wird. Die folgenden Typen unterstützen `sub_sat_u`:
    - `i8x16`
    - `i16x8`
- `sub_sat_u`
  - : Die `sub_sat_u`-Instruktion. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

### Binärcode

| Instruktion       | Binärformat    | Beispiel Text => Binär                |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.sub_sat_u` | `0xfd 115:u32` | `i8x16.sub_sat_u` => `0xfd 0x73`      |
| `i16x8.sub_sat_u` | `0xfd 147:u32` | `i16x8.sub_sat_u` => `0xfd 0x93 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
- [SIMD-Arithmetikinstruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
