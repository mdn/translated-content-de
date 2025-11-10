---
title: Temporal.PlainYearMonth.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toJSON()`**-Methode von Instanzen des {{jsxref("Temporal.PlainYearMonth")}} gibt eine Zeichenkette zurück, die diesen Jahr-Monat im selben [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt, wie bei einem Aufruf von {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}. Sie soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die das angegebene Datum im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt, wobei die Kalenderanmerkung enthalten ist, wenn sie nicht `"iso8601"` ist.

## Beschreibung

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainYearMonth`-Objekt in eine Zeichenkette umgewandelt wird. Diese Methode ist allgemein dazu gedacht, standardmäßig `Temporal.PlainYearMonth`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung sinnvoll zu serialisieren, was dann mittels der Funktion {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden kann.

## Beispiele

### Verwendung von toJSON()

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = ym.toJSON(); // '2021-08'
const ym2 = Temporal.PlainYearMonth.from(ymStr);
```

### JSON-Serialisierung und Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainYearMonth` ohne zusätzlichen Aufwand als JSON serialisiert und wieder geparst werden kann.

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
