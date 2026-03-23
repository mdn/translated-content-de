---
title: "extract_lane_s: Wasm SIMD extract-Anweisung"
short-title: extract_lane_s
slug: WebAssembly/Reference/SIMD/extract/extract_lane_s
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`extract_lane_s`** [SIMD extract-Anweisung](/de/docs/WebAssembly/Reference/SIMD/extract) extrahiert den Wert, der sich innerhalb der angegebenen Spur einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation als vorzeichenbehaftete Ganzzahl befindet.

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
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `extract_lane_s`:
    - `i8x16`
    - `i16x8`
- `extract_lane_s`
  - : Die `extract_lane_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input, lane] -> [output]
```

- `input`
  - : Die `v128`-Wertinterpretation, aus der Sie eine Spur extrahieren möchten.
- `lane`
  - : Der Index der Spur, deren Wert Sie extrahieren möchten, zum Beispiel `0`.
- `output`
  - : Der aus der Spur extrahierte Wert.

### Binäre Kodierung

| Anweisung              | Binärformat             | Beispieltext => Binär                         |
| ---------------------- | ----------------------- | --------------------------------------------- |
| `i8x16.extract_lane_s` | `0xfd 21:u32 l:laneidx` | `i8x16.extract_lane_s 11` => `0xfd 0x15 0x0b` |
| `i16x8.extract_lane_s` | `0xfd 24:u32 l:laneidx` | `i16x8.extract_lane_s 7` => `0xfd 0x18 0x07`  |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)
