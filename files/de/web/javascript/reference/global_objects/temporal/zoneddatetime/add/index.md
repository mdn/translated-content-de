---
title: Temporal.ZonedDateTime.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von Instanzen des {{jsxref("Temporal.ZonedDateTime")}} gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert darstellt, der um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben wurde.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine Dauer darstellt, die zu diesem Datum-Uhrzeit-Wert hinzugefügt werden soll. Es wird in ein `Temporal.Duration`-Objekt unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn ein Datumskomponente außerhalb des Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumsangabe wird auf den gültigen Bereich [begrenzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das den vom ursprünglichen `ZonedDateTime` angegebenen Datum-Uhrzeit-Wert plus der Dauer darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ergebnis nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, der ±10<sup>8</sup> Tage oder etwa ±273,972.6 Jahre vom Unix-Epoch umfasst.

## Beschreibung

Wie [Kalender-Dauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, sehen Sie in {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Addition und Subtraktion werden gemäß den in [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545) definierten Regeln durchgeführt:

- Das Hinzufügen/Subtrahieren des Datumsanteils einer Dauer erfolgt mit Kalenderarithmetik; mit anderen Worten, der Datumsanteil wird zu seinem `PlainDateTime` unter Verwendung von {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} hinzugefügt, und dann wird das Ergebnis in derselben Zeitzone interpretiert. Das Ergebnis passt sich automatisch der Sommerzeit an, indem die Regeln des `timeZone`-Felds dieser Instanz verwendet werden. Zum Beispiel ist `2024-11-03T01:00:00-04:00[America/New_York]` plus einen Tag `2024-11-04T01:00:00-05:00[America/New_York]`, als ob der Tag 25 Stunden hat.
  - Wenn das Datum-Uhrzeit-Paar [mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) oder aufgrund einer Zeitzonenverschiebung ungültig ist, wird es mit dem Verhalten `disambiguation: "compatible"` gelöst: der spätere der beiden möglichen Zeitpunkte wird für Zeitsprünge verwendet und der frühere der beiden möglichen Zeitpunkte wird für Zeitwiederholungen verwendet. Zum Beispiel ist `2024-03-09T02:05:00-05:00[America/New_York]` plus einen Tag angeblich `2024-03-10T02:05:00-05:00[America/New_York]`, aber diese Zeit existiert nicht, daher wird die Uhrzeit eine Stunde später, `2024-03-10T03:05:00-04:00[America/New_York]`, zurückgegeben.
  - Wenn das [Offset mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity) ist, wird es mit dem Verhalten `offset: "prefer"` gelöst: das Offset wird verwendet, wenn es für die Zeitzone und die lokale Zeit gültig ist, und andernfalls neu berechnet. Zum Beispiel ist `2024-11-02T01:00:00-04:00[America/New_York]` plus einen Tag `2024-11-03T01:00:00-04:00[America/New_York]`, während `2024-11-04T01:00:00-05:00[America/New_York]` minus einen Tag `2024-11-03T01:00:00-05:00[America/New_York]` ist.
  - Wenn die Komponenten der resultierenden Datum-Uhrzeit außerhalb des Bereichs liegen, werden sie unter Verwendung der `overflow`-Option gelöst. Beispielsweise ist `2024-08-31` plus einen Monat `2024-09-31`, das existiert nicht, daher wird es standardmäßig auf `2024-09-30` begrenzt.
- Der Zeitanteil einer Dauer wird mit realweltlicher Zeit hinzugefügt/subtrahiert; mit anderen Worten, der Zeitanteil wird zu seinem `Instant` unter Verwendung von {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} hinzugefügt, und dann wird das Ergebnis in derselben Zeitzone interpretiert. Beispielsweise ist `2024-11-03T01:00:00-04:00[America/New_York]` plus eine Stunde `2024-11-03T01:00:00-05:00[America/New_York]`.

Diese Regeln machen Arithmetik mit `Temporal.ZonedDateTime` „DST-sicher“, was bedeutet, dass die Ergebnisse am ehesten den Erwartungen sowohl realweltlicher Benutzer als auch Umsetzer anderer normenkompatibler Kalenderanwendungen entsprechen. Diese Erwartungen umfassen:

- Das Hinzufügen oder Subtrahieren von Tagen sollte die Uhrzeit bei Übertritten der Sommerzeit konsistent halten. Zum Beispiel, wenn Sie einen Termin am Samstag um 13:00 Uhr haben und ihn um 1 Tag verschieben möchten, erwarten Sie, dass der verschobene Termin immer noch um 13:00 Uhr stattfindet, selbst wenn es über Nacht einen Sommerzeitwechsel gab.
- Das Hinzufügen oder Subtrahieren des Zeitanteils einer Dauer sollte Sommerzeitumstellungen ignorieren. Zum Beispiel wird ein Freund, den Sie bitten, sich in 2 Stunden zu treffen, verärgert sein, wenn Sie 1 Stunde oder 3 Stunden später erscheinen. Es sollte eine konsistente und relativ wenig überraschende Reihenfolge der Operationen geben.
- Wenn die Ergebnisse an oder in der Nähe eines Sommerzeitübergangs liegen, sollten Mehrdeutigkeiten automatisch (ohne Absturz) und deterministisch behandelt werden.

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

Für weitere Beispiele, insbesondere wie verschiedene Kalender und die `overflow`-Option mit Kalenderdauern interagieren, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
