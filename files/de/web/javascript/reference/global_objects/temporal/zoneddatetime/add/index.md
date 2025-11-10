---
title: Temporal.ZonedDateTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`add()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben darstellt.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer repräsentiert, die diesem Zeitpunkt hinzugefügt werden soll. Sie wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Datums-Komponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird geworfen, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das das Datum und die Uhrzeit repräsentiert, die durch das ursprüngliche `ZonedDateTime`, plus der Dauer, angegeben sind.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche umfasst.

## Beschreibung

Für Informationen darüber, wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Addition und Subtraktion werden gemäß den in [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545) definierten Regeln durchgeführt:

- Fügen Sie den Datumsanteil einer Dauer mit Kalenderarithmetik hinzu bzw. ziehen Sie ihn ab; mit anderen Worten, fügen Sie den Datumsanteil zu seinem `PlainDateTime` mit {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} hinzu und interpretieren Sie das Ergebnis in der gleichen Zeitzone. Das Ergebnis wird automatisch an die Sommerzeitregelungen basierend auf dem `timeZone` Feld dieser Instanz angepasst. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-04T01:00:00-05:00[America/New_York]`, als hätte der Tag 25 Stunden.
  - Wenn das Datum und die Uhrzeit aufgrund einer Zeitzonen-Offset-Übergang [mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) oder ungültig sind, wird es mit dem `disambiguation: "compatible"` Verhalten aufgelöst: Der spätere der beiden möglichen Zeitpunkte wird für ausgelassene Übergänge verwendet und der frühere der beiden möglichen Zeitpunkte wird für wiederholte Übergänge verwendet. Zum Beispiel wird `2024-03-09T02:05:00-05:00[America/New_York]` plus ein Tag zu `2024-03-10T02:05:00-05:00[America/New_York]`, aber diese Zeit existiert nicht, daher wird die Uhrzeit eine Stunde später, `2024-03-10T03:05:00-04:00[America/New_York]`, zurückgegeben.
  - Wenn der [Offset mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity) ist, wird er mit dem `offset: "prefer"` Verhalten aufgelöst: Der Offset wird verwendet, wenn er für die Zeitzone und die lokale Zeit gültig ist, und andernfalls neu berechnet. Zum Beispiel ist `2024-11-02T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-03T01:00:00-04:00[America/New_York]`, während `2024-11-04T01:00:00-05:00[America/New_York]` minus ein Tag `2024-11-03T01:00:00-05:00[America/New_York]` ist.
  - Wenn die Komponenten des resultierenden Datums und der Uhrzeit außerhalb der Grenzen liegen, werden sie mit der `overflow` Option aufgelöst. Zum Beispiel ist `2024-08-31` plus ein Monat `2024-09-31`, was nicht existiert, daher wird es standardmäßig auf `2024-09-30` beschränkt.
- Fügen Sie den Zeitanteil einer Dauer mit Realzeit hinzu bzw. ziehen Sie ihn ab; mit anderen Worten, fügen Sie den Zeitanteil zu seinem `Instant` mit {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} hinzu und interpretieren Sie das Ergebnis in der gleichen Zeitzone. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus eine Stunde `2024-11-03T01:00:00-05:00[America/New_York]`.

Diese Regeln machen die Arithmetik mit `Temporal.ZonedDateTime` "sommerzeitsicher", was bedeutet, dass die Ergebnisse den Erwartungen von sowohl echten Benutzern als auch Implementierern von anderen standardskonformen Kalenderanwendungen am nächsten kommen. Diese Erwartungen umfassen:

- Das Hinzufügen oder Abziehen von Tagen sollte die Uhrzeit über Sommerzeit-Übergänge konsistent halten. Beispielsweise sollten Sie, wenn Sie einen Termin an einem Samstag um 13:00 Uhr haben und darum bitten, ihn einen Tag später zu verschieben, erwarten, dass der verschobene Termin immer noch um 13:00 Uhr ist, auch wenn es über Nacht einen Sommerzeitübergang gab.
- Das Hinzufügen oder Abziehen des Zeitanteils einer Dauer sollte Sommerzeitübergänge ignorieren. Beispielsweise wird ein Freund, den Sie gebeten haben, in 2 Stunden zu treffen, verärgert sein, wenn Sie 1 Stunde oder 3 Stunden später erscheinen. Es sollte eine konsistente und relativ unspektakuläre Reihenfolge von Operationen geben.
- Wenn Ergebnisse an oder nahe einem Sommerzeitübergang liegen, sollten Mehrdeutigkeiten automatisch (ohne Absturz) und deterministisch behandelt werden.

Das Hinzufügen einer Dauer ist gleichbedeutend mit dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

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

Für weitere Beispiele, insbesondere wie verschiedene Kalender und die `overflow` Option mit Kalenderdauern interagieren, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
