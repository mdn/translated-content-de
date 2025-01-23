---
title: Temporal.PlainDate.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toJSON
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toJSON()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt einen String zurück, der dieses Datum im gleichen [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) darstellt wie bei einem Aufruf von {{jsxref("Temporal/PlainDate/toString", "toString()")}}. Sie soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) darstellt, wobei die Kalenderannotation enthalten ist, wenn sie nicht auf `"iso8601"` gesetzt ist.

## Beschreibung

Die `toJSON()` Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainDate` Objekt in einen String umgewandelt wird. Diese Methode ist im Allgemeinen dazu gedacht, standardmäßig `Temporal.PlainDate` Objekte während der {{Glossary("JSON", "JSON")}} Serialisierung sinnvoll zu serialisieren, welche dann mit der {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} Funktion als "Reviver" von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const date = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const dateStr = date.toJSON(); // '2021-08-01'
const d2 = Temporal.PlainDate.from(dateStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainDate` ohne zusätzlichen Aufwand als JSON serialisiert werden kann und wie man es zurückparsen kann.

```js
const date = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const jsonStr = JSON.stringify({ date }); // '{"date":"2021-08-01"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "date") {
    return Temporal.PlainDate.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
