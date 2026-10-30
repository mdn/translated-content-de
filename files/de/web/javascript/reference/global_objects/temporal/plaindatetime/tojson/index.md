---
title: Temporal.PlainDateTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

Die Methode **`toJSON()`** von {{jsxref("Temporal.PlainDateTime")}}-Instanzen gibt eine Zeichenfolge zurück, die dieses Datum und diese Uhrzeit im selben [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainDateTime/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die das angegebene Datum und die angegebene Uhrzeit im [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format) darstellt. Die Kalenderannotation ist enthalten, wenn der Kalender nicht `"iso8601"` ist.

## Beschreibung

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Temporal.PlainDateTime`-Objekt auftritt. Der serialisierte Wert kann anschließend mit der Funktion {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### toJSON() verwenden

```js
const dt = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const dtStr = dt.toJSON(); // '2021-08-01T00:00:00'
const dt2 = Temporal.PlainDateTime.from(dtStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainDateTime` ohne zusätzlichen Aufwand als JSON serialisiert und anschließend wieder geparst werden kann.

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
