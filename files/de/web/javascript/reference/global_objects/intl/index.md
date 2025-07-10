---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Intl`** Namensraum-Objekt enthält mehrere Konstruktoren sowie gemeinsame Funktionalitäten für die Internationalisierungskonstruktoren und andere sprachsensitive Funktionen. Gemeinsam bilden sie die ECMAScript Internationalization API, die sprachsensitive Stringvergleiche, Nummernformatierung, Datums- und Zeitformatierung und mehr bietet.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Intl` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Intl` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (genauso wie das {{jsxref("Math")}} Objekt).

Die Internationalisierungskonstruktoren sowie mehrere sprachsensitive Methoden anderer Konstruktoren (aufgelistet unter [Siehe auch](#siehe_auch)) verwenden ein gemeinsames Muster zur Identifizierung von Lokalen und zur Bestimmung desjenigen, das sie tatsächlich verwenden: Sie akzeptieren alle `locales` und `options` Argumente und verhandeln das angeforderte Locale gegen die von ihnen unterstützten Locale unter Verwendung eines Algorithmus, der in der Eigenschaft `options.localeMatcher` angegeben ist.

### locales Argument

Das `locales` Argument wird verwendet, um das Locale zu bestimmen, das in einem bestimmten Vorgang verwendet wird. Die JavaScript-Implementierung untersucht `locales` und ermittelt dann ein Locale, das es versteht und das möglichst nah an die ausdrückliche Präferenz herankommt. `locales` kann sein:

- `undefined` (oder weggelassen): Das Standard-Locale der Implementierung wird verwendet.
- Ein Locale: Ein Locale-Bezeichner oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) Objekt, das einen Locale-Bezeichner umschließt.
- Eine Liste von Locales: Jeder andere Wert, der in ein Objekt umgewandelt und dann als Array von Locales behandelt wird.

In den letzteren beiden Fällen wird das tatsächlich verwendete Locale als das am besten unterstützte Locale durch [Locale-Verhandlung](#locale-identifikation_und_-verhandlung) bestimmt. Wenn ein Locale-Bezeichner weder ein String noch ein Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn ein Locale-Bezeichner ein syntaktisch ungültiger String ist, wird ein {{jsxref("RangeError")}} ausgelöst. Wenn ein Locale-Bezeichner wohlgeformt ist, die Implementierung ihn aber nicht erkennt, wird er ignoriert und das nächste Locale in der Liste wird betrachtet, wobei schließlich auf das Locale des Systems zurückgegriffen wird. Es sollte jedoch nicht darauf vertraut werden, dass ein bestimmter Locale-Name ignoriert wird, da die Implementierung möglicherweise in Zukunft Daten für jedes beliebige Locale hinzufügt. Zum Beispiel verwendet `new Intl.DateTimeFormat("default")` das Standard-Locale der Implementierung nur, weil `"default"` syntaktisch gültig, aber als kein Locale erkannt ist.

Ein Locale-Bezeichner ist ein String, der besteht aus:

1. Einem Sprachsubtag mit 2–3 oder 5–8 Buchstaben
2. Einem Skriptsubtag mit 4 Buchstaben {{optional_inline}}
3. Einem Regionssubtag mit entweder 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Einem oder mehreren eindeutigen Variantensubtags, jeder mit entweder 5–8 alphanumerischen Zeichen oder einer Ziffer gefolgt von 3 alphanumerischen Zeichen {{optional_inline}}
5. Einem oder mehreren BCP 47 Erweiterungssequenzen {{optional_inline}}
6. Einer privater Verwendungs-Erweiterungssequenz {{optional_inline}}

Jeder Subtag und jede Sequenz sind durch Bindestriche getrennt. Locale-Bezeichner sind {{Glossary("ASCII", "ASCII")}}-unempfindlich gegenüber Groß- und Kleinschreibung. Es ist jedoch konventionell, Titel-Schreibung (erster Buchstabe groß, folgende Buchstaben klein) für Skriptsubtags zu verwenden, Großbuchstabenschreibung für Regionssubtags und Kleinschreibung für alles andere. Zum Beispiel:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache) wie in Österreich verwendet (Region)
- `"zh-Hans-CN"`: Chinesisch (Sprache), geschrieben in vereinfachten Schriftzeichen (Skript), wie in China verwendet (Region)
- `"en-emodeng"`: Englisch (Sprache) im Dialekt des "Frühen modernen Englisch" (Variante)

Subtags, die Sprachen, Skripte, Regionen (einschließlich Ländern) und (selten verwendete) Varianten identifizieren, sind im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Register wird regelmäßig aktualisiert, und Implementierungen sind möglicherweise nicht immer auf dem neuesten Stand, daher sollte nicht zu sehr darauf vertraut werden, dass Subtags universell unterstützt werden.

BCP 47 Erweiterungssequenzen bestehen aus einer einzigen Ziffer oder einem Buchstaben (außer `"x"`) und einem oder mehreren zwei- bis achtstelligen Buschtaben- oder Ziffernsubtags, die durch Bindestriche getrennt sind. Für jede Ziffer oder jeden Buchstaben ist nur eine Sequenz erlaubt: `"de-a-foo-a-foo"` ist ungültig. BCP 47 Erweiterungssubtags sind im [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Erweiterungen definierte Semantiken:

- Die `"u"` (Unicode) Erweiterung kann verwendet werden, um eine zusätzliche Anpassung von `Intl` API-Objekten zu verlangen. Beispiele:
  - `"de-DE-u-co-phonebk"`: Verwenden Sie die Telefonbuchvariante der deutschen Sortierreihenfolge, die umgelautete Vokale als entsprechende Buchstabenpaare interpretiert: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwenden Sie thailändische Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) bei der Nummernformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwenden Sie den japanischen Kalender bei der Datums- und Zeitformatierung, sodass 2013 als das Jahr 25 der Heisei-Periode, oder 平成 25, ausgedrückt wird.
  - `"en-GB-u-ca-islamic-umalqura"`: Verwenden Sie britisches Englisch mit dem Umm al-Qura (Hijri) Kalender, wobei das gregorianische Datum 14. Oktober 2017 das Hijri-Datum 24 Muharram 1439 ist.

- Die `"t"` (transformierte) Erweiterung zeigt transformierte Inhalte an: zum Beispiel Text, der aus einer anderen Locale übersetzt wurde. Keine `Intl` Funktionalität berücksichtigt derzeit die `"t"` Erweiterung. Diese Erweiterung enthält jedoch manchmal ein eingebettetes Locale (ohne Erweiterungen): beispielsweise enthält die transformierte Erweiterung in `"de-t-en"` den Locale-Bezeichner für Englisch. Wenn ein eingebettetes Locale vorhanden ist, muss es ein gültiger Locale-Bezeichner sein. Zum Beispiel ist `"en-emodeng-emodeng"` ungültig (weil es einen doppelten `emodeng` Variantensubtag enthält), daher ist auch `"de-t-en-emodeng-emodeng"` ungültig.

Schließlich kann eine private Verwendungs-Erweiterungssequenz mit dem Buchstaben `"x"` erscheinen, gefolgt von einem oder mehreren ein- bis achtstelligen Buchstaben- oder Ziffernsubtags, die durch Bindestriche getrennt sind. Dadurch können Anwendungen Informationen für den eigenen, privaten Gebrauch codieren, die von allen `Intl`-Operationen ignoriert werden.

### options Argument

Das `options` Argument muss ein Objekt mit Eigenschaften sein, die je nach Konstruktoren und Funktionen variieren. Wenn das `options` Argument nicht bereitgestellt wird oder `undefined` ist, werden für alle Eigenschaften Standardwerte verwendet.

Eine Eigenschaft wird von allen sprachsensitiven Konstruktoren und Funktionen unterstützt: Die `localeMatcher` Eigenschaft, deren Wert ein String `"lookup"` oder `"best fit"` sein muss und die eine der unten beschriebenen Lokalisierungs-Abgleichalgorithmen auswählt.

### Locale-Identifikation und -Verhandlung

Die Liste der Locale, die durch das `locales` Argument angegeben wird, nachdem die Unicode-Erweiterungen von ihnen entfernt wurden, wird als priorisierte Anfrage der Anwendung interpretiert. Die Laufzeit vergleicht es mit den Locales, die sie zur Verfügung hat, und wählt das am besten verfügbare aus. Es existieren zwei Abgleichalgorithmen: Der `"lookup"`-Matcher folgt dem in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) spezifizierten Suchalgorithmus; der `"best fit"`-Matcher lässt die Laufzeit ein Locale bereitstellen, das zumindest, aber möglicherweise mehr, für die Anfrage geeignet ist als das Ergebnis des Suchalgorithmus. Wenn die Anwendung kein `locales` Argument bereitstellt oder die Laufzeit kein Locale hat, das der Anfrage entspricht, wird das Standard-Locale der Laufzeit verwendet. Der Matcher kann über eine Eigenschaft des `options` Arguments ausgewählt werden (siehe unten).

Wenn der ausgewählte Locale-Bezeichner eine Unicode-Erweiterungssequenz hatte, wird diese Erweiterung jetzt verwendet, um das konstruierte Objekt oder das Verhalten der Funktion anzupassen. Jeder Konstruktor oder jede Funktion unterstützt nur eine Teilmenge der für die Unicode-Erweiterung definierten Schlüssel, und die unterstützten Werte hängen oft von dem Locale-Bezeichner ab. Zum Beispiel wird der `"co"` Schlüssel (Kollation) nur von {{jsxref("Intl.Collator")}} unterstützt, und sein `"phonebk"` Wert wird nur für Deutsch unterstützt.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Kollatoren, Objekte, die sprachsensitiven Stringvergleich ermöglichen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Datums- und Zeitformatierung ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die eine konsistente Übersetzung von Sprach-, Regions- und Skriptanzeigennamen ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die locale-sensitive Dauerformatierung ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die eine sprachsensitive Listenformatierung ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die einen Unicode-Locale-Bezeichner darstellen.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Nummernformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die plural-sensitive Formatierung und sprachspezifische Regeln für Plurale ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive relative Zeitformatierung ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die locale-sensitive Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Locale-Namen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array zurück, das die unterstützten, einzigartigen Kalender-, Kollations-, Währungs-, Nummerierungssystem- oder Einheitwerte enthält, die von der Implementierung unterstützt werden.

## Beispiele

### Formatierung von Daten und Nummern

Sie können `Intl` verwenden, um Daten und Nummern in einer für eine spezifische Sprache und Region konventionellen Form zu formatieren:

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

Anstatt einen festkodierten Locale-Namen an die `Intl` Methoden zu übergeben, können Sie die vom Benutzer bevorzugte Sprache verwenden, die von [`navigator.language`](/de/docs/Web/API/Navigator/language) bereitgestellt wird:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternativ bietet die Eigenschaft [`navigator.languages`](/de/docs/Web/API/Navigator/languages) eine sortierte Liste der vom Benutzer bevorzugten Sprachen. Diese Liste kann direkt an die `Intl` Konstruktoren übergeben werden, um eine auf Präferenzen basierende Fallback-Auswahl von Locales zu implementieren. Der [Locale-Verhandlungsprozess](#locale-identifikation_und_-verhandlung) wird verwendet, um das am besten geeignete verfügbare Locale auszuwählen:

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
