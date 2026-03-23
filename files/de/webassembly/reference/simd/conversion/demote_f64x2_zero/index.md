---
title: "demote_f64x2_zero: Wasm SIMD Konvertierungsanweisung"
short-title: demote_f64x2_zero
slug: WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`demote_f64x2_zero`** [SIMD Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes einer `f64x2`-Wertinterpretation eines [`v128`](/de/docs/WebAssembly/Reference/Types/v128) in eine `f32x4`-Wertinterpretation. Die beiden höheren Lanes des Ergebnisses werden auf Null gesetzt.

{{InteractiveExample("Wat Demo: demote_f64x2_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const f64x2 0x3 0x3a

    f32x4.demote_f64x2_zero
    f32x4.extract_lane 1
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
value_type.demote_f64x2_zero
```

- `value_type`
  - : Der Wertetyp, auf den die Anweisung angewendet wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `demote_f64x2_zero`:
    - `f32x4`
- `demote_f64x2_zero`
  - : Die `demote_f64x2_zero`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f64x2`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `f32x4`-Wertinterpretation.

### Binärcodierung

| Anweisung                 | Binärformat   | Beispieltext => Binär                    |
| ------------------------- | ------------- | ---------------------------------------- |
| `f32x4.demote_f64x2_zero` | `0xfd 94:u32` | `f32x4.demote_f64x2_zero` => `0xfd 0x5e` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
