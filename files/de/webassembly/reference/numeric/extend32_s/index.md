---
title: "extend32_s: Wasm numerische Anweisung"
short-title: extend32_s
slug: WebAssembly/Reference/Numeric/extend32_s
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

Die **`extend32_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) [sign-erweitert](#beschreibung) die unteren 32 Bit eines 64-Bit-Integers, um dessen Vorzeichen im gesamten Wert zu propagieren.

{{InteractiveExample("Wat Demo: extend32_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 0xffffffff
    i64.extend32_s
    call $log

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

In diesem Beispiel schiebt `i64.const 0xffffffff` den Wert `0xffffffff` (`4294967295`) auf den Stack. Dieser Wert stellt `-1` dar, wenn er als Vorzeichen-32-Bit-Zahl gelesen wird; `i64.extend32_s` sign-erweitert ihn zu `0xffffffffffffffff` — was `-1` als vollständiger 64-Bit-Vorzeichen-Integer darstellt.

## WAT-Syntax

```plain
i64.extend32_s
```

- `i64.extend32_s`
  - : Die `i64.extend32_s`-Anweisung.

### Unmittelbare Werte

Keine.

### Operand-Stack

```plain
[input: i64] -> [output: i64]
```

- `input`
  - : Der Eingabewert `i64` Integer.
- `output`
  - : Der Ausgabewert `i64` Integer.

### Binärcodierung

| Anweisung        | Binärformat | Beispieltext => binär      |
| ---------------- | ----------- | -------------------------- |
| `i64.extend32_s` | `0xc4`      | `i64.extend32_s` => `0xc4` |

## Beschreibung

Die Vorzeichenerweiterung ist nützlich, da die Wasm-Integer eine feste Breite haben (32- oder 64-Bit), aber oft mit kleineren Werten — wie einem i8, i16 oder i32 — gearbeitet werden muss, die darin gespeichert sind. Wenn Sie einen negativen kleinen Wert mit Nullen auffüllen, um den Rest der Bits zu füllen, erhalten Sie die falsche Zahl: Das Bitmuster, das `-1` als 32-Bit-Wert darstellt, stellt beispielsweise nicht mehr `-1` dar, wenn Sie ihn auf 64 Bit mit Nullen aufgefüllt haben.

Die `extend32_s`-Anweisung behebt dies, indem sie die unteren 32 Bit des Wertes nimmt, sie als Vorzeichen-32-Bit-Integer behandelt und das Vorzeichenbit (Bit 31) durch alle restlichen Bits des `i64` kopiert.

Dies ist nützlich, wann immer Sie einen 32-Bit-Wert geladen oder produziert haben (zum Beispiel aus einem vier-Byte-Wert im Speicher) und Sie ihn korrekt in arithmetischen Operationen mit voller 64-Bit-Breite verwenden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extend8_s`](/de/docs/WebAssembly/Reference/Numeric/extend8_s)
- [`extend16_s`](/de/docs/WebAssembly/Reference/Numeric/extend16_s)
