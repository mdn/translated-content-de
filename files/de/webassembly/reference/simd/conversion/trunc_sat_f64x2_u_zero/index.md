---
title: "trunc_sat_f64x2_u_zero: Wasm SIMD Konvertierungsanweisung"
short-title: trunc_sat_f64x2_u_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`trunc_sat_f64x2_u_zero`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine saturierte Konvertierung der Spuren einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f64x2` Wertinterpretation in eine unsigned `i32x4` Wertinterpretation durch. Die zwei höheren Spuren des Ergebnisses werden auf Null gesetzt.

Wenn eine Eingangsspur ein {{jsxref("NaN")}} ist, wird die resultierende Ausgangsspur auf `0` gesetzt. Wenn der gerundete Ganzzahlwert einer Spur außerhalb des Bereichs des Zieltyps liegt, wird das Ergebnis auf den am nächsten darstellbaren Ganzzahlwert gesättigt.

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

## Syntax

```plain
value_type.trunc_sat_f64x2_u_zero
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `trunc_sat_f64x2_u_zero`:
    - `i32x4`
- `trunc_sat_f64x2_u_zero`
  - : Die `trunc_sat_f64x2_u_zero` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

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
| `i32x4.trunc_sat_f64x2_u_zero` | `0xfd 253:u32` | `i32x4.trunc_sat_f64x2_u_zero` => `0xfd 0xfd 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
