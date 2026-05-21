---
title: "extadd_pairwise_i8x16_s: Wasm SIMD-Arithmetik-Instruktion"
short-title: extadd_pairwise_i8x16_s
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extadd_pairwise_i8x16_s`** [SIMD-Arithmetik-Instruktion](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Lanes einer signierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16` Werteinterpretation und gibt die Ergebnisse in einer `i16x8` Werteinterpretation aus.

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

Im obigen Beispiel enthält jedes benachbarte Paar von Lanes die Werte `2` und `4`. Die Instruktion `extadd_pairwise_i8x16_s` addiert jedes Paar miteinander, was dazu führt, dass alle 8 Lanes des Ausgabe-`i16x8`-Wertes den Wert `6` enthalten.

## Syntax

```plain
i16x8.extadd_pairwise_i8x16_s
```

- `i16x8.extadd_pairwise_i8x16_s`
  - : Die Instruktion `i16x8.extadd_pairwise_i8x16_s`.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i8x16` Werteinterpretation.
- `output`
  - : Die Ausgabe `v128` `i16x8` Werteinterpretation.

### Binärcode-Kodierung

| Instruktion                     | Binärformat    | Beispieltext => binär                          |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extadd_pairwise_i8x16_s` | `0xfd 124:u32` | `i16x8.extadd_pairwise_i8x16_s` => `0xfd 0x7c` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetik-Instruktionen](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
