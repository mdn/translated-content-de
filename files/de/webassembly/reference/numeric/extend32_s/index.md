---
title: "extend32_s: Wasm numerische Anweisung"
short-title: extend32_s
slug: WebAssembly/Reference/Numeric/extend32_s
l10n:
  sourceCommit: 43030e03d6c792494bf8eb4d76963933a564e8d9
---

Die **`extend32_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) [Sign-extension](#beschreibung) der niedrigen 32 Bits einer 64-Bit-Ganzzahl, um deren Vorzeichen auf den gesamten Wert zu übertragen.

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

In diesem Beispiel drückt `i64.const 0xffffffff` den Wert `0xffffffff` (`4294967295`) auf den Stapel. Dieser Wert stellt `-1` dar, wenn er als vorzeichenbehaftete 32-Bit-Zahl gelesen wird; `i64.extend32_s` sign-extendiert ihn zu `0xffffffffffffffff` — was als vollständige 64-Bit-vorzeichenbehaftete Ganzzahl `-1` darstellt.

## WAT-Syntax

```plain
i64.extend32_s <input> <output>
```

- `i64.extend32_s`
  - : Die `i64.extend32_s`-Anweisung.

### Unmittelbare Werte

Keine.

### Operandstack

```plain
[input: i64] -> [output: i64]
```

- `input`
  - : Die Eingabe-Ganzzahl `i64`.
- `output`
  - : Die Ausgabe-Ganzzahl `i64`.

### Binäre Codierung

| Anweisung        | Binärformat | Beispieltext => binär      |
| ---------------- | ----------- | -------------------------- |
| `i64.extend32_s` | `0xc4`      | `i64.extend32_s` => `0xc4` |

## Beschreibung

Die Sign-Extension ist nützlich, weil Wasm-Ganzzahlen eine feste Breite (32- oder 64-Bit) haben, Sie jedoch häufig mit kleineren Werten arbeiten möchten — wie einem i8, i16 oder i32 — die in ihnen gespeichert sind. Wenn Sie einen negativen kleinen Wert mit Nullen auffüllen, um die restlichen Bits zu füllen, erhalten Sie die falsche Zahl: Das Bitmuster, das als 32-Bit-Wert `-1` bedeutet, stellt nicht mehr `-1` dar, sobald Sie es auf 64 Bit mit Nullen aufgefüllt haben.

Die `extend32_s`-Anweisung korrigiert dies, indem sie die unteren 32 Bits des Wertes nimmt, sie als vorzeichenbehaftete 32-Bit-Ganzzahl behandelt und das Vorzeichenbit (Bit 31) durch alle verbleibenden Bits des `i64` kopiert.

Dies ist nützlich, wann immer Sie einen 32-Bit-Wert geladen oder erzeugt haben (zum Beispiel aus einem vier-Byte-Wert im Speicher) und ihn korrekt in Arithmetik bei voller 64-Bit-Breite verwenden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extend8_s`](/de/docs/WebAssembly/Reference/Numeric/extend8_s)
- [`extend16_s`](/de/docs/WebAssembly/Reference/Numeric/extend16_s)
