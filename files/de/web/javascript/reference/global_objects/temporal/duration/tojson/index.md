---
title: Temporal.Duration.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toJSON
l10n:
  sourceCommit: 13d5331637ae88b41af236e4b3d1b6c901d08f69
---

Die Methode **`toJSON()`** von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Zeichenfolge zurück, die diese Dauer im selben [ISO-8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt wie ein Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}}. Sie ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die die angegebene Dauer im [ISO-8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt. Sie enthält so viele Nachkommastellen für Sekunden, wie für eine genaue Darstellung der Dauer erforderlich sind.

## Beschreibung

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.Duration`-Objekt in eine Zeichenfolge umgewandelt wird. Sie dient dazu, `Temporal.Duration`-Objekte bei der {{Glossary("JSON", "JSON")}}-Serialisierung standardmäßig in einer nützlichen Form zu serialisieren. Anschließend können sie mit der Funktion {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} im Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Beispiele

### toJSON() verwenden

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const durationStr = duration.toJSON(); // 'PT1H30M15S'
const d2 = Temporal.Duration.from(durationStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.Duration` ohne zusätzlichen Aufwand als JSON serialisiert und anschließend wieder geparst werden kann.

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
