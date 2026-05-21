---
title: "convert_i32x4_u: Wasm SIMD-Konvertierungsanweisung"
short-title: convert_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/convert_i32x4_u
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`convert_i32x4_u`** [SIMD-Konvertierungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) konvertiert die Lanes einer unvoreingenommenen [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) `i32x4`-Wertinterpretation in eine `f32x4`-Wertinterpretation.

{{InteractiveExample("Wat Demo: convert_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const i32x4 0x3 0x3a 0xa9 0xff

    f32x4.convert_i32x4_u
    f32x4.extract_lane 2
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
value_type.convert_i32x4_u
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `convert_i32x4_u`:
    - `f32x4`
- `convert_i32x4_u`
  - : Die `convert_i32x4_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingeschlossen werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe `v128` `i32x4`-Wertinterpretation.
- `output`
  - : Die Ausgabe `v128` `f32x4`-Wertinterpretation.

### Binärcode

| Anweisung               | Binärformat    | Beispieltext => Binär                       |
| ----------------------- | -------------- | ------------------------------------------- |
| `f32x4.convert_i32x4_u` | `0xfd 251:u32` | `f32x4.convert_i32x4_u` => `0xfd 0xfb 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD-Konvertierungsanweisungen](/de/docs/WebAssembly/Reference/SIMD/conversion)
