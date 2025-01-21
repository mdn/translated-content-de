---
title: Temporal.ZonedDateTime.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`add()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das dieses Datum-Uhrzeit-Paar um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) vorwärts verschoben darstellt.

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine hinzuzufügende Dauer zu diesem Datum-Uhrzeit-Paar darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten spezifiziert, wenn eine Datumskomponente außerhalb des gültigen Bereichs liegt. Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Datumskomponente wird auf den gültigen Bereich [eingeschränkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping).
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird ausgelöst, wenn die Datumskomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das das Datum-Uhrzeit-Paar darstellt, das durch das ursprüngliche `ZonedDateTime` plus der Dauer angegeben ist.

## Beschreibung

Für Informationen darüber, wie [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) hinzugefügt werden, siehe {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

Addition und Subtraktion werden gemäß den in [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545) definierten Regeln durchgeführt:

- Fügen Sie den Datumsanteil einer Dauer mit Kalenderarithmetik hinzu oder ziehen Sie diesen ab; das heißt, fügen Sie den Datumsanteil zu seinem `PlainDateTime` mithilfe von {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} hinzu, und interpretieren Sie das Ergebnis in derselben Zeitzone. Das Ergebnis passt sich automatisch der Sommerzeit an, indem die Regeln des `timeZone` Feldes dieser Instanz verwendet werden. Zum Beispiel ergibt `2024-11-03T01:00:00-04:00[America/New_York]` plus einem Tag `2024-11-04T01:00:00-05:00[America/New_York]`, als ob der Tag 25 Stunden hätte.
  - Wenn die Datum-Uhrzeit aufgrund einer Zeitzonenverschiebung [mehrdeutig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) oder ungültig ist, wird sie mit dem Verhalten `disambiguation: "compatible"` aufgelöst: Der spätere der beiden möglichen Zeitpunkte wird für Zeitübergänge verwendet, und der frühere der beiden möglichen Zeitpunkte wird für Zeitwiederholungen verwendet. Zum Beispiel ergibt `2024-03-09T02:05:00-05:00[America/New_York]` plus einem Tag angeblich `2024-03-10T02:05:00-05:00[America/New_York]`, aber diese Zeit existiert nicht, daher wird die Uhrzeit eine Stunde später, `2024-03-10T03:05:00-04:00[America/New_York]`, zurückgegeben.
  - Wenn die [Verschiebung mehrdeutig ist](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#offset_ambiguity), wird sie mit dem Verhalten `offset: "prefer"` aufgelöst: Die Verschiebung wird verwendet, wenn sie für die Zeitzone und die lokale Zeit gültig ist, und andernfalls neu berechnet. Zum Beispiel ergibt `2024-11-02T01:00:00-04:00[America/New_York]` plus einem Tag `2024-11-03T01:00:00-04:00[America/New_York]`, während `2024-11-04T01:00:00-05:00[America/New_York]` minus einem Tag `2024-11-03T01:00:00-05:00[America/New_York]` ergibt.
  - Wenn die Komponenten der resultierenden Datum-Uhrzeit außerhalb der Grenzen liegen, werden sie mit der Option `overflow` aufgelöst. Zum Beispiel ergibt `2024-08-31` plus einem Monat `2024-09-31`, was nicht existiert, daher wird es standardmäßig auf `2024-09-30` beschränkt.
- Fügen Sie den Zeitanteil einer Dauer unter Verwendung der realen Zeit hinzu oder ziehen Sie davon ab; das heißt, fügen Sie den Zeitanteil zu seinem `Instant` mithilfe von {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} hinzu, und interpretieren Sie das Ergebnis in derselben Zeitzone. Zum Beispiel ergibt `2024-11-03T01:00:00-04:00[America/New_York]` plus einer Stunde `2024-11-03T01:00:00-05:00[America/New_York]`.

Diese Regeln machen die Arithmetik mit `Temporal.ZonedDateTime` "DST-sicher", was bedeutet, dass die Ergebnisse den Erwartungen sowohl der realen Benutzer als auch der Implementierer anderer normenkonformer Kalenderanwendungen am nächsten kommen. Diese Erwartungen umfassen:

- Das Hinzufügen oder Abziehen von Tagen sollte die Uhrzeit über DST-Übergänge hinweg konsistent halten. Zum Beispiel, wenn Sie einen Termin am Samstag um 13:00 Uhr haben und Sie bitten, ihn um einen Tag später zu verschieben, würden Sie erwarten, dass der verschobene Termin immer noch um 13:00 Uhr ist, auch wenn über Nacht eine DST-Übergang stattfand.
- Das Hinzufügen oder Abziehen des Zeitanteils einer Dauer sollte DST-Übergänge ignorieren. Zum Beispiel wird ein Freund, den Sie gebeten haben, sich in 2 Stunden zu treffen, verärgert sein, wenn Sie 1 Stunde oder 3 Stunden später erscheinen. Es sollte eine konsistente und relativ unüberraschende Abfolge von Operationen geben.
- Wenn Ergebnisse an oder nahe einem DST-Übergang liegen, sollten Mehrdeutigkeiten automatisch (ohne Abstürze) und deterministisch behandelt werden.

Das Hinzufügen einer Dauer ist gleichbedeutend mit der [Subtraktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract) deren [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

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
