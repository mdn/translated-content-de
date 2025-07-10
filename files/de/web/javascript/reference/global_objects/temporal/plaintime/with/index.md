---
title: Temporal.PlainTime.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/with
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`with()`** Methode von Instanzen von {{jsxref("Temporal.PlainTime")}} gibt ein neues `Temporal.PlainTime`-Objekt zurück, das diese Zeit mit einigen Feldern darstellt, welche durch neue Werte ersetzt wurden. Da alle `Temporal`-Objekte so konzipiert sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die Felder der Zeit.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameter

- `info`
  - : Ein Objekt, das mindestens eine der von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} anerkannten Eigenschaften enthält: `hour`, `microsecond`, `millisecond`, `minute`, `nanosecond`, `second`. Nicht angegebene Eigenschaften verwenden die Werte der ursprünglichen Zeit.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Zeitkomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Zeitkomponente wird auf den gültigen Bereich beschränkt.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Zeitkomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, bei dem die in `info` angegebenen Felder, die nicht `undefined` sind, durch die entsprechenden Werte ersetzt werden und die restlichen Felder von der ursprünglichen Zeit kopiert werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt mit mindestens einer anerkannten Eigenschaft oder einem String.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die angegebenen numerischen Eigenschaften außerhalb des Bereichs liegen und `options.overflow` auf `"reject"` gesetzt ist.

## Beispiele

### Verwendung von with()

```js
const time = Temporal.PlainTime.from("12:34:56.123456789");
const newTime = time.with({ hour: 23 });
console.log(newTime.toString()); // '23:34:56.123456789'
```

Für weitere Beispiele siehe die Dokumentation zu den einzelnen Eigenschaften, die mit `with()` gesetzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
