---
title: "all_true: Wasm SIMD Bitweise Anweisung"
short-title: all_true
slug: WebAssembly/Reference/SIMD/bitwise/all_true
l10n:
  sourceCommit: 7d6773a8ee41048b915cd566b0c67f97be6ea249
---

Die **`all_true`**-[SIMD-Bitweise-Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) prüft, ob alle Spuren eines `v128`-Eingabewertes ungleich null sind.

{{InteractiveExample("Wat Demo: all_true", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0
    i8x16.all_true

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
value_type.all_true
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `all_true`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `all_true`
  - : Die `all_true`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Interpretation des Eingabe-`v128`-Wertes.
- `output`
  - : Der Ausgabewert. Dies ist ein `i32`-Typ, der `1` ist, wenn der `v128`-Eingabewert alle ungleich null Bits enthält, oder `0`, wenn eines der Bits `0` ist.

### Binäre Kodierung

| Anweisung        | Binärformat    | Beispieltext => binär                |
| ---------------- | -------------- | ------------------------------------ |
| `i8x16.all_true` | `0xfd 99:u32`  | `i8x16.all_true` => `0xfd 0x63`      |
| `i16x8.all_true` | `0xfd 131:u32` | `i16x8.all_true` => `0xfd 0x83 0x01` |
| `i32x4.all_true` | `0xfd 163:u32` | `i32x4.all_true` => `0xfd 0xa3 0x01` |
| `i64x2.all_true` | `0xfd 195:u32` | `i64x2.all_true` => `0xfd 0xc3 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
