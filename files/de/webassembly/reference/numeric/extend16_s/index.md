---
title: "extend16_s: Wasm numerische Anweisung"
short-title: extend16_s
slug: WebAssembly/Reference/Numeric/extend16_s
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

Die **`extend16_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) [signalerweitert](#beschreibung) die unteren 16 Bits eines Ganzzahlwertes, um dessen Vorzeichen über den gesamten Wert hinweg fortzuführen.

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

In diesem Beispiel schiebt `i32.const 0xffff` den Wert `0xffff` (`65535`) auf den Stapel. Dieser Wert stellt `-1` dar, wenn er als vorzeichenbehafteter 16-Bit-Wert gelesen wird; `i32.extend16_s` signalerweitert ihn zu `0xffffffff` — was `-1` als voller vorzeichenbehafteter 32-Bit-Wert repräsentiert.

## WAT Syntax

```plain
value_type.extend16_s
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `extend16_s`:
    - [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- `extend16_s`
  - : Die `extend16_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingefügt werden.

### Unmittelbare Werte

Keine.

### Operandenstapel

```plain
[input: i32] -> [output: i32]
[input: i64] -> [output: i64]
```

- `input`
  - : Der Eingabe-Ganzzahlwert `i32` oder `i64`.
- `output`
  - : Der Ausgabe-Ganzzahlwert `i32` oder `i64`.

### Binäre Kodierung

| Anweisung        | Binärformat | Beispieltext => binär      |
| ---------------- | ----------- | -------------------------- |
| `i32.extend16_s` | `0xc1`      | `i32.extend16_s` => `0xc1` |
| `i64.extend16_s` | `0xc3`      | `i64.extend16_s` => `0xc3` |

## Beschreibung

Die Signalerweiterung ist nützlich, weil Wasm-Ganzzahlen eine feste Breite (32- oder 64-Bit) haben, Sie jedoch oft mit kleineren Werten arbeiten möchten — wie einem i8 oder i16 — die in ihnen gespeichert sind. Wenn Sie einen negativen kleinen Wert nullausfüllen, um die restlichen Bits zu füllen, erhalten Sie die falsche Zahl: Das Bitmuster, das `-1` als 16-Bit-Wert bedeutet, stellt nach dem Nullausfüllen nicht mehr `-1` dar.

Die `extend16_s` Anweisung behebt dies, indem sie die unteren 16 Bits des Wertes nimmt, sie als vorzeichenbehaftete 16-Bit-Ganzzahl behandelt und das Vorzeichenbit (Bit 15) durch alle verbleibenden Bits des `i32` oder `i64` kopiert.

Dies ist nützlich, wann immer Sie einen 16-Bit-Wert geladen oder erzeugt haben (zum Beispiel aus einem Zwei-Byte-Wert im Speicher) und ihn korrekt in arithmetischen Operationen mit voller 32- oder 64-Bit-Breite verwenden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extend8_s`](/de/docs/WebAssembly/Reference/Numeric/extend8_s)
- [`extend32_s`](/de/docs/WebAssembly/Reference/Numeric/extend32_s)
