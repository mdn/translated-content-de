---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Das **`Intl.Locale`**-Objekt ist eine standardmäßig integrierte Eigenschaft des Intl-Objekts und repräsentiert einen Unicode-Locale-Identifier.

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

Das **`Intl.Locale`**-Objekt wurde geschaffen, um die Arbeit mit Unicode-Locales zu erleichtern. Unicode stellt Locales durch Zeichenfolgen dar, die als _Locale-Identifier_ bezeichnet werden. Ein Locale-Identifier besteht aus einem _Sprach-Identifier_ und _Erweiterungs-Tags_. Sprach-Identifier bilden den Kern einer Locale und bestehen aus Subtags für _Sprache_, _Schriftsystem_, _Region_ und _Varianten_. Zusätzliche Informationen über die Locale werden in den optionalen _Erweiterungs-Tags_ gespeichert. Diese enthalten Angaben zu Aspekten wie Kalendertyp, Uhrzeitformat und Zahlensystem.

Traditionell verwendete die Intl-API wie Unicode Zeichenfolgen zur Darstellung von Locales. Das ist eine einfache und ressourcenschonende Lösung, die gut funktioniert. Eine Locale-Klasse erleichtert jedoch das Auslesen und Ändern von Sprache, Schriftsystem, Region und Erweiterungs-Tags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen den Subtags eines Unicode-Locale-Identifiers:

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

Die oben genannten Informationen werden beim Erstellen des `Locale`-Objekts unverändert übernommen, ohne eine externe Datenbank abzufragen. Das `Intl.Locale`-Objekt bietet darüber hinaus Methoden, die Informationen über die tatsächlichen Gegebenheiten einer Locale zurückgeben, etwa verfügbare Kalender, Kollationen und Zahlensysteme.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen gemeinsam verwendet.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt grundlegende Informationen über die `Locale` als Teilzeichenfolge des vollständigen Datenstrings zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil der `Locale` zurück, der ihren Kalendertyp angibt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt an, ob gemäß den Kollationsregeln der Locale Groß- oder Kleinbuchstaben zuerst sortiert werden.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Kollationstyp der `Locale` zurück, der zur Sortierung von Zeichenfolgen nach den Regeln der Locale verwendet wird.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Intl.Locale`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale")}}.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das in der Locale verwendete Uhrzeitformat zurück.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die der Locale zugeordnete Sprache zurück.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das in der Locale verwendete Zahlensystem zurück.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt an, ob die Locale eine besondere Kollationsbehandlung für numerische Zeichen vorsieht.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die der Locale zugeordnete Weltregion zurück (üblicherweise ein Land).
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt das Schriftsystem zurück, mit dem die Sprache der Locale geschrieben wird.
- {{jsxref("Intl/Locale/variants", "Intl.Locale.prototype.variants")}}
  - : Gibt die der Locale zugeordneten Varianten-Subtags zurück, etwa für unterschiedliche Rechtschreibungen.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Intl.Locale"`. Diese Eigenschaft wird von {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} mit den nach den Regeln der Locale verfügbaren Kalender-Identifiern zurück.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} mit den Kollationstypen der `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} mit Identifiern für Uhrzeitformate zurück: für die 12-Stunden-Uhr ("h12"), die japanische 12-Stunden-Uhr ("h11"), die 24-Stunden-Uhr ("h23") oder das nicht verwendete Format "h24".
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} mit den nach den Regeln der Locale verfügbaren Zahlensystem-Identifiern zurück.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Schreibrichtung der Zeichen angibt: `ltr` (von links nach rechts) oder `rtl` (von rechts nach links).
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} mit Zeitzonen-Identifiern zurück, die der `Locale` zugeordnet sind.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt die [Wochenelemente aus UTS 35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) gemäß den Regeln der Locale zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Ermittelt anhand der vorhandenen Werte die wahrscheinlichsten Werte für Sprache, Schriftsystem und Region der Locale.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über die Locale zu entfernen, die durch einen Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} wieder hinzugefügt würden.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt den vollständigen Locale-Identifier der Locale als Zeichenfolge zurück.

## Beispiele

### Grundlegende Verwendung

In der einfachsten Form erhält der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} eine Zeichenfolge mit einem Locale-Identifier als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor akzeptiert außerdem ein optionales Konfigurationsobjekt, das verschiedene Erweiterungstypen enthalten kann. Setzen Sie beispielsweise die Eigenschaft {{jsxref("Intl/Locale/hourCycle", "hourCycle")}} des Konfigurationsobjekts auf das gewünschte Uhrzeitformat und übergeben Sie das Objekt anschließend an den Konstruktor:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Intl.Locale` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [Kanonische Unicode-Locale-Identifier](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Spezifikation der Unicode Locale Data Markup Language
