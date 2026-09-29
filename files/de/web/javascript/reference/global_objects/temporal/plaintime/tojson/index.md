---
title: Temporal.PlainTime.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toJSON
l10n:
  sourceCommit: 13d5331637ae88b41af236e4b3d1b6c901d08f69
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

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.PlainTime`-Objekt in einen String umgewandelt wird. Die Methode dient dazu, `Temporal.PlainTime`-Objekte bei der {{Glossary("JSON", "JSON")}}-Serialisierung standardmäßig in einer nützlichen Form zu serialisieren. Anschließend können sie mit der Funktion {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} innerhalb des Revivers von {{jsxref("JSON.parse()")}} deserialisiert werden.

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
