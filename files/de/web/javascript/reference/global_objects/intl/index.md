---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Das Namespace-Objekt **`Intl`** enthält mehrere Konstruktoren sowie Funktionen, die den Internationalisierungskonstruktoren und anderen sprachabhängigen Funktionen gemeinsam sind. Zusammen bilden sie die ECMAScript Internationalization API, die unter anderem sprachabhängige Zeichenfolgenvergleiche sowie die Formatierung von Zahlen, Datumsangaben und Uhrzeiten ermöglicht.

## Beschreibung

Anders als die meisten globalen Objekte ist `Intl` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Intl`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (wie beim {{jsxref("Math")}}-Objekt).

Die Internationalisierungskonstruktoren sowie mehrere sprachabhängige Methoden anderer Konstruktoren (aufgeführt unter [Siehe auch](#siehe_auch)) verwenden ein gemeinsames Verfahren, um Locales zu identifizieren und die tatsächlich verwendete Locale zu bestimmen: Sie akzeptieren alle die Argumente `locales` und `options` und gleichen die angeforderten Locales mithilfe eines Algorithmus mit den unterstützten Locales ab. Der Algorithmus wird durch die Eigenschaft `options.localeMatcher` festgelegt.

### Argument locales

Das Argument `locales` bestimmt die bei einem Vorgang verwendete Locale. Die JavaScript-Implementierung wertet `locales` aus und ermittelt eine ihr bekannte Locale, die der angegebenen Präferenz möglichst nahekommt. `locales` kann Folgendes sein:

- `undefined` (oder weggelassen): Die Standard-Locale der Implementierung wird verwendet.
- Eine Locale: Ein Locale-Bezeichner oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Objekt, das einen Locale-Bezeichner kapselt.
- Eine Liste von Locales: Jeder andere Wert, der in ein Objekt umgewandelt und anschließend als Array von Locales behandelt wird.

In den beiden letztgenannten Fällen wird die tatsächlich verwendete Locale durch den [Locale-Abgleich](#identifizierung_und_abgleich_von_locales) als am besten unterstützte Locale bestimmt. Ist ein Locale-Bezeichner weder eine Zeichenfolge noch ein Objekt, wird ein {{jsxref("TypeError")}} ausgelöst. Ist ein Locale-Bezeichner eine syntaktisch ungültige Zeichenfolge, wird ein {{jsxref("RangeError")}} ausgelöst. Ist ein Locale-Bezeichner wohlgeformt, wird aber von der Implementierung nicht erkannt, wird er ignoriert und die nächste Locale in der Liste berücksichtigt. Falls keine passt, wird schließlich die Locale des Systems verwendet. Verlassen Sie sich jedoch nicht darauf, dass ein bestimmter Locale-Name ignoriert wird, da die Implementierung künftig Daten für jede beliebige Locale hinzufügen kann. Beispielsweise verwendet `new Intl.DateTimeFormat("default")` die Standard-Locale der Implementierung nur deshalb, weil `"default"` syntaktisch gültig ist, aber nicht als Locale erkannt wird.

Ein Locale-Bezeichner ist eine Zeichenfolge, die aus Folgendem besteht:

1. Ein Sprach-Subtag mit 2–3 oder 5–8 Buchstaben
2. Ein Schrift-Subtag mit 4 Buchstaben {{optional_inline}}
3. Ein Regions-Subtag mit entweder 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Ein oder mehrere Varianten-Subtags (die alle eindeutig sein müssen), jeweils mit entweder 5–8 alphanumerischen Zeichen oder einer Ziffer, auf die 3 alphanumerische Zeichen folgen {{optional_inline}}
5. Eine oder mehrere {{Glossary("BCP_47_language_tag", "BCP-47")}}-Erweiterungssequenzen {{optional_inline}}
6. Eine Erweiterungssequenz für die private Verwendung {{optional_inline}}

Die Subtags und Sequenzen sind jeweils durch Bindestriche getrennt. Bei Locale-Bezeichnern wird nicht zwischen {{Glossary("ASCII", "ASCII")}}-Groß- und Kleinbuchstaben unterschieden. Üblicherweise werden Schrift-Subtags jedoch mit einem Großbuchstaben am Anfang und anschließenden Kleinbuchstaben geschrieben, Regions-Subtags vollständig in Großbuchstaben und alle übrigen Bestandteile in Kleinbuchstaben. Beispiele:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache), wie es in Österreich (Region) verwendet wird
- `"zh-Hans-CN"`: Chinesisch (Sprache) in vereinfachten Schriftzeichen (Schrift), wie es in China (Region) verwendet wird
- `"en-emodeng"`: Englisch (Sprache) im Dialekt „Frühneuenglisch“ (Variante)

Subtags für Sprachen, Schriften, Regionen (einschließlich Ländern) und (selten verwendete) Varianten sind im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Verzeichnis wird regelmäßig aktualisiert. Da Implementierungen nicht immer auf dem neuesten Stand sind, sollten Sie sich nicht zu sehr darauf verlassen, dass Subtags überall unterstützt werden.

BCP-47-Erweiterungssequenzen bestehen aus einer einzelnen Ziffer oder einem einzelnen Buchstaben (außer `"x"`) und einem oder mehreren durch Bindestriche getrennten Subtags mit jeweils zwei bis acht Buchstaben oder Ziffern. Für jede Ziffer oder jeden Buchstaben ist nur eine Sequenz zulässig: `"de-a-foo-a-foo"` ist ungültig. BCP-47-Erweiterungs-Subtags sind im [Unicode-CLDR-Projekt](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Erweiterungen eine festgelegte Bedeutung:

- Mit der `"u"`-Erweiterung (Unicode) kann eine zusätzliche Anpassung von `Intl`-API-Objekten angefordert werden. Beispiele:
  - `"de-DE-u-co-phonebk"`: Verwendet die Telefonbuchvariante der deutschen Sortierreihenfolge, bei der Umlaute als entsprechende Zeichenpaare interpretiert werden: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwendet thailändische Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) bei der Zahlenformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwendet den japanischen Kalender bei der Formatierung von Datum und Uhrzeit, sodass 2013 als Jahr 25 der Heisei-Ära, also 平成 25, dargestellt wird.
  - `"en-GB-u-ca-islamic-umalqura"`: Verwendet britisches Englisch mit dem Umm-al-Qura-Kalender (Hidschra-Kalender), in dem das gregorianische Datum 14. Oktober 2017 dem Hidschra-Datum 24. Muharram 1439 entspricht.

- Die `"t"`-Erweiterung (transformed) kennzeichnet transformierte Inhalte, beispielsweise Text, der aus einer anderen Locale übersetzt wurde. Derzeit berücksichtigt keine `Intl`-Funktionalität die `"t"`-Erweiterung. Diese Erweiterung enthält jedoch manchmal eine verschachtelte Locale (ohne Erweiterungen): Beispielsweise enthält die transformed-Erweiterung in `"de-t-en"` den Locale-Bezeichner für Englisch. Ist eine verschachtelte Locale vorhanden, muss sie ein gültiger Locale-Bezeichner sein. Da beispielsweise `"en-emodeng-emodeng"` ungültig ist (weil es das Varianten-Subtag `emodeng` doppelt enthält), ist auch `"de-t-en-emodeng-emodeng"` ungültig.

Schließlich kann eine Erweiterungssequenz für die private Verwendung mit dem Buchstaben `"x"` auftreten, gefolgt von einem oder mehreren durch Bindestriche getrennten Subtags mit jeweils einem bis acht Buchstaben oder Ziffern. Damit können Anwendungen Informationen für ihre eigene private Verwendung codieren, die von allen `Intl`-Operationen ignoriert werden.

### Argument options

Das Argument `options` muss ein Objekt sein, dessen Eigenschaften sich je nach Konstruktor und Funktion unterscheiden. Wird das Argument `options` nicht angegeben oder ist es undefined, werden für alle Eigenschaften Standardwerte verwendet.

Eine Eigenschaft wird von allen sprachabhängigen Konstruktoren und Funktionen unterstützt: `localeMatcher`. Ihr Wert muss die Zeichenfolge `"lookup"` oder `"best fit"` sein. Sie wählt einen der nachfolgend beschriebenen Algorithmen für den Locale-Abgleich aus.

### Identifizierung und Abgleich von Locales

Die durch das Argument `locales` angegebene Liste von Locales wird, nachdem Unicode-Erweiterungen daraus entfernt wurden, als priorisierte Anforderung der Anwendung interpretiert. Die Laufzeitumgebung vergleicht sie mit den verfügbaren Locales und wählt die am besten geeignete aus. Es gibt zwei Abgleichalgorithmen: Der `"lookup"`-Abgleich folgt dem in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) festgelegten Lookup-Algorithmus. Der `"best fit"`-Abgleich ermöglicht es der Laufzeitumgebung, eine Locale bereitzustellen, die mindestens so gut, möglicherweise aber besser zur Anforderung passt als das Ergebnis des Lookup-Algorithmus. Gibt die Anwendung kein Argument `locales` an oder verfügt die Laufzeitumgebung über keine zur Anforderung passende Locale, wird die Standard-Locale der Laufzeitumgebung verwendet. Der Abgleichalgorithmus kann über eine Eigenschaft des Arguments `options` ausgewählt werden (siehe unten).

Wenn der ausgewählte Locale-Bezeichner eine Unicode-Erweiterungssequenz enthielt, wird diese nun verwendet, um das erzeugte Objekt oder das Verhalten der Funktion anzupassen. Jeder Konstruktor und jede Funktion unterstützt nur einen Teil der für die Unicode-Erweiterung definierten Schlüssel. Die unterstützten Werte hängen häufig vom Locale-Bezeichner ab. Beispielsweise wird der Schlüssel `"co"` (Sortierung) nur von {{jsxref("Intl.Collator")}} unterstützt und sein Wert `"phonebk"` nur für Deutsch.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Collator-Objekte, die sprachabhängige Zeichenfolgenvergleiche ermöglichen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die eine sprachabhängige Formatierung von Datum und Uhrzeit ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die eine einheitliche Übersetzung von Anzeigenamen für Sprachen, Regionen und Schriften ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die eine localeabhängige Formatierung von Zeitdauern ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die eine sprachabhängige Formatierung von Listen ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die einen Unicode-Locale-Bezeichner repräsentieren.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die eine sprachabhängige Zahlenformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die eine von der Pluralform abhängige Formatierung und sprachspezifische Pluralregeln ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die eine sprachabhängige Formatierung relativer Zeitangaben ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die eine localeabhängige Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Locale-Namen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array mit den eindeutigen Werten für Kalender, Sortierreihenfolgen, Währungen, Zahlensysteme oder Einheiten zurück, die von der Implementierung unterstützt werden.

## Beispiele

### Datumsangaben und Zahlen formatieren

Mit `Intl` können Sie Datumsangaben und Zahlen in einer Form formatieren, die für eine bestimmte Sprache und Region üblich ist:

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

### Bevorzugte Sprache des Browsers verwenden

Statt einen fest codierten Locale-Namen an die `Intl`-Methoden zu übergeben, können Sie die durch [`navigator.language`](/de/docs/Web/API/Navigator/language) bereitgestellte bevorzugte Sprache der Benutzerin oder des Benutzers verwenden:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternativ stellt die Eigenschaft [`navigator.languages`](/de/docs/Web/API/Navigator/languages) eine nach Präferenz geordnete Liste der bevorzugten Sprachen bereit. Diese Liste kann direkt an die `Intl`-Konstruktoren übergeben werden, um eine präferenzbasierte Auswahl von Ersatz-Locales zu ermöglichen. Durch den [Locale-Abgleich](#identifizierung_und_abgleich_von_locales) wird die am besten geeignete verfügbare Locale ausgewählt:

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
