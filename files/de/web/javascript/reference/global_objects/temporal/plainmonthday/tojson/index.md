---
title: Temporal.PlainMonthDay.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

Die Methode **`toJSON()`** von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen gibt einen String zurück, der den Monat und Tag im selben [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den angegebenen Monat und Tag im [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) darstellt. Wenn der Kalender nicht `"iso8601"` ist, sind auch das Jahr und die Kalenderannotation enthalten.

## Beschreibung

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Temporal.PlainMonthDay`-Objekt angetroffen wird. Der serialisierte Wert kann anschließend mit der Funktion {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### Verwendung von toJSON()

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const mdStr = md.toJSON(); // '08-01'
const md2 = Temporal.PlainMonthDay.from(mdStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainMonthDay` ohne zusätzlichen Aufwand als JSON serialisiert und anschließend wieder geparst werden kann.

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const jsonStr = JSON.stringify({ birthday: md }); // '{"birthday":"08-01"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "birthday") {
    return Temporal.PlainMonthDay.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
