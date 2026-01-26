---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Temporal.Now`**-Namensraumobjekt enthält statische Methoden, um die aktuelle Zeit in verschiedenen Formaten zu erhalten.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal.Now` kein Konstruktor. Sie können es weder mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Temporal.Now`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal.Now` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

Grundlegend wird die Systemzeit vom Betriebssystem als Zeit seit der Unix-Epoche zurückgegeben (normalerweise mit Millisekundenpräzision, aber möglicherweise auch mit Nanosekundenpräzision). {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} gibt diese Zeit als {{jsxref("Temporal.Instant")}}-Objekt zurück.

Ein Zeitpunkt kann in einer Zeitzone interpretiert werden (was standardmäßig die Systemzeitzone {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} ist), ähnlich wie in {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. Um ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt zu erhalten, können Sie {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} verwenden. Sie können auch verschiedene Teile des Datums und der Zeit erhalten, indem Sie {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} und {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} verwenden.

Wenn der Computer beispielsweise auf die Zeitzone "America/New_York" eingestellt ist, gibt `Temporal.Now.zonedDateTimeISO()` ein zoned date-time zurück wie: `2021-08-01T10:40:12.345-04:00[America/New_York]`. In diesem Fall würde `Temporal.Now.plainTimeISO()` den Zeitteil dieses zoned date-time zurückgeben: `10:40:12.345`. Wenn Sie jedoch `Temporal.Now.plainTimeISO("UTC")` aufrufen, gibt es den Zeitteil des zoned date-time in der UTC-Zeitzone zurück: `14:40:12.345`. Dies ist besonders nützlich für die Kommunikation zwischen Systemen, bei der das andere Ende möglicherweise die Zeit in einer anderen Zeitzone erwartet.

### Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, könnte die Präzision der `Temporal.Now`-Funktionen je nach Browsereinstellungen gerundet werden. In Firefox ist die `privacy.reduceTimerPrecision`-Einstellung standardmäßig aktiviert und auf 2ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall wird die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` sein, je nachdem, welcher größer ist.

Mit reduzierter Zeitpräzision ist das Ergebnis von `Temporal.Now.instant().epochMilliseconds` immer ein Vielfaches von 2, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

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
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.Now"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}
  - : Gibt die aktuelle Zeit als {{jsxref("Temporal.Instant")}}-Objekt zurück.
- {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}
  - : Gibt das aktuelle Datum als {{jsxref("Temporal.PlainDate")}}-Objekt zurück, im ISO 8601-Kalender und der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}
  - : Gibt das aktuelle Datum und die Zeit als {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, im ISO 8601-Kalender und der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}
  - : Gibt die aktuelle Zeit als {{jsxref("Temporal.PlainTime")}}-Objekt zurück, in der angegebenen Zeitzone.
- {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}
  - : Gibt eine [Zeitzonenkennung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, die die aktuelle Zeitzone des Systems repräsentiert.
- {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}}
  - : Gibt das aktuelle Datum und die Zeit als {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, im ISO 8601-Kalender und der angegebenen Zeitzone.

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
