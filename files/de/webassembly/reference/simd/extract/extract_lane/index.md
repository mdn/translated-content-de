---
title: "extract_lane: Wasm SIMD extrahieren-Anweisung"
short-title: extract_lane
slug: WebAssembly/Reference/SIMD/extract/extract_lane
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`extract_lane`** [SIMD extrahieren-Anweisung](/de/docs/WebAssembly/Reference/SIMD/extract) extrahiert den Wert, der innerhalb der angegebenen Lane einer [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretation enthalten ist.

{{InteractiveExample("Wat Demo: extract_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load two SIMD values onto the stack
    (v128.const f32x4 0x9 0xa 0xb 0xc)
    (v128.const f32x4 0x10 0x11 0x12 0x13)

    f32x4.add ;; add the two values
    f32x4.extract_lane 0 ;; Extract a float value from the result
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
value_type.extract_lane
```

- `value_type`
  - : Der Typ des Wertes, auf dem der Befehl ausgeführt wird. Die folgenden [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)-Wertinterpretationen unterstützen `extract_lane`:
    - `i32x4`
    - `i64x2`
    - `f32x4`
    - `f64x2`
- `extract_lane`
  - : Der `extract_lane`-Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

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

| Instruktion          | Binärformat              | Beispieltext => Binär                      |
| -------------------- | ------------------------ | ------------------------------------------ |
| `i32x4.extract_lane` | `0xfd 27:u32 l:lane_idx` | `i32x4.extract_lane 3` => `0xfd 0x1b 0x03` |
| `i64x2.extract_lane` | `0xfd 29:u32 l:lane_idx` | `i64x2.extract_lane 1` => `0xfd 0x1d 0x01` |
| `f32x4.extract_lane` | `0xfd 31:u32 l:lane_idx` | `f32x4.extract_lane 3` => `0xfd 0x1f 0x03` |
| `f64x2.extract_lane` | `0xfd 33:u32 l:lane_idx` | `f64x2.extract_lane 1` => `0xfd 0x21 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`replace_lane`](/de/docs/WebAssembly/Reference/SIMD/conversion/replace_lane)
