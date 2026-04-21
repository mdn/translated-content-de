---
title: "narrow_i32x4_u: Wasm SIMD-Konvertierungsanweisung"
short-title: narrow_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/narrow_i32x4_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`narrow_i32x4_u`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert zwei signierte [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4` Werteinterpretationen in eine `i16x8` Werteinterpretation unter Verwendung einer unsignierten Sättigung (Begrenzung auf den Bereich zwischen `0` und `65.535`).

{{InteractiveExample("Wat Demo: narrow_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 200 210 220 230
    v128.const i32x4 300 310 320 330

    i16x8.narrow_i32x4_u
    i16x8.extract_lane_s 7
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
i16x8.narrow_i32x4_u
```

- `i16x8.narrow_i32x4_u`
  - : Die `i16x8.narrow_i32x4_u`-Anweisung.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Die erste Eingabe `v128` `i32x4` Werteinterpretation.
- `input2`
  - : Die zweite Eingabe `v128` `i32x4` Werteinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Werteinterpretation.

### Binäre Kodierung

| Anweisung              | Binärformat    | Beispieltext => Binär                      |
| ---------------------- | -------------- | ------------------------------------------ |
| `i16x8.narrow_i32x4_u` | `0xfd 134:u32` | `i16x8.narrow_i32x4_u` => `0xfd 0x86 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
