---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{JSRef}}

Das **`Intl.Locale`**-Objekt ist eine standardmäßige eingebaute Eigenschaft des Intl-Objekts, die einen Unicode-Gebietskennung repräsentiert.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Beschreibung

Das **`Intl.Locale`**-Objekt wurde erstellt, um eine einfachere Handhabung von Unicode-Gebieten zu ermöglichen. Unicode stellt Gebiete mit einem String dar, der als _Locale-Identifier_ bezeichnet wird. Der Locale-Identifier besteht aus einem _Sprach-Identifier_ und _Erweiterungs-Tags_. Sprach-Identifier sind der Kern des Gebiets, bestehend aus _Sprache_, _Schrift_ und _Region-Subtags_. Zusätzliche Informationen über das Gebiet werden in den optionalen _Erweiterungs-Tags_ gespeichert. Erweiterungs-Tags enthalten Informationen über Aspekte des Gebiets, wie Kalendertyp, Uhrzeittyp und Zahlensystemtyp.

Traditionell verwendete die Intl API Strings, um Gebiete zu repräsentieren, genau wie Unicode. Dies ist eine einfache und leichtgewichtige Lösung, die gut funktioniert. Die Einführung einer Locale-Klasse erleichtert jedoch das Parsen und Manipulieren der Sprache, Schrift und Region sowie Erweiterungs-Tags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen den Unicode-Gebietskennung-Subtags:

| Eigenschaft                                                  | Entsprechendes Subtag           |
| ------------------------------------------------------------ | ------------------------------- |
| {{jsxref("Intl/Locale/language", "language")}}               | `language` (erster Teil)        |
| {{jsxref("Intl/Locale/script", "script")}}                   | `script` (zweiter Teil)         |
| {{jsxref("Intl/Locale/region", "region")}}                   | `region` (zweiter/dritter Teil) |
| {{jsxref("Intl/Locale/calendar", "calendar")}}               | `ca` (Erweiterung)              |
| {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}             | `kf` (Erweiterung)              |
| {{jsxref("Intl/Locale/collation", "collation")}}             | `co` (Erweiterung)              |
| {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}             | `hc` (Erweiterung)              |
| {{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}} | `nu` (Erweiterung)              |
| {{jsxref("Intl/Locale/numeric", "numeric")}}                 | `kn` (Erweiterung)              |

Die obige Information wird exakt so bereitgestellt, wie sie ist, wenn das `Locale`-Objekt erstellt wird, ohne eine externe Datenbank zu konsultieren. Das `Intl.Locale`-Objekt bietet zusätzlich einige Methoden, die Informationen über die realen Informationen des Gebiets zurückgeben, wie verfügbare Kalender, Kollationen und Zahlensysteme.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen geteilt.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt grundlegende, zentrale Informationen über das `Locale` in Form eines Substrings des vollständigen Daten-Strings zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil des `Locale` zurück, der die Kalenderepoche des Gebiets angibt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt zurück, ob Groß- und Kleinschreibung bei den Kollationsregeln des Gebiets berücksichtigt wird.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Kollationstyp für das `Locale` zurück, der verwendet wird, um Strings gemäß den Regeln des Gebiets zu ordnen.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Locale`-Instanzen ist der anfängliche Wert der {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} Konstruktor.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das Zeitformatkonvention zurück, das vom Gebiet verwendet wird.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die Sprache zurück, die mit dem Gebiet verknüpft ist.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das Zahlensystem zurück, das vom Gebiet verwendet wird.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt zurück, ob das Gebiet eine spezielle Kollationsbehandlung für numerische Zeichen hat.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die Region der Welt (normalerweise ein Land) zurück, die mit dem Gebiet verknüpft ist.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt die Schrift zurück, die für das Schreiben der speziellen Sprache verwendet wird, die im Gebiet verwendet wird.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Intl.Locale"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} von verfügbaren Kalender-Identifikatoren zurück, gemäß den Regeln des Gebiets.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} der Kollationstypen für das `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} von Stundenzyklen-Identifikatoren zurück, die entweder den 12-Stunden-Clock ("h12"), den japanischen 12-Stunden-Clock ("h11"), den 24-Stunden-Clock ("h23") oder das unbenutzte Format "h24" anzeigen.
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} von Zahlensystem-Identifikatoren zurück, die gemäß den Regeln des Gebiets verfügbar sind.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Anordnung der Zeichen `ltr` (left-to-right) oder `rtl` (right-to-left) anzeigt.
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeitzonen-Identifikatoren zurück, die mit dem `Locale` verbunden sind.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt die [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) gemäß den Gebietsvorschriften zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Holt die wahrscheinlichsten Werte für die Sprache, Schrift und Region des Gebiets basierend auf vorhandenen Werten.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über das Gebiet zu entfernen, die durch den Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würden.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt den vollständigen Locale-Identifier-String des Gebiets zurück.

## Beispiele

### Grundlegende Nutzung

Im einfachsten Fall nimmt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor einen Locale-Identifier-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor nimmt auch ein optionales Konfigurationsobjekt-Argument, das eine beliebige Anzahl von Erweiterungstypen enthalten kann. Setzen Sie beispielsweise die {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}-Eigenschaft des Konfigurationsobjekts auf den gewünschten Stundenzyklentyp und übergeben Sie ihn dann dem Konstruktor:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.Locale` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [Kanonische Unicode-Gebietskennung](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Gebietsdatenspezifikation der Markup-Sprache
