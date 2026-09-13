---
title: "sub128: Wasm-Numerikbefehl"
short-title: sub128
slug: WebAssembly/Reference/Numeric/sub128
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{SeeCompatTable}}

Der numerische Befehl **`sub128`** subtrahiert eine 128-Bit-Ganzzahl — dargestellt durch zwei 64-Bit-Ganzzahlen — von einer anderen, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei 64-Bit-Ganzzahlen dargestellt wird.

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
  - : Der Befehl `i64.sub128`.

### Immediate-Werte

Keine.

### Operanden-Stack

```plain
[low_left_input:i64 high_left_input:i64 low_right_input:i64 high_right_input:i64] -> [low_output:i64 high_output:i64]
```

- `low_left_input`
  - : Ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64), das die niedrigen 64 Bit der linksseitigen 128-Bit-Ganzzahl darstellt.
- `high_left_input`
  - : Ein `i64`, das die hohen 64 Bit der linksseitigen 128-Bit-Ganzzahl darstellt.
- `low_right_input`
  - : Ein `i64`, das die niedrigen 64 Bit der rechtsseitigen 128-Bit-Ganzzahl darstellt.
- `high_right_input`
  - : Ein `i64`, das die hohen 64 Bit der rechtsseitigen 128-Bit-Ganzzahl darstellt.
- `low_output`
  - : Ein `i64`, das die niedrigen 64 Bit des Ergebnisses darstellt.
- `high_output`
  - : Ein `i64`, das die hohen 64 Bit des Ergebnisses darstellt.

### Binärcodierung

| Befehl       | Binärformat   | Beispieltext => Binärdatei  |
| ------------ | ------------- | --------------------------- |
| `i64.sub128` | `0xfc 20:u32` | `i64.sub128` => `0xfc 0x14` |

## Beschreibung

Der Befehl `sub128` subtrahiert eine 128-Bit-Ganzzahl, dargestellt durch zwei `i64`-Werte, von einer anderen, um ein 128-Bit-Ergebnis zu erzeugen, das durch zwei `i64`-Werte dargestellt wird.

Dies ist eine der Operationen der **breiten Arithmetik**, die in Situationen nützlich sind, in denen in Quellsprachen, bei denen Wasm ein Kompilierungsziel ist, Zahlen verwendet werden, die größer als 64 Bit sind. Ein Beispiel hierfür sind kryptografische Algorithmen.

Diese Methoden ermöglichen es Engines, für diese Operationen leistungsfähigeren Maschinencode zu erzeugen, als dies mit `i64`-Arithmetikoperationen möglich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add128`](/de/docs/WebAssembly/Reference/Numeric/add128)
- [`mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s)
- [`mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u)
