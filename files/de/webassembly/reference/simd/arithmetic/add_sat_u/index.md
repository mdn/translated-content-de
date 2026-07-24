---
title: "add_sat_u: Wasm SIMD arithmetische Anweisung"
short-title: add_sat_u
slug: WebAssembly/Reference/SIMD/arithmetic/add_sat_u
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`add_sat_u`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [saturierende](https://de.wikipedia.org/wiki/Sättigungsarithmetik) Addition zweier unsignierter [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Werteinterpretationen durch – dabei wird die Ausgabe auf den Bereich begrenzt, der durch den Werttyp erlaubt ist. Jede Spur des Ausgabewertes ist das Ergebnis der Addition der entsprechenden Spuren des Eingabewertes.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Werteinterpretation erlaubt sind, anstatt zu überlaufen. Erlaubte Ausgabewerte sind:

- `i8x16.add_sat_u`: `0` bis `255` (der volle Bereich eines unsignierten 8-Bit-Ganzzahlwerts)
- `i16x8.add_sat_u`: `0` bis `65,535` (der volle Bereich eines unsignierten 16-Bit-Ganzzahlwerts)

## Syntax

```plain
value_type.add_sat_u
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `add_sat_u`:
    - `i8x16`
    - `i16x8`
- `add_sat_u`
  - : Die `add_sat_u` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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

| Anweisung         | Binärformat    | Beispieltext => binär                 |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.add_sat_u` | `0xfd 112:u32` | `i8x16.add_sat_u` => `0xfd 0x70`      |
| `i16x8.add_sat_u` | `0xfd 144:u32` | `i16x8.add_sat_u` => `0xfd 0x90 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add`](/de/docs/WebAssembly/Reference/Numeric/add)
