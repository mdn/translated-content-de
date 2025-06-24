---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Das **`Intl`** Namensraumobjekt enthält mehrere Konstruktoren sowie Funktionalitäten, die für die Internationalisierungskonstruktoren und andere sprachsensitive Funktionen typisch sind. Zusammen bilden sie die ECMAScript Internationalization API, die sprachsensitive Zeichenfolgenvergleichung, Zahlenformatierung, Datum- und Zeitformatierung und mehr bietet.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Intl` kein Konstruktor. Sie können es weder mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Intl` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

Die Internationalisierungskonstruktoren sowie mehrere sprachsensitive Methoden anderer Konstruktoren (siehe [Siehe auch](#siehe_auch)) verwenden ein gemeinsames Muster zur Identifizierung von Regionen und zur Bestimmung der tatsächlich verwendeten. Sie akzeptieren alle `locales` und `options` Argumente und führen die angeforderten Regionen gegen die von ihnen unterstützten Regionen mithilfe eines im `options.localeMatcher` Property angegebenen Algorithmus aus.

### locales Argument

Das `locales` Argument wird verwendet, um die Region zu bestimmen, die in einer bestimmten Operation verwendet wird. Die JavaScript-Implementierung untersucht `locales` und berechnet dann eine Region, die ihren Präferenzen am nächsten entspricht. `locales` kann sein:

- `undefined` (oder ausgelassen): Die Standardregion der Implementierung wird verwendet.
- Eine Region: Ein Regionsbezeichner oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Objekt, das einen Regionsbezeichner umschließt.
- Eine Liste von Regionen: Jeder andere Wert, der in ein Objekt umgewandelt und dann als Array von Regionen behandelt wird.

In den beiden letztgenannten Fällen ist die tatsächlich verwendete Region die am besten unterstützte, die durch [Regionenverhandlung](#regionsidentifikation_und_-verhandlung) bestimmt wird. Wenn ein Regionsbezeichner keine Zeichenfolge oder kein Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn ein Regionsbezeichner eine syntaktisch ungültige Zeichenfolge ist, wird ein {{jsxref("RangeError")}} ausgelöst. Wenn ein Regionsbezeichner gültig, aber der Implementierung nicht bekannt ist, wird er ignoriert und die nächste Region in der Liste wird betrachtet, sodass schließlich auf die Systemregion zurückgegriffen wird. Sie sollten sich jedoch nicht darauf verlassen, dass ein bestimmter Regionsname ignoriert wird, da die Implementierung jederzeit Daten für jede Region hinzufügen kann. Zum Beispiel verwendet `new Intl.DateTimeFormat("default")` nur die Standardregion der Implementierung, weil `"default"` syntaktisch gültig, aber nicht als Region anerkannt ist.

Ein Regionsbezeichner ist eine Zeichenfolge bestehend aus:

1. Einem Sprachsubtag mit 2–3 oder 5–8 Buchstaben
2. Einem Skriptsubtag mit 4 Buchstaben {{optional_inline}}
3. Einem Regionssubtag mit entweder 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Einem oder mehreren einzigartigen Variantentags, jedes mit entweder 5–8 alphanumerischen oder einer Ziffer gefolgt von 3 alphanumerischen Zeichen {{optional_inline}}
5. Einer oder mehreren BCP 47 Erweiterungssequenzen {{optional_inline}}
6. Einer privat verwendeten Erweiterungssequenz {{optional_inline}}

Jeder Subtag und jede Sequenz werden durch Bindestriche getrennt. Regionsbezeichner sind {{Glossary("ASCII", "ASCII")}} Groß-/Kleinschreibung ignorierend. Allerdings ist es üblich, den Skriptsubtag in Großschreibung (der erste Buchstabe wird großgeschrieben, nachfolgende Buchstaben sind klein) zu verwenden, die Regionssubtags in Großbuchstaben und alles andere in Kleinbuchstaben zu schreiben. Zum Beispiel:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache) wie in Österreich (Region) verwendet
- `"zh-Hans-CN"`: Chinesisch (Sprache) geschrieben in vereinfachten Zeichen (Skript) wie in China (Region) verwendet
- `"en-emodeng"`: Englisch (Sprache) im Dialekt "Frühneuenglisch" (Variante)

Subtags zur Identifizierung von Sprachen, Skripten, Regionen (einschließlich Ländern) und (selten verwendeten) Varianten sind im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Register wird regelmäßig aktualisiert, und Implementierungen sind möglicherweise nicht immer auf dem neuesten Stand, daher sollten Sie sich nicht zu sehr darauf verlassen, dass Subtags universell unterstützt werden.

BCP 47 Erweiterungssequenzen bestehen aus einer einzelnen Ziffer oder einem Buchstaben (außer `"x"`) und einem oder mehreren zwei- bis achtbuchstabigen oder ziffernhaltigen Subtags, die durch Bindestriche getrennt sind. Für jede Ziffer oder jeden Buchstaben ist nur eine Sequenz erlaubt: `"de-a-foo-a-foo"` ist ungültig. BCP 47 Erweiterungs-Subtags sind im [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Erweiterungen definierte Semantiken:

- Die `"u"` (Unicode) Erweiterung kann verwendet werden, um eine zusätzliche Anpassung der `Intl` API-Objekte anzufordern. Beispiele:

  - `"de-DE-u-co-phonebk"`: Verwendung der Telefonbuchvariante der deutschen Sortierreihenfolge, die umlautierte Vokale als entsprechende Zeichenpaare interpretiert: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwendung thailändischer Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in der Zahlenformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwendung des japanischen Kalenders in der Datums- und Zeitformatierung, sodass 2013 als das Jahr 25 der Heisei-Periode oder 平成 25 ausgedrückt wird.
  - `"en-GB-u-ca-islamic-umalqura"`: Verwendung des britischen Englisch mit dem Umm al-Qura (Hijri) Kalender, wobei das gregorianische Datum 14. Oktober 2017 das Hijri-Datum 24. Muharram 1439 ist.

- Die `"t"` (transformierte) Erweiterung zeigt transformierten Inhalt an: zum Beispiel Text, der aus einer anderen Region übersetzt wurde. Keine `Intl` Funktionalität berücksichtigt derzeit die `"t"` Erweiterung. Diese Erweiterung enthält jedoch manchmal eine verschachtelte Region (ohne Erweiterungen): Beispielsweise enthält die transformierte Erweiterung in `"de-t-en"` den Regionsbezeichner für Englisch. Wenn eine verschachtelte Region vorhanden ist, muss sie ein gültiger Regionsbezeichner sein. Zum Beispiel, weil `"en-emodeng-emodeng"` ungültig ist (da es ein doppeltes `emodeng` Variantensubtag enthält), ist auch `"de-t-en-emodeng-emodeng"` ungültig.

Schließlich kann eine privat verwendete Erweiterungssequenz, die den Buchstaben `"x"` verwendet, erscheinen, gefolgt von einem oder mehreren eins- bis achtbuchstabigen oder ziffernhaltigen Subtags, die durch Bindestriche getrennt sind. Dies ermöglicht Anwendungen, Informationen für ihren eigenen privaten Gebrauch zu codieren, die von allen `Intl` Operationen ignoriert werden.

### options Argument

Das `options` Argument muss ein Objekt mit Eigenschaften sein, die je nach Konstruktor und Funktion variieren. Wenn das `options` Argument nicht bereitgestellt oder undefiniert ist, werden für alle Eigenschaften Standardwerte verwendet.

Eine Eigenschaft wird von allen sprachsensitiven Konstruktoren und Funktionen unterstützt: Die `localeMatcher` Eigenschaft, deren Wert eine Zeichenkette `"lookup"` oder `"best fit"` sein muss und die eines der unten beschriebenen Regionenabgleichsalgorithmen auswählt.

### Regionsidentifikation und -verhandlung

Die Liste der Regionen, die durch das `locales` Argument angegeben ist, nachdem Unicode-Erweiterungen daraus entfernt wurden, wird als priorisierte Anforderung der Anwendung interpretiert. Die Laufzeit vergleicht sie mit den verfügbaren Regionen und wählt die beste verfügbare. Es gibt zwei Abgleichsalgorithmen: Der `"lookup"` Abgleicher folgt dem Lookup-Algorithmus, der in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) spezifiziert ist; der `"best fit"` Abgleicher lässt die Laufzeit eine Region bereitstellen, die mindestens, aber möglicherweise mehr, für die Anforderung geeignet ist als das Ergebnis des Lookup-Algorithmus. Wenn die Anwendung kein `locales` Argument bereitstellt oder die Laufzeit keine Region hat, die zur Anfrage passt, wird die Standardregion der Laufzeit verwendet. Der Abgleicher kann über eine Eigenschaft des `options` Arguments ausgewählt werden (siehe unten).

Wenn der ausgewählte Regionsbezeichner eine Unicode-Erweiterungssequenz hatte, wird diese Erweiterung jetzt verwendet, um das konstruierte Objekt oder das Verhalten der Funktion anzupassen. Jeder Konstruktor oder jede Funktion unterstützt nur eine Teilmenge der für die Unicode-Erweiterung definierten Schlüssel, und die unterstützten Werte hängen oft vom Regionsbezeichner ab. Zum Beispiel wird der `"co"` Schlüssel (Kollation) nur von {{jsxref("Intl.Collator")}} unterstützt, und sein `"phonebk"` Wert wird nur für Deutsch unterstützt.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Kollatoren, die objekten darstellen, die eine sprachsensitive Zeichenfolgenvergleichung ermöglichen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die eine sprachsensitive Datum- und Zeitformatierung ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die die konsistente Übersetzung von Sprach-, Regions- und Skriptnamen ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die eine loaclesensitive Dauerformatierung ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die eine sprachsensitive Listenformatierung ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die einen Unicode-Locale-Bezeichner darstellen.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die eine sprachsensitive Zahlenformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die eine plural-sensitive Formatierung und sprachspezifische Regeln für Plurale ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die eine sprachsensitive relative Zeitformatierung ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die eine loaclesensitive Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenkette `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Regionsnamen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array zurück, das die unterstützten einzigartigen Kalender-, Kollations-, Währungs-, Nummerierungssystem- oder Einheitentwerte der Implementierung enthält.

## Beispiele

### Formatieren von Daten und Zahlen

Sie können `Intl` verwenden, um Daten und Zahlen in einer Form zu formatieren, die für eine bestimmte Sprache und Region konventionell ist:

```js
const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(
      locale,
    ).format(count)}`,
  );
}

log("en-US"); // 5/24/2012 26,254.39

log("de-DE"); // 24.5.2012 26.254,39
```

### Verwenden der bevorzugten Sprache des Browsers

Anstatt einen hardcodierten Regionsnamen an die `Intl` Methoden zu übergeben, können Sie die vom Benutzer bevorzugte Sprache verwenden, die von [`navigator.language`](/de/docs/Web/API/Navigator/language) bereitgestellt wird:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternativ bietet die [`navigator.languages`](/de/docs/Web/API/Navigator/languages) Eigenschaft eine sortierte Liste der vom Benutzer bevorzugten Sprachen. Diese Liste kann direkt an die `Intl` Konstruktoren übergeben werden, um eine Präferenz-basierte Rückfallauswahl von Regionen zu implementieren. Der Prozess der [Regionenverhandlung](#regionsidentifikation_und_-verhandlung) wird verwendet, um die am besten geeignete verfügbare Region auszuwählen:

```js
const count = 26254.39;

const formattedCount = new Intl.NumberFormat(navigator.languages).format(count);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap)
- [`navigator.language`](/de/docs/Web/API/Navigator/language)
- [`navigator.languages`](/de/docs/Web/API/Navigator/languages)
- [Die ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) von Norbert Lindenberg (2012)
