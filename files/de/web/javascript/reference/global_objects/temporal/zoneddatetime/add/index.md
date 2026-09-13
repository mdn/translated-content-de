---
title: Temporal.ZonedDateTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: 3ece7b308e5d180ab8fe53d2e86605fabe03dfe9
---

Die **`add()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das dieses Datum-Uhrzeit um eine gegebene Dauer (in einer durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbaren Form) nach vorne verschoben darstellt.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer repräsentiert, die zu diesem Datum-Uhrzeit hinzugefügt werden soll. Es wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des gültigen Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das das durch die ursprüngliche `ZonedDateTime` und die Dauer spezifizierte Datum-Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, was ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche entspricht.

## Beschreibung

Wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, erfahren Sie in {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Addition und Subtraktion werden gemäß den in [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545) definierten Regeln durchgeführt:

- Fügen Sie den Datumsanteil eines Zeitraums mit Kalenderarithmetik hinzu oder ziehen Sie ihn ab; mit anderen Worten: Fügen Sie den Datumsanteil zu seinem `PlainDateTime` mit {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} hinzu und interpretieren Sie dann das Ergebnis in derselben Zeitzone. Das Ergebnis passt sich automatisch der Sommerzeitregelung entsprechend dieser Instanz des `timeZone` Feldes an. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-04T01:00:00-05:00[America/New_York]`, als hätte der Tag 25 Stunden.
  - Wenn die Datum-Uhrzeit [mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) oder aufgrund einer Zeitzonen-Offset-Übergang ungültig ist, wird sie mit dem Verhalten `disambiguation: "compatible"` aufgelöst: der spätere der beiden möglichen Zeitpunkte wird bei Zeitüberschreitungen verwendet, und der frühere der beiden möglichen Zeitpunkte wird bei Zeitwiederholungen verwendet. Zum Beispiel ist `2024-03-09T02:05:00-05:00[America/New_York]` plus ein Tag angeblich `2024-03-10T02:05:00-05:00[America/New_York]`, aber diese Zeit existiert nicht, also wird die eine Stunde später angezeigte Uhrzeit `2024-03-10T03:05:00-04:00[America/New_York]` zurückgegeben. Ebenso ergeben sowohl `2024-11-02T01:00:00-04:00[America/New_York]` plus ein Tag als auch `2024-11-04T01:00:00-05:00[America/New_York]` minus ein Tag `2024-11-03T01:00:00-04:00[America/New_York]`, den früheren der beiden möglichen Zeitpunkte.
  - Wenn die Komponenten der resultierenden Datum-Uhrzeit außerhalb der Grenzen liegen, werden sie mit der `overflow` Option aufgelöst. Zum Beispiel ist `2024-08-31` plus ein Monat `2024-09-31`, was nicht existiert, daher wird es standardmäßig auf `2024-09-30` eingeschränkt.
- Fügen Sie den Zeitanteil eines Zeitraums mit realer Zeit hinzu oder ziehen Sie ihn ab; mit anderen Worten: Fügen Sie den Zeitanteil zu seinem `Instant` mit {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} hinzu, und interpretieren Sie dann das Ergebnis in derselben Zeitzone. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus eine Stunde `2024-11-03T01:00:00-05:00[America/New_York]`.

Diese Regeln machen die Arithmetik mit `Temporal.ZonedDateTime` "sicher vor Sommerzeit (DST)", was bedeutet, dass die Ergebnisse den Erwartungen sowohl der realen Benutzer als auch der Implementierer anderer standardkonformer Kalenderanwendungen am nächsten kommen. Diese Erwartungen umfassen:

- Das Hinzufügen oder Subtrahieren von Tagen sollte die Uhrzeit auch bei DST-Übergängen konstant halten. Zum Beispiel, wenn Sie einen Termin am Samstag um 13:00 Uhr haben und ihn um einen Tag verschieben möchten, erwarten Sie, dass der verschobene Termin weiterhin um 13:00 Uhr liegt, selbst wenn es über Nacht einen DST-Übergang gab.
- Das Hinzufügen oder Subtrahieren des Zeitanteils eines Zeitraums sollte DST-Übergänge ignorieren. Zum Beispiel wird ein Freund, den Sie gebeten haben, in 2 Stunden zu treffen, verärgert sein, wenn Sie 1 Stunde oder 3 Stunden später erscheinen. Es sollte eine konsistente und relativ überraschungsfreie Reihenfolge der Operationen geben.
- Wenn Ergebnisse bei oder nahe einem DST-Übergang liegen, sollten Mehrdeutigkeiten automatisch (ohne Absturz) und deterministisch behandelt werden.

Das Hinzufügen einer Dauer entspricht dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Beispiele

### Hinzufügen einer Dauer

```js
const start = Temporal.ZonedDateTime.from(
  "2021-11-01T12:34:56-04:00[America/New_York]",
);
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
console.log(end.toString()); // 2023-01-26T17:41:03.008-05:00[America/New_York]
```

Für weitere Beispiele, insbesondere wie verschiedene Kalender und die `overflow` Option mit Kalendermengen interagieren, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
