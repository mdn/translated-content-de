---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln.

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, wie sie aufgelistet sind:

- `locale`
  - : Das BCP 47 Sprach-Tag für die tatsächlich verwendete Sprache, bestimmt durch den [Sprachverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die `ca`, `hc` und `nu` Unicode-Erweiterungsschlüssel, falls angefordert, können in der Ausgabe enthalten sein.
- `calendar`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"ca"`, mit Standardeinstellung, wo nötig. Es handelt sich um einen unterstützten [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für diese Sprache. Die Standardeinstellung ist sprachabhängig.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit Standardeinstellung, wo nötig. Es handelt sich um ein unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Sprache. Die Standardeinstellung ist sprachabhängig.
- `timeZone`

  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, mit Standardeinstellung, wo nötig. Es handelt sich um einen [IANA-Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Die Standardeinstellung ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert von den Browsern, denselben Bezeichner wie ursprünglich angegeben zu verwenden, ohne Kanonisierung zu einem anderen Alias. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen.

- `hourCycle` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"hc"`, mit Standardeinstellung, wo nötig. Falls `hour12` im `options`-Argument angegeben wurde, überschreibt dies andere `hourCycle`-Einstellungen. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` enthalten. Es ist entweder `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Die Standardeinstellung ist sprachabhängig, jedoch ist `"h24"` niemals eine Standardeinstellung.
- `hour12` {{optional_inline}}
  - : Ermittelt aus `hourCycle`. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` enthalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}

  - : Die Werte, die sich aus der Formatabstimmung zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für das Datum-Uhrzeit-Format in der ausgewählten Sprache ergeben. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was darauf hinweist, dass die entsprechenden Komponenten nicht in der formatierten Ausgabe dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Wenn diese Eigenschaften im `options` angegeben wurden, verhindert der Konstruktor, dass `dateStyle` und `timeStyle` spezifiziert werden, daher wird die unten stehende Gruppe niemals vorhanden sein.

- `dateStyle`, `timeStyle` {{optional_inline}}

  - : Die im `options`-Argument bereitgestellten Werte. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was darauf hinweist, dass die entsprechenden Komponenten nicht in der formatierten Ausgabe dargestellt werden.

    Wenn diese Eigenschaften im `options` angegeben wurden, verhindert der Konstruktor, dass individuelle Datums- und Zeitkomponentenoptionen spezifiziert werden, daher wird die obige Gruppe niemals vorhanden sein.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für individuelle Datums- und Zeitkomponentenstile sind, sind die genauen (sprachabhängigen) Komponentenstile, zu denen sie aufgelöst werden, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Zeitkomponentenstilen nicht gültig ist).

## Beispiele

### Verwendung der resolvedOptions-Methode

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (because "de-XX" does not exist)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Ermitteln der Zeitzonen- und Spracheinstellungen des Benutzers

Der `Intl.DateTimeFormat`-Konstruktor ohne jegliche Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone und das bevorzugte Kalendersystem und Zahlensystem des Benutzers zu ermitteln:

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
