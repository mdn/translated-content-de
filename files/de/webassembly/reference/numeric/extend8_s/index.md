---
title: "extend8_s: Wasm numerische Anweisung"
short-title: extend8_s
slug: WebAssembly/Reference/Numeric/extend8_s
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

Die **`extend8_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) [sign-extends](#beschreibung) die unteren 8 Bits eines Integers, um sein Vorzeichen über den gesamten Wert zu propagieren.

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

In diesem Beispiel schiebt `i32.const 0xff` den Wert `0xff` (`255`) auf den Stapel. Dieser Wert repräsentiert `-1`, wenn er als vorzeichenbehaftete 8-Bit-Zahl gelesen wird; `i32.extend8_s` sign-erweitert ihn auf `0xffffffff` — was `-1` als vollständiger 32-Bit-vorzeichenbehafteter Integer darstellt.

## WAT-Syntax

```plain
value_type.extend8_s
```

- `value_type`
  - : Der Werttyp, auf dem die Anweisung ausgeführt wird. Die folgenden Typen unterstützen `extend8_s`:
    - [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
- `extend8_s`
  - : Die `extend8_s`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) enthalten sein.

### Unmittelbare Werte

Keine.

### Operandenstapel

```plain
[input: i32] -> [output: i32]
[input: i64] -> [output: i64]
```

- `input`
  - : Der Eingabe-`i32`- oder `i64`-Integer.
- `output`
  - : Der Ausgabe-`i32`- oder `i64`-Integer.

### Binärcode

| Anweisung       | Binärformat | Beispieltext => binär     |
| --------------- | ----------- | ------------------------- |
| `i32.extend8_s` | `0xc0`      | `i32.extend8_s` => `0xc0` |
| `i64.extend8_s` | `0xc2`      | `i64.extend8_s` => `0xc2` |

## Beschreibung

Vorzeichenerweiterung ist nützlich, weil Wasm-Integer eine feste Breite (32- oder 64-Bit) haben, Sie aber oft mit kleineren Werten — wie einem i8 oder i16 — arbeiten möchten, die in ihnen gespeichert sind. Wenn Sie einen negativen kleinen Wert nullauffüllen, um die restlichen Bits zu füllen, erhalten Sie die falsche Zahl: Das Bitmuster, das `-1` als 8-Bit-Wert bedeutet, repräsentiert zum Beispiel nicht mehr `-1`, wenn Sie es nullauffüllen.

Die `extend8_s`-Anweisung behebt dies, indem sie die unteren 8 Bits des Wertes nimmt, sie als vorzeichenbehaftete 8-Bit-Zahl behandelt und das Vorzeichenbit (Bit 7) in allen verbleibenden Bits des `i32` oder `i64` kopiert.

Dies ist nützlich, wann immer Sie einen 8-Bit-Wert geladen oder erzeugt haben (zum Beispiel aus einem Byte im Speicher) und ihn korrekt in der Arithmetik mit voller 32- oder 64-Bit-Breite verwenden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`extend16_s`](/de/docs/WebAssembly/Reference/Numeric/extend16_s)
- [`extend32_s`](/de/docs/WebAssembly/Reference/Numeric/extend32_s)
