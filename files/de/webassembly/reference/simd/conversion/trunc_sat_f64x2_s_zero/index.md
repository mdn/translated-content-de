---
title: "trunc_sat_f64x2_s_zero: Wasm SIMD-Umwandlungsanweisung"
short-title: trunc_sat_f64x2_s_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`trunc_sat_f64x2_s_zero`** [SIMD-Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine saturierte Umwandlung der Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f64x2` Wertinterpretation in eine signierte `i32x4` Wertinterpretation aus. Die zwei höheren Lanes des Ergebnisses werden auf null gesetzt.

Wenn eine Eingabelane ein {{jsxref("NaN")}} ist, wird die resultierende Ausgangslane auf `0` gesetzt. Wenn der gerundete Ganzzahlwert einer Lane außerhalb des Bereichs des Zieldatentyps liegt, wird das Ergebnis auf den nächst darstellbaren Ganzzahlwert gesättigt.

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

## Syntax

```plain
value_type.trunc_sat_f64x2_s_zero
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `trunc_sat_f64x2_s_zero`:
    - `i32x4`
- `trunc_sat_f64x2_s_zero`
  - : Die `trunc_sat_f64x2_s_zero`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f64x2` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binäre Kodierung

| Anweisung                      | Binärformat    | Beispieltext => binär                              |
| ------------------------------ | -------------- | -------------------------------------------------- |
| `i32x4.trunc_sat_f64x2_s_zero` | `0xfd 252:u32` | `i32x4.trunc_sat_f64x2_s_zero` => `0xfd 0xfc 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
