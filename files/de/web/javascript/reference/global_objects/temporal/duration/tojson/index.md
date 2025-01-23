---
title: Temporal.Duration.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toJSON
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt einen String zurück, der diese Dauer im gleichen [ISO 8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt wie der Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}}. Es ist vorgesehen, dass sie implizit durch {{jsxref("JSON.stringify()")}} aufgerufen wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die gegebene Dauer im [ISO 8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt, mit so großer Untersekunden-Genauigkeit wie nötig, um die Dauer exakt darzustellen.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.Duration`-Objekt in einen String umgewandelt wird. Diese Methode ist im Allgemeinen dazu gedacht, `Temporal.Duration`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung auf nützliche Weise standardmäßig zu serialisieren, die dann mit der {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}-Funktion als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const durationStr = duration.toJSON(); // 'PT1H30M15S'
const d2 = Temporal.Duration.from(durationStr);
```

### JSON-Serialisierung und Parsing

Dieses Beispiel zeigt, wie `Temporal.Duration` ohne zusätzlichen Aufwand als JSON serialisiert und wie es zurückgeparst werden kann.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const jsonStr = JSON.stringify({ data: duration }); // '{"data":"PT1H30M15S"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "data") {
    return Temporal.Duration.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
