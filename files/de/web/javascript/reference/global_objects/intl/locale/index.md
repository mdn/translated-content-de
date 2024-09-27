---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.Locale`**-Objekt ist eine standardmäßige eingebaute Eigenschaft des Intl-Objekts, die einen Unicode-Lokalisierungskennzeichner darstellt.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Beschreibung

Das **`Intl.Locale`**-Objekt wurde geschaffen, um die Manipulation von Unicode-Lokalen zu erleichtern. Unicode repräsentiert Lokale mit einem String, der als _Lokalisierungskennzeichner_ bezeichnet wird. Der Lokalisierungskennzeichner besteht aus einem _Sprachenkennzeichner_ und _Erweiterungs-Tags_. Sprachenkennzeichner sind der Kern des Lokals und bestehen aus _Sprache_, _Schrift_ und _Region-Subtags_. Zusätzliche Informationen zum Lokalspeicher befinden sich in den optionalen _Erweiterungs-Tags_. Erweiterungs-Tags enthalten Informationen über Aspekte der Lokalisierung wie Kalendertyp, Uhrtyp und Nummerierungssystemtyp.

Die traditionelle Nutzung der Intl-API verwendet Strings zur Darstellung von Lokalen, genau wie Unicode. Dies ist eine einfache und leichte Lösung, die gut funktioniert. Die Einführung einer Locale-Klasse erleichtert jedoch das Parsen und Manipulieren von Sprache, Schrift und Region sowie von Erweiterungs-Tags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen den Unicode-Lokalisierungskennzeichner-Subtags:

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

Die oben genannten Informationen werden genau so bereitgestellt, wie sie sind, wenn das `Locale`-Objekt erstellt wird, ohne dass eine externe Datenbank konsultiert wird. Das `Intl.Locale`-Objekt bietet zusätzlich einige Methoden, die Informationen über die realen Informationen des Lokals zurückgeben, wie z.B. verfügbare Kalender, Kollationen und Nummerierungssysteme.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen geteilt.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt grundlegende, zentrale Informationen über das `Locale` in Form eines Substrings des vollständigen Datenstrings zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil des `Locale` zurück, der die Kalender-Ära des Lokals anzeigt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt zurück, ob Groß- und Kleinschreibung in den Kollationsregeln des Lokals berücksichtigt wird.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Kollationstyp für das `Locale` zurück, der verwendet wird, um Strings entsprechend den Regeln des Lokals zu ordnen.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Locale`-Instanzen ist der Anfangswert der {{jsxref("Intl/Locale/Locale", "Intl.Locale")}}-Konstruktor.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das Zeitformat zurück, das vom Lokalspeicher verwendet wird.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die Sprache zurück, die mit dem Lokalspeicher verbunden ist.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das im Lokalspeicher verwendete Zahlsystem zurück.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt zurück, ob das Lokalspeicher eine spezielle Bearbeitung für numerische Zeichen in der Kollation aufweist.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die Region der Welt zurück (normalerweise ein Land), die mit dem Lokalspeicher verbunden ist.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt das Skript zurück, das zum Schreiben der in der Lokalisierung verwendeten speziellen Sprache verwendet wird.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.Locale"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} verfügbarer Kalenderkennzeichner zurück, gemäß den Regeln des Lokalspeichers.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} der Kollationstypen für das `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} von Stundenzykluskennzeichnern zurück, die entweder die 12-Stunden-Uhr ("h12"), die japanische 12-Stunden-Uhr ("h11"), die 24-Stunden-Uhr ("h23") oder das ungenutzte Format "h24" anzeigen.
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} von Nummerierungssystemkennzeichnern zurück, die gemäß den Regeln des Lokalspeichers verfügbar sind.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Zeichenreihenfolge `ltr` (left-to-right) oder `rtl` (right-to-left) angibt.
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeitzonenkennzeichnern zurück, die mit dem `Locale` verbunden sind.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) gemäß den Lokalisierungsregeln zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Holt die wahrscheinlichsten Werte für die Sprache, das Skript und die Region des Lokals basierend auf den vorhandenen Werten.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über das Lokalspeicher zu entfernen, die durch den Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würden.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt den vollständigen Lokalisierungskennzeichner-String des Lokals zurück.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall nimmt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor einen Lokalisierungskennzeichner-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor nimmt auch ein optionales Konfigurationsobjekt-Argument, das eine beliebige Anzahl von Erweiterungstypen enthalten kann. Setzen Sie beispielsweise die {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundenzyklustyp und übergeben Sie sie dann dem Konstruktor:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.Locale` in FormatJS](https://formatjs.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [Kanonische Unicode-Lokalisierungskennzeichner](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markup-Sprache-Definition
