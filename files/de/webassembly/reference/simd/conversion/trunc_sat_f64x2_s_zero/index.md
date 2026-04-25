---
title: "trunc_sat_f64x2_s_zero: Wasm SIMD Konvertierungsanweisung"
short-title: trunc_sat_f64x2_s_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`trunc_sat_f64x2_s_zero`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [sättigende](<https://de.wikipedia.org/wiki/S%C3%A4ttigung_(Mathematik)>) Konvertierung der Lanes einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `f64x2`-Wertinterpretation in eine signierte `i32x4`-Wertinterpretation durch, wobei die Ausgabe auf den Bereich begrenzt wird, der vom Werttyp erlaubt ist. Die beiden höheren Lanes des Ergebnisses werden auf null initialisiert.

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

Sättigung bedeutet, dass die Ausgabewerte auf die obersten und untersten Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind. Erlaubte Ausgabewerte sind `−2,147,483,648` bis `2,147,483,647` (der volle Bereich eines signierten 32-Bit-Ganzzahlwertes). {{jsxref("NaN")}}-Werte werden in `0` umgewandelt.

## Syntax

```plain
value_type.trunc_sat_f64x2_s_zero
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `trunc_sat_f64x2_s_zero`:
    - `i32x4`
- `trunc_sat_f64x2_s_zero`
  - : Die `trunc_sat_f64x2_s_zero`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
