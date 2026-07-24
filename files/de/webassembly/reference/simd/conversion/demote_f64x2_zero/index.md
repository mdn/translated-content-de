---
title: "demote_f64x2_zero: Wasm SIMD-Umwandlungsbefehl"
short-title: demote_f64x2_zero
slug: WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero
l10n:
  sourceCommit: 139b03cac9d143948f9073edb507edec7b45d3d6
---

Der **`demote_f64x2_zero`** [SIMD-Umwandlungsbefehl](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt die Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `f64x2`-Wertinterpretation in eine `f32x4`-Wertinterpretation um. Die zwei höheren Lanes des Ergebnisses werden auf Null initialisiert.

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
  - : Der Typ des Wertes, auf dem der Befehl ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen unterstützen `demote_f64x2_zero`:
    - `f32x4`
- `demote_f64x2_zero`
  - : Der `demote_f64x2_zero`-Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f64x2`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `f32x4`-Wertinterpretation.

### Binärkodierung

| Befehl                    | Binärformat   | Beispieltext => Binär                    |
| ------------------------- | ------------- | ---------------------------------------- |
| `f32x4.demote_f64x2_zero` | `0xfd 94:u32` | `f32x4.demote_f64x2_zero` => `0xfd 0x5e` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
