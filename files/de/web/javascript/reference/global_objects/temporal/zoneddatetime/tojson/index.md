---
title: Temporal.ZonedDateTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toJSON()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen String zurück, der diese Datum-Uhrzeit im gleichen [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt wie durch den Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}. Sie soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die gegebene Datum-Uhrzeit im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt, wobei die Kalenderannotation enthalten ist, wenn sie nicht `"iso8601"` ist, und die Offset- sowie die Zeitzonenannotation immer enthalten sind.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.ZonedDateTime`-Objekt in einen String umgewandelt wird. Diese Methode soll im Allgemeinen dazu dienen, `Temporal.ZonedDateTime`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung nützlich zu serialisieren, die dann mittels der {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}-Funktion als Wiederbeleber von {{jsxref("JSON.parse()")}} deserialisiert werden können.

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

Dieses Beispiel zeigt, wie `Temporal.ZonedDateTime` ohne zusätzlichen Aufwand als JSON serialisiert und wie es zurück geparst werden kann.

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
