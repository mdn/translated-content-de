---
title: Temporal.PlainMonthDay.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toJSON
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`toJSON()`** von Instanzen des {{jsxref("Temporal.PlainMonthDay")}} gibt einen String zurück, der diesen Monat-Tag im selben [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}. Sie soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den gegebenen Monat-Tag im [RFC 9557 Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) darstellt, wobei die Jahres- und Kalenderanmerkung enthalten ist, wenn sie nicht `"iso8601"` ist.

## Beschreibung

Die Methode `toJSON()` wird automatisch durch {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainMonthDay`-Objekt in einen String umgewandelt wird. Diese Methode ist im Allgemeinen dazu gedacht, `Temporal.PlainMonthDay`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung sinnvoll zu serialisieren, die dann mithilfe der Funktion {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} als Wiederbeleber von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const mdStr = md.toJSON(); // '08-01'
const md2 = Temporal.PlainMonthDay.from(mdStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainMonthDay` ohne zusätzlichen Aufwand als JSON serialisiert und wieder geparst werden kann.

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
