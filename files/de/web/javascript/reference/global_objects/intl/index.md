---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Das **`Intl`** Namespace-Objekt enthält mehrere Konstruktoren sowie Funktionalitäten, die den Internationalisierungskonstruktoren und anderen sprachsensitiven Funktionen gemeinsam sind. Zusammen bilden sie die ECMAScript Internationalization API, die sprachensensitive Zeichenfolgenvergleiche, Zahlenformatierung, Datums- und Zeitformatierung und mehr bietet.

## Beschreibung

Anders als die meisten globalen Objekte ist `Intl` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Intl`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Intl` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

Die Internationalisierungs-Konstruktoren sowie mehrere sprachsensitive Methoden anderer Konstruktoren (aufgelistet unter [siehe auch](#siehe_auch)) verwenden ein gemeinsames Muster, um Gebietsschemas zu identifizieren und dasjenige zu bestimmen, das sie tatsächlich verwenden werden: Alle akzeptieren `locales` und `options` Argumente und verhandeln die angeforderten Gebietsschema(s) im Vergleich zu den von ihnen unterstützten Gebietsschemas mit einem Algorithmus, der in der `options.localeMatcher` Eigenschaft angegeben ist.

### locales Argument

Das `locales`-Argument wird verwendet, um das in einer gegebenen Operation verwendete Gebietsschema zu bestimmen. Die JavaScript-Implementierung untersucht `locales` und berechnet dann ein Gebietsschema, das es versteht und das den angegebenen Präferenzen am nächsten kommt. `locales` kann sein:

- `undefined` (oder nicht angegeben): Das Standardgebietsschema der Implementierung wird verwendet.
- Ein Gebietsschema: Ein Gebietsschema-Identifikator oder ein [`Intl.Locale`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)-Objekt, das einen Gebietsschema-Identifikator umschließt.
- Eine Liste von Gebietsschema: Jeder andere Wert, der in ein Objekt umgewandelt wird und dann als ein Array von Gebietsschemas behandelt wird.

In den letzten beiden Fällen ist das tatsächlich verwendete Gebietsschema das am besten unterstützte Gebietsschema, das durch [Gebietsschemanegotiation](#gebietsschema-identifikation_und_-verhandlung) bestimmt wird. Wenn ein Gebietsschema-Identifikator keine Zeichenfolge oder kein Objekt ist, wird ein {{jsxref("TypeError")}} geworfen. Wenn ein Gebietsschema-Identifikator eine syntaktisch ungültige Zeichenfolge ist, wird ein {{jsxref("RangeError")}} geworfen. Wenn ein Gebietsschema-Identifikator wohlgeformt ist, aber von der Implementierung nicht erkannt wird, wird er ignoriert und das nächste Gebietsschema in der Liste wird betrachtet, schließlich auf das Systemgebietsschema zurückgegriffen. Sie sollten jedoch nicht darauf vertrauen, dass ein bestimmter Gebietsschemaname ignoriert wird, da die Implementierung möglicherweise in Zukunft Daten für ein beliebiges Gebietsschema hinzufügen kann. Zum Beispiel verwendet `new Intl.DateTimeFormat("default")` das Standardgebietsschema der Implementierung nur, weil `"default"` syntaktisch gültig ist, aber nicht als Gebietsschema erkannt wird.

Ein Gebietsschema-Identifikator ist eine Zeichenfolge, die besteht aus:

1. Einem Sprachsubtag mit 2–3 oder 5–8 Buchstaben
2. Einem Schriftsubtag mit 4 Buchstaben {{optional_inline}}
3. Einem Regionensubtag mit entweder 2 Buchstaben oder 3 Ziffern {{optional_inline}}
4. Einem oder mehreren Variantensubtags (alle müssen eindeutig sein), jeweils mit entweder 5–8 alphanumerischen Zeichen oder einer Ziffer, gefolgt von 3 alphanumerischen Zeichen {{optional_inline}}
5. Ein oder mehr BCP 47 Erweiterungssequenzen {{optional_inline}}
6. Einer privater Nutzungserweiterungssequenz {{optional_inline}}

Jeder Subtag und jede Sequenz ist durch Bindestriche getrennt. Gebietsschema-Identifikatoren sind [ASCII](/de/docs/Glossary/ASCII)-unempfindlich. Es ist jedoch konventionell, für Schriftsubtags Titelcase (der erste Buchstabe großgeschrieben, nachfolgende Buchstaben kleingeschrieben), für Regionensubtags Großbuchstaben und für alles andere Kleinbuchstaben zu verwenden. Zum Beispiel:

- `"hi"`: Hindi (Sprache)
- `"de-AT"`: Deutsch (Sprache), wie es in Österreich (Region) verwendet wird
- `"zh-Hans-CN"`: Chinesisch (Sprache), geschrieben in vereinfachten Schriftzeichen (Schrift), wie in China (Region) verwendet
- `"en-emodeng"`: Englisch (Sprache) im Dialekt "Frühneuzeitliches Englisch" (Variante)

Subtags, die Sprachen, Schriften, Regionen (einschließlich Ländern) und (selten verwendete) Varianten identifizieren, sind im [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) registriert. Dieses Register wird regelmäßig aktualisiert, und Implementierungen sind möglicherweise nicht immer auf dem neuesten Stand, daher sollten Sie sich nicht zu sehr darauf verlassen, dass Subtags universell unterstützt werden.

BCP 47 Erweiterungssequenzen bestehen aus einer einzelnen Ziffer oder einem Buchstaben (außer `"x"`) und einem oder mehreren Zwei- bis Acht-Zeichen langen Subtags, die durch Bindestriche getrennt sind. Nur eine Sequenz ist für jede Ziffer oder jeden Buchstaben erlaubt: `"de-a-foo-a-foo"` ist ungültig. BCP 47 Erweiterungssubtags sind im [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47) definiert. Derzeit haben nur zwei Erweiterungen definierte Semantiken:

- Die `"u"` (Unicode) Erweiterung kann verwendet werden, um zusätzliche Anpassungen von `Intl` API-Objekten anzufordern. Beispiele:

  - `"de-DE-u-co-phonebk"`: Verwenden Sie die Telefonbuchvariante der deutschen Sortierung, die umgelautete Vokale als entsprechende Zeichenpaare interpretiert: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Verwenden Sie thailändische Ziffern (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in der Zahlenformatierung.
  - `"ja-JP-u-ca-japanese"`: Verwenden Sie den japanischen Kalender bei der Datums- und Zeitformatierung, sodass 2013 als das Jahr 25 der Heisei-Periode oder 平成 25 ausgedrückt wird.
  - `"en-GB-u-ca-islamic"`: Verwenden Sie britisches Englisch mit dem islamischen (Hijri) Kalender, wobei das gregorianische Datum 14. Oktober 2017 das Hijri-Datum 24 Muharram 1439 ist.

- Die `"t"` (transformed) Erweiterung zeigt transformierten Inhalt an: zum Beispiel Text, der aus einem anderen Gebietsschema übersetzt wurde. Derzeit berücksichtigt keine `Intl`-Funktionalität die `"t"`-Erweiterung. Diese Erweiterung enthält jedoch manchmal ein verschachteltes Gebietsschema (ohne Erweiterungen): Beispielsweise enthält die transformierte Erweiterung in `"de-t-en"` den Gebietsschema-Identifikator für Englisch. Wenn ein verschachteltes Gebietsschema vorhanden ist, muss es ein gültiger Gebietsschema-Identifikator sein. Da `"en-emodeng-emodeng"` ungültig ist (weil es einen doppelten `emodeng`-Variante-Subtag enthält), ist auch `"de-t-en-emodeng-emodeng"` ungültig.

Schließlich kann eine privater Nutzungserweiterungssequenz mit dem Buchstaben `"x"` erscheinen, gefolgt von einem oder mehreren Subtags von ein bis acht Buchstaben oder Ziffern, die durch Bindestriche getrennt sind. Dies ermöglicht Anwendungen, Informationen für ihren eigenen privaten Gebrauch zu kodieren, die von allen `Intl`-Operationen ignoriert werden.

### options Argument

Das `options`-Argument muss ein Objekt mit Eigenschaften sein, die zwischen Konstruktoren und Funktionen variieren. Wenn das `options`-Argument nicht bereitgestellt oder undefiniert ist, werden für alle Eigenschaften Standardwerte verwendet.

Eine Eigenschaft wird von allen sprachsensitiven Konstruktoren und Funktionen unterstützt: Die `localeMatcher`-Eigenschaft, deren Wert eine Zeichenkette `"lookup"` oder `"best fit"` sein muss und die einen der unten beschriebenen Gebietsschema-Abgleichalgorithmen auswählt.

### Gebietsschema-Identifikation und -Verhandlung

Die Liste der durch das `locales`-Argument angegebenen Gebietsschemas, nachdem Unicode-Erweiterungen aus ihnen entfernt wurden, wird als priorisierte Anforderung der Anwendung interpretiert. Die Laufzeitumgebung vergleicht sie mit den ihr zur Verfügung stehenden Gebietsschemas und wählt das beste verfügbare aus. Zwei Abgleichalgorithmen existieren: Der `"lookup"`-Matcher folgt dem Lookup-Algorithmus, der in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) angegeben ist; der `"best fit"`-Matcher erlaubt es der Laufzeitumgebung, ein Gebietsschema bereitzustellen, das zumindest, aber möglicherweise besser für die Anforderung geeignet ist als das Ergebnis des Lookup-Algorithmus. Wenn die Anwendung kein `locales`-Argument bereitstellt oder die Laufzeitumgebung kein zu der Anforderung passendes Gebietsschema hat, wird das Standardgebietsschema der Laufzeitumgebung verwendet. Der Matcher kann mithilfe einer Eigenschaft des `options`-Arguments ausgewählt werden (siehe unten).

Wenn der ausgewählte Gebietsschema-Identifikator eine Unicode-Erweiterungssequenz hatte, wird diese Erweiterung jetzt verwendet, um das erstellte Objekt oder das Verhalten der Funktion anzupassen. Jeder Konstruktor oder jede Funktion unterstützt nur eine Teilmenge der für die Unicode-Erweiterung definierten Schlüssel, und die unterstützten Werte hängen oft von dem Gebietsschema-Identifikator ab. Beispielsweise wird der `"co"`-Schlüssel (Sortierung) nur von {{jsxref("Intl.Collator")}} unterstützt und sein `"phonebk"`-Wert nur für Deutsch.

## Statische Eigenschaften

- {{jsxref("Intl.Collator")}}
  - : Konstruktor für Kollatoren, die sprachsensitive Zeichenfolgenvergleiche ermöglichen.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Datums- und Zeitformatierung ermöglichen.
- {{jsxref("Intl.DisplayNames")}}
  - : Konstruktor für Objekte, die konsistente Übersetzungen von Sprach-, Regionen- und Schriftsubtags ermöglichen.
- {{jsxref("Intl.DurationFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Dauerformatierung ermöglichen.
- {{jsxref("Intl.ListFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Listenformatierung ermöglichen.
- {{jsxref("Intl.Locale")}}
  - : Konstruktor für Objekte, die einen Unicode-Gebietsschema-Identifikator darstellen.
- {{jsxref("Intl.NumberFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive Zahlenformatierung ermöglichen.
- {{jsxref("Intl.PluralRules")}}
  - : Konstruktor für Objekte, die pluralsensitive Formatierung und sprachspezifische Regeln für Pluralformen ermöglichen.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Konstruktor für Objekte, die sprachsensitive relative Zeitformatierung ermöglichen.
- {{jsxref("Intl.Segmenter")}}
  - : Konstruktor für Objekte, die sprachsensitive Textsegmentierung ermöglichen.
- `Intl[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenfolge `"Intl"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Gibt kanonische Gebietsschemanamen zurück.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Gibt ein sortiertes Array zurück, das die unterstützten einzigartigen Kalender-, Sortier-, Währungs-, Zahlensystem- oder Einheitswerte enthält, die von der Implementierung unterstützt werden.

## Beispiele

### Formatierung von Daten und Zahlen

Sie können `Intl` verwenden, um Daten und Zahlen in einer für eine bestimmte Sprache und Region konventionellen Form zu formatieren:

![Beispiel-Formatierung von Daten und Zahlen](0-c822de9e.md)

### Verwendung der bevorzugten Sprache des Browsers

Anstatt einen fest codierten Gebietsschemanamen an die `Intl`-Methoden zu übergeben, können Sie die vom Benutzer bevorzugte Sprache verwenden, die von [`navigator.language`](/de/docs/Web/API/Navigator/language) bereitgestellt wird:

![Beispiel-Verwendung der bevorzugten Sprache](1-6f8b771b.md)

Alternativ liefert die Eigenschaft [`navigator.languages`](/de/docs/Web/API/Navigator/languages) eine sortierte Liste der vom Benutzer bevorzugten Sprachen. Diese Liste kann direkt an die `Intl`-Konstruktoren übergeben werden, um eine präferenzbasierte Fallback-Auswahl von Gebietsschemas zu implementieren. Der [Prozess der Gebietsschemanegotiation](#gebietsschema-identifikation_und_-verhandlung) wird verwendet, um das geeignetste verfügbare Gebietsschema auszuwählen:

![Beispiel-Verwendung der bevorzugten Sprachenliste](2-5ba57e3d.md)

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
