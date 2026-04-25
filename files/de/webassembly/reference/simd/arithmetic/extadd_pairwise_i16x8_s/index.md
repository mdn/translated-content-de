---
title: "extadd_pairwise_i16x8_s: Wasm SIMD Arithmetik-Instruktion"
short-title: extadd_pairwise_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extadd_pairwise_i16x8_s`** [SIMD Arithmetik-Instruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Lanes einer vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8` Werteinterpretation und gibt die Ergebnisse in einer `i32x4` Werteinterpretation aus.

{{InteractiveExample("Wat Demo: extadd_pairwise_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 20 40 20 40 20 40 20 40

    i32x4.extadd_pairwise_i16x8_s
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel enthält jedes benachbarte Paar von Lanes die Werte `20` und `40`. Die `extadd_pairwise_i16x8_s`-Instruktion addiert jedes Paar, wodurch in allen 4 Lanes des Ausgabe-`i32x4`-Werts der Wert `60` enthalten ist.

## Syntax

```plain
i32x4.extadd_pairwise_i16x8_s
```

- `i32x4.extadd_pairwise_i16x8_s`
  - : Die `i32x4.extadd_pairwise_i16x8_s`-Instruktion.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`i16x8`-Werteinterpretation.
- `output`
  - : Die Ausgabe-`v128`-`i32x4`-Werteinterpretation.

### Binäre Kodierung

| Instruktion                     | Binärformat    | Beispieltext => binär                          |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extadd_pairwise_i16x8_s` | `0xfd 126:u32` | `i32x4.extadd_pairwise_i16x8_s` => `0xfd 0x7e` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetik-Instruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
