---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Das **`Intl.Locale`**-Objekt ist eine standardmäßige integrierte Eigenschaft des Intl-Objekts, die einen Unicode-Locale-Bezeichner darstellt.

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

Das **`Intl.Locale`**-Objekt wurde geschaffen, um die Arbeit mit Unicode-Locales zu erleichtern. Unicode stellt Locales durch Zeichenfolgen dar, die als _Locale-Bezeichner_ bezeichnet werden. Ein Locale-Bezeichner besteht aus einem _Sprachbezeichner_ und _Erweiterungs-Subtags_. Der Sprachbezeichner bildet den Kern der Locale und setzt sich aus Subtags für _Sprache_, _Schrift_, _Region_ und _Varianten_ zusammen. Zusätzliche Informationen über die Locale werden in den optionalen _Erweiterungs-Subtags_ gespeichert. Diese enthalten Informationen zu Aspekten der Locale wie Kalendertyp, Uhrzeitformat und Zahlensystem.

Traditionell verwendet die Intl-API wie Unicode Zeichenfolgen, um Locales darzustellen. Das ist eine einfache und ressourcenschonende Lösung, die gut funktioniert. Eine Locale-Klasse erleichtert jedoch das Analysieren und Bearbeiten von Sprache, Schrift, Region und Erweiterungs-Subtags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen Subtags eines Unicode-Locale-Bezeichners:

| Eigenschaft                                                  | Entsprechendes Subtag                  |
| ------------------------------------------------------------ | -------------------------------------- |
| {{jsxref("Intl/Locale/language", "language")}}               | Sprachbezeichner, erster Teil          |
| {{jsxref("Intl/Locale/script", "script")}}                   | Sprachbezeichner, Teil nach `language` |
| {{jsxref("Intl/Locale/region", "region")}}                   | Sprachbezeichner, Teil nach `script`   |
| {{jsxref("Intl/Locale/variants", "variants")}}               | Sprachbezeichner, Teil nach `region`   |
| {{jsxref("Intl/Locale/calendar", "calendar")}}               | `ca` (Erweiterung)                     |
| {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}             | `kf` (Erweiterung)                     |
| {{jsxref("Intl/Locale/collation", "collation")}}             | `co` (Erweiterung)                     |
| {{jsxref("Intl/Locale/firstDayOfWeek", "firstDayOfWeek")}}   | `fw` (Erweiterung)                     |
| {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}             | `hc` (Erweiterung)                     |
| {{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}} | `nu` (Erweiterung)                     |
| {{jsxref("Intl/Locale/numeric", "numeric")}}                 | `kn` (Erweiterung)                     |

Die oben genannten Informationen werden beim Erstellen des `Locale`-Objekts unverändert übernommen, ohne eine externe Datenbank abzufragen. Darüber hinaus bietet das `Intl.Locale`-Objekt Methoden, die Informationen über die tatsächlichen Gegebenheiten einer Locale zurückgeben, etwa verfügbare Kalender, Sortierreihenfolgen und Zahlensysteme.

### Regionale Präferenzen

Die Methoden {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}} geben Datums- und Zeitkonventionen zurück. Diese hängen von der Region der Locale ab, manchmal auch von der Sprache: Beispielsweise können für englischsprachiges Kanada (`en-CA`) und französischsprachiges Kanada (`fr-CA`) unterschiedliche Konventionen gelten. Die Region wird wie folgt bestimmt:

