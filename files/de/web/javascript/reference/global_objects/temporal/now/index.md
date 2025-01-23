---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.Now`**-Objekt bietet Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten.

## Beschreibung

Anders als die meisten globalen Objekte ist `Temporal.Now` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal.Now`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal.Now` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

Grundlegend wird die Systemzeit vom Betriebssystem als Zeit seit der Unix-Epoche zurückgegeben (normalerweise mit Millisekunden-Genauigkeit, es könnte jedoch auch Nanosekunden-Genauigkeit sein). {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} gibt diese Zeit als ein {{jsxref("Temporal.Instant")}}-Objekt zurück.

Ein Zeitpunkt kann in einer Zeitzone interpretiert werden (welches standardmäßig die Systemzeitzone {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} ist) ähnlich wie {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. Um ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt zu erhalten, können Sie {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} verwenden. Sie können auch verschiedene Teile des Datums und der Zeit erhalten, indem Sie {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} und {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} verwenden.

Beispielsweise, wenn der Computer auf die Zeitzone "America/New_York" eingestellt ist, gibt `Temporal.Now.zonedDateTimeISO()` ein zonales Datum-Uhrzeit zurück wie: `2021-08-01T10:40:12.345-04:00[America/New_York]`. In diesem Fall würde `Temporal.Now.plainTimeISO()` den Zeitanteil dieses zonalen Datums-Uhrzeit zurückgeben: `10:40:12.345`. Wenn Sie jedoch `Temporal.Now.plainTimeISO("UTC")` aufrufen, wird der Zeitanteil der zonalen Datums-Uhrzeit in der UTC-Zeitzone zurückgegeben: `14:40:12.345`. Dies ist besonders nützlich für die Kommunikation zwischen Systemen, bei denen die andere Seite möglicherweise die Zeit in einer anderen Zeitzone erwartet.

### Reduzierte Zeitgenauigkeit

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerabdruckerstellung")}} zu bieten, könnte die Genauigkeit der `Temporal.Now`-Funktionen je nach Browser-Einstellungen gerundet werden. In Firefox ist die `privacy.reduceTimerPrecision`-Einstellung standardmäßig aktiviert und standardmäßig auf 2ms festgelegt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Genauigkeit 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist, betragen wird.

Beispielsweise wird das Ergebnis von `Temporal.Now.instant().epochMilliseconds` mit reduzierter Zeitgenauigkeit immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) bei aktiviertem `privacy.resistFingerprinting`.

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
  - : Der initiale Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Now"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} {{experimental_inline}}
  - : Gibt die aktuelle Zeit als ein {{jsxref("Temporal.Instant")}}-Objekt zurück.
- {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum als ein {{jsxref("Temporal.PlainDate")}}-Objekt zurück, im ISO 8601 Kalender und der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum und die Uhrzeit als ein {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, im ISO 8601 Kalender und der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} {{experimental_inline}}
  - : Gibt die aktuelle Zeit als ein {{jsxref("Temporal.PlainTime")}}-Objekt zurück, in der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} {{experimental_inline}}
  - : Gibt einen [Zeitzonen-Bezeichner](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, der die aktuelle Zeitzone des Systems darstellt.
- {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum und die Uhrzeit als ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, im ISO 8601 Kalender und der angegebenen Zeitzone.

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
