---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die bei der Initialisierung dieses `DateTimeFormat`-Objekts ermittelten Optionen widerspiegeln.

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

Ein neues Objekt mit Eigenschaften, die die bei der Initialisierung dieses `DateTimeFormat`-Objekts ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Das {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}} für die tatsächlich verwendete Locale, die durch den Prozess der [Locale-Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wird. Nur die Unicode-Erweiterungsschlüssel `ca`, `hc` und `nu` können, sofern angefordert, in der Ausgabe enthalten sein.
- `calendar`
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"ca"` angegebene Wert, gegebenenfalls ergänzt um einen Standardwert. Es handelt sich um einen für diese Locale unterstützten [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert hängt von der Locale ab.
- `numberingSystem`
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"nu"` angegebene Wert, gegebenenfalls ergänzt um einen Standardwert. Es handelt sich um ein für diese Locale unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Der Standardwert hängt von der Locale ab.
- `timeZone`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um einen Standardwert. Es handelt sich um einen [IANA-Zeitzonennamen oder eine Zeitzonenkennung mit Zeitversatz](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standardwert ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` verlangt, dass Browser die ursprünglich angegebene Kennung verwenden, ohne sie auf einen anderen Alias zu kanonisieren. Weitere Informationen finden Sie unter [Zeitzonen und Zeitversatz](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- `hourCycle` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"hc"` angegebene Wert, gegebenenfalls ergänzt um einen Standardwert. Wenn `hour12` in `options` angegeben wurde, hat dieser Wert Vorrang vor anderen `hourCycle`-Einstellungen. Die Eigenschaft ist nur vorhanden, wenn die ermittelten Optionen auch `hour` oder `timeStyle` enthalten. Ihr Wert ist `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Der Standardwert hängt von der Locale ab, wobei `"h24"` nie ein Standardwert ist.
- `hour12` {{optional_inline}}
  - : Wird aus `hourCycle` berechnet. Die Eigenschaft ist nur vorhanden, wenn die ermittelten Optionen auch `hour` oder `timeStyle` enthalten. Ihr Wert ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}
  - : Die Werte ergeben sich aus dem Abgleich der entsprechenden Eigenschaften im Argument `options` mit den verfügbaren Kombinationen und Darstellungen für die Datums- und Uhrzeitformatierung in der ausgewählten Locale. Einige dieser Eigenschaften können fehlen. Das bedeutet, dass die entsprechenden Komponenten nicht in der formatierten Ausgabe dargestellt werden. `weekday`, `era` und `dayPeriod` sind jeweils `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind jeweils `"numeric"` oder `"2-digit"`; `month` ist `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist `1`, `2` oder `3`; `timeZoneName` ist `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor die Angabe von `dateStyle` und `timeStyle`. Daher ist die nachfolgende Gruppe nie vorhanden.

- `dateStyle`, `timeStyle` {{optional_inline}}
  - : Die für diese Eigenschaften im Argument `options` angegebenen Werte. Sie sind jeweils `"full"`, `"long"`, `"medium"` oder `"short"`. Einige dieser Eigenschaften können fehlen. Das bedeutet, dass die entsprechenden Komponenten nicht in der formatierten Ausgabe dargestellt werden.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor die Angabe von Optionen für einzelne Datums- und Uhrzeitkomponenten. Daher ist die vorherige Gruppe nie vorhanden.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Kurzformen für die Stile einzelner Datums- und Uhrzeitkomponenten sind, sind die genauen, von der Locale abhängigen Komponentenstile, in die sie aufgelöst werden, nicht in den ermittelten Optionen enthalten. Dadurch kann das Ergebnis von `resolvedOptions()` direkt an den Konstruktor `Intl.DateTimeFormat()` übergeben werden (denn ein `options`-Objekt, das sowohl `dateStyle` oder `timeStyle` als auch Stile für einzelne Datums- oder Uhrzeitkomponenten enthält, ist ungültig).

## Beispiele

### Verwendung der Methode `resolvedOptions()`

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (because "de-XX" does not exist)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Zeitzone und Locale-Einstellungen des Benutzers ermitteln

Der Konstruktor `Intl.DateTimeFormat` verwendet ohne Optionen die aktuellen Systemeinstellungen. Mit `resolvedOptions()` können Sie die aktuelle Zeitzone des Benutzers sowie den bevorzugten Kalender und das bevorzugte Zahlensystem seiner Locale ermitteln:

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
