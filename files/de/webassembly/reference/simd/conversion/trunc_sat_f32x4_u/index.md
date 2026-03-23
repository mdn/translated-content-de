---
title: "trunc_sat_f32x4_u: Wasm SIMD Konvertierungsanweisung"
short-title: trunc_sat_f32x4_u
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`trunc_sat_f32x4_u`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine saturierende Konvertierung der Spuren einer `f32x4`-Wertinterpretation eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) in eine unsignierte `i32x4`-Wertinterpretation durch.

Wenn eine Eingabespur ein {{jsxref("NaN")}} ist, wird die resultierende Ausgabespur auf `0` gesetzt. Liegt der gerundete ganzzahlige Wert einer Spur außerhalb des Bereichs des Zieltyps, wird das Ergebnis auf den nächstliegenden darstellbaren ganzzahligen Wert saturiert.

{{InteractiveExample("Wat Demo: trunc_sat_f32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f32x4 1300.5 60.4 0.5 780000.4

    i32x4.trunc_sat_f32x4_u
    i32x4.extract_lane 3
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
value_type.trunc_sat_f32x4_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `trunc_sat_f32x4_u`:
    - `i32x4`
- `trunc_sat_f32x4_u`
  - : Die `trunc_sat_f32x4_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binärkodierung

| Anweisung                 | Binärformat    | Beispieltext => binär                         |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_u` | `0xfd 249:u32` | `i32x4.trunc_sat_f32x4_u` => `0xfd 0xf9 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
