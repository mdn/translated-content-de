---
title: "sub_sat_s: Wasm SIMD-Arithmetikanweisung"
short-title: sub_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/sub_sat_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`sub_sat_s`** [SIMD-Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [sättigende](https://de.wikipedia.org/wiki/S%C3%A4ttigungsarithmetik) Subtraktion zweier signierter [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen durch — sie begrenzt die Ausgabe auf den Bereich, der durch den Werttyp erlaubt ist. Jede Spur des Ausgabewertes ist das Ergebnis der Subtraktion der entsprechenden Spur der zweiten Eingabe von der entsprechenden Spur der ersten Eingabe.

{{InteractiveExample("Wat Demo: sub_sat_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i16x8.sub_sat_s
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind, anstatt zu überlaufen. Erlaubte Ausgabewerte sind:

- `i8x16.sub_sat_s`: `−128` bis `127` (der gesamte Bereich eines signierten 8-Bit-Integer)
- `i16x8.sub_sat_s`: `−32,768` bis `32,767` (der gesamte Bereich eines signierten 16-Bit-Integer)

## Syntax

```plain
value_type.sub_sat_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `sub_sat_s`:
    - `i8x16`
    - `i16x8`
- `sub_sat_s`
  - : Die Anweisung `sub_sat_s`. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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
| `i8x16.sub_sat_s` | `0xfd 114:u32` | `i8x16.sub_sat_s` => `0xfd 0x72`      |
| `i16x8.sub_sat_s` | `0xfd 146:u32` | `i16x8.sub_sat_s` => `0xfd 0x92 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
- [SIMD-Arithmetikanweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
