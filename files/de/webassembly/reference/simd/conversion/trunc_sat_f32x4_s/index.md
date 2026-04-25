---
title: "trunc_sat_f32x4_s: Wasm SIMD Konvertierungsanweisung"
short-title: trunc_sat_f32x4_s
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`trunc_sat_f32x4_s`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [saturierende](https://de.wikipedia.org/wiki/S%C3%A4ttigungsarithmetik) Umwandlung der Lanes (Spuren) einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f32x4` Wertinterpretation in eine signierte `i32x4` Wertinterpretation durch, wobei die Ausgabe auf den Bereich beschränkt wird, der durch den Werttyp erlaubt ist.

{{InteractiveExample("Wat Demo: trunc_sat_f32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f32x4 1300.5 60.4 0.5 780000.4

    i32x4.trunc_sat_f32x4_s
    i32x4.extract_lane 2
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte beschränkt werden, die durch die Wertinterpretation erlaubt sind. Erlaubte Ausgabewerte reichen von `−2,147,483,648` bis `2,147,483,647` (der volle Bereich eines signierten 32-Bit-Integer). {{jsxref("NaN")}}-Werte werden in `0` umgewandelt.

## Syntax

```plain
value_type.trunc_sat_f32x4_s
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `trunc_sat_f32x4_s`:
    - `i32x4`
- `trunc_sat_f32x4_s`
  - : Die `trunc_sat_f32x4_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binäre Kodierung

| Anweisung                 | Binärformat    | Beispieltext => binär                         |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_s` | `0xfd 248:u32` | `i32x4.trunc_sat_f32x4_s` => `0xfd 0xf8 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
