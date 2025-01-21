---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Temporal.Now`** Objekt bietet Methoden, um die aktuelle Uhrzeit in verschiedenen Formaten zu erhalten.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal.Now` kein Konstruktor. Sie können es weder mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Temporal.Now` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal.Now` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

Im Wesentlichen wird die Systemzeit vom Betriebssystem als Zeit seit der Unix-Epoche zurückgegeben (normalerweise mit Millisekunden-Präzision, aber möglicherweise auch mit Nanosekunden-Präzision). {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} gibt diese Zeit als ein {{jsxref("Temporal.Instant")}} Objekt zurück.

Ein Zeitpunkt kann in einer Zeitzone interpretiert werden (standardmäßig die Systemzeitzone {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}) auf die gleiche Weise wie {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. Um ein {{jsxref("Temporal.ZonedDateTime")}} Objekt zu erhalten, können Sie {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} verwenden. Sie können auch verschiedene Teile des Datums und der Uhrzeit erhalten, indem Sie {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}, und {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} verwenden.

Beispielsweise, wenn der Computer auf die Zeitzone "America/New_York" eingestellt ist, gibt `Temporal.Now.zonedDateTimeISO()` ein zoniertes Datum-Zeit wie: `2021-08-01T10:40:12.345-04:00[America/New_York]` zurück. In diesem Fall würde `Temporal.Now.plainTimeISO()` den Zeitteil dieser zonierten Datum-Zeit zurückgeben: `10:40:12.345`. Wenn Sie jedoch `Temporal.Now.plainTimeISO("UTC")` aufrufen, gibt es den Zeitteil der zonierten Datum-Zeit in der UTC-Zeitzone zurück: `14:40:12.345`. Dies ist besonders nützlich für die systemübergreifende Kommunikation, bei der das andere Ende die Zeit möglicherweise in einer anderen Zeitzone erwartet.

### Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Präzision der `Temporal.Now` Funktionen je nach Browsereinstellungen abgerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und standardmäßig auf 2ms gesetzt. Sie können auch `privacy.resistFingerprinting` aktivieren, wobei die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` ist, je nachdem, welcher größer ist.

Beispielsweise wird bei reduzierter Zeitpräzision das Ergebnis von `Temporal.Now.instant().epochMilliseconds` immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting` sein.

```js
// reduced time precision (2ms) in Firefox 60
Temporal.Now.instant().epochMilliseconds;
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
Temporal.Now.instant().epochMilliseconds;
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Statische Eigenschaften

- `Temporal.Now[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Now"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}
  - : Gibt die aktuelle Uhrzeit als ein {{jsxref("Temporal.Instant")}} Objekt zurück.
- {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}
  - : Gibt das aktuelle Datum als ein {{jsxref("Temporal.PlainDate")}} Objekt zurück, im ISO 8601 Kalender und der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}
  - : Gibt das aktuelle Datum und die Uhrzeit als ein {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, im ISO 8601 Kalender und der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}
  - : Gibt die aktuelle Uhrzeit als ein {{jsxref("Temporal.PlainTime")}} Objekt zurück, in der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}
  - : Gibt eine [Zeitzonenkennung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, die die aktuelle Zeitzone des Systems darstellt.
- {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}}
  - : Gibt das aktuelle Datum und die Uhrzeit als ein {{jsxref("Temporal.ZonedDateTime")}} Objekt zurück, im ISO 8601 Kalender und der angegebenen Zeitzone.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.ZonedDateTime")}}
