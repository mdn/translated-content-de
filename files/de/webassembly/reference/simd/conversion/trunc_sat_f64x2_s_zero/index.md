---
title: "trunc_sat_f64x2_s_zero: Wasm SIMD-Konvertierungsanweisung"
short-title: trunc_sat_f64x2_s_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Die **`trunc_sat_f64x2_s_zero`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Konvertierung der Bahnen einer `f64x2`-Wertinterpretation von [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) in eine signierte `i32x4`-Wertinterpretation durch und begrenzt die Ausgabe auf den Bereich, der von diesem Werttyp erlaubt ist. Die beiden höheren Bahnen des Ergebnisses werden auf null initialisiert.

{{InteractiveExample("Wat Demo: trunc_sat_f64x2_s_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f64x2 1300.5 1345400000.9

    i32x4.trunc_sat_f64x2_s_zero
    i32x4.extract_lane 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt sind, die durch die Wertinterpretation erlaubt sind. Zulässige Ausgabewerte liegen im Bereich von `−2,147,483,648` bis `2,147,483,647` (dem vollen Bereich eines signierten 32-Bit-Integer). {{jsxref("NaN")}}-Werte werden in `0` umgewandelt.

## Syntax

```plain
value_type.trunc_sat_f64x2_s_zero
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `trunc_sat_f64x2_s_zero`:
    - `i32x4`
- `trunc_sat_f64x2_s_zero`
  - : Die Anweisung `trunc_sat_f64x2_s_zero`. Muss immer nach dem `value_type` und einem Punkt (`.`) geschrieben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f64x2`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4`-Wertinterpretation.

### Binäre Kodierung

| Anweisung                      | Binärformat    | Beispieltext => binär                              |
| ------------------------------ | -------------- | -------------------------------------------------- |
| `i32x4.trunc_sat_f64x2_s_zero` | `0xfd 252:u32` | `i32x4.trunc_sat_f64x2_s_zero` => `0xfd 0xfc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
