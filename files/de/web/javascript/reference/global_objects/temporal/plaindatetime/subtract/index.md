---
title: Temporal.PlainDateTime.prototype.subtract()
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`subtract()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum und diese Zeit repräsentiert, rückwärts verschoben um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).

Wenn Sie zwei Datum-Zeit-Werte subtrahieren und eine Dauer erhalten möchten, verwenden Sie stattdessen {{jsxref("Temporal/PlainDateTime/since", "since()")}} oder {{jsxref("Temporal/PlainDateTime/until", "until()")}}.

## Syntax

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Parameter

- `duration`
  - : Eine Zeichenkette, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die von diesem Datum-Zeit-Wert subtrahiert werden soll. Sie wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein Zeichenkette, die das Verhalten angibt, wenn eine Datums-Komponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch den ursprünglichen `PlainDateTime` angegebene Datum und Zeit, minus der Dauer repräsentiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, welcher ±(10<sup>8</sup> + 1) Tage, oder etwa ±273,972.6 Jahre, ab der Unix-Epoche umfasst.

## Beschreibung

Das Subtrahieren einer Dauer ist gleichbedeutend mit dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), daher gelten alle gleichen Überlegungen.

## Beispiele

### Subtrahieren einer Dauer

```js
const start = Temporal.PlainDateTime.from("2022-01-01T12:34:56");
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
console.log(end.toString()); // 2020-10-07T07:28:48.992
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
