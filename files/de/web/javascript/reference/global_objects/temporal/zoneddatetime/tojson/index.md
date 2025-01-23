---
title: Temporal.ZonedDateTime.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toJSON
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toJSON()`** Methode von Instanzen des {{jsxref("Temporal.ZonedDateTime")}} gibt eine Zeichenkette zurück, die dieses Datum-Uhrzeit-Wert im gleichen [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt, wie es der Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} tun würde. Sie soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die das gegebene Datum-Uhrzeit-Wert im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) darstellt, wobei die Kalenderannotation enthalten ist, wenn sie nicht `"iso8601"` ist, und die Offset- und Zeitzonenannotation immer enthalten sind.

## Beschreibung

Die `toJSON()` Methode wird automatisch durch {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.ZonedDateTime` Objekt als Zeichenkette umgewandelt wird. Diese Methode ist im Allgemeinen dafür gedacht, standardmäßig `Temporal.ZonedDateTime` Objekte auf nützliche Weise während der {{Glossary("JSON", "JSON")}} Serialisierung zu serialisieren, die dann mit der {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} Funktion als Wiederbeleber von {{jsxref("JSON.parse()")}} deserialisiert werden können.

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

Dieses Beispiel zeigt, wie `Temporal.ZonedDateTime` ohne zusätzlichen Aufwand als JSON serialisiert werden kann und wie es zurückgeparst werden kann.

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
