---
title: Temporal.Instant.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toJSON
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toJSON()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt einen Zeichenfolgenwert zurück, der diesen Zeitraum im selben [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}}. Sie soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die den gegebenen Zeitpunkt im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) darstellt, mit so viel Untersekundenpräzision wie nötig, um die Dauer genau darzustellen, und mit dem UTC-Zeitzonendesignator `Z`.

## Beschreibung

Die `toJSON()` Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.Instant` Objekt als Zeichenfolge kodiert wird. Diese Methode ist im Allgemeinen dafür gedacht, dass `Temporal.Instant` Objekte standardmäßig nützlich während der {{Glossary("JSON", "JSON")}} Serialisierung zu serialisieren, welche dann mithilfe der {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} Funktion als Wiederhersteller von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const instantStr = instant.toJSON(); // '2021-08-01T12:34:56Z'
const i2 = Temporal.Instant.from(instantStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.Instant` ohne zusätzlichen Aufwand als JSON serialisiert werden kann und wie man es wieder einliest.

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
