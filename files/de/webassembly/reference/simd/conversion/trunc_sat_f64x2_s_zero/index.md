---
title: "trunc_sat_f64x2_s_zero: Wasm SIMD Konvertierungsanweisung"
short-title: trunc_sat_f64x2_s_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`trunc_sat_f64x2_s_zero`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [Sättigungskonvertierung](https://en.wikipedia.org/wiki/Saturation_arithmetic) der Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `f64x2` Wertinterpretation in eine signierte `i32x4` Wertinterpretation durch, wobei die Ausgabe auf den durch den Werttyp erlaubten Bereich beschränkt wird. Die beiden höheren Lanes des Ergebnisses werden auf Null gesetzt.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte beschränkt werden, die durch die Wertinterpretation erlaubt sind. Zulässige Ausgabewerte sind `−2.147.483.648` bis `2.147.483.647` (der volle Bereich eines 32-Bit-Ganzzahlwertes mit Vorzeichen). {{jsxref("NaN")}} Werte werden in `0` umgewandelt.

## Syntax

```plain
value_type.trunc_sat_f64x2_s_zero
```

- `value_type`
  - : Der Werttyp, auf den die Anweisung angewendet wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen unterstützen `trunc_sat_f64x2_s_zero`:
    - `i32x4`
- `trunc_sat_f64x2_s_zero`
  - : Die `trunc_sat_f64x2_s_zero` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f64x2` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binärcodierung

| Anweisung                      | Binärformat    | Beispieltext => Binär                              |
| ------------------------------ | -------------- | -------------------------------------------------- |
| `i32x4.trunc_sat_f64x2_s_zero` | `0xfd 252:u32` | `i32x4.trunc_sat_f64x2_s_zero` => `0xfd 0xfc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
