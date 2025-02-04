---
title: Temporal.ZonedDateTime.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`subtract()`** Methode der Instanzen von {{jsxref("Temporal.ZonedDateTime")}} gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert um eine gegebene Dauer zurückverschoben darstellt (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann).

Wenn Sie zwei Datum-Uhrzeit-Werte subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/since", "since()")}} oder {{jsxref("Temporal/ZonedDateTime/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine von diesem Datum-Uhrzeit-Wert zu subtrahierende Dauer darstellt. Sie wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten beschreibt, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das den durch das ursprüngliche `ZonedDateTime` angegebene Datum-Uhrzeit minus der Dauer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre, vom Unix-Epoch umfasst.

## Beschreibung

Das Subtrahieren einer Dauer entspricht dem [Hinzufügen](Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add) ihrer [Negation](Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

## Beispiele

### Eine Dauer subtrahieren

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
