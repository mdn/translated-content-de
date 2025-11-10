---
title: Temporal.PlainDateTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toJSON()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt einen String zurück, der dieses Datum-Uhrzeit in demselben [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) darstellt, als würde man {{jsxref("Temporal/PlainDateTime/toString", "toString()")}} aufrufen. Sie soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum-Uhrzeit in dem [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) darstellt, wobei die Kalenderanmerkung enthalten ist, wenn sie nicht `"iso8601"` ist.

## Beschreibung

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainDateTime`-Objekt in einen String umgewandelt wird. Diese Methode ist allgemein dazu gedacht, `Temporal.PlainDateTime`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung nützlich zu serialisieren, die dann mit der Funktion {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden kann.

## Beispiele

### Verwendung von toJSON()

```js
const dt = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const dtStr = dt.toJSON(); // '2021-08-01T00:00:00'
const dt2 = Temporal.PlainDateTime.from(dtStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainDateTime` ohne zusätzlichen Aufwand als JSON serialisiert und wie es wieder geparst werden kann.

```js
const dt = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const jsonStr = JSON.stringify({ nextBilling: dt }); // '{"nextBilling":"2021-08-01T00:00:00"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "nextBilling") {
    return Temporal.PlainDateTime.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
