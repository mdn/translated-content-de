---
title: "extadd_pairwise_i16x8_s: Wasm SIMD Arithmetik-Instruktion"
short-title: extadd_pairwise_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extadd_pairwise_i16x8_s`** [SIMD Arithmetik-Instruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Spuren einer vorzeichenbehafteten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i16x8` Wertinterpretation und gibt die Ergebnisse in einer `i32x4` Wertinterpretation aus.

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

Im obigen Beispiel enthält jedes benachbarte Spur-Paar die Werte `20` und `40`. Die `extadd_pairwise_i16x8_s` Instruktion addiert jedes dieser Paare, sodass die 4 Spuren des Ausgabewertes `i32x4` alle den Wert `60` enthalten.

## Syntax

```plain
i32x4.extadd_pairwise_i16x8_s
```

- `i32x4.extadd_pairwise_i16x8_s`
  - : Die `i32x4.extadd_pairwise_i16x8_s` Instruktion.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i16x8` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i32x4` Wertinterpretation.

### Binärcodierung

| Instruktion                     | Binärformat    | Textbeispiel => Binär                          |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extadd_pairwise_i16x8_s` | `0xfd 126:u32` | `i32x4.extadd_pairwise_i16x8_s` => `0xfd 0x7e` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Arithmetik-Instruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
