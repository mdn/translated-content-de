---
title: Temporal.ZonedDateTime.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`** Methode von Instanzen von {{jsxref("Temporal.ZonedDateTime")}} gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert darstellt und um eine angegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben ist.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine Dauer darstellt, die zu diesem Datum-Uhrzeit-Wert hinzugefügt werden soll. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt mit folgender Eigenschaft:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Datumskomponente außerhalb des gültigen Bereiches liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das das durch das ursprüngliche `ZonedDateTime` und die Dauer spezifizierte Datum-Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) ist, was ±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre, ab der Unix-Epoche bedeutet.

## Beschreibung

Für Informationen dazu, wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Addition und Subtraktion erfolgen gemäß den in [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545) definierten Regeln:

- Fügen Sie den Datumsanteil einer Dauer mit Kalenderarithmetik hinzu; das heißt, fügen Sie den Datumsanteil ihrem `PlainDateTime` mit {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} hinzu und interpretieren Sie dann das Ergebnis in derselben Zeitzone. Das Ergebnis passt sich automatisch der Sommerzeit mit den Regeln des `timeZone`-Feldes dieser Instanz an. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-04T01:00:00-05:00[America/New_York]`, als ob der Tag 25 Stunden hätte.
  - Wenn das Datum-Uhrzeit [mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) oder ungültig aufgrund einer Zeitzonenverschiebung ist, wird es mit dem `disambiguation: "compatible"` Verhalten gelöst: Die spätere von zwei möglichen Sofortpunkten wird für Zeit-Übersprünge verwendet, und der frühere von zwei möglichen Sofortpunkten wird für Zeitwiederholungen verwendet. Zum Beispiel, `2024-03-09T02:05:00-05:00[America/New_York]` plus ein Tag würde angeblich `2024-03-10T02:05:00-05:00[America/New_York]` sein, aber diese Zeit existiert nicht, also wird die Zeit eine Stunde später, `2024-03-10T03:05:00-04:00[America/New_York]`, zurückgegeben.
  - Wenn die [Verschiebung mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity) ist, wird sie mit dem `offset: "prefer"` Verhalten gelöst: Die Verschiebung wird verwendet, wenn sie in der Zeitzone und für die lokale Zeit gültig ist und sonst neu berechnet. Zum Beispiel ist `2024-11-02T01:00:00-04:00[America/New_York]` plus ein Tag `2024-11-03T01:00:00-04:00[America/New_York]`, während `2024-11-04T01:00:00-05:00[America/New_York]` minus ein Tag `2024-11-03T01:00:00-05:00[America/New_York]` ist.
  - Wenn die resultierenden Datum-Uhrzeit-Komponenten außerhalb der Grenzen liegen, werden sie mit der `overflow`-Option gelöst. Zum Beispiel ist `2024-08-31` plus ein Monat `2024-09-31`, das nicht existiert, deshalb wird es standardmäßig zu `2024-09-30` begrenzt.
- Fügen Sie den Zeitanteil einer Dauer unter Berücksichtigung der realen Zeit hinzu; das heißt, fügen Sie den Zeitanteil seinem `Instant` mit {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} hinzu und interpretieren Sie dann das Ergebnis in derselben Zeitzone. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus eine Stunde `2024-11-03T01:00:00-05:00[America/New_York]`.

Diese Regeln machen die Arithmetik mit `Temporal.ZonedDateTime` "DST-sicher", was bedeutet, dass die Ergebnisse den Erwartungen von sowohl realen Nutzern als auch Implementierern von anderen standardkonformen Kalenderanwendungen am besten entsprechen. Diese Erwartungen umfassen:

- Das Hinzufügen oder Subtrahieren von Tagen sollte die Uhrzeit über DST-Übergänge hinweg konsistent halten. Zum Beispiel, wenn Sie einen Termin am Samstag um 13:00 Uhr haben und Sie bitten, ihn 1 Tag später zu verschieben, würden Sie erwarten, dass der neue Termin immer noch um 13:00 Uhr ist, selbst wenn es über Nacht eine DST-Übergang gab.
- Das Hinzufügen oder Subtrahieren des Zeitanteils einer Dauer sollte DST-Übergänge ignorieren. Zum Beispiel wird ein Freund, den Sie bitten, in 2 Stunden zu treffen, verärgert sein, wenn Sie 1 oder 3 Stunden verspätet auftauchen. Es sollte eine konsistente und relativ überraschungsfreie Reihenfolge der Operationen geben.
- Wenn Ergebnisse bei oder in der Nähe eines DST-Übergangs sind, sollten Mehrdeutigkeiten automatisch (ohne Abstürze) und deterministisch gehandhabt werden.

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

Für weitere Beispiele, insbesondere dazu, wie verschiedene Kalender und die `overflow`-Option mit Kalenderdauern interagieren, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
