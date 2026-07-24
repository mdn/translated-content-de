---
title: "max_s: Wasm SIMD Arithmetik-Befehl"
short-title: max_s
slug: WebAssembly/Reference/SIMD/arithmetic/max_s
l10n:
  sourceCommit: b1f6f8008099d8c8fb7d253ec17e3cfaa726a75f
---

Der **`max_s`** Befehl vergleicht zwei interpretierte, vorzeichenbehaftete Ganzzahlwerte von [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) und gibt eine neue Interpretation zurück, bei der jede Lane auf den größeren Wert des jeweiligen Lane-Index der beiden Eingaben gesetzt wird.

{{InteractiveExample("Wat Demo: max_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two v128 i16x8s onto the stack
    v128.const i16x8 10 400 0 86 87 9000 -5 19
    v128.const i16x8 200 20 0 -5 80 9 -6 283

    ;; return a i16x8 containing the greatest values from each input
    i16x8.max_s
    i16x8.extract_lane_s 5 ;; Extract a single lane
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
value_type.max_s
```

- `value_type`
  - : Der Typ des Wertes, auf dem der Befehl ausgeführt wird. Die folgenden Typen unterstützen `max_s`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
- `max_s`
  - : Der `max_s` Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) angegeben werden.

### Typ

```plain
[input1, input2] -> [output]
```

- `input1`
  - : Der erste Eingabewert.
- `input2`
  - : Der zweite Eingabewert.
- `output`
  - : Der Ausgabewert. Ein neues `v128` vom gleichen Typ wie die Eingaben, wobei jede Lane auf den größeren Wert des jeweiligen Lane-Index der beiden Eingaben gesetzt wird.

### Binäre Kodierung

| Befehl        | Binärformat    | Beispieltext => Binär             |
| ------------- | -------------- | --------------------------------- |
| `i8x16.max_s` | `0xfd 120:u32` | `i8x16.max_s` => `0xfd 0x78`      |
| `i16x8.max_s` | `0xfd 152:u32` | `i16x8.max_s` => `0xfd 0x98 0x01` |
| `i32x4.max_s` | `0xfd 184:u32` | `i32x4.max_s` => `0xfd 0xb8 0x01` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/WebAssembly/Reference/Numeric/max)
- [`max_u`](/de/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
