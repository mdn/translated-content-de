---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat` Objekts berechneten Optionen widerspiegeln.

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat` Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Der BCP 47-Sprachcode für die tatsächlich verwendete Sprache, bestimmt durch den [Verhandlungsprozess der Sprache](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die `ca`, `hc` und `nu` Unicode-Erweiterungsschlüssel können in der Ausgabe enthalten sein, wenn sie angefordert wurden.
- `calendar`
  - : Der Wert, der für diese Eigenschaft im `options` Argument oder unter Verwendung des Unicode-Erweiterungsschlüssels `"ca"` bereitgestellt wurde, mit Standardwerten, die bei Bedarf ausgefüllt werden. Es ist ein unterstützter [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für diese Sprachregion. Der Standard hängt von der Sprachregion ab.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im `options` Argument oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"` bereitgestellt wurde, mit Standardwerten, die bei Bedarf ausgefüllt werden. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Sprachregion. Der Standard hängt von der Sprachregion ab.
- `timeZone`

  - : Der Wert, der für diese Eigenschaft im `options` Argument bereitgestellt wurde, mit Standardwerten, die bei Bedarf ausgefüllt werden. Es ist ein [IANA-Zeitzonenname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standard ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert, dass Browser denselben Bezeichner verwenden, wie ursprünglich spezifiziert, ohne Kanonisierung zu einem anderen Alias. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen.

- `hourCycle` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options` Argument oder unter Verwendung des Unicode-Erweiterungsschlüssels `"hc"` bereitgestellt wurde, mit Standardwerten, die bei Bedarf ausgefüllt werden. Wenn `hour12` im `options` bereitgestellt wurde, wird dies andere `hourCycle` Einstellungen überschreiben. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` beinhalten. Es kann `"h11"`, `"h12"`, `"h23"` oder `"h24"` sein. Der Standard hängt von der Sprachregion ab, obwohl `"h24"` nie ein Standard ist.
- `hour12` {{optional_inline}}
  - : Berechnet aus `hourCycle`. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}

  - : Die Werte, die aus dem Formatabgleich zwischen den entsprechenden Eigenschaften im `options` Argument und den verfügbaren Kombinationen und Darstellungen für Datums- und Uhrzeitformatierung in der ausgewählten Sprachregion resultieren. Einige dieser Eigenschaften können fehlen, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor, dass `dateStyle` und `timeStyle` angegeben werden, so dass die untenstehende Gruppe niemals vorhanden sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}

  - : Die Werte, die für diese Eigenschaften im `options` Argument bereitgestellt wurden. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften können fehlen, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor, dass individuelle Datums- und Zeitkomponentenoptionen angegeben werden, so dass die obenstehende Gruppe niemals vorhanden sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für individuelle Datums- und Zeitkomponentenstile sind, sind die genauen (sprachregionsabhängigen) Komponentenstile, zu denen sie aufgelöst werden, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt dem `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Zeitkomponentenstilen nicht gültig ist).

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

Der `Intl.DateTimeFormat` Konstruktor ohne Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers und die bevorzugten Kalender- und Nummerierungssysteme der Sprachregion zu erhalten:

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
