---
title: Temporal.PlainYearMonth.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toJSON
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode von Instanzen von {{jsxref("Temporal.PlainYearMonth")}} gibt einen String zurück, der diesen Jahr-Monat im gleichen [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt, wie er durch Aufruf von {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} erzeugt wird. Es wird beabsichtigt, dass diese Methode implizit von {{jsxref("JSON.stringify()")}} aufgerufen wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) darstellt, wobei die Kalenderanmerkung enthalten ist, falls sie nicht `"iso8601"` ist.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainYearMonth`-Objekt in einen String umgewandelt wird. Diese Methode ist im Allgemeinen dafür gedacht, standardmäßig `Temporal.PlainYearMonth`-Objekte bei der {{Glossary("JSON", "JSON")}}-Serialisierung sinnvoll zu serialisieren, die dann mit der {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}-Funktion als Rückgewinnungsfunktion von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = ym.toJSON(); // '2021-08'
const ym2 = Temporal.PlainYearMonth.from(ymStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainYearMonth` ohne zusätzlichen Aufwand als JSON serialisiert und wie es zurückgeparst werden kann.

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
