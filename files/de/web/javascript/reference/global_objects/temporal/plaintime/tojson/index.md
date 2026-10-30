---
title: Temporal.PlainTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

Die Methode **`toJSON()`** von {{jsxref("Temporal.PlainTime")}}-Instanzen gibt einen String zurück, der diese Uhrzeit im selben [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainTime/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die angegebene Uhrzeit im [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format) darstellt.

## Beschreibung

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Temporal.PlainTime`-Objekt verarbeitet wird. Der serialisierte Wert kann anschließend mit der Funktion {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### toJSON() verwenden

```js
const time = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
const timeStr = time.toJSON(); // '12:34:56'
const t2 = Temporal.PlainTime.from(timeStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie sich `Temporal.PlainTime` ohne zusätzlichen Aufwand als JSON serialisieren und anschließend wieder parsen lässt.

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
