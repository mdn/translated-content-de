---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen gibt ein neues Objekt zurück, das Eigenschaften widerspiegelt, die den während der Initialisierung dieses `Intl.DateTimeFormat` Objekts berechneten Locale- und Datums- und Zeitformatierungsoptionen entsprechen.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die den während der Initialisierung des gegebenen {{jsxref("Intl.DateTimeFormat")}} Objekts berechneten Optionen entsprechen. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Das BCP 47 Sprachkennzeichen für die tatsächlich verwendete Locale. Nur die `ca`, `hc` und `nu` Unicode-Erweiterungsschlüssel können in der Ausgabe enthalten sein.
- `calendar`
  - : Einer der [unterstützten Kalendertypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types), der den für diese Eigenschaft im `options` Argument oder im `ca` Unicode-Erweiterungsschlüssel bereitgestellten Wert widerspiegelt. Der Standard ist von der Locale abhängig.
- `numberingSystem`
  - : Einer der [unterstützten Nummerierungssystemtypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types), der den für diese Eigenschaft im `options` Argument oder im `nu` Unicode-Erweiterungsschlüssel bereitgestellten Wert widerspiegelt. Der Standard ist von der Locale abhängig.
- `timeZone`

  - : Einer der [IANA Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones), der den für diese Eigenschaft im `options` Argument bereitgestellten Wert widerspiegelt. Der Standard ist die Standardzeitzone der Laufzeitumgebung; sollte niemals `undefined` sein.

    > [!NOTE]
    > Auch wenn sich die IANA-Datenbank von Zeit zu Zeit ändert, behält die Unicode-CLDR-Datenbank (die von Browsern verwendet wird) alte Zeitzonennamen zu Stabilitätszwecken. Alle Browser kanonisieren Zeitzonennamen, jedoch in unterschiedliche Richtungen. Zum Beispiel, `new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Kiev" }).resolvedOptions().timeZone` und `new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Kyiv" }).resolvedOptions().timeZone` geben im gleichen Browser denselben String zurück, jedoch möglicherweise unterschiedliche Strings in verschiedenen Browsern. Siehe {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones")}} für weitere Informationen.

- `hourCycle`
  - : Der im `options` Argument angegebene Wert für diese Eigenschaft oder im Unicode-Erweiterungsschlüssel `"hc"` bereitgestellt, wobei erforderlichenfalls der Standard ergänzt wird. Nur vorhanden, wenn das `options` Argument `hour` oder `timeStyle` beinhaltete.
- `hour12`
  - : Der im `options` Argument angegebene Wert für diese Eigenschaft oder vom `hourCycle` Eigenschaft abgeleitet. Nur vorhanden, wenn das `options` Argument `hour` oder `timeStyle` beinhaltete.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName`
  - : Die Werte, die sich aus dem Formatabgleich zwischen den entsprechenden Eigenschaften im `options` Argument und den verfügbaren Kombinationen und Darstellungen für die Datums- und Zeitformatierung in der ausgewählten Locale ergeben. Einige dieser Eigenschaften können nicht vorhanden sein, was darauf hinweist, dass die entsprechenden Komponenten im formatierten Ausgabewert nicht dargestellt werden. Wenn die `dateStyle` oder `timeStyle` Kurzbefehle in `options` verwendet wurden, werden diese individuellen Komponenteneigenschaften nie vorhanden sein.
- `dateStyle`, `timeStyle`
  - : Die für diese Eigenschaften im `options` Argument bereitgestellten Werte, falls vorhanden.

## Beschreibung

Obwohl `dateStyle` und `timeStyle` Abkürzungen für individuelle Datum- und Zeitkomponentenstile sind, sind die genauen (von der Locale abhängigen) Komponentenstile, zu denen sie aufgelöst werden, nicht in den gelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt dem `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datum- oder Zeitkomponentenstilen nicht gültig ist).

## Beispiele

### Verwendung der resolvedOptions Methode

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (weil "de-XX" nicht existiert)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Ermitteln der Zeitzonen- und Locale-Einstellungen des Benutzers

Der `Intl.DateTimeFormat` Konstruktor ohne Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers und die bevorzugten Kalender- und Nummerierungssysteme der Locale zu ermitteln:

```js
const systemOptions = new Intl.DateTimeFormat().resolvedOptions();
systemOptions.timeZone; // z.B. "Europe/Brussels" oder "Asia/Riyadh"
systemOptions.calendar; // z.B. "gregory" oder "islamic-umalqura"
systemOptions.numberingSystem; // z.B. "latn" oder "arab"
systemOptions.locale; // z.B. "nl-BE" oder "ar-SA"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
