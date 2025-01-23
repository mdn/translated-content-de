---
title: Temporal.Instant.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toJSON
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toJSON()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt einen String zurück, der diesen Moment im gleichen [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}}. Sie soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den gegebenen Moment im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) darstellt, mit so viel subsekundärer Genauigkeit wie nötig, um die Dauer genau darzustellen, und mit dem UTC-Zeitzonenbezeichner `Z`.

## Beschreibung

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.Instant` Objekt in einen String umgewandelt wird. Diese Methode dient im Allgemeinen dazu, `Temporal.Instant` Objekte während der {{Glossary("JSON", "JSON")}} Serialisierung sinnvoll zu serialisieren. Sie können dann mit der Funktion {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### Verwendung von toJSON()

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const instantStr = instant.toJSON(); // '2021-08-01T12:34:56Z'
const i2 = Temporal.Instant.from(instantStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.Instant` ohne zusätzlichen Aufwand als JSON serialisiert und wieder geparst werden kann.

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const jsonStr = JSON.stringify({ time: instant }); // '{"time":"2021-08-01T12:34:56Z"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "time") {
    return Temporal.Instant.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
