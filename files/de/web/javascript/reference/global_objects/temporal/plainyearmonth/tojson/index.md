---
title: Temporal.PlainYearMonth.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toJSON()`**-Methode von Instanzen des Typs {{jsxref("Temporal.PlainYearMonth")}} gibt eine Zeichenkette zurück, die diesen Jahr-Monat im gleichen [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}. Sie soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die das angegebene Datum im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt, mit der Kalenderanmerkung, falls diese nicht `"iso8601"` ist.

## Beschreibung

Die `toJSON()`-Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn ein `Temporal.PlainYearMonth`-Objekt in eine Zeichenkette umgewandelt wird. Diese Methode soll im Allgemeinen standardmäßig verwendet werden, um `Temporal.PlainYearMonth`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung sinnvoll zu serialisieren. Diese können dann mithilfe der Funktion {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} als Reviver bei {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### Verwendung von toJSON()

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = ym.toJSON(); // '2021-08'
const ym2 = Temporal.PlainYearMonth.from(ymStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainYearMonth` ohne großen Aufwand als JSON serialisiert und wieder geparst werden kann.

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = JSON.stringify({ event: ym }); // '{"event":"2021-08"}'
const obj = JSON.parse(ymStr, (key, value) => {
  if (key === "event") {
    return Temporal.PlainYearMonth.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
