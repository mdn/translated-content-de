---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die das Gebietsschema und die Datums- und Uhrzeitformatierungsoptionen widerspiegeln, die während der Initialisierung dieses `Intl.DateTimeFormat`-Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung des gegebenen {{jsxref("Intl.DateTimeFormat")}}-Objekts berechneten Optionen widerspiegeln. Das Objekt hat folgende Eigenschaften, in der Reihenfolge, wie sie aufgeführt sind:

- `locale`
  - : Der BCP 47-Sprachcode für das tatsächlich verwendete Gebietsschema. Nur die `ca`, `hc` und `nu` Unicode-Erweiterungsschlüssel können in der Ausgabe enthalten sein.
- `calendar`
  - : Einer der [unterstützten Kalendertypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types), der den Wert widerspiegelt, der für diese Eigenschaft im `options`-Argument oder dem `ca` Unicode-Erweiterungsschlüssel bereitgestellt wurde. Der Standard ist vom Gebietsschema abhängig.
- `numberingSystem`
  - : Einer der [unterstützten Nummerierungssystemtypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types), der den Wert widerspiegelt, der für diese Eigenschaft im `options`-Argument oder dem `nu` Unicode-Erweiterungsschlüssel bereitgestellt wurde. Der Standard ist vom Gebietsschema abhängig.
- `timeZone`

  - : Einer der [IANA-Zeitzonennamen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones), der den Wert widerspiegelt, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde. Der Standard ist die Standardzeitzone des Laufzeitsystems; sollte niemals `undefined` sein.

    > [!NOTE]
    > Obwohl sich die IANA-Datenbank von Zeit zu Zeit ändert, behält die Unicode CLDR-Datenbank (die von Browsern verwendet wird) alte Zeitzonennamen aus Stabilitätsgründen bei. Alle Browser kanonisieren Zeitzonennamen, aber in unterschiedliche Richtungen. Zum Beispiel geben `new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Kiev" }).resolvedOptions().timeZone` und `new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Kyiv" }).resolvedOptions().timeZone` im selben Browser denselben String zurück, aber möglicherweise unterschiedliche Strings in verschiedenen Browsern. Weitere Informationen finden Sie unter {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones")}}.

- `hourCycle`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, oder im Unicode-Erweiterungsschlüssel `"hc"`, mit ausgefülltem Standard nach Bedarf. Nur vorhanden, wenn das `options`-Argument `hour` oder `timeStyle` enthielt.
- `hour12`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, oder aus der `hourCycle`-Eigenschaft berechnet. Nur vorhanden, wenn das `options`-Argument `hour` oder `timeStyle` enthielt.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName`
  - : Die Werte, die aus der Formatübereinstimmung zwischen den entsprechenden Eigenschaften im `options`-Argument und den verfügbaren Kombinationen und Darstellungen für Datums- und Uhrzeitformatierungen im ausgewählten Gebietsschema resultieren. Einige dieser Eigenschaften sind möglicherweise nicht vorhanden, was anzeigt, dass die entsprechenden Komponenten nicht im formatierten Ergebnis angezeigt werden. Wenn die `dateStyle`- oder `timeStyle`-Abkürzungen im `options`-Argument verwendet wurden, werden diese individuellen Komponenteneigenschaften niemals vorhanden sein.
- `dateStyle`, `timeStyle`
  - : Die im `options`-Argument bereitgestellten Werte für diese Eigenschaften, falls vorhanden.

## Beschreibung

Obwohl `dateStyle` und `timeStyle` Abkürzungen für einzelne Datums- und Uhrzeitkomponentenstile sind, sind die genauen (vom Gebietsschema abhängigen) Komponentenstile, zu denen sie aufgelöst werden, nicht in den aufgelösten Optionen enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch einzelnen Datums- oder Uhrzeitkomponentenstilen nicht gültig ist).

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

### Ermittlung der Zeitzonen- und Gebietsschema-Präferenzen des Benutzers

Der `Intl.DateTimeFormat`-Konstruktor ohne jegliche Optionen verwendet die aktuellen Systemeinstellungen. Sie können `resolvedOptions()` verwenden, um die aktuelle Zeitzone des Benutzers und das bevorzugte Kalendarium und Nummerierungssystem des Gebietsschemas zu erhalten:

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
