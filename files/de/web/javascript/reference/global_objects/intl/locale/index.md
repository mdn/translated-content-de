---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Das **`Intl.Locale`**-Objekt ist eine standardmäßige eingebaute Eigenschaft des `Intl`-Objekts, die einen Unicode-Locale-Identifikator repräsentiert.

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

Das **`Intl.Locale`**-Objekt wurde entwickelt, um die Manipulation von Unicode-Locale-Identifikatoren zu erleichtern. Unicode repräsentiert Locales mit einer Zeichenkette, dem sogenannten _Locale-Identifikator_. Der Locale-Identifikator besteht aus einem _Sprachen-Identifikator_ und _Erweiterungstags_. Sprachidentifikatoren sind der Kern des Locale und bestehen aus _Sprache_, _Schrift_ und _Regionen-Subtags_. Zusätzliche Informationen über das Locale werden in optionalen _Erweiterungstags_ gespeichert. Erweiterungstags enthalten Informationen über Locale-Aspekte wie Kalendertyp, Uhrzeitformat und Nummerierungssystem.

Traditionell verwendete die Intl-API Zeichenketten, um Locales darzustellen, genau wie Unicode. Dies ist eine einfache und effiziente Lösung. Das Hinzufügen einer `Locale`-Klasse erleichtert jedoch das Parsen und Manipulieren von Sprache, Schrift, Region sowie Erweiterungstags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen den Unicode-Locale-Identifikator-Subtags:

| Eigenschaft                                                  | Entsprechender Subtag           |
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

Die oben genannten Informationen werden exakt wie eingegeben bereitgestellt, wenn das `Locale`-Objekt erstellt wird, ohne auf eine externe Datenbank zuzugreifen. Das **`Intl.Locale`**-Objekt bietet zusätzlich einige Methoden, die Informationen über praktische Locale-Daten wie verfügbare Kalender, Kollationen und Nummerierungssysteme zurückgeben.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen geteilt.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt grundlegende, zentrale Informationen über das `Locale` in Form eines Teilabschnitts der vollständigen Datenzeichenkette zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil des `Locale` zurück, der die Kalenderära beschreibt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt zurück, ob Groß- und Kleinschreibung bei den Kollationsregeln des Locales berücksichtigt wird.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Kollationstyp des `Locale` zurück, der verwendet wird, um Zeichenketten entsprechend der Locale-Regeln zu sortieren.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstruktorfunktion, die die Instanz erstellt hat. Für `Intl.Locale`-Instanzen ist der Anfangswert der {{jsxref("Intl/Locale/Locale", "Intl.Locale")}}-Konstruktor.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das Zeitformatierungssystem des Locales zurück.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die mit dem Locale verbundene Sprache zurück.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das vom Locale verwendete Zahlensystem zurück.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt zurück, ob das Locale eine spezielle Kollationsbehandlung für numerische Zeichen bietet.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die Weltregion (normalerweise ein Land) des Locales zurück.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt die Schriftart zurück, die für das Schreiben der spezifischen Sprache verwendet wird.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.Locale"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} von verfügbaren Kalenderkennungen gemäß den Locale-Regeln zurück.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} von Kollationstypen des `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeitzykluskennungen zurück, die entweder die 12-Stunden-Uhr ("h12"), die japanische 12-Stunden-Uhr ("h11"), die 24-Stunden-Uhr ("h23") oder das ungenutzte Format "h24" anzeigen.
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} von Nummerierungskennungen zurück, die gemäß den Locale-Regeln verfügbar sind.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Schreibrichtung `ltr` (links-nach-rechts) oder `rtl` (rechts-nach-links) angibt.
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeitzonenkennungen zurück, die mit dem `Locale` verbunden sind.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt die [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) gemäß den Locale-Regeln zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Ermittelt die wahrscheinlichsten Werte für Sprache, Schrift und Region des Locales basierend auf den vorhandenen Werten.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über das Locale zu entfernen, die durch das Aufrufen von {{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würden.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt die vollständige Locale-Identifikator-Zeichenkette zurück.

## Beispiele

### Grundlegende Nutzung

Im einfachsten Fall nimmt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor eine Locale-Identifikator-Zeichenkette als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Nutzung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor akzeptiert auch ein optionales Konfigurationsobjekt, das verschiedene Erweiterungstypen enthalten kann. Zum Beispiel können Sie die {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}-Eigenschaft des Konfigurationsobjekts auf den gewünschten Stundentyp setzen und dann in den Konstruktor übergeben:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill of `Intl.Locale` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [Canonical Unicode Locale Identifiers](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markup-Spezifikation
