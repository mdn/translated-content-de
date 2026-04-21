---
title: "trunc_sat_f32x4_u: Wasm SIMD-Konvertierungsbefehl"
short-title: trunc_sat_f32x4_u
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Der **`trunc_sat_f32x4_u`** [SIMD-Konvertierungsbefehl](/de/docs/WebAssembly/Reference/SIMD/conversion) führt eine [saturierende](https://en.wikipedia.org/wiki/Saturation_arithmetic) Konvertierung der Lanes einer `f32x4`-Wertinterpretation von [`v128`](/de/docs/WebAssembly/Reference/Types/v128) in eine unsignierte `i32x4`-Wertinterpretation durch und begrenzt die Ausgabe auf den durch den Werttyp erlaubten Bereich.

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

Sättigung bedeutet, dass die Ausgabewerte auf die oberen und unteren Werte begrenzt werden, die durch die Wertinterpretation erlaubt sind. Erlaubte Ausgabewerte sind `0` bis `4.294.967.295` (der volle Bereich eines unsignierten 32-Bit-Ganzzahlwertes). {{jsxref("NaN")}}-Werte werden zu `0` konvertiert.

## Syntax

```plain
value_type.trunc_sat_f32x4_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem der Befehl ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `trunc_sat_f32x4_u`:
    - `i32x4`
- `trunc_sat_f32x4_u`
  - : Der Befehl `trunc_sat_f32x4_u`. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `f32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4`-Wertinterpretation.

### Binäre Kodierung

| Befehl                    | Binärformat    | Beispieltext => binär                         |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_u` | `0xfd 249:u32` | `i32x4.trunc_sat_f32x4_u` => `0xfd 0xf9 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsbefehle](/de/docs/WebAssembly/Reference/SIMD/conversion)
