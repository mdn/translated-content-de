---
title: "add128: Wasm numerische Anweisung"
short-title: add128
slug: WebAssembly/Reference/Numeric/add128
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

Die **`add128`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) addiert zwei 128-Bit-Ganzzahlen, die durch vier 64-Bit-Ganzzahlen dargestellt werden, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.

{{InteractiveExample("Wat Demo: add128", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 123456789012345
    i64.const 123456789070
    i64.const 98765432101
    i64.const 9876543210123
    i64.add128
    call $log ;; log high 64 bits
    call $log ;; log low 64 bits
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## WAT-Syntax

```plain
i64.add128
```

- `i64.add128`
  - : Die `i64.add128`-Anweisung.

### Unmittelbare Werte

Keine.

### Operand-Stack

```plain
[low_left_input:i64 high_left_input:i64 low_right_input:i64 high_right_input:i64] -> [low_output:i64 high_output:i64]
```

- `low_left_input`
  - : Ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64), der die niedrigen 64 Bit der linken 128-Bit-Ganzzahl repräsentiert.
- `high_left_input`
  - : Ein `i64`, der die hohen 64 Bit der linken 128-Bit-Ganzzahl repräsentiert.
- `low_right_input`
  - : Ein `i64`, der die niedrigen 64 Bit der rechten 128-Bit-Ganzzahl repräsentiert.
- `high_right_input`
  - : Ein `i64`, der die hohen 64 Bit der rechten 128-Bit-Ganzzahl repräsentiert.
- `low_output`
  - : Ein `i64`, der die niedrigen 64 Bit des Ergebnisses repräsentiert.
- `high_output`
  - : Ein `i64`, der die hohen 64 Bit des Ergebnisses repräsentiert.

### Binäre Kodierung

| Anweisung    | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i64.add128` | `0xfc 19:u32` | `i64.add128` => `0xfc 0x13` |

## Beschreibung

Die `add128`-Anweisung addiert zwei 128-Bit-Ganzzahlen — dargestellt durch vier `i64`-Werte — zusammen, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei `i64`-Werte dargestellt wird.

Dies ist eine der **weiten arithmetischen** Operationen, die nützlich sind in Situationen, in denen Zahlen, die größer als 64 Bit sind, in Quellsprachen verwendet werden, wobei Wasm als Kompilierungsziel dient. Ein solches Beispiel sind kryptografische Algorithmen.

Diese Methoden ermöglichen es Engines, performanteren Maschinencode für diese Operationen zu generieren, als dies mit `i64`-Arithmetikoperationen möglich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s)
- [`mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u)
- [`sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128)
