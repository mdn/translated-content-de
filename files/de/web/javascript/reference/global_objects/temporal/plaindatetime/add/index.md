---
title: Temporal.PlainDateTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Methode **`add()`** von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das dieses Datum-Zeit-Wert darstellt, verschoben um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die zu diesem Datum-Zeit-Wert hinzugefügt werden soll. Es wird in ein `Temporal.Duration` Objekt umgewandelt, indem der gleiche Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} verwendet wird.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [geklemmmt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, das den durch das ursprüngliche `PlainDateTime` und die Dauer angegebenen Datum-Zeit-Wert darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, was ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche sind.

## Beschreibung

Wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, erfahren Sie im {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Das Hinzufügen einer Dauer entspricht dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Beispiele

### Hinzufügen einer Dauer

```js
const start = Temporal.PlainDateTime.from("2021-01-01T12:34:56");
const end = start.add({
  years: 1,
  months: 2,
  weeks: 3,
  days: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  milliseconds: 8,
});
console.log(end.toString()); // 2022-03-26T17:41:03.008
```

Für weitere Beispiele, insbesondere wie verschiedene Kalender und die `overflow` Option mit Kalenderdauern interagieren, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
