---
title: "replace_lane: Wasm SIMD Umwandlungsanweisung"
short-title: replace_lane
slug: WebAssembly/Reference/SIMD/conversion/replace_lane
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`replace_lane`** [SIMD Umwandlungsanweisung](/de/docs/WebAssembly/Reference/SIMD/conversion) ersetzt die angegebene Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretation mit einem neuen Wert und gibt die resultierende `v128` Wertinterpretation zurück.

{{InteractiveExample("Wat Demo: replace_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    v128.const f64x2 1200000 3456789
    f64.const 777777

    f64x2.replace_lane 1
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
value_type.replace_lane index
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128) Wertinterpretationen unterstützen `replace_lane`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
    - `f32x4`
    - `f64x2`
- `replace_lane`
  - : Die `replace_lane` Anweisung. Sie muss immer nach dem `value_type` und einem Punkt (`.`) eingeschlossen werden.
- `index`
  - : Der Index der Lane, die Sie ersetzen möchten.

### Typ

```plain
[input, replace_value] -> [output]
```

- `input`
  - : Die Eingabe `v128` Wertinterpretation.
- `replace_value`
  - : Der Wert, mit dem Sie die Lane ersetzen möchten.
- `output`
  - : Die Ausgabe `v128` Wertinterpretation.

### Binäre Kodierung

| Anweisung            | Binärformat             | Beispieltext => binär                      |
| -------------------- | ----------------------- | ------------------------------------------ |
| `i8x16.replace_lane` | `0xfd 23:u32 l:laneidx` | `i8x16.replace_lane 3` => `0xfd 0x17 0x03` |
| `i16x8.replace_lane` | `0xfd 26:u32 l:laneidx` | `i16x8.replace_lane 3` => `0xfd 0x1a 0x03` |
| `i32x4.replace_lane` | `0xfd 28:u32 l:laneidx` | `i32x4.replace_lane 3` => `0xfd 0x1c 0x03` |
| `i64x2.replace_lane` | `0xfd 30:u32 l:laneidx` | `i64x2.replace_lane 1` => `0xfd 0x1e 0x01` |
| `f32x4.replace_lane` | `0xfd 32:u32 l:laneidx` | `f32x4.replace_lane 3` => `0xfd 0x20 0x03` |
| `f64x2.replace_lane` | `0xfd 34:u32 l:laneidx` | `f64x2.replace_lane 1` => `0xfd 0x22 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)
