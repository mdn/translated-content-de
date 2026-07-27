---
title: "extract_lane_u: Wasm SIMD extract Befehl"
short-title: extract_lane_u
slug: WebAssembly/Reference/SIMD/extract/extract_lane_u
l10n:
  sourceCommit: d8d43055ac49fc512539fe02d873be4ffee29bc0
---

Der **`extract_lane_u`** [SIMD extract Befehl](/de/docs/WebAssembly/Reference/SIMD/extract) extrahiert den Wert, der in der angegebenen Lane eines [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Werts vorhanden ist, bei der Interpretation als unsigned integer.

{{InteractiveExample("Wat Demo: extract_lane_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load a SIMD value onto the stack
    (v128.const i16x8 1 0 -2 -1 -4 -2 -2 3)

    i16x8.extract_lane_u 6 ;; Extract a scalar value from the result
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
value_type.extract_lane_u
```

- `value_type`
  - : Der Typ des Werts, auf dem der Befehl ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `extract_lane_u`:
    - `i8x16`
    - `i16x8`
- `extract_lane_u`
  - : Der `extract_lane_u` Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input, lane] -> [output]
```

- `input`
  - : Die `v128`-Wertinterpretation, aus der Sie eine Lane extrahieren möchten.
- `lane`
  - : Der Index der Lane, deren Wert Sie extrahieren möchten, zum Beispiel `0`.
- `output`
  - : Der Wert, der aus der Lane extrahiert wird.

### Binärcodierung

| Befehl                 | Binärformat              | Beispieltext => Binär                         |
| ---------------------- | ------------------------ | --------------------------------------------- |
| `i8x16.extract_lane_u` | `0xfd 22:u32 l:lane_idx` | `i8x16.extract_lane_u 11` => `0xfd 0x16 0x0b` |
| `i16x8.extract_lane_u` | `0xfd 25:u32 l:lane_idx` | `i16x8.extract_lane_u 7` => `0xfd 0x19 0x07`  |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)
