---
title: "trunc_sat_f64x2_u_zero: Wasm SIMD Umwandlungsbefehl"
short-title: trunc_sat_f64x2_u_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`trunc_sat_f64x2_u_zero`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Umwandlung der Spuren einer `f64x2` Wertinterpretation eines [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) in eine unsignierte `i32x4` Wertinterpretation durch, wobei die Ausgabe auf den Bereich beschränkt wird, der durch den Werttyp erlaubt ist. Die beiden höheren Spuren des Ergebnisses werden auf Null initialisiert.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte beschränkt werden, die durch die Wertinterpretation erlaubt sind. Erlaubte Ausgabewerte sind `0` bis `4,294,967,295` (der vollständige Bereich eines unsignierten 32-Bit-Integer). {{jsxref("NaN")}} Werte werden in `0` umgewandelt.

## Syntax

```plain
value_type.trunc_sat_f64x2_u_zero
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) Wertinterpretationen unterstützen `trunc_sat_f64x2_u_zero`:
    - `i32x4`
- `trunc_sat_f64x2_u_zero`
  - : Die `trunc_sat_f64x2_u_zero` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

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

- [SIMD Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
