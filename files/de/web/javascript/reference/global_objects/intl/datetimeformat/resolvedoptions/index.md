---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von Instanzen des {{jsxref("Intl.DateTimeFormat")}} gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der angegebenen Reihenfolge:

- `locale`
  - : Der BCP 47 Sprach-Tag für das tatsächlich verwendete Locale, ermittelt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die Unicode-Erweiterungsschlüssel `ca`, `hc` und `nu`, falls angefragt, können in der Ausgabe enthalten sein.
- `calendar`
  - : Der in den `options` angegebene Wert oder mit dem Unicode-Erweiterungsschlüssel `"ca"`, mit standardmäßiger Auffüllung nach Bedarf. Es handelt sich um einen unterstützten [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types) für dieses Locale. Die Standardeinstellung ist von der Locale abhängig.
- `numberingSystem`
  - : Der in den `options` angegebene Wert oder mit dem Unicode-Erweiterungsschlüssel `"nu"`, mit standardmäßiger Auffüllung nach Bedarf. Es handelt sich um ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types) für dieses Locale. Die Standardeinstellung ist von der Locale abhängig.
- `timeZone`

  - : Der in den `options` angegebene Wert mit standardmäßiger Auffüllung nach Bedarf. Es handelt sich um einen [IANA Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Der Standard ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Die Standardisierung von `Temporal` erfordert, dass Browser denselben Bezeichner verwenden, wie er ursprünglich spezifiziert wurde, ohne Umwandlung in ein anderes Alias. Weitere Informationen finden Sie unter [time zones and offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- `hourCycle` {{optional_inline}}
  - : Der in den `options` angegebene Wert oder mit dem Unicode-Erweiterungsschlüssel `"hc"`, mit standardmäßiger Auffüllung nach Bedarf. Wenn `hour12` in den `options` angegeben wurde, überschreibt dies andere `hourCycle`-Einstellungen. Es ist nur vorhanden, wenn die ermittelten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist entweder `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Der Standard ist von der Locale abhängig, obwohl `"h24"` niemals ein Standardwert ist.
- `hour12` {{optional_inline}}
  - : Berechnet aus `hourCycle`. Es ist nur vorhanden, wenn die ermittelten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}

  - : Die Werte, die aus dem Formatabgleich zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für die Datums- und Zeitformatierung im ausgewählten Locale resultieren. Einige dieser Eigenschaften können fehlen, was darauf hinweist, dass die entsprechenden Komponenten nicht im formatierten Ergebnis dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"`, oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"`, oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2`, oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"`, oder `"longGeneric"`.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor, dass `dateStyle` und `timeStyle` angegeben werden, sodass die untenstehende Gruppe niemals vorhanden sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}

  - : Die in den `options`-Argument angegebenen Werte. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"`, oder `"none"`. Einige dieser Eigenschaften können fehlen, was darauf hinweist, dass die entsprechenden Komponenten nicht im formatierten Ergebnis dargestellt werden.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor, dass individuelle Datum- und Zeitkomponentenoptionen angegeben werden, sodass die obenstehende Gruppe niemals vorhanden sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für einzelne Datum- und Zeitkomponentenstile sind, sind die genauen (von der Locale abhängigen) Komponentenstile, auf die sie aufgelöst werden, nicht in den ermittelten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datum- oder Zeitkomponentenstilen nicht gültig ist).

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

### Abrufen der Zeitzonen- und Locale-Präferenzen des Benutzers

Der `Intl.DateTimeFormat`-Konstruktor ohne Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers und das bevorzugte Kalender- und Nummerierungssystem des Locale zu ermitteln:

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
