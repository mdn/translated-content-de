---
title: "extadd_pairwise_i16x8_u: Wasm SIMD Arithmetik-Instruktion"
short-title: extadd_pairwise_i16x8_u
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extadd_pairwise_i16x8_u`** [SIMD Arithmetik-Instruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Lanes einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i16x8` Werteinterpretation und gibt die Ergebnisse in eine `i32x4` Werteinterpretation aus.

{{InteractiveExample("Wat Demo: extadd_pairwise_i16x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 20 40 20 40 20 40 20 40

    i32x4.extadd_pairwise_i16x8_u
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Im obigen Beispiel enthält jedes benachbarte Paar von Lanes die Werte `20` und `40`. Die `extadd_pairwise_i16x8_u` Instruktion addiert jedes Paar zusammen, wobei die 4 Lanes des Ausgabe-`i32x4` Werts alle den Wert `60` enthalten.

## Syntax

```plain
i32x4.extadd_pairwise_i16x8_u
```

- `i32x4.extadd_pairwise_i16x8_u`
  - : Die `i32x4.extadd_pairwise_i16x8_u` Instruktion.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i16x8` Werteinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Werteinterpretation.

### Binäre Kodierung

| Instruktion                     | Binärformat    | Beispieltext => binär                          |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extadd_pairwise_i16x8_u` | `0xfd 127:u32` | `i32x4.extadd_pairwise_i16x8_u` => `0xfd 0x7f` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetik-Instruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
