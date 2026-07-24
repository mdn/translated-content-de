---
title: "extadd_pairwise_i16x8_s: Wasm SIMD Recheninstruktion"
short-title: extadd_pairwise_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_s
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extadd_pairwise_i16x8_s`** [SIMD Recheninstruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) summiert jedes benachbarte Paar von Lanes einer als signiert interpretierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8`, wobei die Ergebnisse in eine `i32x4`-Wertinterpretation ausgegeben werden.

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

Im obigen Beispiel enthält jedes benachbarte Paar von Lanes die Werte `20` und `40`. Die `extadd_pairwise_i16x8_s`-Instruktion addiert jedes Paar, was dazu führt, dass alle 4 Lanes des Ausgabe-`i32x4`-Wertes den Wert `60` enthalten.

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
  - : Die Eingabe-`v128`-`i16x8`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-`i32x4`-Wertinterpretation.

### Binärkodierung

| Instruktion                     | Binärformat    | Beispiels-Text => binär                        |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extadd_pairwise_i16x8_s` | `0xfd 126:u32` | `i32x4.extadd_pairwise_i16x8_s` => `0xfd 0x7e` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
