---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die Methode **`resolvedOptions()`** von Instanzen von {{jsxref("Intl.DateTimeFormat")}} gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.resolvedOptions()")}}

```js interactive-example
const region = new Intl.DateTimeFormat("zh-CN", { timeZone: "UTC" });
const options = region.resolvedOptions();

console.log(options.locale);
// Expected output: "zh-CN"

console.log(options.calendar);
// Expected output: "gregory"

console.log(options.numberingSystem);
// Expected output: "latn"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der aufgeführten Reihenfolge:

- `locale`
  - : Der {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} für das tatsächlich verwendete Gebietsschema, bestimmt durch den [Locale-Verhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die `ca`, `hc` und `nu` Unicode-Erweiterungsschlüssel, falls angefordert, können in der Ausgabe enthalten sein.
- `calendar`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft oder unter Verwendung des Unicode-Erweiterungsschlüssels `"ca"`, wobei der Standardwert nach Bedarf ausgefüllt wird. Es ist ein unterstützter [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für dieses Gebietsschema. Der Standard ist gebietsschemaabhängig.
- `numberingSystem`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, wobei der Standardwert nach Bedarf ausgefüllt wird. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für dieses Gebietsschema. Der Standard ist gebietsschemaabhängig.
- `timeZone`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft, wobei der Standardwert nach Bedarf ausgefüllt wird. Es ist ein [IANA-Zeitzonenname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standard ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert, dass Browser den ursprünglich angegebenen Bezeichner verwenden, ohne eine Kanonisierung zu einem anderen Alias vorzunehmen. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für mehr Informationen.

- `hourCycle` {{optional_inline}}
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft oder unter Verwendung des Unicode-Erweiterungsschlüssels `"hc"`, wobei der Standardwert nach Bedarf ausgefüllt wird. Wenn `hour12` in den `options` angegeben wurde, überschreibt dieses andere `hourCycle`-Einstellungen. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` enthalten. Es ist entweder `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Der Standard ist gebietsschemaabhängig, obwohl `"h24"` niemals ein Standard ist.
- `hour12` {{optional_inline}}
  - : Berechnet aus `hourCycle`. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` enthalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}
  - : Die Werte, die aus dem Formatabgleich zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für die Datums- und Uhrzeitformatierung im ausgewählten Gebietsschema resultieren. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor die Spezifizierung von `dateStyle` und `timeStyle`, sodass die untenstehende Gruppe niemals vorhanden sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}
  - : Die in dem `options`-Argument angegebenen Werte für diese Eigenschaften. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor die Spezifizierung individueller Datum- und Zeitkomponentenoptionen, sodass die obige Gruppe niemals vorhanden sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für einzelne Datum- und Zeitkomponentenstile sind, sind die genauen (gebietsschemaabhängigen) Komponentenstile, die sie auflösen, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datum- oder Zeitkomponentenstilen ungültig ist).

## Beispiele

### Verwenden der Methode resolvedOptions

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (because "de-XX" does not exist)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Erhalten der Zeitzonen- und Gebietsschema-Präferenzen des Benutzers

Der `Intl.DateTimeFormat` Konstruktor ohne Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone und den bevorzugten Kalender und das Nummerierungssystem des Gebietsschemas des Benutzers zu erhalten:

```js
const systemOptions = new Intl.DateTimeFormat().resolvedOptions();
systemOptions.timeZone; // e.g., "Europe/Brussels" or "Asia/Riyadh"
systemOptions.calendar; // e.g., "gregory" or "islamic-umalqura"
systemOptions.numberingSystem; // e.g., "latn" or "arab"
systemOptions.locale; // e.g., "nl-BE" or "ar-SA"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
