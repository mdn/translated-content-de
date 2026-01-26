---
title: Temporal.PlainDateTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`add()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt ein neues `Temporal.PlainDateTime` Objekt zurück, das diesen Datum-Uhrzeit-Wert darstellt, der um eine gegebene Dauer nach vorne verschoben ist (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine Dauer darstellt, die zu diesem Datum-Uhrzeit-Wert hinzugefügt wird. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten festlegt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, das das durch das ursprüngliche `PlainDateTime` spezifizierte Datum und Uhrzeit plus der Dauer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche beträgt.

## Beschreibung

Für Informationen, wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Das Hinzufügen einer Dauer ist gleichbedeutend mit dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

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

Für weitere Beispiele, insbesondere wie verschiedene Kalender und die Option `overflow` mit Kalenderdauern interagieren, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
