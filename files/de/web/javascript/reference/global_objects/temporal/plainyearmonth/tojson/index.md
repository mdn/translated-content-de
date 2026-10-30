---
title: Temporal.PlainYearMonth.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

Die Methode **`toJSON()`** von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt einen String zurück, der dieses Jahr und diesen Monat im selben [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt wie ein Aufruf von {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum im [RFC-9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt. Die Kalenderannotation ist enthalten, wenn der Kalender nicht `"iso8601"` ist.

## Beschreibung

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Temporal.PlainYearMonth`-Objekt vorkommt. Der serialisierte Wert kann anschließend mithilfe der Funktion {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} im Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### toJSON() verwenden

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = ym.toJSON(); // '2021-08'
const ym2 = Temporal.PlainYearMonth.from(ymStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainYearMonth` ohne zusätzlichen Aufwand als JSON serialisiert und anschließend wieder geparst werden kann.

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = JSON.stringify({ event: ym }); // '{"event":"2021-08"}'
const obj = JSON.parse(ymStr, (key, value) => {
  if (key === "event") {
    return Temporal.PlainYearMonth.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
