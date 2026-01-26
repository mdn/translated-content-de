---
title: Temporal.PlainDateTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toJSON()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt einen String zurück, der dieses Datum-Uhrzeit im gleichen [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) darstellt, wie beim Aufruf von {{jsxref("Temporal/PlainDateTime/toString", "toString()")}}. Sie ist dazu bestimmt, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum-Uhrzeit im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) darstellt, einschließlich der Kalenderanmerkung, wenn diese nicht `"iso8601"` ist.

## Beschreibung

Die `toJSON()` Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainDateTime` Objekt in einen String umgewandelt wird. Diese Methode ist im Allgemeinen dazu gedacht, `Temporal.PlainDateTime` Objekte während der {{Glossary("JSON", "JSON")}} Serialisierung sinnvoll zu serialisieren, sodass sie dann mit der {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} Funktion als Rückgewinnung von {{jsxref("JSON.parse()")}} deserialisiert werden können.

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