- Falls ein gültiges `rg`-Erweiterungs-Subtag vorhanden ist, wird dieses zuerst berücksichtigt. Sein Wert besteht aus einem Regionscode, gefolgt von 1 bis 4 alphanumerischen Zeichen. Der `Intl`-Parser berücksichtigt diese angehängten Zeichen nicht. Gemäß Unicode sollten sie jedoch `"zzzz"` lauten, um eine gesamte Region zu bezeichnen, oder eine [Unterteilungs-ID](https://github.com/unicode-org/cldr/blob/main/common/validity/subdivision.xml) sein. Beispielsweise bewirken die Tags `"en-US-u-rg-gbzzzz"` und `"en-US-u-rg-gbsct"` (`gbsct` bezeichnet die Unterteilung Schottland), dass die meisten Lokalisierungsmethoden amerikanisches Englisch und US-amerikanische Konventionen auswählen. Die drei Methoden für Datums- und Zeitkonventionen verwenden stattdessen jedoch die Konventionen des Vereinigten Königreichs.
- Wenn `rg` nicht vorhanden oder ungültig ist oder für die angegebene Region keine Konventionsdaten vorliegen, wird das Regions-Subtag verwendet, sofern es vorhanden ist. Dies dürfte der häufigste Fall sein, etwa `en-US` für die USA oder `zh-CN` für China.
- Wenn kein Regions-Subtag vorhanden ist, wird das `sd`-Erweiterungs-Subtag verwendet, sofern es vorhanden und gültig ist. Es folgt derselben Grammatik wie das `rg`-Erweiterungs-Subtag. Gemäß Unicode sollte es sich um eine Unterteilungs-ID handeln, die mit dem Regions-Subtag übereinstimmt, falls eines vorhanden ist. Für `Intl` ist `sd` jedoch im Allgemeinen nicht erforderlich, wenn bereits eine Region angegeben ist, da diese ohnehin Vorrang hat. Beispielsweise bewirkt das Tag `"en-u-sd-gbsct"`, dass die meisten Lokalisierungsmethoden amerikanisches Englisch und US-amerikanische Konventionen auswählen (`en` wird üblicherweise wie `en-US` behandelt). Die drei Methoden für Datums- und Zeitkonventionen verwenden stattdessen jedoch die Konventionen des Vereinigten Königreichs.
- Wenn die `sd`-Erweiterung nicht vorhanden oder ungültig ist, wird die [wahrscheinlichste Region](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize) der Locale verwendet. Falls auch diese nicht bestimmt werden kann, wird auf die Weltregion (`"001"`) zurückgegriffen.

Vergleichen Sie die folgenden Beispiele:

```js
new Intl.Locale("en").getHourCycles(); // ["h12"]; US convention

new Intl.Locale("en-GB").getHourCycles(); // ["h23"]; UK convention
new Intl.Locale("en-u-rg-gbzzzz").getHourCycles(); // ["h23"]
new Intl.Locale("en-u-sd-gbsct").getHourCycles(); // ["h23"]

new Intl.Locale("en-US-u-rg-gbzzzz").getHourCycles(); // ["h23"]
new Intl.Locale("en-US-u-sd-gbsct").getHourCycles(); // ["h12"]
```

Weder `rg` noch `sd` werden über eine Eigenschaft von `Intl.Locale` bereitgestellt oder können über eine Konstruktoroption angepasst werden. Die von diesen Methoden zurückgegebenen Werte können auch durch andere Erweiterungs-Subtags beeinflusst werden, wie auf den jeweiligen Seiten dokumentiert.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen gemeinsam genutzt.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt grundlegende Informationen über die `Locale` als Teilzeichenfolge der vollständigen Datenzeichenfolge zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil der `Locale` zurück, der ihren Kalendertyp angibt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt an, ob nach den Sortierregeln der Locale Groß- oder Kleinbuchstaben zuerst eingeordnet werden.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Sortiertyp für die `Locale` zurück, der verwendet wird, um Zeichenfolgen nach den Regeln der Locale zu ordnen.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Locale`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale")}}.
- {{jsxref("Intl/Locale/firstDayOfWeek", "Intl.Locale.prototype.firstDayOfWeek")}}
  - : Gibt den für die Locale festgelegten ersten Tag der Woche zurück.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das in der Locale verwendete Uhrzeitformat zurück.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die mit der Locale verknüpfte Sprache zurück.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das von der Locale verwendete Zahlensystem zurück.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt an, ob die Locale spezielle Sortierregeln für numerische Zeichen verwendet.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die mit der Locale verknüpfte Weltregion zurück, üblicherweise ein Land.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt die Schrift zurück, mit der die Sprache der Locale geschrieben wird.
- {{jsxref("Intl/Locale/variants", "Intl.Locale.prototype.variants")}}
  - : Gibt die mit der Locale verknüpften Varianten-Subtags zurück, beispielsweise für unterschiedliche Rechtschreibungen.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Intl.Locale"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} verfügbarer Kalenderbezeichner gemäß den Regeln der Locale zurück.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} der Sortiertypen für die `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} von Uhrzeitformat-Bezeichnern zurück. Diese bezeichnen entweder das 12-Stunden-Format ("h12"), das japanische 12-Stunden-Format ("h11"), das 24-Stunden-Format ("h23") oder das nicht verwendete Format "h24".
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} der nach den Regeln der Locale verfügbaren Zahlensystem-Bezeichner zurück.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Schreibrichtung der Zeichen angibt: `ltr` (von links nach rechts) oder `rtl` (von rechts nach links).
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeitzonen-Bezeichnern zurück, die mit der `Locale` verknüpft sind.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt die [Wochenelemente aus UTS 35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) gemäß den Regeln der Locale zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Ermittelt anhand der vorhandenen Werte die wahrscheinlichsten Werte für Sprache, Schrift und Region der Locale.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über die Locale zu entfernen, die durch einen Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} wieder hinzugefügt würden.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt den vollständigen Locale-Bezeichner der Locale als Zeichenfolge zurück.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall erhält der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} eine Zeichenfolge mit einem Locale-Bezeichner als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor akzeptiert außerdem ein optionales Konfigurationsobjekt als Argument, das verschiedene Erweiterungstypen enthalten kann. Setzen Sie beispielsweise die Eigenschaft {{jsxref("Intl/Locale/hourCycle", "hourCycle")}} des Konfigurationsobjekts auf das gewünschte Uhrzeitformat und übergeben Sie das Objekt anschließend an den Konstruktor:

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
- [Kanonische Unicode-Locale-Bezeichner](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Spezifikation der Unicode Locale Data Markup Language
