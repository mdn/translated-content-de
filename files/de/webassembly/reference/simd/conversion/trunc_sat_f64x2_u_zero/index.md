---
title: "trunc_sat_f64x2_u_zero: Wasm SIMD Konvertierungsanweisung"
short-title: trunc_sat_f64x2_u_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`trunc_sat_f64x2_u_zero`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Umwandlung der Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f64x2` Wertinterpretation in eine unsigned `i32x4` Wertinterpretation durch, wobei die Ausgabe auf den vom Werttyp erlaubten Bereich begrenzt wird. Die beiden höheren Lanes des Ergebnisses werden auf null gesetzt.

{{InteractiveExample("Wat Demo: trunc_sat_f64x2_u_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f64x2 1345400000.9 90000000000.5

    i32x4.trunc_sat_f64x2_u_zero
    i32x4.extract_lane 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren vom Werttyp erlaubten Werte begrenzt werden. Erlaubte Ausgabewerte liegen zwischen `0` und `4.294.967.295` (dem vollständigen Bereich eines unsignierten 32-Bit Integer). {{jsxref("NaN")}}-Werte werden zu `0` konvertiert.

## Syntax

```plain
value_type.trunc_sat_f64x2_u_zero
```

- `value_type`
  - : Der Werttyp, auf den die Anweisung angewendet wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `trunc_sat_f64x2_u_zero`:
    - `i32x4`
- `trunc_sat_f64x2_u_zero`
  - : Die `trunc_sat_f64x2_u_zero` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angefügt werden.

### Type

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabeinterpretation des `v128` `f64x2` Wertes.
- `output`
  - : Die Ausgabeinterpretation des `v128` `i32x4` Wertes.

### Binärcodierung

| Anweisung                      | Binärformat    | Beispieltext => binär                              |
| ------------------------------ | -------------- | -------------------------------------------------- |
| `i32x4.trunc_sat_f64x2_u_zero` | `0xfd 253:u32` | `i32x4.trunc_sat_f64x2_u_zero` => `0xfd 0xfd 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
