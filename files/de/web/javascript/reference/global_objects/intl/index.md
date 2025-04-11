---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: 35512ec91d6a464ebee803d20c2d47464c9ce4e7
---

{{JSRef}}

Das **`Intl`**-Namensraumobjekt enthält mehrere Konstruktoren sowie Funktionen, die den Internationalisierungskonstruktoren und anderen sprachsensitiven Funktionen gemeinsam sind. Zusammen bilden sie die ECMAScript Internationalization API, die sprachsensitive Zeichenfolgenvergleiche, Zahlenformatierung, Datums- und Uhrzeitformatierung und mehr bietet.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Intl` kein Konstruktor. Sie können es nicht mit dem [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Intl`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

Die Internationalisierungskonstruktoren sowie mehrere sprachsensitive Methoden anderer Konstruktoren (im Abschnitt [siehe auch](#siehe_auch) aufgeführt) verwenden ein gemeinsames Muster zur Identifikation von `locales` und ermitteln die Locale, die sie tatsächlich verwenden werden: Sie akzeptieren alle `locales`- und `options`-Argumente und verhandeln die angeforderten Locale(s) gegen die, die sie unterstützen, unter Verwendung eines im `options.localeMatcher`-Eigenschaft definierten Algorithmus.

### locales-Argument

Das `locales`-Argument wird verwendet, um die Locale zu bestimmen, die in einer gegebenen Operation verwendet wird. Die JavaScript-Implementierung untersucht `locales` und berechnet dann eine Locale, die sie versteht und die am nächsten daran kommt, die geäußerte Präferenz zu erfüllen. `locales` kann sein:

- `undefined` (oder ausgelassen): Die Standard-Locale der Implementierung wird verwendet.
- Eine Locale: Ein Locale-Bezeichner oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Objekt, das einen Locale-Bezeichner umschließt.
- Eine Liste von Locales: Jeder andere Wert, der in ein Objekt umgewandelt und dann als Array von Locales behandelt wird.

In den beiden letzteren Fällen ist die tatsächlich verwendete Locale die am besten unterstützte Locale, die durch [Locale-Verhandlung](#locale-identifikation_und_verhandlung) bestimmt wird. Wenn ein Locale-Bezeichner kein String oder Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn ein Locale-Bezeichner ein syntaktisch ungültiger String ist, wird ein {{jsxref("RangeError")}} ausgelöst. Wenn ein Locale-Bezeichner wohlgeformt ist, aber von der Implementierung nicht erkannt wird, wird er ignoriert und die nächste Locale in der Liste in Betracht gezogen, wobei schließlich auf die System-Locale zurückgegriffen wird. Sie sollten sich jedoch nicht darauf verlassen, dass ein bestimmter Locale-Bezeichner ignoriert wird, da die Implementierung Daten für jede Locale in Zukunft hinzufügen kann. Zum Beispiel verwendet `new Intl.DateTimeFormat("default")` die Standard-Locale der Implementierung nur, weil `"default"` syntaktisch gültig, aber nicht als Locale erkannt wird.

Ein Locale-Bezeichner ist ein String, der besteht aus:

1. Einem Sprachsubtag mit 2–3 oder 5–8 Buchstaben
2. Einem Skriptsubtag mit 4 Buchstaben {{optional_inline}}
3. Einem Regionssubtag mit entweder 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Einem oder mehreren Variantensubtags (die alle einzigartig sein müssen), jeweils mit entweder 5–8 alphanumerischen Zeichen oder einer Ziffer gefolgt von 3 alphanumerischen Zeichen {{optional_inline}}
5. Einer oder mehreren BCP 47-Erweiterungssequenzen {{optional_inline}}
6. Einer privat genutzten Erweiterungssequenz {{optional_inline}}

Jeder Subtag und jede Sequenz sind durch Bindestriche getrennt. Locale-Bezeichner sind {{Glossary("ASCII", "ASCII")}}-unempfindlich. Es ist jedoch üblich, im Titel Schreibung (der erste Buchstabe ist groß, die folgenden sind klein) für Skriptsubtags, Großbuchstaben für Regionssubtags und Kleinschreibung für alles andere zu verwenden. Zum Beispiel:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache), wie in Österreich (Region) verwendet
- `"zh-Hans-CN"`: Chinesisch (Sprache) in vereinfachten Schriftzeichen (Skript) wie in China (Region) verwendet
- `"en-emodeng"`: Englisch (Sprache) im Dialekt "Frühneuenglisch" (Variante)

Subtags, die Sprachen, Skripte, Regionen (einschließlich Länder) und (selten verwendete) Varianten identifizieren, sind im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Register wird periodisch aktualisiert, und Implementierungen können nicht immer aktuell sein, daher verlassen Sie sich nicht zu sehr auf Subtags, die universell unterstützt werden.

BCP 47-Erweiterungssequenzen bestehen aus einer einzelnen Ziffer oder einem Buchstaben (außer `"x"`) und einem oder mehreren zwei- bis achtbuchstabigen- oder ziffern Subtags, die durch Bindestriche getrennt sind. Nur eine Sequenz ist für jede Ziffer oder jeden Buchstaben erlaubt: `"de-a-foo-a-foo"` ist ungültig. BCP 47-Erweiterungssubtags sind im [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Erweiterungen definierte Bedeutungen:

- Die `"u"` (Unicode)-Erweiterung kann verwendet werden, um eine zusätzliche Anpassung von `Intl` API-Objekten anzufordern. Beispiele:

  - `"de-DE-u-co-phonebk"`: Verwenden Sie die Variante des deutschen Sortierauftrags im Telefonbuch, die umgelautete Vokale als entsprechende Zeichenpaare interpretiert: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwenden Sie thailändische Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in der Zahlenformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwenden Sie den japanischen Kalender in der Datums- und Uhrzeitformatierung, so dass 2013 als Jahr 25 der Heisei-Periode, oder 平成 25, ausgedrückt wird.
  - `"en-GB-u-ca-islamic-umalqura"`: Verwenden Sie britisches Englisch mit dem Umm al-Qura (Hijri) Kalender, wo das gregorianische Datum 14. Oktober 2017 der Hijri-Datum 24 Muharram, 1439, ist.

- Die `"t"` (transformed) Erweiterung zeigt transformierten Inhalt an: zum Beispiel Text, der aus einer anderen Locale übersetzt wurde. Keine `Intl`-Funktionalität berücksichtigt derzeit die `"t"`-Erweiterung. Diese Erweiterung enthält jedoch manchmal eine verschachtelte Locale (ohne Erweiterungen): zum Beispiel enthält die transformierte Erweiterung in `"de-t-en"` das Locale-Bezeichner für Englisch. Wenn eine verschachtelte Locale vorhanden ist, muss sie ein gültiger Locale-Bezeichner sein. Zum Beispiel, weil `"en-emodeng-emodeng"` ungültig ist (weil es einen doppelten `emodeng`-Variantensubtag enthält), ist auch `"de-t-en-emodeng-emodeng"` ungültig.

Schließlich kann eine privat genutzte Erweiterungssequenz mit dem Buchstaben `"x"` erscheinen, gefolgt von einem oder mehreren eins- bis achtbuchstabigen- oder ziffern Subtags, die durch Bindestriche getrennt sind. Dadurch können Anwendungen Informationen für ihren eigenen privaten Gebrauch kodieren, die von allen `Intl`-Operationen ignoriert werden.

### options-Argument

Das `options`-Argument muss ein Objekt mit Eigenschaften sein, die je nach Konstruktoren und Funktionen variieren. Wenn das `options`-Argument nicht bereitgestellt oder nicht definiert ist, werden für alle Eigenschaften Standardwerte verwendet.

Eine Eigenschaft wird von allen sprachsensitiven Konstruktoren und Funktionen unterstützt: Die `localeMatcher`-Eigenschaft, deren Wert ein String `"lookup"` oder `"best fit"` sein muss, und die einen der unten beschriebenen Locale-Matching-Algorithmen auswählt.

### Locale-Identifikation und Verhandlung

Die Liste der von dem `locales`-Argument angegebenen Locales, nachdem Unicode-Erweiterungen von ihnen entfernt wurden, wird als priorisierte Anforderung der Anwendung interpretiert. Die Laufzeitumgebung vergleicht sie mit den verfügbaren Locales und wählt die beste verfügbare aus. Es gibt zwei Matching-Algorithmen: der `"lookup"`-Matcher folgt dem in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) spezifizierten Lookup-Algorithmus; der `"best fit"`-Matcher lässt der Laufzeitumgebung eine Locale bereitstellen, die mindestens, aber möglicherweise mehr, für die Anforderung geeignet ist als das Ergebnis des Lookup-Algorithmus. Wenn die Anwendung kein `locales`-Argument bereitstellt oder die Laufzeitumgebung keine Locale hat, die der Anforderung entspricht, wird die Standard-Locale der Laufzeitumgebung verwendet. Der Matcher kann mit einer Eigenschaft des `options`-Arguments ausgewählt werden (siehe unten).

Wenn der ausgewählte Locale-Bezeichner eine Unicode-Erweiterungssequenz hatte, wird diese Erweiterung jetzt verwendet, um das konstruierte Objekt oder das Verhalten der Funktion zu spezifizieren. Jeder Konstruktor oder jede Funktion unterstützt nur eine Teilmenge der für die Unicode-Erweiterung definierten Schlüssel, und die unterstützten Werte hängen oft von dem Locale-Bezeichner ab. Beispielsweise wird der `"co"`-Schlüssel (Kollation) nur von {{jsxref("Intl.Collator")}} unterstützt, und sein `"phonebk"`-Wert wird nur für Deutsch unterstützt.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Kollatoren, die Objekte sind, die sprachsensitive Zeichenfolgenvergleiche ermöglichen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Datums- und Uhrzeitformatierung ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die eine konsistente Übersetzung von Sprache-, Regions- und Skriptanzeigennamen ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die locale-sensible Dauerformatierung ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Listenformatierung ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die einen Unicode-Locale-Bezeichner darstellen.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Zahlenformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die pluran-sensible Formatierung und sprachenspezifische Regeln für Plurale ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive relative Zeitformatierung ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die locale-sensitives Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Locale-Namen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array zurück, das die unterstützten einzigartigen Kalender-, Kollations-, Währungs-, Nummerierungssysteme oder Einheitenwerte enthält, die von der Implementierung unterstützt werden.

## Beispiele

### Daten und Zahlen formatieren

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

### Die bevorzugte Sprache des Browsers verwenden

Anstelle eines fest codierten Locale-Namens für die `Intl`-Methoden können Sie die vom Benutzer bevorzugte Sprache verwenden, die von [`navigator.language`](/de/docs/Web/API/Navigator/language) bereitgestellt wird:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternativ bietet die Eigenschaft [`navigator.languages`](/de/docs/Web/API/Navigator/languages) eine sortierte Liste der vom Benutzer bevorzugten Sprachen. Diese Liste kann direkt an die `Intl`-Konstruktoren übergeben werden, um eine auf Präferenzen basierende Fallback-Auswahl von Locales zu implementieren. Der [Locale-Verhandlungsprozess](#locale-identifikation_und_verhandlung) wird verwendet, um die am besten geeignete verfügbare Locale auszuwählen:

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
