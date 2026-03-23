---
title: "extract_lane_u: Wasm SIMD Extraktionsanweisung"
short-title: extract_lane_u
slug: WebAssembly/Reference/SIMD/extract/extract_lane_u
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Die **`extract_lane_u`** [SIMD-Extraktionsanweisung](/de/docs/WebAssembly/Reference/SIMD/extract) extrahiert den Wert aus der angegebenen Lane einer [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretation als unsignierte Ganzzahl.

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
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Types/v128)-Wertinterpretationen unterstützen `extract_lane_u`:
    - `i8x16`
    - `i16x8`
- `extract_lane_u`
  - : Die `extract_lane_u` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) geschrieben werden.

### Typ

```plain
[input, lane] -> [output]
```

- `input`
  - : Die `v128`-Wertinterpretation, aus der Sie eine Lane extrahieren möchten.
- `lane`
  - : Der Index der Lane, deren Wert Sie extrahieren möchten, zum Beispiel `0`.
- `output`
  - : Der aus der Lane extrahierte Wert.

### Binärcodierung

| Anweisung              | Binärformat             | Beispieltext => binär                         |
| ---------------------- | ----------------------- | --------------------------------------------- |
| `i8x16.extract_lane_u` | `0xfd 22:u32 l:laneidx` | `i8x16.extract_lane_u 11` => `0xfd 0x16 0x0b` |
| `i16x8.extract_lane_u` | `0xfd 25:u32 l:laneidx` | `i16x8.extract_lane_u 7` => `0xfd 0x19 0x07`  |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extract_lane`](/de/docs/WebAssembly/Reference/SIMD/extract/extract_lane)
