---
title: "all_true: Wasm SIMD bitweise Anweisung"
short-title: all_true
slug: WebAssembly/Reference/SIMD/bitwise/all_true
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Die **`all_true`** [SIMD bitweise Anweisung](/de/docs/WebAssembly/Reference/SIMD/bitwise) prüft, ob alle Lanes eines `v128` Eingabewertes ungleich null sind.

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
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `all_true`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `all_true`
  - : Die `all_true` Anweisung. Sie muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Interpretation des Eingabe-`v128`-Werts.
- `output`
  - : Der Ausgabewert. Dieser ist vom Typ `i32` und ist gleich `1`, wenn der `v128`-Eingangswert alle ungleich null Bits enthält, oder `0`, wenn eines der Bits `0` ist.

### Binäre Codierung

| Anweisung        | Binärformat    | Beispieltext => Binär                |
| ---------------- | -------------- | ------------------------------------ |
| `i8x16.all_true` | `0xfd 99:u32`  | `i8x16.all_true` => `0xfd 0x63`      |
| `i16x8.all_true` | `0xfd 131:u32` | `i16x8.all_true` => `0xfd 0x83 0x01` |
| `i32x4.all_true` | `0xfd 163:u32` | `i32x4.all_true` => `0xfd 0xa3 0x01` |
| `i64x2.all_true` | `0xfd 195:u32` | `i64x2.all_true` => `0xfd 0xc3 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SIMD bitweise Anweisungen](/de/docs/WebAssembly/Reference/SIMD/bitwise)
