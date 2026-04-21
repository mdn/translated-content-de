---
title: "extend_high_i32x4_u: Wasm SIMD Umwandlungsanweisung"
short-title: extend_high_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_u
l10n:
  sourceCommit: 76b3f4216320b4ecdbc8b95028dc46aa67e1468e
---

Die **`extend_high_i32x4_u`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) wandelt die Bahnen 2–3 einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Types/v128) `i32x4` Wertinterpretation in eine `i64x2` Wertinterpretation um.

{{InteractiveExample("Wat Demo: extend_high_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 2090 2091 2092 2093

    i64x2.extend_high_i32x4_u
    i64x2.extract_lane 0
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```plain
i64x2.extend_high_i32x4_u
```

- `i64x2.extend_high_i32x4_u`
  - : Die `i64x2.extend_high_i32x4_u` Anweisung.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i32x4` Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `i64x2` Wertinterpretation.

### Binäre Kodierung

| Anweisung                   | Binärformat    | Beispiel Text => Binär                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i64x2.extend_high_i32x4_u` | `0xfd 202:u32` | `i64x2.extend_high_i32x4_u` => `0xfd 0xca 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
