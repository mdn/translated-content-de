---
title: Temporal.PlainDate.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toJSON()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt einen String zurück, der dieses Datum im selben [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainDate/toString", "toString()")}}. Diese Methode wird implizit von {{jsxref("JSON.stringify()")}} aufgerufen.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das gegebene Datum im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) darstellt, wobei die Kalenderannotation enthalten ist, falls sie nicht `"iso8601"` ist.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainDate`-Objekt in einen String konvertiert wird. Diese Methode dient im Allgemeinen dem Zweck, `Temporal.PlainDate`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung nützlich zu serialisieren, die dann mit der {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}-Funktion als Rückruf von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const date = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const dateStr = date.toJSON(); // '2021-08-01'
const d2 = Temporal.PlainDate.from(dateStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainDate` ohne zusätzlichen Aufwand als JSON serialisiert und wie es wieder geparst werden kann.

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
