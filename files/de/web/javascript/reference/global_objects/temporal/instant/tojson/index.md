---
title: Temporal.Instant.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toJSON()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt eine Zeichenkette zurück, die diesen Zeitpunkt im selben [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) darstellt, wie bei einem Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}}. Sie wird implizit von {{jsxref("JSON.stringify()")}} aufgerufen.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die den gegebenen Zeitpunkt im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) darstellt, mit so viel subsekundärer Präzision wie nötig, um die Dauer genau darzustellen, und mit dem UTC-Zeitzonendesignator `Z`.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.Instant`-Objekt in eine Zeichenkette umgewandelt wird. Diese Methode ist allgemein dazu gedacht, `Temporal.Instant`-Objekte bei der {{Glossary("JSON", "JSON")}}-Serialisierung nützlich zu serialisieren, die dann mit der Funktion {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const instantStr = instant.toJSON(); // '2021-08-01T12:34:56Z'
const i2 = Temporal.Instant.from(instantStr);
```

### JSON-Serialisierung und Parsing

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
