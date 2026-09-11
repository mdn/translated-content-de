---
title: "add128: Wasm-Numerikinstruktion"
short-title: add128
slug: WebAssembly/Reference/Numeric/add128
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{SeeCompatTable}}

Die **`add128`**-[numerische Instruktion](/de/docs/WebAssembly/Reference/Numeric) addiert zwei 128-Bit-Ganzzahlen, die durch vier 64-Bit-Ganzzahlen dargestellt werden, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.

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
  - : Die Instruktion `i64.add128`.

### Unmittelbare Werte

Keine.

### Operanden-Stack

```plain
[low_left_input:i64 high_left_input:i64 low_right_input:i64 high_right_input:i64] -> [low_output:i64 high_output:i64]
```

- `low_left_input`
  - : Ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64), das die unteren 64 Bit der linken 128-Bit-Ganzzahl darstellt.
- `high_left_input`
  - : Ein `i64`, das die oberen 64 Bit der linken 128-Bit-Ganzzahl darstellt.
- `low_right_input`
  - : Ein `i64`, das die unteren 64 Bit der rechten 128-Bit-Ganzzahl darstellt.
- `high_right_input`
  - : Ein `i64`, das die oberen 64 Bit der rechten 128-Bit-Ganzzahl darstellt.
- `low_output`
  - : Ein `i64`, das die unteren 64 Bit des Ergebnisses darstellt.
- `high_output`
  - : Ein `i64`, das die oberen 64 Bit des Ergebnisses darstellt.

### Binärkodierung

| Instruktion  | Binärformat   | Beispieltext => Binär       |
| ------------ | ------------- | --------------------------- |
| `i64.add128` | `0xfc 19:u32` | `i64.add128` => `0xfc 0x13` |

## Beschreibung

Die Instruktion `add128` addiert zwei 128-Bit-Ganzzahlen — dargestellt durch vier `i64`-Werte —, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei `i64`-Werte dargestellt wird.

Dies ist eine der Operationen für **breite Arithmetik**, die in Situationen nützlich sind, in denen in Quellsprachen Zahlen verwendet werden, die größer als 64 Bit sind und Wasm als Kompilierungsziel verwenden. Ein Beispiel dafür sind kryptografische Algorithmen.

Diese Methoden ermöglichen es Engines, für diese Operationen leistungsfähigeren Maschinencode zu erzeugen, als dies mit `i64`-arithmetischen Operationen möglich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s)
- [`mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u)
- [`sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128)
