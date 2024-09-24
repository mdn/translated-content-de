---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Das **`Intl`** Namensraumobjekt enthält mehrere Konstruktoren sowie Funktionalitäten, die den Internationalisierungskonstruktoren und anderen sprachsensitiven Funktionen gemeinsam sind. Zusammen bilden sie die ECMAScript Internationalization API, die sprachsensitive Zeichenfolgenvergleiche, Zahlenformatierung, Datums- und Zeitformatierung und mehr bietet.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Intl` kein Konstruktor. Sie können es nicht mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Intl`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

Die Internationalisierungskonstruktoren sowie mehrere sprachsensitive Methoden anderer Konstruktoren (unter [Siehe auch](#siehe_auch) aufgeführt) verwenden ein gemeinsames Muster zur Identifizierung von Gebietsschemas und Bestimmung, welches sie tatsächlich verwenden werden: Sie akzeptieren alle `locales` und `options` Argumente und verhandeln das angeforderte(n) Gebietsschema(s) gegen die von ihnen unterstützten Gebietsschemas mit einem in der `options.localeMatcher`-Eigenschaft angegebenen Algorithmus.

### `locales`-Argument

Das `locales`-Argument wird verwendet, um das in einer bestimmten Operation verwendete Gebietsschema zu bestimmen. Die JavaScript-Implementierung prüft `locales` und berechnet dann ein Gebietsschema, das es versteht und das der geäußerten Präferenz am nächsten kommt. `locales` kann sein:

- `undefined` (oder weggelassen): Das Standardgebietsschema der Implementierung wird verwendet.
- Ein Gebietsschema: Ein Gebietsschema-Identifikator oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Objekt, das einen Gebietsschema-Identifikator umschließt.
- Eine Liste von Gebietsschemas: Jeder andere Wert, der in ein Objekt umgewandelt und dann als Array von Gebietsschemas behandelt wird.

In den beiden letztgenannten Fällen ist das tatsächlich verwendete Gebietsschema das am besten unterstützte Gebietsschema, das durch [Gebietsschemanegotiation](#gebietsschema-identifizierung_und_-verhandlung) bestimmt wird. Wenn ein Gebietsschema-Identifikator weder eine Zeichenkette noch ein Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn ein Gebietsschema-Identifikator eine syntaktisch ungültige Zeichenkette ist, wird ein {{jsxref("RangeError")}} ausgelöst. Wenn ein Gebietsschema-Identifikator wohlgeformt ist, aber von der Implementierung nicht erkannt wird, wird er ignoriert und das nächste Gebietsschema in der Liste wird in Betracht gezogen, wobei schließlich auf das Systemgebietsschema zurückgegriffen wird. Sie sollten jedoch nicht darauf vertrauen, dass ein bestimmter Gebietsschema-Name ignoriert wird, da die Implementierung für jedes Gebietsschema in Zukunft Daten hinzufügen kann. Zum Beispiel verwendet `new Intl.DateTimeFormat("default")` das Standardgebietsschema der Implementierung nur, weil `"default"` syntaktisch gültig, aber nicht als ein Gebietsschema erkannt wird.

Ein Gebietsschema-Identifikator ist eine Zeichenkette, die besteht aus:

1. Einem Sprachsubtag mit 2–3 oder 5–8 Buchstaben
2. Einem Skriptsubtag mit 4 Buchstaben {{optional_inline}}
3. Einem Regionssubtag entweder mit 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Einem oder mehreren Variantensubtags (alle müssen eindeutig sein), jeweils mit 5–8 alphanumerischen Zeichen oder einer Ziffer, gefolgt von 3 alphanumerischen Zeichen {{optional_inline}}
5. Ein oder mehreren BCP 47 Erweiterungssequenzen {{optional_inline}}
6. Einer Privatgebrauch-Erweiterungssequenz {{optional_inline}}

Jeder Subtag und jede Sequenz sind durch Bindestriche getrennt. Gebietsschema-Identifikatoren sind case-insensitive {{Glossary("ASCII")}}. Es ist jedoch üblich, Titel für Skriptsubtags (den ersten Buchstaben groß, nachfolgende Buchstaben klein) zu verwenden, Großbuchstaben für Regionssubtags und Kleinbuchstaben für alles andere. Beispiele:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache) wie in Österreich (Region) verwendet
- `"zh-Hans-CN"`: Chinesisch (Sprache), geschrieben in vereinfachtem Schriftzeichen (Skript) wie in China (Region) verwendet
- `"en-emodeng"`: Englisch (Sprache) im Dialekt "Frühneuenglisch" (Variante)

Subtags zur Identifizierung von Sprachen, Skripten, Regionen (einschließlich Länder) und (selten verwendeten) Varianten sind im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Register wird periodisch aktualisiert, und Implementierungen sind möglicherweise nicht immer auf dem neuesten Stand, daher sollten Sie sich nicht zu sehr darauf verlassen, dass Subtags universell unterstützt werden.

BCP 47 Erweiterungssequenzen bestehen aus einer einzigen Ziffer oder einem Buchstaben (außer `"x"`) und einem oder mehreren zwei- bis achtbuchstabigen oder numerischen Subtags, getrennt durch Bindestriche. Nur eine Sequenz ist für jede Ziffer oder jeden Buchstaben zulässig: `"de-a-foo-a-foo"` ist ungültig. BCP 47 Erweiterungssubtags sind im [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Erweiterungen definierte Semantiken:

- Die `"u"` (Unicode) Erweiterung kann verwendet werden, um zusätzliche Anpassungen von `Intl` API-Objekten anzufordern. Beispiele:

  - `"de-DE-u-co-phonebk"`: Verwenden Sie die Telefonbuchvariante der deutschen Sortierreihenfolge, die umgelautete Vokale als entsprechende Buchstabenpaare interpretiert: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwenden Sie thailändische Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in der Zahlenformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwenden Sie den japanischen Kalender in der Datums- und Zeitformatierung, sodass 2013 als das Jahr 25 der Heisei-Periode ausgedrückt wird, oder 平成 25.
  - `"en-GB-u-ca-islamic"`: Verwenden Sie britisches Englisch mit dem islamischen (Hijri) Kalender, wobei das gregorianische Datum 14. Oktober 2017 als Hijri-Datum 24 Muharram 1439 ist.

- Die `"t"` (transformiert) Erweiterung zeigt transformierten Inhalt an: beispielsweise Text, der aus einem anderen Gebietsschema übersetzt wurde. Keine `Intl` Funktionalität berücksichtigt derzeit die `"t"` Erweiterung. Diese Erweiterung enthält jedoch manchmal ein verschachteltes Gebietsschema (ohne Erweiterungen): zum Beispiel enthält die transformierte Erweiterung in `"de-t-en"` den Gebietsschema-Identifikator für Englisch. Wenn ein verschachteltes Gebietsschema vorhanden ist, muss es ein gültiger Gebietsschema-Identifikator sein. Zum Beispiel, da `"en-emodeng-emodeng"` ungültig ist (weil es ein doppeltes `emodeng` Variantensubtag enthält), ist `"de-t-en-emodeng-emodeng"` ebenfalls ungültig.

Schließlich kann eine Privatgebrauch-Erweiterungssequenz mit dem Buchstaben `"x"` erscheinen, gefolgt von einem oder mehreren ein- bis achtbuchstabigen oder numerischen Subtags, die durch Bindestriche getrennt sind. Dadurch können Anwendungen Informationen für ihren eigenen privaten Gebrauch kodieren, die von allen `Intl` Operationen ignoriert werden.

### `options`-Argument

Das `options`-Argument muss ein Objekt mit Eigenschaften sein, die zwischen Konstruktoren und Funktionen variieren. Wenn das `options`-Argument nicht bereitgestellt oder undefiniert ist, werden Standardwerte für alle Eigenschaften verwendet.

Eine Eigenschaft wird von allen sprachsensitiven Konstruktoren und Funktionen unterstützt: Die `localeMatcher`-Eigenschaft, deren Wert eine Zeichenkette `"lookup"` oder `"best fit"` sein muss und die einen der unten beschriebenen Gebietschema-Matching-Algorithmen auswählt.

### Gebietsschema-Identifizierung und -Verhandlung

Die durch das `locales`-Argument angegebene Liste von Gebietsschemas, nachdem Unicode-Erweiterungen aus ihnen entfernt wurden, wird als priorisierte Anforderung der Anwendung interpretiert. Die Laufzeit vergleicht sie mit den verfügbaren Gebietsschemas und wählt das beste verfügbare aus. Zwei Matching-Algorithmen existieren: Der `"lookup"` Matcher folgt dem Lookup-Algorithmus, der in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) spezifiziert ist; der `"best fit"` Matcher lässt die Laufzeit ein Gebietsschema bereitstellen, das zumindest, aber möglicherweise mehr, für die Anforderung geeignet ist als das Ergebnis des Lookup-Algorithmus. Wenn die Anwendung kein `locales`-Argument bereitstellt, oder die Laufzeit kein Gebietsschema hat, das der Anforderung entspricht, dann wird das Standardgebietsschema der Laufzeit verwendet. Der Matcher kann über eine Eigenschaft des `options`-Arguments ausgewählt werden (siehe unten).

Wenn der ausgewählte Gebietsschema-Identifikator eine Unicode-Erweiterungssequenz hatte, wird diese Erweiterung nun verwendet, um das konstruierte Objekt oder das Verhalten der Funktion anzupassen. Jeder Konstruktor oder jede Funktion unterstützt nur eine Teilmenge der für die Unicode-Erweiterung definierten Schlüssel, und die unterstützten Werte hängen oft vom Gebietsschema-Identifikator ab. Beispielsweise wird der `"co"` Schlüssel (Kollation) nur von {{jsxref("Intl.Collator")}} unterstützt, und sein `"phonebk"` Wert wird nur für Deutsch unterstützt.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Kollatoren, die sprachsensitive Zeichenfolgenvergleiche ermöglichen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Datums- und Zeitformatierung ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die die konsistente Übersetzung von Sprach-, Regions- und Skriptanzeigennamen ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die lokal-sensitive Dauerformatierung ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Listenformatierung ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die einen Unicode-Gebietsschema-Identifikator darstellen.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Zahlenformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die pluralsensitive Formatierung und sprachspezifische Regeln für Plurale ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive relative Zeitformatierung ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die lokal-sensitive Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Gebietsschema-Namen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array zurück, das die unterstützten einzigartigen Kalender-, Kollations-, Währungs-, Nummerierungssysteme oder Einheitswerte enthält, die von der Implementierung unterstützt werden.

## Beispiele

### Formatieren von Daten und Zahlen

Sie können `Intl` verwenden, um Daten und Zahlen in einer Form zu formatieren, die für eine bestimmte Sprache und Region üblich ist:

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

Anstatt einen fest codierten Gebietsschema-Namen an die `Intl`-Methoden zu übergeben, können Sie die vom Benutzer bevorzugte Sprache verwenden, die durch {{domxref("navigator.language")}} bereitgestellt wird:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternativ bietet die {{domxref("navigator.languages")}}-Eigenschaft eine sortierte Liste der bevorzugten Sprachen des Benutzers. Diese Liste kann direkt an die `Intl`-Konstruktoren übergeben werden, um eine auf Präferenzen basierende Fallbackauswahl von Gebietsschemas zu implementieren. Der [Gebietsschemanegotiation](#gebietsschema-identifizierung_und_-verhandlung)-Prozess wird verwendet, um das am besten geeignete verfügbare Gebietsschema auszuwählen:

```js
const count = 26254.39;

const formattedCount = new Intl.NumberFormat(navigator.languages).format(count);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{domxref("Keyboard.getLayoutMap()")}}
- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- [Die ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) von Norbert Lindenberg (2012)
