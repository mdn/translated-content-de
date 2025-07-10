---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln.

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgeführt sind:

- `locale`
  - : Der BCP 47-Sprach-Tag für das tatsächlich verwendete Gebietsschema, bestimmt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die `ca`, `hc` und `nu` Unicode-Erweiterungsschlüssel, falls angefordert, können in der Ausgabe enthalten sein.
- `calendar`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"ca"`, mit den erforderlichen Vorgabewerten. Es ist ein unterstützter [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für dieses Gebietsschema. Der Standard ist gebietsschemaabhängig.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit den erforderlichen Vorgabewerten. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für dieses Gebietsschema. Der Standard ist gebietsschemaabhängig.
- `timeZone`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, mit den erforderlichen Vorgabewerten. Es ist ein [IANA-Zeitzonen-Name](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standard ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert, dass Browser denselben Bezeichner verwenden, wie er ursprünglich spezifiziert wurde, ohne eine kanonische Umwandlung in ein anderes Alias. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen.

- `hourCycle` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"hc"`, mit den erforderlichen Vorgabewerten. Falls `hour12` im `options`-Argument angegeben wurde, überschreibt dies andere `hourCycle`-Einstellungen. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist entweder `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Der Standard ist gebietsschemaabhängig, obwohl `"h24"` nie ein Standard ist.
- `hour12` {{optional_inline}}
  - : Abgeleitet aus `hourCycle`. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}
  - : Die Werte, die aus der Formatabstimmung zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für die Datums- und Uhrzeitformatierung im ausgewählten Gebietsschema resultieren. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Falls diese Eigenschaften im `options`-Argument angefordert wurden, verhindert der Konstruktor, dass `dateStyle` und `timeStyle` angegeben werden, sodass die untenstehende Gruppe nie präsent sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}
  - : Die Werte, die für diese Eigenschaften im `options`-Argument angegeben wurden. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was darauf hinweist, dass die entsprechenden Komponenten in der formatierten Ausgabe nicht dargestellt werden.

    Falls diese Eigenschaften im `options`-Argument angefordert wurden, verhindert der Konstruktor, dass individuelle Daten- und Uhrzeitkomponentenoptionen angegeben werden, sodass die obige Gruppe nie präsent sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für individuelle Daten- und Uhrzeitkomponentenstile sind, sind die genauen (gebietsschemaabhängigen) Komponentenstile, auf die sie auflösen, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Daten- oder Uhrzeitkomponentenstilen nicht gültig ist).

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

### Ermitteln der Zeitzonen- und Locale-Einstellungen des Benutzers

Der `Intl.DateTimeFormat`-Konstruktor ohne jegliche Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers sowie den bevorzugten Kalender und das Nummerierungssystem des Gebietsschemas zu ermitteln:

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
