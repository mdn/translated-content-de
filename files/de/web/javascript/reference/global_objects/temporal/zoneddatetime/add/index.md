---
title: Temporal.ZonedDateTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`add()`** Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert um eine gegebene Dauer nach vorne verschoben darstellt (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine hinzuzufügende Dauer zu diesem Datum-Uhrzeit-Wert darstellt. Es wird in ein `Temporal.Duration`-Objekt umgewandelt, indem derselbe Algorithmus verwendet wird wie bei {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das das Datum-Uhrzeit, spezifiziert durch das ursprüngliche `ZonedDateTime`, plus der Dauer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, was ±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre, ab der Unix-Epoche umfasst.

## Beschreibung

Informationen darüber, wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Addition und Subtraktion werden gemäß den in [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545) definierten Regeln durchgeführt:

- Der Datumsanteil einer Dauer wird durch Kalenderarithmetik addiert/subtrahiert; das bedeutet, der Datumsanteil wird zu seinem `PlainDateTime` mit {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} addiert und das Ergebnis dann in derselben Zeitzone interpretiert. Das Ergebnis passt sich automatisch an die Sommerzeitregelungen des `timeZone`-Feldes dieser Instanz an. Beispielsweise ist `2024-11-03T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-04T01:00:00-05:00[America/New_York]`, als ob der Tag 25 Stunden hätte.
  - Wenn das Datum-Uhrzeit [mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) oder aufgrund einer Zeitzonen-Offset-Übergangs ungültig ist, wird es mit dem `disambiguation: "compatible"`-Verhalten gelöst: Der spätere der beiden möglichen Zeitpunkte wird für übersprungene Zeitanpassungen verwendet und der frühere der beiden möglichen Zeitpunkte wird für wiederholte Zeitanpassungen verwendet. Zum Beispiel ist `2024-03-09T02:05:00-05:00[America/New_York]` plus ein Tag angeblich `2024-03-10T02:05:00-05:00[America/New_York]`, aber diese Zeit existiert nicht, sodass die Wanduhrzeit eine Stunde später, `2024-03-10T03:05:00-04:00[America/New_York]`, zurückgegeben wird.
  - Wenn der [Offset mehrdeutig ist](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity), wird es mit dem `offset: "prefer"`-Verhalten gelöst: Der Offset wird verwendet, wenn er für die Zeitzone und die lokale Zeit gültig ist, und andernfalls neu berechnet. Zum Beispiel ist `2024-11-02T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-03T01:00:00-04:00[America/New_York]`, während `2024-11-04T01:00:00-05:00[America/New_York]` minus ein Tag `2024-11-03T01:00:00-05:00[America/New_York]` ist.
  - Wenn die Komponenten des resultierenden Datum-Uhrzeit außerhalb der Grenzen liegen, werden sie mit der `overflow`-Option gelöst. Zum Beispiel ist `2024-08-31` plus ein Monat `2024-09-31`, das nicht existiert, daher wird es standardmäßig auf `2024-09-30` begrenzt.
- Der Zeitanteil einer Dauer wird unter Verwendung der realen Zeit addiert/subtrahiert; das bedeutet, der Zeitanteil wird zu seinem `Instant` mit {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} addiert und dann in derselben Zeitzone interpretiert. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus eine Stunde `2024-11-03T01:00:00-05:00[America/New_York]`.

Diese Regeln machen Arithmetik mit `Temporal.ZonedDateTime` "DST-sicher", was bedeutet, dass die Ergebnisse den Erwartungen sowohl von realen Benutzern als auch von Implementierern anderer standardkonformer Kalenderanwendungen am nächsten kommen. Diese Erwartungen umfassen:

- Das Hinzufügen oder Subtrahieren von Tagen sollte die Uhrzeit über DST-Übergänge hinweg konsistent halten. Beispielsweise, wenn Sie einen Termin am Samstag um 13:00 Uhr haben und Sie fragen, ihn 1 Tag später zu verschieben, würden Sie erwarten, dass der neu geplante Termin immer noch um 13:00 Uhr stattfindet, auch wenn über Nacht ein DST-Übergang stattgefunden hat.
- Das Hinzufügen oder Subtrahieren des Zeitanteils einer Dauer sollte DST-Übergänge ignorieren. Beispielsweise wird ein Freund, den Sie gebeten haben, sich in 2 Stunden zu treffen, verärgert sein, wenn Sie 1 Stunde oder 3 Stunden später erscheinen. Es sollte eine konsistente und relativ wenig überraschende Reihenfolge von Operationen geben.
- Wenn Ergebnisse an oder in der Nähe eines DST-Übergangs liegen, sollten Mehrdeutigkeiten automatisch (ohne Absturz) und deterministisch gehandhabt werden.

Das Hinzufügen einer Dauer ist gleichbedeutend mit [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

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
