---
title: Temporal.PlainDateTime.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.PlainDateTime")}}-Instanzen gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben darstellt.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine hinzuzufügende Dauer zu diesem Datum-Uhrzeit-Wert darstellt. Diese wird mithilfe des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten bei einem ungültigen Datumsbestandteil spezifiziert. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Der Datumsbestandteil wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Es wird ein {{jsxref("RangeError")}} ausgelöst, wenn der Datumsbestandteil außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch das ursprüngliche `PlainDateTime` und die Dauer spezifizierte Datum-Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.

## Beschreibung

Wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, finden Sie unter {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Das Hinzufügen einer Dauer entspricht dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Beispiele

### Eine Dauer hinzufügen

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

Für weitere Beispiele, insbesondere wie unterschiedliche Kalender und die `overflow`-Option mit Kalenderdauern interagieren, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
