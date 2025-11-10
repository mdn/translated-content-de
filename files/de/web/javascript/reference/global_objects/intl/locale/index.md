---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Das **`Intl.Locale`**-Objekt ist eine standardmäßig integrierte Eigenschaft des Intl-Objekts, das einen Unicode-Locale-Identifikator darstellt.

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

Das **`Intl.Locale`**-Objekt wurde erstellt, um die Manipulation von Unicode-Locale zu erleichtern. Unicode repräsentiert Locales mit einem String, der ein _Locale-Identifikator_ genannt wird. Der Locale-Identifikator besteht aus einem _Sprachidentifikator_ und _Erweiterungstags_. Sprachidentifikatoren sind der Kern der Locale und bestehen aus _Sprache_, _Schrift_, _Region_ und _Varianten_ Subtags. Zusätzliche Informationen über die Locale werden in den optionalen _Erweiterungstags_ gespeichert. Erweiterungstags enthalten Informationen über Aspekte der Locale wie Kalenderart, Uhrzeitsystem und Nummerierungssystem.

Traditionell hat die Intl-API Strings verwendet, um Locales darzustellen, genau wie Unicode. Dies ist eine einfache und leichte Lösung, die gut funktioniert. Das Hinzufügen einer Locale-Klasse erleichtert jedoch das Parsen und Manipulieren von Sprache, Schrift und Region sowie Erweiterungstags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen Unicode-Locale-Identifikator-Subtags:

| Eigenschaft                                                  | Entsprechender Subtag           |
| ------------------------------------------------------------ | ------------------------------- |
| {{jsxref("Intl/Locale/language", "language")}}               | Sprach-ID, erster Teil          |
| {{jsxref("Intl/Locale/script", "script")}}                   | Sprach-ID, Teil nach `language` |
| {{jsxref("Intl/Locale/region", "region")}}                   | Sprach-ID, Teil nach `script`   |
| {{jsxref("Intl/Locale/variants", "variants")}}               | Sprach-ID, Teil nach `region`   |
| {{jsxref("Intl/Locale/calendar", "calendar")}}               | `ca` (Erweiterung)              |
| {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}             | `kf` (Erweiterung)              |
| {{jsxref("Intl/Locale/collation", "collation")}}             | `co` (Erweiterung)              |
| {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}             | `hc` (Erweiterung)              |
| {{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}} | `nu` (Erweiterung)              |
| {{jsxref("Intl/Locale/numeric", "numeric")}}                 | `kn` (Erweiterung)              |

Die obigen Informationen werden genau so bereitgestellt, wie sie sind, wenn das `Locale`-Objekt erstellt wird, ohne eine externe Datenbank zu konsultieren. Das `Intl.Locale`-Objekt bietet zusätzlich einige Methoden, die Informationen über die realen Informationen der Locale zurückgeben, wie verfügbare Kalender, Kollationen und Nummerierungssysteme.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen geteilt.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt grundlegende, zentrale Informationen über das `Locale` in Form eines Substrings der vollständigen Datenzeichenkette zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil des `Locale` zurück, der die Kalenderära der Locale angibt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt zurück, ob bei der Kollation der Locale die Groß- und Kleinschreibung berücksichtigt wird.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Kollationstyp für das `Locale` zurück, der verwendet wird, um Zeichenfolgen entsprechend den Regeln der Locale zu ordnen.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Intl.Locale`-Instanzen ist der Ausgangswert der {{jsxref("Intl/Locale/Locale", "Intl.Locale")}}-Konstruktor.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das Zeitformatkonvention zurück, das von der Locale verwendet wird.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die Sprache zurück, die mit der Locale verbunden ist.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das Ziffernsystem zurück, das von der Locale verwendet wird.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt zurück, ob die Locale spezielle Kollationsverarbeitung für numerische Zeichen hat.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die Region der Welt (meist ein Land) zurück, die mit der Locale verbunden ist.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt das Skript zurück, das für das Schreiben der bestimmten Sprache verwendet wird, die in der Locale verwendet wird.
- {{jsxref("Intl/Locale/variants", "Intl.Locale.prototype.variants")}}
  - : Gibt die Varianten-Subtags (wie verschiedene Orthografien) zurück, die mit der Locale verbunden sind.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der Ausgangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenfolge `"Intl.Locale"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} von verfügbaren Kalender-Identifikatoren entsprechend den Regeln der Locale zurück.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} der Kollationstypen für das `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} von Stundensystem-Identifikatoren zurück und zeigt entweder die 12-Stunden-Uhr ("h12"), die japanische 12-Stunden-Uhr ("h11"), die 24-Stunden-Uhr ("h23") oder das unbenutzte Format "h24" an.
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} von Nummerierungssystem-Identifikatoren zurück, die entsprechend den Regeln der Locale verfügbar sind.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Anordnung der Zeichen `ltr` (von links nach rechts) oder `rtl` (von rechts nach links) angibt.
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeitzonen-Identifikatoren zurück, die mit der `Locale` verbunden sind.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt die [Wochenelemente von UTS 35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) entsprechend den Locale-Regeln zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Ruft die wahrscheinlichsten Werte für Sprache, Skript und Region der Locale basierend auf bestehenden Werten ab.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über die Locale zu entfernen, die durch den Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würde.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt die vollständige Locale-Identifikator-Zeichenkette der Locale zurück.

## Beispiele

### Grundlegende Nutzung

Im einfachsten Fall nimmt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor eine Locale-Identifikator-Zeichenkette als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwenden des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor nimmt auch ein optionales Konfigurationsobjektargument, das eine beliebige Anzahl von Erweiterungstypen enthalten kann. Zum Beispiel setzen Sie die {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundensystem-Typ und übergeben es dann an den Konstruktor:

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
- [Kanonische Unicode-Locale-Identifikatoren](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode Locale Data Markup Language Spezifikation
