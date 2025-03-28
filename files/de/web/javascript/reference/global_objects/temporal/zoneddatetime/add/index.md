---
title: Temporal.ZonedDateTime.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datumszeitpunkt um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) vorwärts verschoben darstellt.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die zu diesem Datumszeitpunkt hinzugefügt werden soll. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das den durch das ursprüngliche `ZonedDateTime` spezifizierten Datumszeitpunkt plus die Dauer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche umfasst.

## Beschreibung

Informationen darüber, wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, finden Sie in {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Addition und Subtraktion werden gemäß der in [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545) definierten Regeln durchgeführt:

- Addieren/Subtrahieren Sie den Datumsabschnitt einer Dauer mit Kalenderarithmetik; das heißt, fügen Sie den Datumsabschnitt zu seinem `PlainDateTime` mit {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} hinzu und interpretieren Sie dann das Ergebnis in derselben Zeitzone. Das Ergebnis wird automatisch die Sommerzeitregelung unter Verwendung der Regeln des `timeZone`-Feldes dieser Instanz anpassen. Zum Beispiel ergibt `2024-11-03T01:00:00-04:00[America/New_York]` plus einen Tag `2024-11-04T01:00:00-05:00[America/New_York]`, als ob der Tag 25 Stunden hat.
  - Wenn der Datumszeitpunkt aufgrund einer Zeitzonenverschiebung [mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) oder ungültig ist, wird er mit dem `disambiguation: "compatible"`-Verhalten aufgelöst: Der spätere der beiden möglichen Zeitpunkte wird für Zeitüberspringungen und der frühere der beiden möglichen Zeitpunkte für Zeitwiederholungen verwendet. Zum Beispiel ist `2024-03-09T02:05:00-05:00[America/New_York]` plus einen Tag angeblich `2024-03-10T02:05:00-05:00[America/New_York]`, aber diese Zeit existiert nicht, daher wird die Wandzeit eine Stunde später `2024-03-10T03:05:00-04:00[America/New_York]` zurückgegeben.
  - Wenn die [Verschiebung mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity) ist, wird sie mit dem `offset: "prefer"`-Verhalten aufgelöst: Die Verschiebung wird verwendet, wenn sie für die Zeitzone und die lokale Zeit gültig ist, und andernfalls neu berechnet. Zum Beispiel ergibt `2024-11-02T01:00:00-04:00[America/New_York]` plus einen Tag `2024-11-03T01:00:00-04:00[America/New_York]`, während `2024-11-04T01:00:00-05:00[America/New_York]` minus einen Tag `2024-11-03T01:00:00-05:00[America/New_York]` ergibt.
  - Wenn die Komponenten des resultierenden Datum/Zeit außerhalb der Grenzen liegen, werden sie mit der `overflow`-Option aufgelöst. Zum Beispiel ergibt `2024-08-31` plus einen Monat `2024-09-31`, welches nicht existiert, daher wird es standardmäßig auf `2024-09-30` begrenzt.
- Addieren/Subtrahieren Sie den Zeitabschnitt einer Dauer mit realer Zeit; das heißt, fügen Sie den Zeitabschnitt zu seinem `Instant` mit {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} hinzu, und interpretieren Sie dann das Ergebnis in derselben Zeitzone. Zum Beispiel ergibt `2024-11-03T01:00:00-04:00[America/New_York]` plus eine Stunde `2024-11-03T01:00:00-05:00[America/New_York]`.

Diese Regeln machen die Arithmetik mit `Temporal.ZonedDateTime` "DST-sicher", was bedeutet, dass die Ergebnisse den Erwartungen sowohl der realen Benutzer als auch der Implementierer anderer standardskonformer Kalenderanwendungen am ehesten entsprechen. Diese Erwartungen beinhalten:

- Das Hinzufügen oder Subtrahieren von Tagen sollte die Uhrzeit während der DST-Übergänge konsistent halten. Wenn Sie beispielsweise einen Termin am Samstag um 13:00 Uhr haben und diesen Termin um einen Tag verschieben möchten, erwarten Sie, dass der verschobene Termin immer noch um 13:00 Uhr liegt, auch wenn es über Nacht einen DST-Übergang gab.
- Das Hinzufügen oder Subtrahieren des Zeitabschnitts einer Dauer sollte DST-Übergänge ignorieren. Zum Beispiel wird ein Freund, den Sie gefragt haben, ob er in 2 Stunden treffen möchte, verärgert sein, wenn Sie 1 Stunde oder 3 Stunden später erscheinen. Es sollte eine konsistente und relativ unüberraschende Reihenfolge von Operationen geben.
- Wenn die Ergebnisse an oder in der Nähe eines DST-Übergangs sind, sollten Mehrdeutigkeiten automatisch (ohne Absturz) und deterministisch behandelt werden.

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

Für weitere Beispiele, insbesondere wie verschiedene Kalender und die `overflow`-Option mit Kalenderdauern interagieren, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
