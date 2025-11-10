---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Das **`Intl`** Namensraum-Objekt enthält mehrere Konstruktoren sowie Funktionen, die den Internationalisierungs-Konstruktoren und anderen sprachsensitiven Funktionen gemeinsam sind. Zusammen bilden sie die ECMAScript Internationalization API, die sprachsensitive Zeichenfolgenvergleiche, Nummernformatierung, Datums- und Zeitformatierung und mehr bietet.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Intl` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Intl` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

Die Internationalisierungs-Konstruktoren sowie mehrere sprachsensitive Methoden anderer Konstruktoren (unter [Siehe auch](#siehe_auch)) verwenden ein gemeinsames Muster zur Identifizierung von Gebietsschemen und zur Bestimmung desjenigen, das sie tatsächlich verwenden werden: Sie akzeptieren alle `locales`- und `options`-Argumente und verhandeln die angeforderten Gebietsschema(s) gegenüber den von ihnen unterstützten Gebietsschemen unter Verwendung eines Algorithmus, der in der Eigenschaft `options.localeMatcher` angegeben ist.

### locales-Argument

Das `locales`-Argument wird verwendet, um das in einer gegebenen Operation verwendete Gebietsschema zu bestimmen. Die JavaScript-Implementierung prüft `locales` und berechnet dann ein Gebietsschema, das es versteht und das am ehesten der ausgedrückten Präferenz entspricht. `locales` kann sein:

- `undefined` (oder weggelassen): Das Standardgebietsschema der Implementierung wird verwendet.
- Ein Gebietsschema: Ein Gebietsschema-Identifier oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Objekt, das einen Gebietsschema-Identifier umschließt.
- Eine Liste von Gebietsschemen: Jeder andere Wert, der in ein Objekt konvertiert und dann als ein Array von Gebietsschemen behandelt wird.

In den letzten beiden Fällen ist das tatsächlich verwendete Gebietsschema das am besten unterstützte, das durch die [Gebietsschema-Verhandlung](#gebietsbestimmung_und_-verhandlung) ermittelt wird. Wenn ein Gebietsschema-Identifier kein String oder Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn ein Gebietsschema-Identifier ein syntaktisch ungültiger String ist, wird ein {{jsxref("RangeError")}} ausgelöst. Wenn ein Gebietsschema-Identifier gut geformt, aber von der Implementierung nicht erkannt wird, wird er ignoriert und das nächste Gebietsschema in der Liste wird in Betracht gezogen, letztendlich fällt es auf das Systemgebietsschema zurück. Sie sollten sich jedoch nicht darauf verlassen, dass ein bestimmter Gebietsschema-Name ignoriert wird, da die Implementierung in Zukunft für jedes Gebietsschema Daten hinzufügen kann. Zum Beispiel verwendet `new Intl.DateTimeFormat("default")` nur das Standardgebietsschema der Implementierung, weil `"default"` syntaktisch gültig, aber als kein Gebietsschema erkannt ist.

Ein Gebietsschema-Identifier ist ein String, der aus Folgendem besteht:

1. Einem Sprach-Subtag mit 2–3 oder 5–8 Buchstaben
2. Einem Skript-Subtag mit 4 Buchstaben {{optional_inline}}
3. Einem Regions-Subtag mit entweder 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Ein oder mehreren einzigartigen Varianten-Subtags, jeweils mit 5–8 alphanumerischen Zeichen oder einer Ziffer gefolgt von 3 alphanumerischen Zeichen {{optional_inline}}
5. Ein oder mehreren {{Glossary("BCP_47_language_tag", "BCP 47")}} Erweiterungsfolgen {{optional_inline}}
6. Eine private Nutzungserweiterungsfolge {{optional_inline}}

Jeder Subtag und jede Sequenz sind durch Bindestriche getrennt. Gebietsschema-Identifier sind nicht unterscheidend nach Groß- und Kleinschreibung {{Glossary("ASCII", "ASCII")}}. Der Konvention nach wird jedoch empfohlen, Großbuchstaben für den ersten Buchstaben von Skript-Subtags zu verwenden, Großbuchstaben für Regions-Subtags und Kleinbuchstaben für alles andere. Zum Beispiel:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache) wie es in Österreich (Region) verwendet wird
- `"zh-Hans-CN"`: Chinesisch (Sprache) in vereinfachten Schriftzeichen (Skript) wie es in China (Region) verwendet wird
- `"en-emodeng"`: Englisch (Sprache) im "Frühneuenglisch" Dialekt (Variante)

Subtags, die Sprachen, Skripte, Regionen (einschließlich Ländern) und (selten verwendete) Varianten identifizieren, sind im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Register wird regelmäßig aktualisiert, und Implementierungen sind möglicherweise nicht immer auf dem neuesten Stand, daher sollten Sie sich nicht zu sehr darauf verlassen, dass Subtags universell unterstützt werden.

BCP 47 Erweiterungssequenzen bestehen aus einer einzelnen Ziffer oder einem Buchstaben (außer `"x"`) und einem oder mehreren Subtags mit zwei bis acht Buchstaben oder Ziffern, die durch Bindestriche getrennt sind. Nur eine Folge ist für jede Ziffer oder jeden Buchstaben erlaubt: `"de-a-foo-a-foo"` ist ungültig. BCP 47 Erweiterungs-Subtags sind im [Unicode CLDR-Projekt](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Erweiterungen definierte Semantiken:

- Die `"u"` (Unicode) Erweiterung kann verwendet werden, um zusätzliche Anpassungen von `Intl` API-Objekten anzufordern. Beispiele:
  - `"de-DE-u-co-phonebk"`: Verwenden Sie die Telefonbuchvariante der deutschen Sortierreihenfolge, die umgelautete Vokale als entsprechende Zeichenpaare interpretiert: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwenden Sie thailändische Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) bei der Nummernformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwenden Sie den japanischen Kalender bei der Datums- und Zeitformatierung, sodass 2013 als Jahr 25 der Heisei-Periode ausgedrückt wird, oder 平成 25.
  - `"en-GB-u-ca-islamic-umalqura"`: Verwenden Sie britisches Englisch mit dem Umm al-Qura (Hijri) Kalender, wo das gregorianische Datum 14. Oktober 2017 das Hijri-Datum 24. Muharram, 1439 ist.

- Die `"t"` (transformiert) Erweiterung zeigt transformierten Inhalt an: zum Beispiel Text, der aus einem anderen Gebietsschema übersetzt wurde. Keine `Intl` Funktionalität berücksichtigt derzeit die `"t"` Erweiterung. Diese Erweiterung enthält jedoch manchmal ein eingebettetes Gebietsschema (ohne Erweiterungen): zum Beispiel enthält die transformierte Erweiterung in `"de-t-en"` den Gebietsschema-Identifier für Englisch. Wenn ein eingebettetes Gebietsschema vorhanden ist, muss es ein gültiger Gebietsschema-Identifier sein. Zum Beispiel, da `"en-emodeng-emodeng"` ungültig ist (weil es ein doppeltes `emodeng` Varianten-Subtag enthält), ist `"de-t-en-emodeng-emodeng"` ebenfalls ungültig.

Schließlich kann eine private Nutzungserweiterungssequenz mit dem Buchstaben `"x"` auftreten, gefolgt von einem oder mehreren ein- bis achtbuchstabigen oder numerischen Subtags, die durch Bindestriche getrennt sind. Dies ermöglicht es Anwendungen, Informationen für den eigenen privaten Gebrauch zu kodieren, die von allen `Intl` Operationen ignoriert werden.

### options-Argument

Das `options`-Argument muss ein Objekt sein mit Eigenschaften, die je nach Konstruktoren und Funktionen variieren. Wenn das `options`-Argument nicht bereitgestellt oder `undefined` ist, werden für alle Eigenschaften Standardwerte verwendet.

Eine Eigenschaft wird von allen sprachsensitiven Konstruktoren und Funktionen unterstützt: Die `localeMatcher` Eigenschaft, deren Wert ein String `"lookup"` oder `"best fit"` sein muss und der einen der unten beschriebenen Algorithmen zur Gebietsbestimmung auswählt.

### Gebietsbestimmung und -verhandlung

Die durch das `locales`-Argument angegebenen Gebietsschemen, nachdem Unicode-Erweiterungen von ihnen entfernt wurden, werden als priorisierte Anforderung der Anwendung interpretiert. Die Laufzeit vergleicht es mit den verfügbaren Gebietsschemen und wählt das am besten verfügbare aus. Es gibt zwei Übereinstimmungsalgorithmen: Der `"lookup"`-Matcher folgt dem Lookup-Algorithmus, wie er in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) spezifiziert ist; der `"best fit"`-Matcher ermöglicht es der Laufzeit, ein Gebietsschema bereitzustellen, das mindestens, aber möglicherweise mehr für die Anfrage geeignet ist als das Ergebnis des Lookup-Algorithmus. Wenn die Anwendung kein `locales`-Argument bereitstellt oder die Laufzeit kein Gebietsschema hat, das der Anfrage entspricht, wird das Standardgebietsschema der Laufzeit verwendet. Der Matcher kann mit einer Eigenschaft des `options`-Arguments ausgewählt werden (siehe unten).

Wenn der ausgewählte Gebietsschema-Identifier eine Unicode-Erweiterungssequenz hatte, wird diese Erweiterung jetzt verwendet, um das konstruierte Objekt oder das Verhalten der Funktion anzupassen. Jeder Konstruktor oder jede Funktion unterstützt nur eine Teilmenge der für die Unicode-Erweiterung definierten Schlüssel, und die unterstützten Werte hängen oft vom Gebietsschema-Identifier ab. Zum Beispiel wird der `"co"`-Schlüssel (Kollation) nur von {{jsxref("Intl.Collator")}} unterstützt, und sein `"phonebk"`-Wert wird nur für Deutsch unterstützt.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Kollatoren, die sprachsensitive Zeichenfolgenvergleiche ermöglichen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Datums- und Zeitformatierung ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die die konsistente Übersetzung von Sprach-, Regions- und Skriptanzeige-Namen ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die gebietsschema-sensible Dauerformatierung ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Listenformatierung ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die ein Unicode-Gebietsschema-Identifier darstellen.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Nummernformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die plural-sensible Formatierung und sprachspezifische Regeln für Plurale ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive relative Zeitformatierung ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die gebietsschema-sensible Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Gebietsschema-Namen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array zurück, das die unterstützten einzigartigen Kalender-, Kollations-, Währungs-, Nummerierungs- oder Einheitswerte enthält, die von der Implementierung unterstützt werden.

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

Anstatt einen fest kodierten Gebietsschema-Namen an die `Intl`-Methoden zu übergeben, können Sie die vom Benutzer bevorzugte Sprache verwenden, die durch [`navigator.language`](/de/docs/Web/API/Navigator/language) bereitgestellt wird:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternativ bietet die Eigenschaft [`navigator.languages`](/de/docs/Web/API/Navigator/languages) eine sortierte Liste der bevorzugten Sprachen des Benutzers. Diese Liste kann direkt an die `Intl` Konstruktoren übergeben werden, um eine präferenzbasierte Fallback-Auswahl der Gebietsschemen zu implementieren. Der Prozess der [Gebietsschema-Verhandlung](#gebietsbestimmung_und_-verhandlung) wird verwendet, um das am besten geeignete verfügbare Gebietsschema zu wählen:

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
