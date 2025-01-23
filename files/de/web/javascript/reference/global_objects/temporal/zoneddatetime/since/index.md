---
title: Temporal.ZonedDateTime.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`since()`** Methode von Instanzen des {{jsxref("Temporal.ZonedDateTime")}} gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) bis zu diesem Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn das andere Datum-Uhrzeit vor diesem Datum-Uhrzeit liegt, und negativ, wenn es danach liegt.

Diese Methode führt `this - other` aus. Um `other - this` auszuführen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die ein Datum-Uhrzeit darstellt, das von diesem Datum-Uhrzeit subtrahiert wird. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime` Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, darunter `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren alle möglichen Einheiten. Für `largestUnit` bedeutet der Standardwert `"auto"` entweder `"hour"` oder `smallestUnit`, je nachdem, welches größer ist. Für `smallestUnit` ist der Standardwert `"nanosecond"`. Das aktuelle Datum wird als `relativeTo` Option verwendet. Beachten Sie, dass die Verwendung von [Einheiten größer als `"hour"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) die Dauer nicht auf andere Kalender, Daten oder Zeitzonen übertragbar machen kann.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer _seit_ `other` bis zu diesem Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn `other` vor diesem Datum-Uhrzeit liegt, und negativ, wenn danach.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.
    - `other` hat eine andere Zeitzone als `this`, und `largestUnit` ist `"day"` oder darüber.

## Beschreibung

Die zurückgegebene Dauer ist eine "hybride" Dauer. Dies bedeutet, dass der Datumsteil der Dauer vollständige Kalendertage darstellt, wie es {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}} zurückgeben würde, während der Zeitteil der Dauer die tatsächlich verstrichene Zeit darstellt, wie es {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}} zurückgeben würde. Dieser "hybride Dauer"-Ansatz passt sich automatisch an Sommerzeit (DST) an und entspricht weit verbreiteten Industriestandards wie [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545). Siehe unten für Beispiele.

## Beispiele

### Zeitzonenübergänge

Wenn Übergänge stattfinden, kann ein Tag nicht genau 24 Stunden haben.

```js
const start = Temporal.ZonedDateTime.from(
  "2024-11-03T01:00:00-04:00[America/New_York]",
);
const end = Temporal.ZonedDateTime.from(
  "2024-11-04T01:00:00-05:00[America/New_York]",
);
console.log(end.since(start).toString()); // PT25H
console.log(end.since(start, { largestUnit: "day" }).toString()); // PT1D

const start2 = Temporal.ZonedDateTime.from(
  "2024-03-10T01:00:00-05:00[America/New_York]",
);
const end2 = Temporal.ZonedDateTime.from(
  "2024-03-11T01:00:00-04:00[America/New_York]",
);
console.log(end2.since(start2).toString()); // PT23H
console.log(end2.since(start2, { largestUnit: "day" }).toString()); // PT1D
```

Aus diesem Grund ist die zurückgegebene Dauer standardmäßig rein zeitbasiert ohne Datumsteil, damit sie eindeutig bleibt.

### Unterschiedliche Zeitzonen

Der Zeitteil der zurückgegebenen Dauer basiert ausschließlich auf Zeitpunkten und wird nicht von Zeitzonen beeinflusst. Wenn Sie jedoch Datumseinheiten wie `day` einbeziehen möchten, müssen der Anfang und das Ende in derselben Zeitzone sein.

```js
const start = Temporal.ZonedDateTime.from(
  "2024-11-03T01:00:00-04:00[America/New_York]",
);
// Peru does not use DST so its offset remains -05:00 year-round
const end = Temporal.ZonedDateTime.from(
  "2024-11-04T01:00:00-05:00[America/Lima]",
);

end.since(start); // PT25H
end.since(start, { largestUnit: "day" }); // RangeError: time zones "America/Lima" and "America/New_York" aren't compatible

end.withTimeZone("America/New_York").since(start, { largestUnit: "day" }); // P1D
end.since(start.withTimeZone("America/Lima"), { largestUnit: "day" }); // P1D1H
```

Für weitere Beispiele zur Verwendung von `since()`, insbesondere mit Rundung, siehe {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}} und {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
