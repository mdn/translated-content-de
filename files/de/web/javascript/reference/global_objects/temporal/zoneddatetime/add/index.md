---
title: Temporal.ZonedDateTime.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datums- und Zeitwert um eine bestimmte Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) vorwärts verschoben darstellt.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Eine Zeichenkette, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die zu diesem Datums- und Zeitwert hinzugefügt werden soll. Sie wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datums-Komponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datums-Komponente wird ["eingeschränkt"](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) auf den gültigen Bereich.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datums-Komponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das das durch das Original `ZonedDateTime` und die Dauer spezifizierte Datum und die Zeit darstellt.

## Beschreibung

Wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, erfahren Sie unter {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Addition und Subtraktion werden gemäß den in [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545) definierten Regeln durchgeführt:

- Fügen Sie den Datumsanteil einer Dauer mit Kalenderarithmetik hinzu oder ziehen Sie ihn ab; mit anderen Worten: Fügen Sie den Datumsanteil zu seinem `PlainDateTime` mit {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} hinzu, und interpretieren Sie das Ergebnis in derselben Zeitzone. Das Ergebnis wird automatisch unter Verwendung der Regeln des `timeZone`-Felds dieser Instanz an Sommerzeitänderungen angepasst. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-04T01:00:00-05:00[America/New_York]`, als ob der Tag 25 Stunden hätte.
  - Wenn das Datum und die Uhrzeit [zweideutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) oder aufgrund einer Zeitzonenoffset-Umstellung ungültig sind, wird dies mit dem `disambiguation: "compatible"` Verhalten gelöst: Der spätere der beiden möglichen Augenblicke wird für Zeitsprung-Übergänge verwendet und der frühere der beiden möglichen Augenblicke für Zeitwiederholungs-Übergänge. Zum Beispiel ist `2024-03-09T02:05:00-05:00[America/New_York]` plus ein Tag angeblich `2024-03-10T02:05:00-05:00[America/New_York]`, aber diese Zeit existiert nicht, daher wird die Uhrzeit eine Stunde später, `2024-03-10T03:05:00-04:00[America/New_York]`, zurückgegeben.
  - Wenn der [Offset mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity) ist, wird er unter Verwendung des `offset: "prefer"` Verhaltens gelöst: Der Offset wird verwendet, wenn er für die Zeitzone und die Ortszeit gültig ist, und andernfalls neu berechnet. Zum Beispiel ist `2024-11-02T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-03T01:00:00-04:00[America/New_York]`, während `2024-11-04T01:00:00-05:00[America/New_York]` minus ein Tag `2024-11-03T01:00:00-05:00[America/New_York]` ist.
  - Wenn die Komponenten des resultierenden Datums und der Uhrzeit außerhalb der Grenzen liegen, werden sie unter Verwendung der `overflow`-Option gelöst. Zum Beispiel ist `2024-08-31` plus ein Monat `2024-09-31`, was nicht existiert, also wird es standardmäßig auf `2024-09-30` begrenzt.
- Fügen Sie die Zeitkomponente einer Dauer unter Verwendung der realen Zeit hinzu oder ziehen Sie sie ab; mit anderen Worten: Fügen Sie die Zeitkomponente zu seinem `Instant` mit {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} hinzu, und interpretieren Sie das Ergebnis in derselben Zeitzone. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus eine Stunde `2024-11-03T01:00:00-05:00[America/New_York]`.

Diese Regeln machen die Arithmetik mit `Temporal.ZonedDateTime` „DST-sicher“, was bedeutet, dass die Ergebnisse am ehesten den Erwartungen sowohl realer Benutzer als auch von Implementierern anderer normgerechter Kalenderanwendungen entsprechen. Diese Erwartungen beinhalten:

- Das Hinzufügen oder Subtrahieren von Tagen sollte die Uhrzeit über DST-Übergänge hinweg konsistent halten. Zum Beispiel, wenn Sie einen Termin am Samstag um 13:00 Uhr haben und Sie darum bitten, ihn um 1 Tag zu verschieben, würden Sie erwarten, dass der verschobene Termin immer noch um 13:00 Uhr ist, selbst wenn es über Nacht eine DST-Umstellung gab.
- Das Hinzufügen oder Subtrahieren der Zeitkomponente einer Dauer sollte DST-Übergänge ignorieren. Zum Beispiel wird ein Freund, den Sie gebeten haben, sich in 2 Stunden zu treffen, verärgert sein, wenn Sie 1 Stunde oder 3 Stunden später erscheinen. Es sollte eine konsistente und relativ überraschungsfreie Reihenfolge der Operationen geben.
- Wenn Ergebnisse an oder in der Nähe eines DST-Übergangs liegen, sollten Zweideutigkeiten automatisch (kein Absturz) und deterministisch gehandhabt werden.

Das Hinzufügen einer Dauer ist äquivalent zum [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

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

Weitere Beispiele, insbesondere wie verschiedene Kalender und die `overflow`-Option mit Kalenderdauern interagieren, finden Sie unter {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
