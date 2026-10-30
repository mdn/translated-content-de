---
title: Temporal.Duration.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

Die Methode **`toJSON()`** von {{jsxref("Temporal.Duration")}}-Instanzen gibt einen String zurück, der diese Dauer im selben [ISO-8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt wie ein Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die angegebene Dauer im [ISO-8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt, mit so vielen Nachkommastellen für Sekunden wie nötig, um die Dauer genau wiederzugeben.

## Beschreibung

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Temporal.Duration`-Objekt angetroffen wird. Der serialisierte Wert kann anschließend mithilfe der Funktion {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### Verwendung von toJSON()

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const durationStr = duration.toJSON(); // 'PT1H30M15S'
const d2 = Temporal.Duration.from(durationStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.Duration` ohne zusätzlichen Aufwand als JSON serialisiert und anschließend wieder eingelesen werden kann.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const jsonStr = JSON.stringify({ data: duration }); // '{"data":"PT1H30M15S"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "data") {
    return Temporal.Duration.from(value);
  }
  return value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
