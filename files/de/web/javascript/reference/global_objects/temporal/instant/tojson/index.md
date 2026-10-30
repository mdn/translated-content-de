---
title: Temporal.Instant.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

Die Methode **`toJSON()`** von {{jsxref("Temporal.Instant")}}-Instanzen gibt einen String zurück, der diesen Zeitpunkt im selben [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/Instant/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den angegebenen Zeitpunkt im [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) darstellt, mit so vielen Nachkommastellen, wie für eine genaue Darstellung des Zeitpunkts erforderlich sind, und mit der UTC-Zeitzonenkennung `Z`.

## Beschreibung

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Temporal.Instant`-Objekt vorkommt. Der serialisierte Wert kann anschließend mithilfe der Funktion {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} im Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### Verwendung von toJSON()

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const instantStr = instant.toJSON(); // '2021-08-01T12:34:56Z'
const i2 = Temporal.Instant.from(instantStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.Instant` ohne zusätzlichen Aufwand als JSON serialisiert und anschließend wieder geparst werden kann.

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
