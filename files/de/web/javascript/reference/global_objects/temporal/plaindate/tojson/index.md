---
title: Temporal.PlainDate.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toJSON()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt einen String zurück, der dieses Datum im gleichen [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/PlainDate/toString", "toString()")}}. Es ist vorgesehen, dass sie implizit von {{jsxref("JSON.stringify()")}} aufgerufen wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) darstellt, mit der Kalenderanmerkung eingeschlossen, falls es nicht `"iso8601"` ist.

## Beschreibung

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainDate`-Objekt in eine Zeichenkette umgewandelt wird. Diese Methode ist im Allgemeinen so konzipiert, dass sie standardmäßig `Temporal.PlainDate`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung nützlich serialisiert, die dann mithilfe der Funktion {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} als Wiederbelebung von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const date = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const dateStr = date.toJSON(); // '2021-08-01'
const d2 = Temporal.PlainDate.from(dateStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainDate` ohne zusätzlichen Aufwand als JSON serialisiert und wieder geparst werden kann.

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
