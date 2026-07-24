---
title: "extadd_pairwise_i16x8_u: Wasm SIMD Arithmetik-Anweisung"
short-title: extadd_pairwise_i16x8_u
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_u
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extadd_pairwise_i16x8_u`** [SIMD Arithmetik-Anweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Spuren einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertinterpretation und gibt die Ergebnisse in einer `i32x4` Wertinterpretation aus.

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

Im obigen Beispiel enthält jedes benachbarte Paar von Spuren die Werte `20` und `40`. Die `extadd_pairwise_i16x8_u`-Anweisung addiert jedes Paar zusammen, wodurch die 4 Spuren des Ausgabe-`i32x4`-Werts alle den Wert `60` enthalten.

## Syntax

```plain
i32x4.extadd_pairwise_i16x8_u
```

- `i32x4.extadd_pairwise_i16x8_u`
  - : Die `i32x4.extadd_pairwise_i16x8_u`-Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i16x8` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binärcodierung

| Anweisung                       | Binärformat    | Beispieltext => binär                          |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extadd_pairwise_i16x8_u` | `0xfd 127:u32` | `i32x4.extadd_pairwise_i16x8_u` => `0xfd 0x7f` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
