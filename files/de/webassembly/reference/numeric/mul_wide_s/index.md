---
title: "mul_wide_s: Wasm numerische Anweisung"
short-title: mul_wide_s
slug: WebAssembly/Reference/Numeric/mul_wide_s
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

Die **`mul_wide_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) multipliziert zwei vorzeichenbehaftete 64-Bit-Ganzzahlen, um ein vorzeichenbehaftetes 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.

{{InteractiveExample("Wat Demo: mul_wide_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 123456789012345
    i64.const 123456789070
    i64.mul_wide_s
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
i64.mul_wide_s
```

- `i64.mul_wide_s`
  - : Die `i64.mul_wide_s`-Anweisung.

### Unmittelbare

Keine.

### Operandenstapel

```plain
[input1:i64 input2:i64] -> [low_output:i64 high_output:i64]
```

- `input1`
  - : Die erste [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)-Eingabe.
- `input2`
  - : Die zweite `i64`-Eingabe.
- `low_output`
  - : Ein `i64`, das die unteren 64 Bits des Ergebnisses darstellt.
- `high_output`
  - : Ein `i64`, das die oberen 64 Bits des Ergebnisses darstellt.

### Binäre Codierung

| Anweisung        | Binäres Format | Beispieltext => binär           |
| ---------------- | -------------- | ------------------------------- |
| `i64.mul_wide_s` | `0xfc 21:u32`  | `i64.mul_wide_s` => `0xfc 0x15` |

## Beschreibung

Die `mul_wide_s`-Anweisung multipliziert zwei vorzeichenbehaftete `i64`-Werte, um ein vorzeichenbehaftetes 128-Bit-Ergebnis zu erzeugen, das durch ein Paar von `i64`-Werten dargestellt wird.

Dies ist eine der **weiten arithmetischen** Operationen, die in Situationen nützlich sind, in denen größere als 64-Bit-Zahlen in Quellsprachen verwendet werden, wenn Wasm als Kompilierungsziel dient. Ein solches Beispiel sind kryptografische Algorithmen.

Diese Methoden ermöglichen es den Engines, performanteren Maschinencode für diese Operationen zu erzeugen, als es mit `i64`-arithmetischen Operationen möglich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add128`](/de/docs/WebAssembly/Reference/Numeric/add128)
- [`sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128)
- [`mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u)
