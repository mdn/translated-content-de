---
title: "mul_wide_s: Wasm-Zahleninstruktion"
short-title: mul_wide_s
slug: WebAssembly/Reference/Numeric/mul_wide_s
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{SeeCompatTable}}

Die numerische Instruktion **`mul_wide_s`** [numeric instruction](/de/docs/WebAssembly/Reference/Numeric) multipliziert zwei vorzeichenbehaftete 64-Bit-Ganzzahlen, um ein vorzeichenbehaftetes 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.

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
  - : Die Instruktion `i64.mul_wide_s`.

### Unmittelbare Werte

Keine.

### Operanden-Stack

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

### Binärcodierung

| Instruktion      | Binärformat   | Beispieltext => Binärformat     |
| ---------------- | ------------- | ------------------------------- |
| `i64.mul_wide_s` | `0xfc 21:u32` | `i64.mul_wide_s` => `0xfc 0x15` |

## Beschreibung

Die Instruktion `mul_wide_s` multipliziert zwei vorzeichenbehaftete `i64`-Werte miteinander, um ein vorzeichenbehaftetes 128-Bit-Ergebnis zu erzeugen, das durch ein Paar von `i64`-Werten dargestellt wird.

Dies ist eine der Operationen der **breiten Arithmetik**, die in Situationen nützlich sind, in denen in Quellsprachen Zahlen verwendet werden, die größer als 64 Bit sind, und Wasm als Kompilierungsziel dient. Ein Beispiel dafür sind kryptografische Algorithmen.

Diese Methoden ermöglichen es Engines, für diese Operationen leistungsfähigeren Maschinencode zu erzeugen, als dies mit `i64`-Arithmetikoperationen möglich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add128`](/de/docs/WebAssembly/Reference/Numeric/add128)
- [`sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128)
- [`mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u)
