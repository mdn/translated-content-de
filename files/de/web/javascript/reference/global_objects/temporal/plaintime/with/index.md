---
title: Temporal.PlainTime.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`with()`** Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt ein neues `Temporal.PlainTime` Objekt zurück, das diese Zeit mit einigen Feldern repräsentiert, die durch neue Werte ersetzt werden. Da alle `Temporal` Objekte unveränderlich gestaltet sind, fungiert diese Methode im Wesentlichen als Setter für die Felder der Zeit.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} erkannten Eigenschaften enthält: `hour`, `microsecond`, `millisecond`, `minute`, `nanosecond`, `second`. Nicht spezifizierte Eigenschaften verwenden die Werte der ursprünglichen Zeit.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Zeitkomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Zeitkomponente wird auf den gültigen Bereich begrenzt.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Zeitkomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainTime` Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden und der Rest der Felder von der ursprünglichen Zeit kopiert wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt mit mindestens einer erkannten Eigenschaft oder ein String.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die angegebenen numerischen Eigenschaften außerhalb des gültigen Bereichs liegen und `options.overflow` auf `"reject"` gesetzt ist.

## Beispiele

### Verwendung von with()

```js
const time = Temporal.PlainTime.from("12:34:56.123456789");
const newTime = time.with({ hour: 23 });
console.log(newTime.toString()); // '23:34:56.123456789'
```

Für weitere Beispiele siehe die Dokumentation der einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
