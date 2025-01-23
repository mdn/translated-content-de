---
title: Temporal.PlainTime.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toJSON
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode von {{jsxref("Temporal.PlainTime")}}-Instanzen gibt einen String zurück, der die Uhrzeit in demselben [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format) darstellt, wie der Aufruf von {{jsxref("Temporal/PlainTime/toString", "toString()")}}. Sie wird dazu verwendet, implizit durch {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die gegebene Uhrzeit im [RFC 9557-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format) darstellt.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainTime`-Objekt in einen String umgewandelt wird. Diese Methode dient im Allgemeinen dazu, `Temporal.PlainTime`-Objekte standardmäßig während der {{Glossary("JSON", "JSON")}}-Serialisierung nützlich zu serialisieren, die dann mit der {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}-Funktion als Wiederherstellungsfunktion von {{jsxref("JSON.parse()")}} deserialisiert werden können.

## Beispiele

### Verwendung von toJSON()

```js
const time = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
const timeStr = time.toJSON(); // '12:34:56'
const t2 = Temporal.PlainTime.from(timeStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.PlainTime` ohne zusätzlichen Aufwand als JSON serialisiert und wie es wieder geparst werden kann.

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
