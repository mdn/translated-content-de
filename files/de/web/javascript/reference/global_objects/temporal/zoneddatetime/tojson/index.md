---
title: Temporal.ZonedDateTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

Die Methode **`toJSON()`** von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen String zurück, der dieses Datum und diese Uhrzeit im selben [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum und die angegebene Uhrzeit im [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt. Die Kalenderannotation ist enthalten, wenn der Kalender nicht `"iso8601"` ist; der Offset und die Zeitzonenannotation sind immer enthalten.

## Beschreibung

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Temporal.ZonedDateTime`-Objekt auftritt. Der serialisierte Wert kann anschließend mit der Funktion {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### toJSON() verwenden

```js
const zdt = Temporal.ZonedDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  timeZone: "America/New_York",
});
const zdtStr = zdt.toJSON(); // '2021-08-01T00:00:00-04:00[America/New_York]'
const zdt2 = Temporal.ZonedDateTime.from(zdtStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.ZonedDateTime` ohne zusätzlichen Aufwand als JSON serialisiert und anschließend wieder geparst werden kann.

```js
const zdt = Temporal.ZonedDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  timeZone: "America/New_York",
});
const jsonStr = JSON.stringify({ meeting: zdt }); // '{"meeting":"2021-08-01T00:00:00-04:00[America/New_York]"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "meeting") {
    return Temporal.ZonedDateTime.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
