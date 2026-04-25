---
title: "extadd_pairwise_i8x16_u: Wasm SIMD arithmetische Anweisung"
short-title: extadd_pairwise_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extadd_pairwise_i8x16_u`** [SIMD arithmetische Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Lanes einer unsigned [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i8x16`-Wertinterpretation und gibt die Ergebnisse in einer `i16x8`-Wertinterpretation aus.

{{InteractiveExample("Wat Demo: extadd_pairwise_i8x16_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 2 4 2 4 2 4 2 4 2 4 2 4 2 4

    i16x8.extadd_pairwise_i8x16_u
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel enthält jedes benachbarte Paar von Lanes die Werte `2` und `4`. Die `extadd_pairwise_i8x16_u`-Anweisung addiert jedes Paar, was dazu führt, dass die 8 Lanes des Ausgabe-`i16x8`-Wertes alle den Wert `6` enthalten.

## Syntax

```plain
i16x8.extadd_pairwise_i8x16_u
```

- `i16x8.extadd_pairwise_i8x16_u`
  - : Die `i16x8.extadd_pairwise_i8x16_u`-Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128` `i8x16`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128` `i16x8`-Wertinterpretation.

### Binäre Kodierung

| Anweisung                       | Binäres Format | Beispieltext => Binär                          |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extadd_pairwise_i8x16_u` | `0xfd 125:u32` | `i16x8.extadd_pairwise_i8x16_u` => `0xfd 0x7d` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD arithmetische Anweisungen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
