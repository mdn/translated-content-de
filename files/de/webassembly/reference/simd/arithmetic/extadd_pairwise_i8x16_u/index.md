---
title: "extadd_pairwise_i8x16_u: Wasm SIMD-Arithmetikbefehl"
short-title: extadd_pairwise_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Der **`extadd_pairwise_i8x16_u`** [SIMD-Arithmetikbefehl](/de/docs/WebAssembly/Reference/SIMD/arithmetic) addiert jedes benachbarte Paar von Lanes einer unformatierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i8x16`-Wertinterpretation, und gibt die Ergebnisse in einer `i16x8`-Wertinterpretation aus.

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

Im obigen Beispiel enthält jedes benachbarte Paar von Lanes die Werte `2` und `4`. Der `extadd_pairwise_i8x16_u`-Befehl addiert jedes Paar, was dazu führt, dass die 8 Lanes des Ausgabe-`i16x8`-Wertes alle den Wert `6` enthalten.

## Syntax

```plain
i16x8.extadd_pairwise_i8x16_u
```

- `i16x8.extadd_pairwise_i8x16_u`
  - : Der `i16x8.extadd_pairwise_i8x16_u` Befehl.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`i8x16`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-`i16x8`-Wertinterpretation.

### Binäre Kodierung

| Anweisung                       | Binärformat    | Beispieltext => binär                          |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extadd_pairwise_i8x16_u` | `0xfd 125:u32` | `i16x8.extadd_pairwise_i8x16_u` => `0xfd 0x7d` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Arithmetikbefehle](/de/docs/WebAssembly/Reference/SIMD/arithmetic)
