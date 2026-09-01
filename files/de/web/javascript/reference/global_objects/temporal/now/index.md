---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

Das **`Temporal.Now`** Namespace-Objekt enthält statische Methoden, um die aktuelle Zeit in verschiedenen Formaten abzurufen.

## Beschreibung

Anders als die meisten globalen Objekte ist `Temporal.Now` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal.Now` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal.Now` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

Grundlegend wird die Systemzeit vom Betriebssystem als Zeit seit der Unix-Epoche zurückgegeben. {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} gibt diese Zeit als ein {{jsxref("Temporal.Instant")}} Objekt zurück. Obwohl dieses Objekt Nanosekunden darstellen kann, hängt die Genauigkeit der aktuellen Zeit vom Systemtakt und den Browsereinstellungen ab.

Ein Zeitpunkt kann in einer Zeitzone interpretiert werden (die standardmäßig die Systemzeitzone {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} ist), ähnlich wie {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. Um ein {{jsxref("Temporal.ZonedDateTime")}} Objekt zu erhalten, können Sie {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} verwenden. Sie können auch verschiedene Teile des Datums und der Zeit mit {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} und {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} abrufen.

Zum Beispiel, wenn der Computer auf die Zeitzone "America/New_York" eingestellt ist, gibt `Temporal.Now.zonedDateTimeISO()` ein zonales Datum und eine zonale Zeit zurück wie: `2021-08-01T10:40:12.345-04:00[America/New_York]`. In diesem Fall würde `Temporal.Now.plainTimeISO()` den Zeitanteil dieser zonalen Zeit zurückgeben: `10:40:12.345`. Wenn Sie jedoch `Temporal.Now.plainTimeISO("UTC")` aufrufen, gibt es den Zeitanteil der zonalen Zeit in der UTC-Zeitzone zurück: `14:40:12.345`. Dies ist besonders nützlich für die Kommunikation zwischen Systemen, bei der das andere Ende möglicherweise die Zeit in einer anderen Zeitzone erwartet.

### Reduzierte Zeitgenauigkeit

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Genauigkeit der aktuellen Zeit, die von den `Temporal.Now` Methoden zurückgegeben wird, je nach Browsereinstellungen reduziert sein.

In Chrome liegt das Rundungsintervall bei 0,1 ms oder 0,005 ms in kontextübergreifend isolierten Kontexten.

In Firefox ermitteln diese Methoden die aktuelle Zeit auf die gleiche Weise wie {{jsxref("Date.now()")}}. Sie übernehmen die Genauigkeit dieser Uhrablesung, ohne zusätzliche Ungenauigkeit einzuführen. Der Zeitstempel ist immer eine ganze Anzahl von Millisekunden, sodass seine Auflösung in allen Kontexten auf 1 ms begrenzt ist. Der Zugriff auf `epochNanoseconds` erhöht dessen Genauigkeit nicht.

## Statische Eigenschaften

- `Temporal.Now[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Now"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}
  - : Gibt die aktuelle Zeit als ein {{jsxref("Temporal.Instant")}} Objekt zurück.
- {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}
  - : Gibt das aktuelle Datum als ein {{jsxref("Temporal.PlainDate")}} Objekt im ISO 8601 Kalender und der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}
  - : Gibt das aktuelle Datum und die aktuelle Zeit als ein {{jsxref("Temporal.PlainDateTime")}} Objekt im ISO 8601 Kalender und der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}
  - : Gibt die aktuelle Zeit als ein {{jsxref("Temporal.PlainTime")}} Objekt in der angegebenen Zeitzone zurück.
- {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}
  - : Gibt eine [Zeitzonenkennung](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) zurück, die die aktuelle Zeitzone des Systems darstellt.
- {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}}
  - : Gibt das aktuelle Datum und die aktuelle Zeit als ein {{jsxref("Temporal.ZonedDateTime")}} Objekt im ISO 8601 Kalender und der angegebenen Zeitzone zurück.

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
