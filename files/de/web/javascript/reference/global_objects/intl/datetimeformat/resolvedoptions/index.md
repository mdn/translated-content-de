---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DateTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das tatsächlich verwendete BCP 47-Sprachtag für die Locale, bestimmt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur die Unicode-Erweiterungsschlüssel `ca`, `hc` und `nu`, wenn angefordert, können im Ausgabe enthalten sein.
- `calendar`
  - : Der in das `options`-Argument angegebene Wert oder Verwendung des Unicode-Erweiterungsschlüssels `"ca"`, mit benötigten Standardwerten. Es handelt sich um einen unterstützten [Kalendertyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types) für diese Locale. Der Standard ist von der Locale abhängig.
- `numberingSystem`
  - : Der in das `options`-Argument angegebene Wert oder Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit benötigten Standardwerten. Es handelt sich um ein unterstütztes [Zahlsystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types) für diese Locale. Der Standard ist von der Locale abhängig.
- `timeZone`

  - : Der im `options`-Argument angegebene Wert, mit benötigten Standardwerten. Es handelt sich um einen kanonisierten [IANA-Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones). Der Standard ist die Standardzeitzone der Laufzeitumgebung.

    > [!NOTE]
    > Obwohl sich die IANA-Datenbank von Zeit zu Zeit ändert, behält die Unicode CLDR-Datenbank (die von Browsern verwendet wird) alte Zeitzonennamen zur Stabilitätszwecken bei. Alle Browser kanonisieren Zeitzonennamen, jedoch in unterschiedlichen Richtungen. Zum Beispiel werden `new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Kiev" }).resolvedOptions().timeZone` und `new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Kyiv" }).resolvedOptions().timeZone` im gleichen Browser denselben String zurückgeben, jedoch möglicherweise unterschiedliche Strings in verschiedenen Browsern. Weitere Informationen finden Sie unter {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones")}}.

- `hourCycle` {{optional_inline}}
  - : Der im `options`-Argument angegebene Wert oder Verwendung des Unicode-Erweiterungsschlüssels `"hc"`, mit benötigten Standardwerten. Wenn `hour12` im `options` angegeben wurde, überschreibt dies andere `hourCycle`-Einstellungen. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist entweder `"h11"`, `"h12"`, `"h23"` oder `"h24"`. Der Standard ist von der Locale abhängig, obwohl `"h24"` niemals Standard ist.
- `hour12` {{optional_inline}}
  - : Wird aus `hourCycle` berechnet. Es ist nur vorhanden, wenn die aufgelösten Optionen auch `hour` oder `timeStyle` beinhalten. Es ist `true`, wenn `hourCycle` `"h11"` oder `"h12"` ist, und `false`, wenn `hourCycle` `"h23"` oder `"h24"` ist.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}

  - : Die Werte, die aus dem Formatabgleich zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für die Datums- und Zeitformatierung in der ausgewählten Locale resultieren. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was bedeutet, dass die entsprechenden Komponenten im formatierten Output nicht dargestellt werden. `weekday`, `era` und `dayPeriod` sind entweder `"narrow"`, `"short"` oder `"long"`; `year`, `day`, `hour`, `minute` und `second` sind entweder `"numeric"`, `"2-digit"` oder `"narrow"`; `month` ist entweder `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` oder `"long"`; `fractionalSecondDigits` ist entweder `1`, `2` oder `3`; `timeZoneName` ist entweder `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` oder `"longGeneric"`.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor, dass `dateStyle` und `timeStyle` spezifiziert werden, sodass die folgende Gruppe niemals vorhanden sein wird.

- `dateStyle`, `timeStyle` {{optional_inline}}

  - : Die in das `options`-Argument angegebenen Werte. Sie sind entweder `"full"`, `"long"`, `"medium"`, `"short"` oder `"none"`. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was bedeutet, dass die entsprechenden Komponenten im formatierten Output nicht dargestellt werden.

    Wenn diese Eigenschaften in `options` angefordert wurden, verhindert der Konstruktor, dass individuelle Datums- und Zeit-Komponenten-Optionen spezifiziert werden, sodass die obige Gruppe niemals vorhanden sein wird.

    > [!NOTE]
    > Obwohl `dateStyle` und `timeStyle` Abkürzungen für individuelle Datums- und Zeit-Komponenten-Stile sind, sind die genau (Locale-abhängigen) Komponenten-Stile, auf die sie angewendet werden, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellem Datum oder Zeit-Komponenten-Stilen nicht gültig ist).

## Beispiele

### Verwenden der resolvedOptions-Methode

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (because "de-XX" does not exist)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Abrufen der Zeitzonen- und Locale-Präferenzen eines Benutzers

Der `Intl.DateTimeFormat`-Konstruktor ohne irgendwelche Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers und das bevorzugte Kalender- und Zahlsystem der Locale zu ermitteln:

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
