---
title: "sub128: Wasm numerische Anweisung"
short-title: sub128
slug: WebAssembly/Reference/Numeric/sub128
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

Die **`sub128`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) subtrahiert eine 128-Bit-Ganzzahl – dargestellt durch zwei 64-Bit-Ganzzahlen – von einer anderen, um ein 128-Bit-Ergebnis zu erzeugen, das ebenfalls durch zwei 64-Bit-Ganzzahlen dargestellt wird.

{{InteractiveExample("Wat Demo: sub128", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 123456789012345
    i64.const 123456789070
    i64.const 98765432101
    i64.const 9876543210123
    i64.sub128
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
i64.sub128
```

- `i64.sub128`
  - : Die `i64.sub128`-Anweisung.

### Unmittelbare Werte

Keine.

### Operandenstapel

```plain
[low_left_input:i64 high_left_input:i64 low_right_input:i64 high_right_input:i64] -> [low_output:i64 high_output:i64]
```

- `low_left_input`
  - : Ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64), das die niedrigen 64 Bits der linken 128-Bit-Ganzzahl darstellt.
- `high_left_input`
  - : Ein `i64`, das die hohen 64 Bits der linken 128-Bit-Ganzzahl darstellt.
- `low_right_input`
  - : Ein `i64`, das die niedrigen 64 Bits der rechten 128-Bit-Ganzzahl darstellt.
- `high_right_input`
  - : Ein `i64`, das die hohen 64 Bits der rechten 128-Bit-Ganzzahl darstellt.
- `low_output`
  - : Ein `i64`, das die niedrigen 64 Bits des Ergebnisses darstellt.
- `high_output`
  - : Ein `i64`, das die hohen 64 Bits des Ergebnisses darstellt.

### Binäre Kodierung

| Anweisung    | Binärformat   | Beispieltext => binär       |
| ------------ | ------------- | --------------------------- |
| `i64.sub128` | `0xfc 20:u32` | `i64.sub128` => `0xfc 0x14` |

## Beschreibung

Die `sub128`-Anweisung subtrahiert eine 128-Bit-Ganzzahl, dargestellt durch zwei `i64`-Werte, von einer anderen, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei `i64`-Werte dargestellt wird.

Dies ist eine der **breiten arithmetischen** Operationen, die in Situationen nützlich sind, in denen größere als 64-Bit-Zahlen in Quellsprachen mit Wasm als Kompilierungsziel verwendet werden. Ein solches Beispiel sind kryptografische Algorithmen.

Diese Methoden ermöglichen es Laufumgebungen, performantere Maschinencode für diese Operationen zu erzeugen, als dies mit `i64`-Arithmetikoperationen möglich wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add128`](/de/docs/WebAssembly/Reference/Numeric/add128)
- [`mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s)
- [`mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u)
