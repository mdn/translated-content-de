---
title: Temporal.ZonedDateTime.prototype.since()
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`since()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum-Zeitpunkt (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) zu diesem Datum-Zeitpunkt darstellt. Die Dauer ist positiv, wenn der andere Datum-Zeitpunkt vor diesem Datum-Zeitpunkt liegt, und negativ, wenn danach.

Diese Methode führt `this - other` aus. Um `other - this` auszuführen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die einen Datum-Zeitpunkt darstellt, der von diesem Datum-Zeitpunkt abgezogen wird. Es wird zu einem `Temporal.ZonedDateTime` Objekt konvertiert mit dem gleichen Algorithmus wie {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}. Es muss den gleichen Kalender haben wie `this`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, einschließlich `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren alle möglichen Einheiten. Für `largestUnit` bedeutet der Standardwert `"auto"` `"hours"` oder `smallestUnit`, je nachdem, was größer ist. Für `smallestUnit` ist der Standardwert `"nanoseconds"`. Das aktuelle Datum wird als `relativeTo`-Option verwendet. Beachten Sie, dass die Verwendung von [Einheiten größer als `"hours"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) die Dauer nicht übertragbar auf andere Kalender, Daten oder Zeitzonen machen kann.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer _seit_ `other` zu diesem Datum-Zeitpunkt darstellt. Die Dauer ist positiv, wenn `other` vor diesem Datum-Zeitpunkt liegt, und negativ, wenn danach.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - `other` hat einen anderen Kalender als `this`.
    - Einer der Optionen ist ungültig.
    - `other` hat eine andere Zeitzone als `this`, und `largestUnit` ist `"days"` oder höher.

## Beschreibung

Die zurückgegebene Dauer ist eine "hybride" Dauer. Dies bedeutet, dass der Datumsanteil der Dauer ganze Kalendertage repräsentiert, wie es {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}} zurückgeben würde, während der Zeitanteil die tatsächlich vergangene Zeit widerspiegelt, wie es {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}} zurückgeben würde. Dieser Ansatz der "hybriden Dauer" passt sich automatisch an Sommerzeitumstellungen an und entspricht weit verbreiteten Industriestandards wie [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545). Siehe unten für Beispiele.

## Beispiele

### Verschiebungen bei Zeitzoneinstellungen

Wenn Änderungen passieren, kann ein Tag nicht genau 24 Stunden haben.

```js
const start = Temporal.ZonedDateTime.from(
  "2024-11-03T01:00:00-04:00[America/New_York]",
);
const end = Temporal.ZonedDateTime.from(
  "2024-11-04T01:00:00-05:00[America/New_York]",
);
console.log(end.since(start).toString()); // PT25H
console.log(end.since(start, { largestUnit: "days" }).toString()); // PT1D

const start2 = Temporal.ZonedDateTime.from(
  "2024-03-10T01:00:00-05:00[America/New_York]",
);
const end2 = Temporal.ZonedDateTime.from(
  "2024-03-11T01:00:00-04:00[America/New_York]",
);
console.log(end2.since(start2).toString()); // PT23H
console.log(end2.since(start2, { largestUnit: "days" }).toString()); // PT1D
```

Aus diesem Grund ist die zurückgegebene Dauer standardmäßig rein zeitbasiert, ohne Datumsanteil, sodass sie eindeutig bleibt.

### Verschiedene Zeitzonen

Der Zeitanteil der zurückgegebenen Dauer basiert rein auf Instants und wird nicht durch Zeitzonen beeinflusst. Wenn Sie jedoch Datumseinheiten wie `day` einbeziehen möchten, müssen Anfang und Ende in derselben Zeitzone liegen.

```js
const start = Temporal.ZonedDateTime.from(
  "2024-11-03T01:00:00-04:00[America/New_York]",
);
// Peru does not use DST so its offset remains -05:00 year-round
const end = Temporal.ZonedDateTime.from(
  "2024-11-04T01:00:00-05:00[America/Lima]",
);

end.since(start); // PT25H
end.since(start, { largestUnit: "days" }); // RangeError: time zones "America/Lima" and "America/New_York" aren't compatible

end.withTimeZone("America/New_York").since(start, { largestUnit: "days" }); // P1D
end.since(start.withTimeZone("America/Lima"), { largestUnit: "days" }); // P1D1H
```

Für weitere Beispiele zur Nutzung von `since()`, insbesondere mit Rundungen, siehe {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}} und {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}.

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
