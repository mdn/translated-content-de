---
title: "extadd_pairwise_i8x16_u: Wasm SIMD-Arithmetikanweisung"
short-title: extadd_pairwise_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_u
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Die **`extadd_pairwise_i8x16_u`** [SIMD-Arithmetikanweisung](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Lanes einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16` Wertinterpretation und gibt die Ergebnisse in einer `i16x8` Wertinterpretation aus.

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

Im obigen Beispiel enthält jedes benachbarte Lanes-Paar die Werte `2` und `4`. Die `extadd_pairwise_i8x16_u` Anweisung addiert jedes Paar zusammen, wodurch alle 8 Lanes des Ausgabewertes `i16x8` den Wert `6` enthalten.

## Syntax

```plain
i16x8.extadd_pairwise_i8x16_u
```

- `i16x8.extadd_pairwise_i8x16_u`
  - : Die `i16x8.extadd_pairwise_i8x16_u` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i8x16` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Wertinterpretation.

### Binärkodierung

| Anweisung                       | Binärformat    | Beispiel Text => Binär                         |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extadd_pairwise_i8x16_u` | `0xfd 125:u32` | `i16x8.extadd_pairwise_i8x16_u` => `0xfd 0x7d` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
