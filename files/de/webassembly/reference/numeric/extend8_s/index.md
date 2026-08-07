---
title: "extend8_s: Wasm numerische Anweisung"
short-title: extend8_s
slug: WebAssembly/Reference/Numeric/extend8_s
l10n:
  sourceCommit: 43030e03d6c792494bf8eb4d76963933a564e8d9
---

Die **`extend8_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) [sign-erweitert](#beschreibung) die unteren 8 Bits eines Integers, um sein Vorzeichen über den gesamten Wert zu propagieren.

{{InteractiveExample("Wat Demo: extend8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i32.const 0xff
    i32.extend8_s
    call $log

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

In diesem Beispiel drückt `i32.const 0xff` den Wert `0xff` (`255`) auf den Stapel. Dieser Wert stellt `-1` dar, wenn er als vorzeichenbehaftete 8-Bit-Zahl gelesen wird; `i32.extend8_s` sign-erweitert ihn zu `0xffffffff` — das ist `-1`, dargestellt als vollständiger 32-Bit vorzeichenbehafteter Integer.

## WAT-Syntax

```plain
value_type.extend8_s <input> <output>
```

- `value_type`
  - : Der Typ des Wertes, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `extend8_s`:
    - [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- `extend8_s`
  - : Die `extend8_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

### Unmittelbare Werte

Keine.

### Operandenstapel

```plain
[input: i32] -> [output: i32]
[input: i64] -> [output: i64]
```

- `input`
  - : Der Eingabe-`i32` oder `i64`-Integer.
- `output`
  - : Der Ausgabe-`i32` oder `i64`-Integer.

### Binärcodierung

| Anweisung       | Binärformat | Beispieltext => binär     |
| --------------- | ----------- | ------------------------- |
| `i32.extend8_s` | `0xc0`      | `i32.extend8_s` => `0xc0` |
| `i64.extend8_s` | `0xc2`      | `i64.extend8_s` => `0xc2` |

## Beschreibung

Die Signerweiterung ist nützlich, weil Wasm-Integer eine feste Breite haben (32- oder 64-Bit), Sie jedoch oft mit kleineren Werten arbeiten möchten — wie einem i8 oder i16 — die darin gespeichert sind. Wenn Sie einen negativen kleinen Wert mit Nullen ausfüllen, um die restlichen Bits zu füllen, erhalten Sie die falsche Zahl: das Bitmuster, das `-1` als 8-Bit-Wert darstellt, repräsentiert nicht mehr `-1`, sobald Sie es mit Nullen ausfüllen.

Die `extend8_s` Anweisung behebt dies, indem sie die unteren 8 Bits des Wertes nimmt, sie als vorzeichenbehafteten 8-Bit-Integer interpretiert und das Vorzeichenbit (Bit 7) durch alle verbleibenden Bits des `i32` oder `i64` kopiert.

Dies ist nützlich, wenn Sie einen 8-Bit-Wert (zum Beispiel aus einem Byte im Speicher) geladen oder produziert haben und ihn korrekt in der Arithmetik bei voller 32- oder 64-Bit-Breite verwenden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extend16_s`](/de/docs/WebAssembly/Reference/Numeric/extend16_s)
- [`extend32_s`](/de/docs/WebAssembly/Reference/Numeric/extend32_s)
