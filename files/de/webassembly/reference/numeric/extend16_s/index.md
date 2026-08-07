---
title: "extend16_s: Wasm numerische Anweisung"
short-title: extend16_s
slug: WebAssembly/Reference/Numeric/extend16_s
l10n:
  sourceCommit: 43030e03d6c792494bf8eb4d76963933a564e8d9
---

Die **`extend16_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) [erweitert vorzeichenbehaftet](#beschreibung) die unteren 16 Bits eines Integers, um das Vorzeichen auf den gesamten Wert auszuweiten.

{{InteractiveExample("Wat Demo: extend16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i32.const 0xffff
    i32.extend16_s
    call $log

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

In diesem Beispiel schiebt `i32.const 0xffff` den Wert `0xffff` (`65535`) auf den Stapel. Dieser Wert entspricht `-1`, wenn er als vorzeichenbehaftete 16-Bit-Zahl gelesen wird; `i32.extend16_s` erweitert ihn vorzeichenbehaftet zu `0xffffffff` — was `-1` als vollständiger 32-Bit-Vorzeicheninteger repräsentiert.

## WAT-Syntax

```plain
value_type.extend16_s <input> <output>
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `extend16_s`:
    - [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- `extend16_s`
  - : Die `extend16_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Unmittelbare Werte

Keine.

### Operandstapel

```plain
[input: i32] -> [output: i32]
[input: i64] -> [output: i64]
```

- `input`
  - : Der Eingabe-`i32`- oder `i64`-Integer.
- `output`
  - : Der Ausgabe-`i32`- oder `i64`-Integer.

### Binärcodierung

| Anweisung        | Binärformat | Beispieltext => Binär      |
| ---------------- | ----------- | -------------------------- |
| `i32.extend16_s` | `0xc1`      | `i32.extend16_s` => `0xc1` |
| `i64.extend16_s` | `0xc3`      | `i64.extend16_s` => `0xc3` |

## Beschreibung

Die Vorzeichenerweiterung ist nützlich, weil Wasm-Integer eine feste Breite (32- oder 64-Bit) haben, Sie aber oft mit kleineren Werten arbeiten möchten — wie `i8` oder `i16` — die in ihnen gespeichert sind. Wenn Sie einen negativen kleinen Wert mit Nullen auffüllen, um die restlichen Bits zu füllen, erhalten Sie die falsche Zahl: Das Bitmuster, das `-1` als 16-Bit-Wert darstellt, repräsentiert zum Beispiel nicht mehr `-1`, sobald Sie es mit Nullen aufgefüllt haben.

Die `extend16_s`-Anweisung behebt dies, indem sie die unteren 16 Bits des Wertes nimmt, sie als vorzeichenbehafteten 16-Bit-Integer behandelt und das Vorzeichenbit (Bit 15) durch alle verbleibenden Bits des `i32` oder `i64` kopiert.

Dies ist nützlich, wann immer Sie einen 16-Bit-Wert geladen oder erzeugt haben (z.B. von einem 2-Byte-Wert im Speicher) und diesen korrekt in Arithmetik bei voller 32- oder 64-Bit-Breite verwenden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extend8_s`](/de/docs/WebAssembly/Reference/Numeric/extend8_s)
- [`extend32_s`](/de/docs/WebAssembly/Reference/Numeric/extend32_s)
