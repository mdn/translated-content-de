---
title: "convert_low_i32x4_u: Wasm SIMD Umwandlungsanweisung"
short-title: convert_low_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`convert_low_i32x4_u`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die ersten beiden Bahnen einer unsignierten [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4`-Wertinterpretation in eine `f64x2`-Wertinterpretation.

{{InteractiveExample("Wat Demo: convert_low_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    v128.const i32x4 0x3 0x3a 0xa9 0xff

    f64x2.convert_low_i32x4_u
    f64x2.extract_lane 1
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
value_type.convert_low_i32x4_u
```

- `value_type`
  - : Der Werttyp, mit dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `convert_low_i32x4_u`:
    - `f64x2`
- `convert_low_i32x4_u`
  - : Die `convert_low_i32x4_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-`v128`-`i32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe-`v128`-`f64x2`-Wertinterpretation. Die ersten beiden Werte der Eingabe-`i32x4` sind in der Ausgabe-`f64x2` enthalten.

### Binärcode

| Anweisung                   | Binärformat    | Beispieltext => binär                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| `f64x2.convert_low_i32x4_u` | `0xfd 255:u32` | `f64x2.convert_low_i32x4_u` => `0xfd 0xff 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD Umwandlungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
