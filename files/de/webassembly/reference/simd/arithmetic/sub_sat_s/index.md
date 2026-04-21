---
title: "sub_sat_s: Wasm SIMD Arithmetik-Anweisung"
short-title: sub_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/sub_sat_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`sub_sat_s`** [SIMD Arithmetik-Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Subtraktion von zwei vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen durch — dabei wird das Ergebnis auf den Bereich beschränkt, der durch den Werttyp erlaubt ist. Jede Lane des Ausgabe-Werts ist das Ergebnis der Subtraktion der entsprechenden Lane der zweiten Eingabe von der entsprechenden Lane der ersten Eingabe.

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

Sättigung bedeutet, dass die Ausgabe-Werte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind, anstatt zu überschreiten. Erlaubte Ausgabe-Werte sind:

- `i8x16.sub_sat_s`: `−128` bis `127` (der vollständige Bereich eines vorzeichenbehafteten 8-Bit-Ganzzahlwerts)
- `i16x8.sub_sat_s`: `−32,768` bis `32,767` (der vollständige Bereich eines vorzeichenbehafteten 16-Bit-Ganzzahlwerts)

## Syntax

```plain
value_type.sub_sat_s
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `sub_sat_s`:
    - `i8x16`
    - `i16x8`
- `sub_sat_s`
  - : Die `sub_sat_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

### Binäre Kodierung

| Anweisung         | Binärformat    | Beispieltext => Binär                 |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.sub_sat_s` | `0xfd 114:u32` | `i8x16.sub_sat_s` => `0xfd 0x72`      |
| `i16x8.sub_sat_s` | `0xfd 146:u32` | `i16x8.sub_sat_s` => `0xfd 0x92 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`sub`](/de/docs/WebAssembly/Reference/Numeric/sub)
- [SIMD Arithmetik-Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
