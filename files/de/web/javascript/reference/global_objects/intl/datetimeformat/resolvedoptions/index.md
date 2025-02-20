---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.resolvedOptions")}}

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der angegebenen Reihenfolge:

- `locale`
  - : Der BCP 47-Sprachcode für die tatsächlich verwendete Sprache, bestimmt durch den [Sprachverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die Unicode-Erweiterungsschlüssel `ca`, `hc` und `nu` können in der Ausgabe enthalten sein, wenn diese angefordert wurden.
- `calendar`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert oder der über den Unicode-Erweiterungsschlüssel `"ca"` angeforderte Wert, mit Standardwerten, falls erforderlich. Es handelt sich um einen unterstützten [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für diese Locale. Die Standardeinstellung hängt von der Locale ab.
- `numberingSystem`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert oder der über den Unicode-Erweiterungsschlüssel `"nu"` angeforderte Wert, mit Standardwerten, falls erforderlich. Es handelt sich um ein unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Locale. Die Standardeinstellung hängt von der Locale ab.
- `timeZone`

  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, mit Standardwerten, falls erforderlich. Es handelt sich um einen [IANA-Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standardwert ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert, dass Browser denselben Bezeichner verwenden, wie ursprünglich spezifiziert, ohne Kanonisierung zu einem anderen Alias. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- `hourCycle` {{optional_inline}}
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert oder der über den Unicode-Erweiterungsschlüssel `"hc"` angeforderte Wert, mit Standardwerten, falls erforderlich. Wenn `hour12` im `options`-Argument angegeben wurde, überschreibt dies andere `hourCycle`-Einstellungen. Sie ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` umfassen. Die möglichen Werte sind `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Die Standardeinstellung ist von der Locale abhängig, wobei `"h24"` niemals Standard ist.
- `hour12` {{optional_inline}}
  - : Abgeleitet aus `hourCycle`. Sie ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` umfassen. Der Wert ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}

  - : Die Werte, die aus dem Formatabgleich zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für Datums- und Zeitformatierung in der ausgewählten Locale resultieren. Einige dieser Eigenschaften können fehlen, was anzeigt, dass die entsprechenden Komponenten nicht in der formatierten Ausgabe enthalten sein werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Falls diese Eigenschaften im `options`-Argument angefordert wurden, verhindert der Konstruktor die Angabe von `dateStyle` und `timeStyle`, sodass die unten angegebene Gruppe niemals vorhanden sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}

  - : Die für diese Eigenschaften im `options`-Argument angegebenen Werte. Die möglichen Werte sind `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften können fehlen, was darauf hinweist, dass die entsprechenden Komponenten nicht in der formatierten Ausgabe enthalten sein werden.

    Falls diese Eigenschaften im `options`-Argument angefordert wurden, verhindert der Konstruktor die Angabe einzelner Datums- oder Zeitkomponentenoptionen, sodass die oben angegebene Gruppe niemals vorhanden sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für einzelne Datums- und Zeitkomponentenstile sind, sind die genauen (locale-abhängigen) Komponentenstile, die daraus abgeleitet werden, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (weil ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch einzelnen Datums- oder Zeitkomponentenstilen nicht gültig ist).

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

### Abrufen von Zeitzonen- und Spracheinstellungen des Benutzers

Der `Intl.DateTimeFormat`-Konstruktor ohne Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers und das bevorzugte Kalender- und Zahlensystem der Locale zu ermitteln:

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
