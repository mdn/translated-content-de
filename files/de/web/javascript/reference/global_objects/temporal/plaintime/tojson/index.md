---
title: Temporal.PlainTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toJSON()`**-Methode von {{jsxref("Temporal.PlainTime")}}-Instanzen gibt einen String zurück, der diese Zeit im selben [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/PlainTime/toString", "toString()")}}. Sie soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die angegebene Zeit im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format) darstellt.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainTime`-Objekt in einen String konvertiert wird. Diese Methode dient im Allgemeinen dazu, `Temporal.PlainTime`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung auf nützliche Weise zu serialisieren, die dann mit der {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}-Funktion als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const time = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
const timeStr = time.toJSON(); // '12:34:56'
const t2 = Temporal.PlainTime.from(timeStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainTime` ohne zusätzlichen Aufwand als JSON serialisiert und wieder geparst werden kann.

```js
const time = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
const jsonStr = JSON.stringify({ time }); // '{"time":"12:34:56"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "time") {
    return Temporal.PlainTime.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
