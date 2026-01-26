---
title: Temporal.Duration.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toJSON()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Zeichenkette zurück, die diese Dauer im gleichen [ISO 8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt wie ein Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}}. Sie soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die die gegebene Dauer im [ISO 8601-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) darstellt, mit so viel Nachkommastellen wie notwendig, um die Dauer genau darzustellen.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Temporal.Duration`-Objekt in eine Zeichenkette umgewandelt wird. Diese Methode soll im Allgemeinen standardmäßig `Temporal.Duration`-Objekte nützlich während der {{Glossary("JSON", "JSON")}}-Serialisierung serialisieren, die dann mit der {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}-Funktion beim Deserialisieren mit {{jsxref("JSON.parse()")}} als `reviver` verwendet werden können.

## Beispiele

### Verwendung von toJSON()

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const durationStr = duration.toJSON(); // 'PT1H30M15S'
const d2 = Temporal.Duration.from(durationStr);
```

### JSON-Serialisierung und -Parsing

Dieses Beispiel zeigt, wie `Temporal.Duration` ohne zusätzlichen Aufwand als JSON serialisiert werden kann und wie man es zurückparsen kann.

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
