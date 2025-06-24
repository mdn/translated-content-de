---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Optionen widerspiegeln, die während der Initialisierung dieses `DateTimeFormat`-Objekts berechnet wurden.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.resolvedOptions()")}}

```js interactive-example
const region1 = new Intl.DateTimeFormat("zh-CN", { timeZone: "UTC" });
const options1 = region1.resolvedOptions();

console.log(options1.locale);
// Expected output: "zh-CN"

console.log(options1.calendar);
// Expected output: "gregory"

console.log(options1.numberingSystem);
// Expected output: "latn"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die Optionen widerspiegeln, die während der Initialisierung dieses `DateTimeFormat`-Objekts berechnet wurden. Das Objekt hat die folgenden Eigenschaften in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das BCP 47 Sprach-Tag für die tatsächlich verwendete Sprache, bestimmt durch den [Sprachenverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die `ca`, `hc` und `nu` Unicode-Erweiterungsschlüssel können, falls angefordert, in der Ausgabe enthalten sein.
- `calendar`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert oder die Verwendung des Unicode-Erweiterungsschlüssels `"ca"`, mit bei Bedarf ausgefülltem Standard. Es ist ein unterstützter [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für diese Sprache. Der Standard ist abhängig von der gewählten Sprache.
- `numberingSystem`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert oder die Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit bei Bedarf ausgefülltem Standard. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Sprache. Der Standard ist abhängig von der gewählten Sprache.
- `timeZone`

  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, mit bei Bedarf ausgefülltem Standard. Es ist ein [IANA Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standard ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert, dass Browser denselben Bezeichner verwenden, wie ursprünglich spezifiziert, ohne Kanonisierung zu einem anderen Alias. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für mehr Informationen.

- `hourCycle` {{optional_inline}}
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert oder die Verwendung des Unicode-Erweiterungsschlüssels `"hc"`, mit bei Bedarf ausgefülltem Standard. Falls `hour12` im `options`-Argument angegeben wurde, überschreibt dies andere `hourCycle`-Einstellungen. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` enthalten. Es ist entweder `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Der Standard ist abhängig von der gewählten Sprache, obwohl `"h24"` niemals ein Standard ist.
- `hour12` {{optional_inline}}
  - : Abgeleitet von `hourCycle`. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` enthalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}

  - : Die Werte, die aus dem Formatabgleich zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für die Datums- und Zeitformatierung in der gewählten Sprache resultieren. Einige dieser Eigenschaften können nicht vorhanden sein, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor, dass `dateStyle` und `timeStyle` angegeben werden, sodass die untenstehende Gruppe niemals vorhanden sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}

  - : Die für diese Eigenschaften im `options`-Argument angegebenen Werte. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften können nicht vorhanden sein, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor die Spezifizierung einzelner Datums- und Zeitkomponentenoptionen, sodass die obige Gruppe niemals vorhanden sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für individuelle Datums- und Uhrzeitkomponenten-Stile sind, werden die genauen (sprachabhängigen) Komponentenstile, zu denen sie geführt werden, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Uhrzeitkomponentenstilen ungültig ist).

## Beispiele

### Verwendung der Methode resolvedOptions

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (because "de-XX" does not exist)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Abrufen der Zeitzonen- und Spracheinstellungen des Benutzers

Der `Intl.DateTimeFormat`-Konstruktor verwendet ohne jegliche Optionen die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone und das bevorzugte Kalender- und Nummerierungssystem der Sprache des Benutzers abzurufen:

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
