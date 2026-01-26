---
title: Temporal.ZonedDateTime.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`subtract()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diesen Datum-Uhrzeit-Wert repräsentiert, rückwärts verschoben um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).

Wenn Sie zwei Datum-Uhrzeit-Werte subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/since", "since()")}} oder {{jsxref("Temporal/ZonedDateTime/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die von diesem Datum-Uhrzeit-Wert subtrahiert werden soll. Es wird mit demselben Algorithmus in ein `Temporal.Duration` Objekt konvertiert wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeklemmt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das den Datum-Uhrzeit-Wert des ursprünglichen `ZonedDateTime`, minus der Dauer, repräsentiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, welcher ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

## Beispiele

### Subtrahieren einer Dauer

```js
const start = Temporal.ZonedDateTime.from(
  "2021-01-01T12:34:56-05:00[America/New_York]",
);
const end = start.subtract({
  years: 1,
  months: 2,
  weeks: 3,
  days: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  milliseconds: 8,
});
console.log(end.toString()); // 2019-10-07T07:28:48.992-04:00[America/New_York]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
