---
title: "extract_lane_s: Wasm SIMD extract-Anweisung"
short-title: extract_lane_s
slug: WebAssembly/Reference/SIMD/extract/extract_lane_s
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extract_lane_s`** [SIMD-Extrakt-Anweisung](/de/docs/WebAssembly/Reference/SIMD/extract) extrahiert den Wert, der in der angegebenen Spur einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretation als vorzeichenbehaftete Ganzzahl enthalten ist.

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
  - : Der Werttyp, auf den die Anweisung angewendet wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `extract_lane_s`:
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
  - : Der Wert, der aus der Spur extrahiert wird.

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
