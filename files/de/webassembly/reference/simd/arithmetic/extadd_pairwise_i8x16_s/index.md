---
title: "extadd_pairwise_i8x16_s: Wasm SIMD-Arithmetikinstruktion"
short-title: extadd_pairwise_i8x16_s
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_s
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extadd_pairwise_i8x16_s`** [SIMD-Arithmetikinstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Lanes einer vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i8x16`-Wertinterpretation und gibt die Ergebnisse in einer `i16x8`-Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extadd_pairwise_i8x16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 2 4 2 4 2 4 2 4 2 4 2 4 2 4

    i16x8.extadd_pairwise_i8x16_s
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel enthält jedes benachbarte Paar von Lanes die Werte `2` und `4`. Die `extadd_pairwise_i8x16_s`-Instruktion addiert jedes Paar zusammen, sodass die 8 Lanes des Ausgabe-`i16x8`-Wertes alle den Wert `6` enthalten.

## Syntax

```plain
i16x8.extadd_pairwise_i8x16_s
```

- `i16x8.extadd_pairwise_i8x16_s`
  - : Die `i16x8.extadd_pairwise_i8x16_s`-Instruktion.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128` `i8x16`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128` `i16x8`-Wertinterpretation.

### Binäre Codierung

| Instruktion                     | Binärformat    | Beispieltext => binär                          |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extadd_pairwise_i8x16_s` | `0xfd 124:u32` | `i16x8.extadd_pairwise_i8x16_s` => `0xfd 0x7c` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetikinstruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
