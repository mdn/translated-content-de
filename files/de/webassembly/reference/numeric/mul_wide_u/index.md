---
title: "mul_wide_u: Wasm Zahl-Operation"
short-title: mul_wide_u
slug: WebAssembly/Reference/Numeric/mul_wide_u
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

Die **`mul_wide_u`** [Zahl-Operation](/de/docs/WebAssembly/Reference/Numeric) multipliziert zwei vorzeichenlose 64-Bit-Integer, um ein vorzeichenloses 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Integer dargestellt wird.

{{InteractiveExample("Wat Demo: mul_wide_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 123456789012345
    i64.const 123456789070
    i64.mul_wide_u
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
i64.mul_wide_u
```

- `i64.mul_wide_u`
  - : Der `i64.mul_wide_u` Befehl.

### Unmittelbare Werte

Keine.

### Operand-Stack

```plain
[input1:i64 input2:i64] -> [low_output:i64 high_output:i64]
```

- `input1`
  - : Die erste [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64) Eingabe.
- `input2`
  - : Die zweite `i64` Eingabe.
- `low_output`
  - : Ein `i64`, das die unteren 64 Bits des Ergebnisses darstellt.
- `high_output`
  - : Ein `i64`, das die oberen 64 Bits des Ergebnisses darstellt.

### Binäre Kodierung

| Anweisung        | Binärformat   | Beispiels Text => Binär         |
| ---------------- | ------------- | ------------------------------- |
| `i64.mul_wide_u` | `0xfc 22:u32` | `i64.mul_wide_u` => `0xfc 0x16` |

## Beschreibung

Die `mul_wide_u` Operation multipliziert zwei vorzeichenlose `i64` Werte, um ein vorzeichenloses 128-Bit-Ergebnis zu erzeugen, das durch ein Paar von `i64` Werten dargestellt wird.

Dies ist eine der **breite arithmetische** Operationen, die in Situationen nützlich sind, in denen Zahlen größer als 64 Bit in Quellsprachen verwendet werden, die Wasm als Kompilierungsziel haben. Ein solches Beispiel sind kryptographische Algorithmen.

Diese Methoden ermöglichen es Engines, effizienteren Maschinencode für diese Operationen zu generieren, als es mit `i64` arithmetischen Operationen möglich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add128`](/de/docs/WebAssembly/Reference/Numeric/add128)
- [`sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128)
- [`mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s)
