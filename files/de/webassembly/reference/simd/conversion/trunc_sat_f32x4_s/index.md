---
title: "trunc_sat_f32x4_s: Wasm SIMD-Konvertierungsanweisung"
short-title: trunc_sat_f32x4_s
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`trunc_sat_f32x4_s`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [saturierte](https://de.wikipedia.org/wiki/S%C3%A4ttigungsarithmetik) Konvertierung der Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-`f32x4`-Wertinterpretation in eine signierte `i32x4`-Wertinterpretation durch und beschränkt die Ausgabe auf den durch den Wertetyp erlaubten Bereich.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren, durch die Wertinterpretation erlaubten Werte beschränkt werden. Zulässige Ausgabewerte sind `−2.147.483.648` bis `2.147.483.647` (der gesamte Bereich eines signierten 32-Bit-Ganzzahlwerts). {{jsxref("NaN")}}-Werte werden zu `0` konvertiert.

## Syntax

```plain
value_type.trunc_sat_f32x4_s
```

- `value_type`
  - : Der Wertetyp, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `trunc_sat_f32x4_s`:
    - `i32x4`
- `trunc_sat_f32x4_s`
  - : Die `trunc_sat_f32x4_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe [`v128`]-`f32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe [`v128`]-`i32x4`-Wertinterpretation.

### Binärkodierung

| Anweisung                 | Binärformat    | Beispieltext => Binär                         |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_s` | `0xfd 248:u32` | `i32x4.trunc_sat_f32x4_s` => `0xfd 0xf8 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
