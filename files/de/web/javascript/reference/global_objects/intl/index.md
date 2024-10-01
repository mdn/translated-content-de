---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Das **`Intl`** Namensraumobjekt enthält mehrere Konstruktoren sowie Funktionalitäten, die internationalisierungskonstruktoren und andere sprachsensitive Funktionen gemeinsam haben. Zusammen bilden sie die ECMAScript Internationalization API, die sprachsensitive Zeichenfolgenvergleiche, Zahlenformatierung, Datums- und Zeitformatierung und mehr bietet.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Intl` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Intl` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

Die Internationalisierungskonstruktoren sowie mehrere sprachsensitive Methoden anderer Konstruktoren (aufgeführt unter [Siehe auch](#siehe_auch)) verwenden ein gemeinsames Muster zur Ermittlung von Gebietsschemas und zur Bestimmung des tatsächlich genutzten Gebietsschemas: Sie akzeptieren alle die Argumente `locales` und `options` und verhandeln das angeforderte(n) Gebietsschema(e) gegenüber den unterstützten Gebietsschemas mithilfe eines in der Eigenschaft `options.localeMatcher` festgelegten Algorithmus.

### locales-Argument

Das `locales`-Argument wird verwendet, um das in einer bestimmten Operation verwendete Gebietsschema zu bestimmen. Die JavaScript-Implementierung prüft `locales` und berechnet dann ein von ihr verstandenes Gebietsschema, das möglichst nah an der ausgedrückten Präferenz liegt. `locales` kann sein:

- `undefined` (oder weggelassen): Das Standardgebietsschema der Implementierung wird verwendet.
- Ein Gebietsschema: Ein Gebietsschema-Identifikator oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Objekt, das einen Gebietsschema-Identifikator umschließt.
- Eine Liste von Gebietsschemas: Jeder andere Wert, der in ein Objekt umgewandelt und dann als Array von Gebietsschemas behandelt wird.

In den letzteren beiden Fällen ist das tatsächlich verwendete Gebietsschema das am besten unterstützte Gebietsschema, das durch [Gebietsschemanegotiation](#gebietsschema-identifikation_und_-verhandlung) bestimmt wird. Wenn ein Gebietsschema-Identifikator weder ein String noch ein Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn ein Gebietsschema-Identifikator ein syntaktisch ungültiger String ist, wird ein {{jsxref("RangeError")}} ausgelöst. Wenn ein Gebietsschema-Identifikator wohlgeformt ist, aber von der Implementierung nicht erkannt wird, wird er ignoriert und das nächste Gebietsschema in der Liste wird in Betracht gezogen, wobei schließlich auf das Gebietsschema des Systems zurückgegriffen wird. Sie sollten sich jedoch nicht darauf verlassen, dass ein bestimmter Gebietsschema-Name ignoriert wird, da die Implementierung für jedes Gebietsschema jederzeit Daten hinzufügen kann. Beispielsweise verwendet `new Intl.DateTimeFormat("default")` das Standardgebietsschema der Implementierung nur, weil `"default"` syntaktisch gültig, aber nicht als irgendein Gebietsschema erkannt ist.

Ein Gebietsschema-Identifikator ist ein String, der besteht aus:

1. Einem Sprachsubtag mit 2–3 oder 5–8 Buchstaben
2. Einem Schriftsubtag mit 4 Buchstaben {{optional_inline}}
3. Einem Regionssubtag mit entweder 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Einem oder mehreren einzigartigen Variantensubtags, die entweder 5–8 alphanumerische Zeichen oder eine Ziffer gefolgt von 3 alphanumerischen Zeichen aufweisen {{optional_inline}}
5. Einer oder mehreren BCP 47 Erweiterungssequenzen {{optional_inline}}
6. Einer privatnutzbaren Erweiterungssequenz {{optional_inline}}

Jeder Subtag und jede Sequenz werden durch Bindestriche getrennt. Gebietsschema-Identifikatoren sind nicht-empfindliche {{Glossary("ASCII", "ASCII")}}-Strings. Es ist jedoch konventionell, Initialkappen (der erste Buchstabe wird groß, nachfolgende Buchstaben klein geschrieben) für Schriftsubtags, Großschrift für Regionssubtags und Kleinbuchstaben für alles andere zu verwenden. Zum Beispiel:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache), wie in Österreich (Region) verwendet
- `"zh-Hans-CN"`: Chinesisch (Sprache) in vereinfachten Schriftzeichen (Schrift) in China (Region) verwendet
- `"en-emodeng"`: Englisch (Sprache) im Dialekt "Frühneuenglisch" (Variante)

Subtags, die Sprachen, Schriftarten, Regionen (einschließlich Ländern) und (selten verwendeten) Varianten identifizieren, sind im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Register wird regelmäßig aktualisiert und Implementierungen sind möglicherweise nicht immer aktuell, daher sollten Sie sich nicht zu sehr darauf verlassen, dass Subtags universell unterstützt werden.

BCP 47 Erweiterungssequenzen bestehen aus einer einzigen Ziffer oder einem Buchstaben (außer `"x"`) und einem oder mehreren Subtags aus zwei bis acht Buchstaben oder Ziffern, die durch Bindestriche getrennt sind. Für jede Ziffer oder jeden Buchstaben ist nur eine Sequenz zulässig: `"de-a-foo-a-foo"` ist ungültig. BCP 47 Erweiterungssubtags sind im [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Erweiterungen definierte Semantiken:

- Die `"u"` (Unicode) Erweiterung kann verwendet werden, um zusätzliche Anpassungen von `Intl` API-Objekten anzufordern. Beispiele:

  - `"de-DE-u-co-phonebk"`: Verwenden Sie die Telefonbuchvariante der deutschen Sortierreihenfolge, die umgelautete Vokale als entsprechende Zeichenpaare interpretiert: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwenden Sie thailändische Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) bei der Zahlenformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwenden Sie den japanischen Kalender bei der Datums- und Zeitformatierung, sodass 2013 als das Jahr 25 der Heisei-Periode oder 平成 25 ausgedrückt wird.
  - `"en-GB-u-ca-islamic"`: Verwenden Sie britisches Englisch mit dem islamischen (Hijri) Kalender, wobei der gregorianische 14. Oktober 2017 dem Hijri-Datum 24 Muharram 1439 entspricht.

- Die `"t"` (transformed) Erweiterung gibt transformierten Inhalt an: beispielsweise Text, der aus einem anderen Gebietsschema übersetzt wurde. Derzeit berücksichtigt keine `Intl`-Funktionalität die `"t"`-Erweiterung. Diese Erweiterung enthält jedoch manchmal ein verschachteltes Gebietsschema (ohne Erweiterungen): zum Beispiel enthält die transformierte Erweiterung in `"de-t-en"` den Gebietsschema-Identifikator für Englisch. Wenn ein verschachteltes Gebietsschema vorhanden ist, muss es ein gültiger Gebietsschema-Identifikator sein. Da beispielsweise `"en-emodeng-emodeng"` ungültig ist (weil es einen doppelten `emodeng`-Variantensubtag enthält), ist auch `"de-t-en-emodeng-emodeng"` ungültig.

Schließlich kann eine nur zur privaten Nutzung bestimmte Erweiterungssequenz mit dem Buchstaben `"x"` erscheinen, gefolgt von einem oder mehreren ein- bis achtbuchstabigen oder -zifferigen Subtags, die durch Bindestriche getrennt sind. Dadurch können Anwendungen Informationen für ihre eigene private Nutzung codieren, die von allen `Intl`-Operationen ignoriert werden.

### options-Argument

Das `options`-Argument muss ein Objekt sein, dessen Eigenschaften zwischen Konstruktoren und Funktionen variieren. Wenn das `options`-Argument nicht bereitgestellt oder undefiniert ist, werden für alle Eigenschaften Standardwerte verwendet.

Eine Eigenschaft wird von allen sprachsensitiven Konstruktoren und Funktionen unterstützt: Die `localeMatcher`-Eigenschaft, deren Wert eine Zeichenkette `"lookup"` oder `"best fit"` sein muss, und die eine der unten beschriebenen Gebietsschema-Abgleichsalgorithmen auswählt.

### Gebietsschema-Identifikation und -Verhandlung

Die Liste der durch das `locales`-Argument angegebenen Gebietsschemas, nachdem Unicode-Erweiterungen aus ihnen entfernt wurden, wird als eine priorisierte Anforderung von der Anwendung interpretiert. Die Laufzeit vergleicht sie mit den verfügbaren Gebietsschemas und wählt das am besten verfügbare aus. Zwei Abgleichsalgorithmen existieren: Der `"lookup"`-Matcher folgt dem in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) spezifizierten Lookup-Algorithmus; der `"best fit"`-Matcher erlaubt der Laufzeit, ein Gebietsschema bereitzustellen, das mindestens, aber möglicherweise mehr für die Anfrage geeignet ist als das Ergebnis des Lookup-Algorithmus. Wenn die Anwendung kein `locales`-Argument bereitstellt oder die Laufzeit kein Gebietsschema hat, das der Anfrage entspricht, wird das Standardgebietsschema der Laufzeit verwendet. Der Matcher kann über eine Eigenschaft des `options`-Arguments ausgewählt werden (siehe unten).

Wenn der ausgewählte Gebietsschema-Identifikator eine Unicode-Erweiterungssequenz hatte, wird diese Erweiterung jetzt verwendet, um das erstellte Objekt anzupassen oder das Verhalten der Funktion zu beeinflussen. Jeder Konstruktor oder jede Funktion unterstützt nur eine Teilmenge der für die Unicode-Erweiterung definierten Schlüssel, und die unterstützten Werte hängen oft vom Gebietsschema-Identifikator ab. Beispielsweise wird der `"co"`-Schlüssel (Sortierfolge) nur von {{jsxref("Intl.Collator")}} unterstützt und sein `"phonebk"`-Wert wird nur für Deutsch unterstützt.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Kollatoren, die objekten ermöglichen, sprachsensitive Zeichenfolgenvergleiche durchzuführen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensible Datums- und Zeitformatierung ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die die konsistente Übersetzung von Sprach-, Regions- und Schriftnamen ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die eine lokalsensible Dauerformatierung ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Listenformatierung ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die einen Unicode-Lokalisierungsbezeichner darstellen.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Zahlenformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die plural-sensitive Formatierung und sprachspezifische Pluralregeln ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive relative Zeitformatierung ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die lokalsensitive Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Gebietsschema-Namen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array mit den von der Implementierung unterstützten einzigartigen Kalender-, Sortierfolge-, Währungs-, Nummerierungs- oder Einheitswerten zurück.

## Beispiele

### Formatierung von Daten und Zahlen

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

### Verwendung der bevorzugten Sprache des Browsers

Anstatt einen fest codierten Gebietsschema-Namen an die `Intl`-Methoden zu übergeben, können Sie die vom Nutzer bevorzugte Sprache verwenden, die von [`navigator.language`](/de/docs/Web/API/Navigator/language) bereitgestellt wird:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternativ bietet die Eigenschaft [`navigator.languages`](/de/docs/Web/API/Navigator/languages) eine sortierte Liste der bevorzugten Sprachen des Nutzers. Diese Liste kann direkt an die `Intl`-Konstruktoren übergeben werden, um eine auf Präferenzen basierende Fallback-Auswahl von Gebietsschemas zu implementieren. Der [Gebietsschema-Verhandlungsprozess](#gebietsschema-identifikation_und_-verhandlung) wird verwendet, um das am besten verfügbare Gebietsschema auszuwählen:

```js
const count = 26254.39;

const formattedCount = new Intl.NumberFormat(navigator.languages).format(count);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap)
- [`navigator.language`](/de/docs/Web/API/Navigator/language)
- [`navigator.languages`](/de/docs/Web/API/Navigator/languages)
- [Die ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) von Norbert Lindenberg (2012)
