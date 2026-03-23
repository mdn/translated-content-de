---
title: "trunc_sat_f32x4_s: Wasm SIMD Umwandlungsanweisung"
short-title: trunc_sat_f32x4_s
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`trunc_sat_f32x4_s`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine speicherbegrenzende Umwandlung der Spuren einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f32x4` Wertinterpretation in eine signierte `i32x4` Wertinterpretation durch.

Wenn eine Eingabespur ein {{jsxref("NaN")}} ist, wird die resultierende Ausgabespur auf `0` gesetzt. Wenn der gerundete ganzzahlige Wert einer Spur außerhalb des Bereichs des Zieltyps liegt, wird das Ergebnis auf den nächst darstellbaren ganzzahligen Wert gesättigt.

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

## Syntax

```plain
value_type.trunc_sat_f32x4_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `trunc_sat_f32x4_s`:
    - `i32x4`
- `trunc_sat_f32x4_s`
  - : Die `trunc_sat_f32x4_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingeschlossen sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128` `f32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128` `i32x4` Wertinterpretation.

### Binäre Kodierung

| Anweisung                 | Binärformat    | Beispieltext => binär                         |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_s` | `0xfd 248:u32` | `i32x4.trunc_sat_f32x4_s` => `0xfd 0xf8 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
