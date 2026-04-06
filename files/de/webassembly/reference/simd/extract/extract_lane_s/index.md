---
title: "extract_lane_s: Wasm SIMD extract-Anweisung"
short-title: extract_lane_s
slug: WebAssembly/Reference/SIMD/extract/extract_lane_s
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`extract_lane_s`** [SIMD extract-Anweisung](/de/docs/WebAssembly/Reference/SIMD/extract) extrahiert den Wert, der innerhalb der angegebenen Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation als vorzeichenbehaftete Ganzzahl enthalten ist.

{{InteractiveExample("Wat Demo: extract_lane_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load a SIMD value onto the stack
    (v128.const i16x8 1 0 -2 -1 -4 -2 -2 3)

    i16x8.extract_lane_s 6 ;; Extract a scalar value from the result
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
value_type.extract_lane_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `extract_lane_s`:
    - `i8x16`
    - `i16x8`
- `extract_lane_s`
  - : Die `extract_lane_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input, lane] -> [output]
```

- `input`
  - : Die `v128`-Wertinterpretation, aus der Sie eine Lane extrahieren möchten.
- `lane`
  - : Der Index der Lane, deren Wert Sie extrahieren möchten, zum Beispiel `0`.
- `output`
  - : Der Wert, der aus der Lane extrahiert wurde.

### Binärcodierung

| Anweisung              | Binärformat              | Beispieltext => binär                         |
| ---------------------- | ------------------------ | --------------------------------------------- |
| `i8x16.extract_lane_s` | `0xfd 21:u32 l:lane_idx` | `i8x16.extract_lane_s 11` => `0xfd 0x15 0x0b` |
| `i16x8.extract_lane_s` | `0xfd 24:u32 l:lane_idx` | `i16x8.extract_lane_s 7` => `0xfd 0x18 0x07`  |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)
