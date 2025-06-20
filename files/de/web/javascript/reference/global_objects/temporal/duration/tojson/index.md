---
title: Temporal.Duration.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toJSON
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toJSON()`** Methode der Instanzen von {{jsxref("Temporal.Duration")}} gibt einen String zurück, der diese Dauer im gleichen [ISO 8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt wie der Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}}. Sie soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die gegebene Dauer im [ISO 8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt, mit so viel subsekundärer Präzision wie nötig, um die Dauer genau darzustellen.

## Beschreibung

Die `toJSON()`-Methode wird automatisch durch {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.Duration`-Objekt in einen String umgewandelt wird. Diese Methode soll im Allgemeinen standardmäßig nützlich sein, um `Temporal.Duration`-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung zu serialisieren, die dann unter Verwendung der Funktion {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} beim Deserialisieren durch {{jsxref("JSON.parse()")}} wiederbelebt werden können.

## Beispiele

### Verwendung von toJSON()

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const durationStr = duration.toJSON(); // 'PT1H30M15S'
const d2 = Temporal.Duration.from(durationStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.Duration` ohne zusätzlichen Aufwand als JSON serialisiert und wie es zurückgeparst werden kann.

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
