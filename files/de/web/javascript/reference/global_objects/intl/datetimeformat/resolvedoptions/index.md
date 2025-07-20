---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln.

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Das BCP 47-Sprachtag für die tatsächlich verwendete Locale, ermittelt durch den [Lokalisierungsverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die `ca`, `hc` und `nu` Unicode-Erweiterungsschlüssel können, falls angefordert, in der Ausgabe enthalten sein.
- `calendar`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"ca"`, mit bei Bedarf ausgefüllter Standardeinstellung. Es handelt sich um einen unterstützten [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für dieses Gebietsschema. Der Standard ist von der Locale abhängig.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit bei Bedarf ausgefüllter Standardeinstellung. Es handelt sich um ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für dieses Gebietsschema. Der Standard ist von der Locale abhängig.
- `timeZone`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, mit bei Bedarf ausgefüllter Standardeinstellung. Es handelt sich um einen [IANA-Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standard ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert, dass Browser den ursprünglich angegebenen Bezeichner verwenden, ohne eine Kanonisierung zu einem anderen Alias vorzunehmen. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- `hourCycle` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"hc"`, mit bei Bedarf ausgefüllter Standardeinstellung. Wenn `hour12` im `options` angegeben wurde, überschreibt dies andere `hourCycle`-Einstellungen. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` enthalten. Es ist entweder `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Der Standard ist von der Locale abhängig, obwohl `"h24"` nie ein Standard ist.
- `hour12` {{optional_inline}}
  - : Wird aus `hourCycle` berechnet. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` enthalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}
  - : Die Werte, die durch das Format-Matching zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für die Datums-/Zeitformatierung in der ausgewählten Locale resultieren. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Wenn diese Eigenschaften im `options` angefordert wurden, verhindert der Konstruktor, dass `dateStyle` und `timeStyle` spezifiziert werden, sodass die untenstehende Gruppe niemals vorhanden sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}
  - : Die im `options`-Argument für diese Eigenschaften angegebenen Werte. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden.

    Wenn diese Eigenschaften im `options` angefordert wurden, verhindert der Konstruktor, dass individuelle Datums-Zeit-Komponenten-Optionen spezifiziert werden, sodass obige Gruppe niemals vorhanden sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für individuelle Datums- und Zeitkomponentenstile sind, sind die genauen (locale-abhängigen) Komponentenstile, auf die sie sich beziehen, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Zeitkomponentenstilen ungültig ist).

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

### Abrufen der Zeitzonen- und Locale-Präferenzen des Benutzers

Der `Intl.DateTimeFormat`-Konstruktor ohne Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers und das bevorzugte Kalender- und Nummerierungssystem der Locale abzurufen:

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
