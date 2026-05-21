---
title: "demote_f64x2_zero: Wasm SIMD Umwandlungsanweisung"
short-title: demote_f64x2_zero
slug: WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`demote_f64x2_zero`** [SIMD-Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `f64x2` Werteinterpretation in eine `f32x4` Werteinterpretation. Die zwei höheren Lanes des Ergebnisses werden auf null gesetzt.

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Werteinterpretationen unterstützen `demote_f64x2_zero`:
    - `f32x4`
- `demote_f64x2_zero`
  - : Die `demote_f64x2_zero` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f64x2` Werteinterpretation.
- `output`
  - : Die Ausgabe `v128` `f32x4` Werteinterpretation.

### Binärcodierung

| Anweisung                 | Binärformat   | Beispieltext => binär                    |
| ------------------------- | ------------- | ---------------------------------------- |
| `f32x4.demote_f64x2_zero` | `0xfd 94:u32` | `f32x4.demote_f64x2_zero` => `0xfd 0x5e` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
