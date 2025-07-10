---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Das **`Temporal.Now`** Namensraumobjekt enthält statische Methoden, um die aktuelle Uhrzeit in verschiedenen Formaten zu erhalten.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal.Now` kein Konstruktor. Sie können es nicht mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal.Now`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal.Now` sind statisch (genauso wie das {{jsxref("Math")}}-Objekt).

Grundlegend wird die Systemzeit vom Betriebssystem als Zeit seit der Unix-Epoche zurückgegeben (normalerweise mit Millisekunden-Präzision, kann aber auch auf Nanosekunden-Präzision sein). {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} gibt diese Zeit als ein {{jsxref("Temporal.Instant")}}-Objekt zurück.

Ein Zeitpunkt kann in einer Zeitzone interpretiert werden (standardmäßig die Systemzeitzone {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), auf die gleiche Weise wie {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. Um ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt zu erhalten, können Sie {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} verwenden. Sie können auch verschiedene Teile des Datums und der Uhrzeit erhalten, indem Sie {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} und {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} verwenden.

Zum Beispiel, wenn der Computer auf die Zeitzone "America/New_York" eingestellt ist, gibt `Temporal.Now.zonedDateTimeISO()` ein zoniertes Datum und Uhrzeit zurück, wie: `2021-08-01T10:40:12.345-04:00[America/New_York]`. In diesem Fall würde `Temporal.Now.plainTimeISO()` den Zeitanteil dieser zonierten Zeit zurückgeben: `10:40:12.345`. Wenn Sie jedoch `Temporal.Now.plainTimeISO("UTC")` aufrufen, wird der Zeitanteil der zonierten Zeit in der UTC-Zeitzone zurückgegeben: `14:40:12.345`. Dies ist besonders nützlich für die Kommunikation zwischen Systemen, bei denen das andere Ende möglicherweise die Zeit in einer anderen Zeitzone erwartet.

### Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerabdruckerstellung")}} zu bieten, könnte die Präzision der `Temporal.Now`-Funktionen abhängig von den Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und hat einen Standardwert von 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall wird die Präzision 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` betragen, je nachdem, welcher Wert größer ist.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `Temporal.Now.instant().epochMilliseconds` immer ein Vielfaches von 2 sein oder mit `privacy.resistFingerprinting` aktiviert ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`).

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
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Temporal.Now"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} {{experimental_inline}}
  - : Gibt die aktuelle Zeit als ein {{jsxref("Temporal.Instant")}}-Objekt zurück.
- {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum als ein {{jsxref("Temporal.PlainDate")}}-Objekt im ISO 8601-Kalender und der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum und die aktuelle Uhrzeit als ein {{jsxref("Temporal.PlainDateTime")}}-Objekt im ISO 8601-Kalender und der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} {{experimental_inline}}
  - : Gibt die aktuelle Uhrzeit als ein {{jsxref("Temporal.PlainTime")}}-Objekt in der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} {{experimental_inline}}
  - : Gibt eine [Zeitzonenkennung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, die die aktuelle Systemzeitzone darstellt.
- {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} {{experimental_inline}}
  - : Gibt das aktuelle Datum und die aktuelle Uhrzeit als ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt im ISO 8601-Kalender und der angegebenen Zeitzone zurück.

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
