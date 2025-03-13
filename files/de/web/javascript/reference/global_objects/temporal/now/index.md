---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.Now`** Namespace-Objekt enthält statische Methoden, um die aktuelle Zeit in verschiedenen Formaten zu erhalten.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal.Now` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal.Now` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal.Now` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

Grundsätzlich wird die Systemzeit vom Betriebssystem als Zeit seit der Unix-Epoche zurückgegeben (normalerweise auf Millisekunden-Ebene genau, aber möglicherweise auch auf Nanosekunden-Ebene). {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} gibt diese Zeit als {{jsxref("Temporal.Instant")}} Objekt zurück.

Ein Zeitpunkt kann in einer Zeitzone interpretiert werden (was standardmäßig die Systemzeitzone {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} ist), ähnlich wie {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. Um ein {{jsxref("Temporal.ZonedDateTime")}} Objekt zu erhalten, können Sie {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} verwenden. Sie können auch verschiedene Teile des Datums und der Zeit erhalten, unter Verwendung von {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}, und {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}.

Beispielsweise, wenn der Computer auf die Zeitzone "America/New_York" eingestellt ist, gibt `Temporal.Now.zonedDateTimeISO()` ein zonengesteuertes Datum und Uhrzeit zurück wie: `2021-08-01T10:40:12.345-04:00[America/New_York]`. In diesem Fall würde `Temporal.Now.plainTimeISO()` den Zeitteil dieses zonengesteuerten Datums und der Uhrzeit zurückgeben: `10:40:12.345`. Wenn Sie jedoch `Temporal.Now.plainTimeISO("UTC")` aufrufen, wird der Zeitteil des zonengesteuerten Datums und der Uhrzeit in der UTC-Zeitzone zurückgegeben: `14:40:12.345`. Dies ist besonders nützlich für die Kommunikation zwischen Systemen, bei der die andere Seite möglicherweise erwartet, dass die Zeit in einer anderen Zeitzone angegeben wird.

### Reduzierte Zeitgenauigkeit

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Genauigkeit der `Temporal.Now` Funktionen je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Genauigkeit 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` sein wird, je nachdem, welcher größer ist.

Beispielsweise wird bei reduzierter Zeitgenauigkeit das Ergebnis von `Temporal.Now.instant().epochMilliseconds` immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

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

- {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} {{experimental_inline}}
  - : Gibt die aktuelle Zeit als {{jsxref("Temporal.Instant")}} Objekt zurück.
- {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum als {{jsxref("Temporal.PlainDate")}} Objekt im ISO 8601 Kalender und der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum und die aktuelle Zeit als {{jsxref("Temporal.PlainDateTime")}} Objekt im ISO 8601 Kalender und der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} {{experimental_inline}}
  - : Gibt die aktuelle Zeit als {{jsxref("Temporal.PlainTime")}} Objekt in der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} {{experimental_inline}}
  - : Gibt einen [Zeitzonenbezeichner](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, der die aktuelle Zeitzone des Systems repräsentiert.
- {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum und die aktuelle Zeit als {{jsxref("Temporal.ZonedDateTime")}} Objekt im ISO 8601 Kalender und der angegebenen Zeitzone zurück.

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
