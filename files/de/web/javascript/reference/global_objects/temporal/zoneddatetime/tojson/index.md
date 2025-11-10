---
title: Temporal.ZonedDateTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toJSON()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen String zurück, der dieses Datum-Uhrzeit im selben [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt, wie es bei einem Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} geschieht. Sie soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum-Uhrzeit im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt, wobei die Kalenderanmerkung enthalten ist, wenn sie nicht `"iso8601"` ist, und die Versatz- und Zeitzonenanmerkungen immer enthalten sind.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.ZonedDateTime`-Objekt in einen String umgewandelt wird. Diese Methode soll im Allgemeinen nützlich sein, um `Temporal.ZonedDateTime`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung standardmäßig zu serialisieren, die dann mit der {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}-Funktion als Wiederherstellungsfunktion von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

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

Dieses Beispiel zeigt, wie `Temporal.ZonedDateTime` ohne zusätzlichen Aufwand als JSON serialisiert und wie es wieder geparst werden kann.

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
