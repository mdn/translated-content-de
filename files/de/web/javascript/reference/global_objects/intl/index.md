---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Intl`** Namensraum-Objekt enthält mehrere Konstruktoren sowie Funktionalitäten, die den Internationalisierungs-Konstruktoren und anderen sprachsensitiven Funktionen gemeinsam sind. Gemeinsam bilden sie die ECMAScript Internationalization API, die sprachsensitive Zeichenkettenvergleiche, Zahlenformatierung, Datums- und Zeitformatierung und mehr bietet.

## Beschreibung

Anders als die meisten globalen Objekte ist `Intl` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Intl` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

Die Internationalisierungs-Konstruktoren sowie mehrere sprachsensitive Methoden anderer Konstruktoren (aufgeführt unter [Siehe auch](#siehe_auch)) verwenden ein gemeinsames Muster zur Identifizierung von Locales und zur Bestimmung derjenigen, die sie tatsächlich verwenden werden: Sie akzeptieren alle Argumente für `locales` und `options` und verhandeln die angeforderten Locale(s) mit den von ihnen unterstützten Locale unter Verwendung eines Algorithmus, der in der Eigenschaft `options.localeMatcher` spezifiziert ist.

### locales Argument

Das `locales` Argument wird verwendet, um die Locale zu bestimmen, die in einem bestimmten Vorgang verwendet wird. Die JavaScript-Implementierung prüft `locales` und berechnet dann eine Locale, die es versteht und die der geäußerten Präferenz am nächsten kommt. `locales` kann folgendes sein:

- `undefined` (oder weggelassen): Die Standard-Locale der Implementierung wird verwendet.
- Eine Locale: Ein Locale-Identifikator oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Objekt, das einen Locale-Identifikator umschließt.
- Eine Liste von Locales: Jeder andere Wert, der in ein Objekt konvertiert und dann als Array von Locales behandelt wird.

In den beiden letztgenannten Fällen ist die tatsächlich verwendete Locale die am besten unterstützte Locale, die durch [Locale-Verhandlung](#locale-identifikation_und_verhandlung) bestimmt wird. Wenn ein Locale-Identifikator keine Zeichenkette oder kein Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn ein Locale-Identifikator eine ungültige Syntax hat, wird ein {{jsxref("RangeError")}} ausgelöst. Wenn ein Locale-Identifikator wohlgeformt, aber nicht von der Implementierung erkannt wird, wird er ignoriert und die nächste Locale in der Liste wird in Betracht gezogen, das schließlich auf die System-Default-Locale zurückfällt. Sie sollten jedoch nicht darauf vertrauen, dass ein bestimmter Locale-Name ignoriert wird, da die Implementierung jederzeit Daten für jede Locale hinzufügen kann. Zum Beispiel verwendet `new Intl.DateTimeFormat("default")` die Default-Locale der Implementierung nur, weil `"default"` syntaktisch gültig ist, aber nicht als Locale erkannt wird.

Ein Locale-Identifikator ist eine Zeichenkette, die aus den folgenden Elementen besteht:

1. Ein Sprach-Subtag mit 2–3 oder 5–8 Buchstaben
2. Ein Skript-Subtag mit 4 Buchstaben {{optional_inline}}
3. Ein Regions-Subtag mit entweder 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Ein oder mehrere Subtags für Varianten (die alle eindeutig sein müssen), jeder mit entweder 5–8 alphanumerischen Zeichen oder einer Ziffer gefolgt von 3 alphanumerischen Zeichen {{optional_inline}}
5. Ein oder mehrere BCP 47 Extensions {{optional_inline}}
6. Eine Privatanwendungs-Extension {{optional_inline}}

Jeder Subtag und jede Sequenz sind durch Bindestriche getrennt. Locale-Identifikatoren sind {{Glossary("ASCII", "ASCII")}} und nicht case-sensitiv. Es ist jedoch üblich, den Titel (der erste Buchstabe wird großgeschrieben, die nachfolgenden Buchstaben sind klein) für Skript-Subtags, Großbuchstaben für Regions-Subtags und Kleinbuchstaben für alles andere zu verwenden. Zum Beispiel:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache) wie in Österreich verwendet (Region)
- `"zh-Hans-CN"`: Chinesisch (Sprache), geschrieben in vereinfachten Zeichen (Skript) wie in China verwendet (Region)
- `"en-emodeng"`: Englisch (Sprache) im Dialekt „Frühes modernes Englisch“ (Variante)

Subtags, die Sprachen, Skripte, Regionen (einschließlich Länder) und (selten verwendete) Varianten identifizieren, werden im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Register wird regelmäßig aktualisiert, und Implementierungen sind möglicherweise nicht immer auf dem neuesten Stand, daher sollten Sie sich nicht zu sehr darauf verlassen, dass Subtags universell unterstützt werden.

BCP 47 Extensions bestehen aus einer einzelnen Ziffer oder einem Buchstaben (außer `"x"`) und einem oder mehreren zwei- bis achtstelligen oder buchstabenförmigen Subtags, die durch Bindestriche getrennt sind. Pro Ziffer oder Buchstabe ist nur eine Sequenz zulässig: `"de-a-foo-a-foo"` ist ungültig. BCP 47 Extensions werden im [Unicode CLDR-Projekt](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Extensions definierte Semantiken:

- Die `"u"` (Unicode) Extension kann verwendet werden, um zusätzliche Anpassungen von `Intl` API-Objekten anzufordern. Beispiele:

  - `"de-DE-u-co-phonebk"`: Verwenden Sie die Telefonbuchvariante der deutschen Sortierreihenfolge, die umlautierte Vokale als entsprechende Buchstabenkombinationen interpretiert: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwenden Sie thailändische Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) bei der Zahlenformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwenden Sie den japanischen Kalender bei der Datums- und Zeitformatierung, sodass 2013 als Jahr 25 der Heisei-Periode oder 平成 25 ausgedrückt wird.
  - `"en-GB-u-ca-islamic"`: Verwenden Sie britisches Englisch mit dem islamischen (Hijri) Kalender, wobei das Gregorianische Datum 14. Oktober 2017 dem Hijri-Datum 24. Muharram 1439 entspricht.

- Die `"t"` (transformierte) Extension zeigt transformierte Inhalte an: zum Beispiel Texte, die aus einer anderen Locale übersetzt wurden. Derzeit berücksichtigt keine `Intl` Funktionalität die `"t"` Extension. Diese Extension enthält jedoch manchmal eine geschachtelte Locale (ohne Extensions): Zum Beispiel enthält die transformierte Extension in `"de-t-en"` den Locale-Identifikator für Englisch. Wenn eine geschachtelte Locale vorhanden ist, muss es sich um einen gültigen Locale-Identifikator handeln. Da zum Beispiel `"en-emodeng-emodeng"` ungültig ist (weil es ein doppeltes `emodeng` Variante-Subtag enthält), ist auch `"de-t-en-emodeng-emodeng"` ungültig.

Schließlich kann eine Privatanwendungs-Extension, die den Buchstaben `"x"` verwendet, erscheinen, gefolgt von einem oder mehreren aus ein- bis achtstelligen oder buchstabenförmigen Subtags, die durch Bindestriche getrennt sind. Dies ermöglicht es Anwendungen, Informationen für ihren eigenen privaten Gebrauch zu codieren, die von allen `Intl`-Operationen ignoriert werden.

### options Argument

Das `options` Argument muss ein Objekt mit Eigenschaften sein, die je nach Konstruktoren und Funktionen variieren. Wenn das `options` Argument nicht bereitgestellt oder auf undefiniert gesetzt wird, werden für alle Eigenschaften Standardwerte verwendet.

Eine Eigenschaft wird von allen sprachsensitiven Konstruktoren und Funktionen unterstützt: die `localeMatcher` Eigenschaft, deren Wert eine Zeichenkette `"lookup"` oder `"best fit"` sein muss und die einen der unten beschriebenen Algorithmen zur Locale-Abstimmung auswählt.

### Locale-Identifikation und Verhandlung

Die Liste der Locales, die durch das `locales` Argument angegeben wird, nachdem Unicode-Erweiterungen von diesen entfernt wurden, wird als eine priorisierte Anfrage der Anwendung interpretiert. Die Laufzeitumgebung vergleicht sie mit den verfügbaren Locales und wählt die beste davon aus. Es existieren zwei Abstimmungsalgorithmen: Der `"lookup"` Matcher folgt dem Lookup-Algorithmus, der in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) spezifiziert ist; der `"best fit"` Matcher ermöglicht es der Laufzeitumgebung, eine Locale bereitzustellen, die zumindest, aber möglicherweise mehr, für die Anfrage geeignet ist als das Ergebnis des Lookup-Algorithmus. Wenn die Anwendung kein `locales` Argument bereitstellt oder die Laufzeitumgebung keine Locale hat, die der Anfrage entspricht, wird die Standard-Locale der Laufzeitumgebung verwendet. Der Matcher kann ge, mit einer Eigenschaft des `options` Arguments ausgewählt werden (siehe unten).

Wenn der ausgewählte Locale-Identifikator eine Unicode-Erweiterungsfolge hatte, wird diese Erweiterung jetzt verwendet, um das konstruierte Objekt zu konfigurieren oder das Verhalten der Funktion anzupassen. Jeder Konstruktor oder Funktion unterstützt nur einen Teil der für die Unicode-Erweiterung definierten Schlüssel, und die unterstützten Werte hängen oft vom Locale-Identifikator ab. Zum Beispiel wird der Schlüssel `"co"` (Kollation) nur von {{jsxref("Intl.Collator")}} unterstützt, und sein `"phonebk"` Wert nur für Deutsch.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Kollatoren, die objekten eine sprachsensitive Zeichenkettenvergleichung ermöglichen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die eine sprachsensitive Datums- und Zeitformatierung ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die eine konsistente Übersetzung von Sprach-, Regions- und Skriptnamen ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die eine lokal-sensitive Dauerformatierung ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die eine sprachsensitive Listenformatierung ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die einen Unicode-Locale-Identifikator darstellen.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die eine sprachsensitive Zahlenformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die eine pluralsensitive Formatierung und sprachspezifische Regeln für Plurale ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive relative Zeitformatierung ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die eine lokal sensible Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der string `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Locale-Namen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array zurück, das die unterstützten einzigartigen Kalender-, Kollations-, Währungs-, Nummerierungssysteme- oder Einheitswerte enthält, die von der Implementierung unterstützt werden.

## Beispiele

### Formatierung von Daten und Zahlen

Sie können `Intl` verwenden, um Daten und Zahlen in einer Form zu formatieren, die in einer bestimmten Sprache und Region konventionell ist:

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

### Verwendung der bevorzugten Sprache des Browsers

Anstatt einen fest codierten Locale-Namen an die `Intl` Methoden zu übergeben, können Sie die vom Benutzer bevorzugte Sprache verwenden, die von [`navigator.language`](/de/docs/Web/API/Navigator/language) bereitgestellt wird:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternativ bietet die [`navigator.languages`](/de/docs/Web/API/Navigator/languages) Eigenschaft eine sortierte Liste der vom Benutzer bevorzugten Sprachen. Diese Liste kann direkt an die `Intl` Konstruktoren übergeben werden, um eine präferenzbasierte Standortauswahl von Locales zu implementieren. Der [Locale-Verhandlungsprozess](#locale-identifikation_und_verhandlung) wird verwendet, um die geeignetste verfügbare Locale auszuwählen:

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
- [Die ECMAScript-Internationalisierungs-API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) von Norbert Lindenberg (2012)
