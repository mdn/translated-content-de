---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Intl.Locale`**-Objekt ist eine eingebaute Standard-Eigenschaft des Intl-Objekts, das einen Unicode-Gebietsidentifikator darstellt.

{{InteractiveExample("JavaScript Demo: Intl.Locale")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Expected output: "h23" "h12"
```

## Beschreibung

Das **`Intl.Locale`**-Objekt wurde erstellt, um die Manipulation von Unicode-Gebieten zu erleichtern. Unicode repräsentiert Gebiete mit einem String, der als _Gebietsidentifikator_ bezeichnet wird. Der Gebietsidentifikator besteht aus einem _Sprachenidentifikator_ und _Erweiterungs-Tags_. Sprachenidentifikatoren sind der Kern des Gebiets und bestehen aus _Sprache_, _Schrift_ und _Region-Subtags_. Zusätzliche Informationen über das Gebiet werden in den optionalen _Erweiterungs-Tags_ gespeichert. Erweiterungs-Tags enthalten Informationen über Gebietsaspekte wie Kalendertyp, Uhrentyp und Nummerierungssystemtyp.

Traditionell verwendete die Intl-API Strings zur Darstellung von Gebieten, genau wie Unicode. Dies ist eine einfache und leichte Lösung, die gut funktioniert. Das Hinzufügen einer Locale-Klasse erleichtert jedoch das Parsen und Manipulieren der Sprache, Schrift und Region sowie der Erweiterungs-Tags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen den Unicode-Gebietsidentifikator-Subtags:

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

Obige Informationen werden genau so bereitgestellt, wie sie beim Erstellen des `Locale`-Objekts angegeben wurden, ohne eine externe Datenbank zu konsultieren. Das `Intl.Locale`-Objekt bietet zusätzlich einige Methoden, die Informationen über die realen Informationen des Gebiets zurückgeben, wie verfügbare Kalender, Sortierarten und Nummerierungssysteme.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen geteilt.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt grundlegende, Kerndaten über das `Locale` in Form eines Substrings der gesamten Datenzeichenfolge zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil des `Locale` zurück, der die Kalenderära des Gebiets angibt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt zurück, ob Groß- und Kleinschreibung für die Sortierregeln des Gebiets berücksichtigt werden.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Sortiertyp für das `Locale` zurück, der verwendet wird, um Strings entsprechend den Regeln des Gebiets zu ordnen.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Locale`-Instanzen ist der Anfangswert der {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} Konstruktor.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das Zeitformat-Konventionssystem zurück, das vom Gebiet verwendet wird.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die Sprache zurück, die mit dem Gebiet verbunden ist.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das von dem Gebiet verwendete Zahlensystem zurück.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt zurück, ob das Gebiet eine spezielle Sortierbehandlung für numerische Zeichen hat.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die Region der Welt (normalerweise ein Land) zurück, die mit dem Gebiet verbunden ist.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt das Schriftsystem zurück, das zum Schreiben der spezifischen Sprache verwendet wird, die im Gebiet genutzt wird.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.Locale"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} von verfügbaren Kalenderidentifikatoren gemäß den Regeln des Gebiets zurück.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} der Sortiertypen für das `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} der Stundenzyklusidentifikatoren zurück, die entweder die 12-Stunden-Uhr ("h12"), die japanische 12-Stunden-Uhr ("h11"), die 24-Stunden-Uhr ("h23") oder das ungenutzte Format "h24" anzeigen.
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} von Nummerierungssystemidentifikatoren zurück, die gemäß den Regeln des Gebiets verfügbar sind.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Reihenfolge der Zeichen `ltr` (left-to-right) oder `rtl` (right-to-left) anzeigt.
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeitzonenidentifikatoren zurück, die mit dem `Locale` verbunden sind.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt [Wochenelemente von UTS 35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) gemäß den Regeln des Gebiets zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Ermittelt die wahrscheinlichsten Werte für die Sprache, das Schriftsystem und die Region des Gebiets basierend auf den vorhandenen Werten.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über das Gebiet zu entfernen, die durch den Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würden.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt den vollständigen Gebietsidentifikator-String des `Locale` zurück.

## Beispiele

### Grundlegende Nutzung

Im einfachsten Fall nimmt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor einen Gebietsschema-Identifikator-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor nimmt auch ein optionales Konfigurationsobjekt als Argument, das eine der mehreren Erweiterungstypen enthalten kann. Beispielsweise setzen Sie die {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundentyp und übergeben ihn dann an den Konstruktor:

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
- [Kanonische Unicode-Gebietsidentifikatoren](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) im Unicode-Gebietsmarkierungssprache-Spezifikation
