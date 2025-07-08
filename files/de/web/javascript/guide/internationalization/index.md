---
title: Internationalisierung
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript Internationalization API, die eine breite Palette von lokalisierungs- und kultursensitiven Daten und Operationen bereitstellt.

## Überblick

Das `Intl`-Objekt ist sehr anwendungsfallorientiert. Es stellt für jeden Anwendungsfall, der lokalspezifische Logik erfordert, ein separates Objekt bereit. Derzeit bietet es folgende Funktionalitäten:

- [Informationen über ein Gebietsschema abrufen](#gebietsschemainformationen) mit {{jsxref("Intl.Locale")}}.
- [Daten formatieren](#daten_formatieren) mit {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}}.
- [Sortierung](#sortierung) (d.h. Vergleich von Zeichenfolgen zum Sortieren oder Suchen) mit {{jsxref("Intl.Collator")}}.
- [Auswahl von Pluralformen](#pluralregeln) mit {{jsxref("Intl.PluralRules")}}.
- [Textaufteilung](#segmentierung) in Einheiten wie Wörter, Sätze oder Grapheme mit {{jsxref("Intl.Segmenter")}}.
- [Den angezeigten Namen abrufen](#angezeigte_namen) für Währungen, Sprachen, Schriftsysteme, Regionen und Zeitzonen mit {{jsxref("Intl.DisplayNames")}}.

Die meisten `Intl`-APIs haben ein ähnliches Design ({{jsxref("Intl.Locale")}} ist die einzige Ausnahme). Man beginnt damit, eine Instanz mit dem gewünschten Gebietsschema und Optionen zu erstellen. Dies definiert einen Satz von Regeln für die gewünschte Operation (Formatierung, Sortierung, Segmentierung etc.). Wenn Sie dann die Methode an der Instanz aufrufen, wie `format()`, `compare()` oder `segment()`, wendet das Objekt die angegebene Regel auf die übergebenen Daten an.

```js
// 1. Construct a formatter object, specifying the locale and formatting options:
const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// 2. Use the `format` method of the formatter object to format a number:
console.log(price.format(5.259)); // $5.26
```

Die allgemeine Signatur des Konstruktors ist:

```js-nolint
new Intl.SomeObject(locales, options)
```

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachcode oder einer {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Gebietsidentifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Gebietsschema-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die bestimmte Aspekte der Operation anpassen, was entscheidend ist, um zu verstehen, wie jedes `Intl`-Objekt verwendet werden kann.

## Gebietsschemainformationen

Gebietsschemas unterliegen allen Verhaltensweisen von `Intl`. Ein _Locale_ ist ein Satz von Konventionen, dargestellt in der `Intl`-API durch das {{jsxref("Intl.Locale")}}-Objekt. Alle `Intl`-Konstruktoren, die Sprache-Tags akzeptieren, akzeptieren auch `Intl.Locale`-Objekte.

Jedes Gebietsschema wird hauptsächlich durch drei Dinge definiert: ein {{jsxref("Intl/Locale/language", "language")}}, ein {{jsxref("Intl/Locale/script", "script")}} und eine {{jsxref("Intl/Locale/region", "region")}}. Wenn sie in dieser Reihenfolge durch `-` verbunden werden, bilden sie ein [BCP 47-Sprach-Tag](https://datatracker.ietf.org/doc/html/rfc5646).

- Die Sprache ist der wichtigste Teil des Gebietsschemas und obligatorisch. Bei Angabe einer einzigen Sprache, wie `en` oder `fr`, gibt es Algorithmen, um den Rest der Informationen abzuleiten (siehe {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}).
- Oftmals möchten Sie jedoch auch die Region angeben, da sich die Konventionen zwischen Regionen, die dieselbe Sprache sprechen, drastisch unterscheiden können. Zum Beispiel ist das Datumsformat in den USA MM/TT/JJJJ, während es in Großbritannien TT/MM/JJJJ ist. Daher ist es wichtig, `en-US` oder `en-GB` anzugeben.
- Sie können auch ein Schriftsystem angeben. Das Schriftsystem ist das Schreibsystem oder die Zeichen, die verwendet werden, um die Sprache zu transkribieren. In der Praxis ist das Schriftsystem oft unnötig, da die Sprache in einer bestimmten Region nur in einem Schriftsystem geschrieben wird. Es gibt jedoch Ausnahmen, wie die serbische Sprache, die sowohl in lateinischer als auch in kyrillischer Schrift geschrieben werden kann (`sr-Latn` und `sr-Cyrl`), oder die chinesische Sprache, die sowohl in vereinfachter als auch in traditioneller Schrift geschrieben werden kann (`zh-Hans` und `zh-Hant`).

```js
// These two are equivalent when passed to other Intl APIs
const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-Latn-US");

console.log(locale1.language, locale1.script, locale1.region); // "en", undefined, "US"
console.log(locale2.language, locale2.script, locale2.region); // "en", "Latn", "US"
```

Ein Gebietsschema enthält auch einen Satz von Konventionen, die von dieser besonderen Kultur verwendet werden:

<table>
<thead><tr><th>Anwendungsfall</th><th>Eigenschaft</th><th>Beschreibung</th><th>Erweiterungssubtag</th></tr></thead>
<tbody>
<tr>
<td rowspan="2">Datums-/Zeitformatierung</td>
<td>{{jsxref("Intl/Locale/calendar", "calendar")}}</td>
<td>Verwendet, um Tage in Jahre, Monate und Wochen zu gruppieren und ihnen Namen zuzuweisen. Zum Beispiel wird das <code>gregory</code> Datum "2022-01-01" im <code>hebrew</code> Kalender zu "28 Tevet 5782".</td>
<td><code>ca</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}</td>
<td>Entscheidet, ob Zeiten im 12-Stunden- oder 24-Stunden-Format angezeigt werden und ob die kleinste Stundenzahl 0 oder 1 ist.</td>
<td><code>hc</code></td>
</tr>
<tr>
<td>Zahlenformatierung, einschließlich Daten, Zeiten, Dauer etc.</td>
<td>{{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}}</td>
<td>Transformiert Zahlen in eine auf das Gebietsschema abgestimmte Notation. Das reguläre <code>0123456789</code> System wird <code>latn</code> (Latein) genannt. Oft hat jedes Schriftsystem ein Nummerierungssystem, das nur eine Ziffer-für-Ziffer-Übersetzung ist, aber einige Schriftsysteme haben mehr als ein Nummerierungssystem, einige schreiben normalerweise keine Zahlen in dieser Schrift (zum Beispiel hat Chinesisch sein eigenes <code>hanidec</code> Nummerierungssystem, aber die meisten Texte verwenden das Standard <code>latn</code> System), und andere benötigen spezielle Konvertierungsalgorithmen (zum Beispiel römische Zahlen — <code>roman</code>).</td>
<td><code>nu</code></td>
</tr>
<tr>
<td rowspan="3">Sortierung</td>
<td>{{jsxref("Intl/Locale/collation", "collation")}}</td>
<td>Definiert den generischen Sortieralgorithmus. Zum Beispiel wird bei Verwendung der deutschen <code>phonebk</code> Sortierung "ä" als "ae" behandelt und wird zwischen "ad" und "af" einsortiert.</td>
<td><code>co</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/caseFirst", "caseFirst")}}</td>
<td>Entscheidet, ob Groß- oder Kleinbuchstaben zuerst sortiert werden sollen oder ob die Groß-/Kleinschreibung ignoriert werden soll.</td>
<td><code>kf</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/numeric", "numeric")}}</td>
<td>Entscheidet, ob Zahlen als Zahlen oder als Strings sortiert werden. Zum Beispiel, wenn wahr, wird "10" nach "2" einsortiert.</td>
<td><code>kn</code></td>
</tr>
</tbody>
</table>

Sie können diese Eigenschaften explizit angeben, wenn Sie das `Intl.Locale` konstruieren oder Sprach-Tags an andere `Intl`-Konstruktoren übergeben. Es gibt zwei Möglichkeiten, dies zu tun — sie an das Sprach-Tag anhängen oder sie als Optionen angeben.

- Um sie an das Sprach-Tag anzuhängen, fügen Sie zuerst den String `-u` an (bedeutet "Unicode-Erweiterung"), dann den Erweiterungssubtag wie oben angegeben, dann den Wert.
- Um sie als Optionen anzugeben, fügen Sie einfach den Eigenschaftsnamen wie oben angegeben zusammen mit seinem Wert zum `options`-Objekt hinzu.

Mit `Intl.DateTimeFormat` als Beispiel erstellen beide der folgenden Zeilen einen Formatter, der Daten im hebräischen Kalender formatiert:

```js
const df1 = new Intl.DateTimeFormat("en-US-u-ca-hebrew");
const df2 = new Intl.DateTimeFormat("en-US", { calendar: "hebrew" });
```

Nicht erkannte Eigenschaften werden ignoriert, daher können Sie dieselbe Syntax wie oben mit `Intl.NumberFormat` verwenden, aber es wird nichts anderes bewirken als nur `en-US` zu übergeben, da die Zahlenformatierung die `calendar`-Eigenschaft nicht verwendet.

Es ist knifflig, die Standardwerte dieser Gebietsschema-Konventionen herauszufinden. `new Intl.Locale("en-US").calendar` gibt `undefined` zurück, da das `Locale`-Objekt nur die Informationen enthält, die Sie ihm übergeben haben. Der Standardkalender ist theoretisch abhängig davon, mit welcher API Sie den Kalender verwenden, daher können Sie den Standardkalender von `en-US` wie von `Intl.DateTimeFormat` verwendet mit der {{jsxref("Intl/DateTimeFormat/resolvedOptions", "resolvedOptions()")}}-Methode abrufen. Das Gleiche gilt für andere Eigenschaften.

```js
const locale = new Intl.Locale("en-US");
console.log(locale.calendar); // undefined; it's not provided
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar); // "gregory"
```

`Intl.Locale`-Objekte tun zwei Dinge gleichzeitig: Sie repräsentieren ein analysiertes BCP 47-Sprach-Tag (wie oben demonstriert) und sie liefern Informationen über dieses Gebietsschema. Alle seine Eigenschaften, wie beispielsweise `calendar`, werden nur aus der Eingabe extrahiert, ohne eine Datenquelle nach Standardwerten abzufragen. Andererseits hat es eine Gruppe von Methoden zum Abfragen realer Informationen über das Gebietsschema. Zum Beispiel ergänzen die Methoden {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}} und {{jsxref("Intl/Locale/getCollations", "getCollations()")}} die Eigenschaften `calendar`, `hourCycle`, `numberingSystem` und `collation`; jede gibt ein Array von bevorzugten Werten für diese Eigenschaft zurück.

```js
const locale = new Intl.Locale("ar-EG");
console.log(locale.getCalendars()); // ['gregory', 'coptic', 'islamic', 'islamic-civil', 'islamic-tbla']
```

`Intl.Locale`-Instanzen enthalten auch andere Methoden, die nützliche Informationen bereitstellen, wie {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.

## Herausfinden des Gebietsschemas

Eine gemeinsame Sorge für die Internationalisierung ist: wie weiß ich, welches Gebietsschema ich verwenden soll?

Die offensichtlichste Antwort ist "was der Benutzer bevorzugt". Browser stellen die Sprachpräferenzen des Benutzers über die [`navigator.languages`](/de/docs/Web/API/Navigator/languages)-Eigenschaft bereit. Dies ist ein Array von Sprachidentifikatoren, das direkt an den Formatter-Konstruktor übergeben werden kann — mehr dazu später. Der Benutzer kann diese Liste in seinen Browsereinstellungen konfigurieren. Sie können auch ein leeres Array oder `undefined` übergeben, was beides dazu führt, dass das Standard-Gebietsschema des Browsers verwendet wird.

```js
const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));

const numberFormatter2 = new Intl.NumberFormat([]);
```

Dies führt jedoch möglicherweise nicht immer zu dem wünschenswertesten Ergebnis. Von `Intl`-Formatierern formatierte Zeichenfolgen stellen einen winzigen Bruchteil des auf Ihrer Website angezeigten Textes dar; die meiste lokale Inhalte werden von Ihnen, dem Entwickler der Website, bereitgestellt. Angenommen, Ihre Website wird nur in zwei Sprachen angeboten: Englisch und Französisch. Wenn ein japanischer Benutzer Ihre Website besucht und erwartet, Ihre Website auf Englisch zu nutzen, wird er verwirrt sein, wenn er den englischen Text zwischen Zahlen und Daten auf Japanisch sieht!

Normalerweise möchten Sie nicht die Standardsprache des Browsers verwenden. Vielmehr möchten Sie dieselbe Sprache verwenden, die auch auf Ihre Website angeboten wird. Angenommen, Ihre Website hat einen Sprachumschalter, der die Auswahl des Benutzers irgendwo speichert — Sie könnten diesen direkt verwenden.

```js
// Suppose this can be changed by some site-wide control
const userSettings = {
  locale: "en-US",
  colorMode: "dark",
};
const numberFormatter = new Intl.NumberFormat(userSettings.locale);
console.log(numberFormatter.format(1234567.89));
```

Wenn Ihre Website über einen Backend verfügt, das die Sprache basierend auf dem {{httpheader("Accept-Language")}}-Header des Benutzers dynamisch auswählt und basierend darauf unterschiedliche HTML zurücksendet, könnten Sie auch die `lang`-Eigenschaft des HTML-Elements verwenden: `new Intl.NumberFormat(document.documentElement.lang)`.

Wenn Ihre Website nur in einer Sprache angeboten wird, können Sie das Gebietsschema auch fest in Ihrem Code hinterlegen: `new Intl.NumberFormat("en-US")`.

Wie bereits erwähnt, können Sie dem Konstruktor auch ein Array von Gebietsschemas übergeben, das eine Liste von Fallback-Optionen darstellt. Das erste Beispiel unter Verwendung von `navigator.languages` ist ein Beispiel hierfür: Wenn das erste benutzerkonfigurierte Gebietsschema für die bestimmte Operation nicht unterstützt wird, wird das nächste versucht und so weiter, bis ein angefordertes Gebietsschema gefunden wird, für das die Laufzeitumgebung Daten hat. Sie können dies auch manuell tun. Im folgenden Beispiel geben wir eine Liste von Gebietsschemas in abnehmender Spezifität an, die alle Sprachen darstellen, die von einem Hongkonger Chinesisch-Sprecher verstanden werden könnten, sodass der Formatter das spezifischste auswählt, das er unterstützt.

```js
const numberFormatter = new Intl.NumberFormat([
  "yue-Hant",
  "zh-Hant-HK",
  "zh-Hant",
  "zh",
]);
```

Es gibt keine API zur Auflistung aller unterstützten Gebietsschemas, aber es gibt einige Methoden zur Handhabung der Gebietsschemaliste:

- {{jsxref("Intl.getCanonicalLocales()")}}: Diese Funktion nimmt eine Liste von Gebietsschema-Identifikatoren und gibt eine Liste von kanonisierten Gebietsschema-Identifikatoren zurück. Dies ist nützlich, um den Kanonisierungsprozess für jeden `Intl`-Konstruktor zu verstehen.
- Die `supportedLocalesOf()`-Methode auf jedem `Intl`-Objekt (wie {{jsxref("Intl.DateTimeFormat.supportedLocalesOf()")}}): Diese Methode nimmt die gleichen Argumente wie der Konstruktor (`locales` und `options`) und gibt eine Teilmenge der angegebenen Gebietsschema-Tags zurück, die zu den gegebenen Daten passt. Dies ist nützlich, um zu verstehen, welche Gebietsschemas von der Laufzeitumgebung für eine bestimmte Operation unterstützt werden, zum Beispiel, um einen Sprachumschalter mit nur den unterstützten Sprachen anzuzeigen.

## Verständnis des Rückgabewerts

Die zweite gemeinsame Sorge für alle Objekte ist "Was gibt die Methode zurück?" Dies ist eine schwierige Frage, da es über die Struktur oder den Typ des zurückgegebenen Werts hinaus keine normative Spezifikation gibt, die angibt, was _genau_ zurückgegeben werden sollte. Meistens ist das Ergebnis einer Methode konsistent. Das Ergebnis kann jedoch je nach Implementierung variieren, selbst innerhalb desselben Gebietsschemas — Abweichungen des Outputs sind beabsichtigt und durch die Spezifikation erlaubt. Es ist möglicherweise auch nicht das, was Sie erwarten. Beispielsweise kann die von `format()` zurückgegebene Zeichenfolge nicht-unterbrechende Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse einer `Intl`-Methode nicht mit fest kodierten Konstanten vergleichen; sie sollten nur dem Benutzer angezeigt werden.

Natürlich scheint diese Antwort unbefriedigend, denn die meisten Entwickler wünschen sich, die Kontrolle darüber zu haben, wie das Ergebnis aussieht — zumindest möchten Sie nicht, dass Ihr Benutzer von unsinnigem Ergebnis verwirrt wird. Hier sind einige Richtlinien, sofern Sie Tests, ob automatisiert oder manuell, durchführen möchten:

- Testen Sie alle Gebietsschemas, die Ihr Benutzer möglicherweise verwendet. Dies ist einfacher, wenn Sie eine feste Reihe unterstützter Gebietsschemas haben (zum Beispiel über einen Sprachumschalter). Wenn Sie das verwenden, was der Benutzer bevorzugt, können Sie einige gängige für Ihre Benutzer auswählen, beachten jedoch, dass das, was der Benutzer sieht, variieren könnte. Sie können die Benutzerpräferenz in der Regel über die Testlauf-Konfiguration oder das Mocking der `Intl`-Konstruktoren simulieren.

- Testen Sie mit mehreren JavaScript-Engines. Die `Intl`-API wird direkt von der JavaScript-Engine implementiert, also sollten Sie beispielsweise erwarten, dass Node.js und Chrome (die beide V8 verwenden) denselben Output erzeugen, während Firefox (das SpiderMonkey verwendet) einen anderen Output haben könnte. Obwohl alle Engines wahrscheinlich die CLDR-Daten verwenden, verarbeiten sie sie in der Regel auf unterschiedliche Weise nach. Einige Browsereinstellungskonfigurationen (zum Beispiel zur Reduzierung der Installationsgröße) können auch beeinflussen, welche Gebietsschemas und Optionen unterstützt werden.

- Gehen Sie nicht vom erwarteten Ergebnis aus. Das bedeutet, dass Sie das Ergebnis nicht manuell schreiben sollten, wie `expect(result).toBe("foo")`. Stattdessen verwenden Sie Snapshot-Tests oder kopieren Sie den Zeichenfolgenwert aus dem Ergebnis eines Testlaufs.

## Daten formatieren

Ein Hauptanwendungsfall von `Intl` ist die Ausgabe von lokalisierten Texten, die strukturierte Daten darstellen. Dies ähnelt Übersetzungssoftware, doch anstatt Ihnen zu ermöglichen, beliebigen Text zu übersetzen, verarbeitet sie Daten wie Daten, Zahlen und Listen und formatiert sie gemäß lokalspezifischen Regeln.

Die Objekte {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} formatieren jeweils eine Art von Daten. Jede Instanz bietet zwei Methoden:

- `format()`: Nimmt ein Datenstück und gibt eine Zeichenfolge mithilfe der Formatierungsregel zurück, die durch das Gebietsschema und die Optionen bestimmt wird.
- `formatToParts()`: Nimmt die gleichen Daten und gibt die gleiche Zeichenfolge zurück, jedoch aufgeteilt in Teile, wobei jeder Teil ein Objekt mit einem `type` und einem `value` ist. Dies ist nützlich für fortgeschrittenere Anwendungsfälle, wie das Einfügen des formatierten Textes mit anderem Text.

Zum Beispiel hier ist eine typische Verwendung des {{jsxref("Intl.NumberFormat")}}-Objekts:

```js
// 1. Construct a formatter object, specifying the locale and formatting options:
const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// 2. Use the `format` method of the formatter object to format a number:
console.log(price.format(5.259)); // $5.26

// Or, use the `formatToParts` method to get the formatted number
// broken down into parts:
console.table(price.formatToParts(5.259));
// |   | type       | value |
// | 0 | "currency" | "$"   |
// | 1 | "integer"  | "5"   |
// | 2 | "decimal"  | "."   |
// | 3 | "fraction" | "26"  |
```

Sie müssen nicht immer ein Formatter-Objekt erstellen, um Zeichenfolgen zu formatieren. Für Gelegenheitsnutzungen können Sie auch direkt die `toLocaleString()`-Methode an den Daten aufrufen und das Gebietsschema und die Optionen als Argumente übergeben. Die `toLocaleString()`-Methode wird von {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}, {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}, {{jsxref("Number.prototype.toLocaleString()")}} usw. implementiert. Lesen Sie die Dokumentation für die Daten, die Sie formatieren, um zu sehen, ob sie `toLocaleString()` unterstützen und welche Formatter-Optionen es entspricht.

```js
console.log(
  (5.259).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }),
); // $5.26
```

Beachten Sie, dass `toLocaleString()` potenziell weniger effizient ist als die Verwendung eines Formatter-Objekts, da `toLocaleString` jedes Mal, wenn es aufgerufen wird, eine Suche in einer großen Datenbank von Lokalisierungsstrings durchführen muss. Wenn die Methode oft mit denselben Argumenten aufgerufen wird, ist es besser, ein Formatter-Objekt zu erstellen und dessen `format()`-Methode zu verwenden, da ein Formatter-Objekt die übergebenen Argumente speichert und möglicherweise entscheidet, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format`-Aufrufe in einem eingeschränkteren Kontext nach Lokalisierungsstrings suchen können.

### Datums- und Zeitformatierung

{{jsxref("Intl.DateTimeFormat")}} formatiert Daten und Zeiten sowie Bereiche von Daten und Zeiten. Das `DateTimeFormat`-Objekt akzeptiert Datums-/Zeit-Eingaben in einer der folgenden Formen: {{jsxref("Date")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}.

> [!NOTE]
> Sie können kein {{jsxref("Temporal.ZonedDateTime")}}-Objekt direkt übergeben, da die Zeitzone bereits im Objekt festgelegt ist. Sie sollten entweder {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} verwenden oder es zuerst in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt konvertieren.

Häufige Anwendungsfälle der lokalisierten Datums- und Zeitformatierung sind wie folgt:

- Ausgabe desselben Datums und derselben Zeit in einem anderen Kalendersystem, wie dem islamischen, hebräischen oder chinesischen Kalender.
- Ausgabe derselben realen Zeit (Moment), jedoch in einer anderen Zeitzone.
- Selektive Ausgabe bestimmter Komponenten des Datums und der Zeit, wie nur des Jahres und des Monats, und die spezifische Darstellung davon (wie "Donnerstag" oder "Do").
- Ausgabe des Datums gemäß lokalspezifischen Konventionen, wie MM/TT/JJJJ in den USA, TT/MM/JJJJ im Vereinigten Königreich oder JJJJ/MM/TT in Japan.
- Ausgabe der Zeit gemäß lokalspezifischen Konventionen, wie 12-Stunden- oder 24-Stunden-Uhr.

Um zu entscheiden, wie die formatierte Zeichenfolge aussieht, wählen Sie zunächst den Kalender (der das Jahr, den Monat, die Woche und die Tagesberechnung betrifft) und die Zeitzone (die die genaue Zeit sowie möglicherweise das Datum betrifft). Dies geschieht mit der oben genannten `calendar`-Option (oder dem `-ca-`-Erweiterungsschlüssel im Lokalidentifikator) und der `timeZone`-Option.

- `Date`-Objekte stellen einen einzigartigen Moment in der Zeitzone des Benutzers und im ISO 8601-Kalender dar (wie durch Methoden wie {{jsxref("Date.prototype.getHours()")}} und {{jsxref("Date.prototype.getMonth()")}} berichtet). Sie werden in den angegebenen `calendar` und `timeZone` durch Beibehalten des Moments konvertiert, sodass sich die Datum- und Zeitkomponenten ändern können.
- Verschiedene {{jsxref("Temporal")}}-Objekte haben bereits einen integrierten Kalender, sodass die `calendar`-Option mit dem Kalender des Objekts übereinstimmen muss – es sei denn, der Kalender des Datums ist `"iso8601"`, in welchem Fall es in den angeforderten `calendar` konvertiert wird. Diese Objekte haben keine Zeitzone, daher werden sie direkt in der angegebenen `timeZone` ohne Umwandlung angezeigt.

Hier zeigen wir, wie die Kombination aus `calendar`- und `timeZone`-Konfigurationen zu unterschiedlichen Darstellungen desselben Moments führen.

```js
// Assume that the local time zone is UTC
const targetDate = new Date(2022, 0, 1); // 2022-01-01 midnight in the local time zone
const results = [];

for (const calendar of ["gregory", "hebrew"]) {
  for (const timeZone of ["America/New_York", "Asia/Tokyo"]) {
    const df = new Intl.DateTimeFormat("en-US", {
      calendar,
      timeZone,
      // More on these later
      dateStyle: "full",
      timeStyle: "full",
    });
    results.push({ calendar, timeZone, output: df.format(targetDate) });
  }
}

console.table(results);
```

Die Ausgabe sieht folgendermaßen aus:

| calendar  | timeZone           | Ausgabe                                                        |
| --------- | ------------------ | -------------------------------------------------------------- |
| 'gregory' | 'America/New_York' | 'Freitag, 31. Dezember 2021 um 19:00:00 Eastern Standard Time' |
| 'gregory' | 'Asia/Tokyo'       | 'Samstag, 1. Januar 2022 um 9:00:00 Japan Standard Time'       |
| 'hebrew'  | 'America/New_York' | 'Freitag, 27. Tevet 5782 um 19:00:00 Eastern Standard Time'    |
| 'hebrew'  | 'Asia/Tokyo'       | 'Samstag, 28. Tevet 5782 um 9:00:00 Japan Standard Time'       |

Ein Datum/Zeit setzt sich aus den folgenden Komponenten zusammen: `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, und `timeZoneName`. Ihre nächste Entscheidung ist, welche Komponenten in der Ausgabe enthalten sein sollen und in welcher Form sie dargestellt werden sollen. Sie haben zwei Möglichkeiten:

- Sie können jede Komponente manuell konfigurieren, indem Sie Optionen mit demselben Namen wie die Komponente verwenden. Nur die von Ihnen spezifizierten Komponenten werden in die Ausgabe aufgenommen, mit der angegebenen Form.
- Sie können die Abkürzungen `dateStyle` und `timeStyle` verwenden, die vordefinierte Sätze von Komponenten sind. Sie erweitern sich zu einem Satz von Komponentenoptionen, abhängig vom Gebietsschema.

Sie sollten eine dieser beiden Methoden wählen, da sie sich gegenseitig ausschließen. Die gleichzeitige Verwendung beider Methoden führt zu einem Fehler.

Grundlegend, nachdem eine Kombination von Komponenten angefordert wird, sucht das `DateTimeFormat`-Objekt nach einer "Vorlage", die den angeforderten Komponenten entspricht, sodass es nur die Werte nacheinander ausfüllen muss. Nicht jede Kombination von Komponenten hat eine vordefinierte Vorlage. `DateTimeFormat` hat eine `formatMatcher`-Option, die entscheidet, wie die Verhandlung funktioniert, indem Komponenten länger oder kürzer als gefordert gemacht oder durch Hinzufügen oder Weglassen von Komponenten. Es wird ziemlich technisch, also sollten Sie das Referenzmaterial zum Thema [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) lesen, um besser zu verstehen, wie damit umgegangen wird.

Hier demonstrieren wir einige häufig verwendete Methoden zur Formatierung der Komponenten:

```js
const df1 = new Intl.DateTimeFormat("en-US", {
  // Include all components (usually)
  dateStyle: "full",
  timeStyle: "full",
});

const df2 = new Intl.DateTimeFormat("en-US", {
  // Display the calendar date
  era: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const df3 = new Intl.DateTimeFormat("en-US", {
  // Display a time like on a digital clock
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "shortOffset",
});

const targetDate = new Date(2022, 0, 1, 12, 34, 56); // 2022-01-01 12:34:56 in the local time zone
console.log(df1.format(targetDate));
// Saturday, January 1, 2022 at 12:34:56 PM Coordinated Universal Time
// January 1, 2022 AD
// 12:34:56 PM GMT
```

Es gibt noch andere Anpassungsoptionen. Zum Beispiel können Sie die Option `hourCycle` verwenden, um die Zeit im 12-Stunden- oder 24-Stunden-Format anzuzeigen und Mitternacht/Mittag als 12:00 oder 0:00 anzuzeigen. Sie können auch die Option `numberingSystem` verwenden, um alle Zahlen in einem anderen Nummerierungssystem anzuzeigen.

Neben `format()` gibt es eine zweite wichtige Methode, {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}, die einen Bereich von Daten oder Zeiten formatiert. Sie nimmt zwei Datumsangaben des gleichen Typs, formatiert jede davon, verbindet sie mit einem Bereichstrennzeichen (wie dem Gedankenstrich) und entfernt gegebenenfalls duplizierte Teile.

```js
const springBreak = {
  start: new Date(2023, 2, 10),
  end: new Date(2023, 2, 26),
};

const df = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });
console.log(df.formatRange(springBreak.start, springBreak.end));
// March 10 – 26, 2023
```

### Zahlenformatierung

Die Zahlenformatierung erfolgt mit dem {{jsxref("Intl.NumberFormat")}}-Objekt. Das `NumberFormat`-Objekt akzeptiert Eingaben in Form von Zahlen, Zeichenfolgen oder `BigInt`-Werten. Durch die Übergabe einer Zeichenfolge oder eines `BigInt` anstelle einer Zahl können Sie Zahlen formatieren, die zu groß oder zu klein sind, um präzise als JavaScript-Zahl dargestellt zu werden.

Häufige Anwendungsfälle der lokalisierten Zahlenformatierung sind wie folgt:

- Ausgabe der Zahl in einem anderen Nummerierungssystem (Schriftsystem), wie Chinesisch, Arabisch oder Römisch.
- Ausgabe der Zahl mit lokalspezifischen Konventionen, wie dem Dezimalsymbol (". " in Englisch, aber "," in vielen europäischen Kulturen) oder der Zifferngruppierung (3 Ziffern in Englisch, kann jedoch 4 oder 2 in anderen Kulturen sein und kann ", ", " " oder "." verwenden).
- Ausgabe der Zahl mit Exponentialnotation wie "3,7 Millionen" oder "2 Tausend".
- Ausgabe der Zahl als Währung, indem spezifische Währungszeichen und Rundungsregeln angewendet werden. Beispielsweise sind Geldwerte unter einem Cent in den USA oder unter einem Yen in Japan möglicherweise nicht sinnvoll anzuzeigen.
- Ausgabe der Zahl als Prozentsatz, indem lokal spezifische Umrechnungs- und Formatierungsregeln angewendet werden.
- Ausgabe der Zahl mit Einheiten, wie "Meter" oder "Liter", mit übersetzten Einheitsnamen.

Um zu entscheiden, wie die formatierte Zeichenfolge aussieht, wählen Sie zunächst das Nummerierungssystem (das sich auf die für die Ziffern verwendeten Zeichen auswirkt). Der Zweck eines Nummerierungssystems wurde bereits bei den [Gebietsschemainformationen](#gebietsschemainformationen) besprochen. Eine weitere Option, die Sie entscheiden müssen, ist der `style`, der den Kontext festlegt, in dem die Zahl dargestellt wird, und möglicherweise die Standardwerte anderer Optionen beeinflusst. Es kann entweder `"decimal"`, `"percent"`, `"currency"` oder `"unit"` sein. Wenn Sie Währungen formatieren möchten, müssen Sie die Option `currency` angeben. Wenn Sie Einheiten formatieren möchten, müssen Sie die Option `unit` angeben.

```js
const results = [];
for (const options of [
  { style: "decimal" }, // Format the number as a dimensionless decimal
  { style: "percent" }, // Format the number as a percentage; it is multiplied by 100
  { style: "currency", currency: "USD" }, // Format the number as a US dollar amount
  { style: "unit", unit: "meter" }, // Format the number as a length in meters
]) {
  const nf = new Intl.NumberFormat("en-US", options);
  results.push({ style: options.style, output: nf.format(1234567.89) });
}
console.table(results);
```

Das Ergebnis sieht folgendermaßen aus:

| style      | Ausgabe          |
| ---------- | ---------------- |
| 'decimal'  | '1.234.567,89'   |
| 'percent'  | '123.456.789%'   |
| 'currency' | '1.234.567,89 €' |
| 'unit'     | '1.234.567,89 m' |

Die nächste Gruppe von Optionen gibt an, wie der numerische Teil aussehen soll. Zunächst möchten Sie möglicherweise extrem große Werte auf eine lesbarere Weise darstellen. Sie können die Option `notation` auf `"scientific"` oder `"engineering"` setzen, die beide die `1.23e+6`-Notation verwenden. Der Unterschied besteht darin, dass die letztere Vielfache von 3 für den Exponenten verwendet, wobei die [Mantisse](https://de.wikipedia.org/wiki/Wissenschaftliche_Notation) (der Teil vor dem `e`-Symbol) zwischen 1 und 1000 bleibt, während die erstere beliebige ganze Zahlen für den Exponenten verwenden kann und die Mantisse zwischen 1 und 10 bleibt. Sie können auch `notation` auf `"compact"` setzen, um eine leserlichere Notation zu verwenden.

```js
const results = [];
for (const options of [
  { notation: "scientific" },
  { notation: "engineering" },
  { notation: "compact", compactDisplay: "short" }, // "short" is default
  { notation: "compact", compactDisplay: "long" },
]) {
  const nf = new Intl.NumberFormat("en-US", options);
  results.push({
    notation: options.compactDisplay
      ? `${options.notation}-${options.compactDisplay}`
      : options.notation,
    output: nf.format(12000),
  });
}
console.table(results);
```

Das Ergebnis sieht folgendermaßen aus:

| notation        | Ausgabe      |
| --------------- | ------------ |
| 'scientific'    | '1,2E4'      |
| 'engineering'   | '12E3'       |
| 'compact-short' | '12 Tsd.'    |
| 'compact-long'  | '12 Tausend' |

Dann möchten Sie möglicherweise die Zahl runden (falls Sie `notation` angegeben haben, dann nur den Mantissenteil), um keine Zahl anzuzeigen, die zu lang ist. Dies sind die Digit-Optionen, die beinhalten:

- `minimumIntegerDigits`
- `minimumFractionDigits`
- `maximumFractionDigits`
- `minimumSignificantDigits`
- `maximumSignificantDigits`
- `roundingPriority`
- `roundingIncrement`
- `roundingMode`

Die genaue Interaktion dieser Optionen ist ziemlich komplex und nicht wert, hier abgedeckt zu werden. Sie sollten die [Digit-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) Referenz für mehr Details lesen. Dennoch ist die allgemeine Idee einfach: Wir finden zuerst die Anzahl der Dezimalstellen, die wir behalten möchten, und dann runden wir die überflüssigen Dezimalstellen, entweder nach unten oder oben, je nachdem, was der Wert der letzten Ziffer ist.

```js
const results = [];
for (const options of [
  { minimumFractionDigits: 4, maximumFractionDigits: 4 },
  { minimumSignificantDigits: 4, maximumSignificantDigits: 4 },
  { minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" },
  {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    roundingMode: "floor",
    roundingIncrement: 10,
  },
]) {
  const nf = new Intl.NumberFormat("en-US", options);
  results.push({
    options,
    output: nf.format(1234.56789),
  });
}
console.table(results);
```

Das Ergebnis sieht folgendermaßen aus:

| options                                                                                                | Ausgabe      |
| ------------------------------------------------------------------------------------------------------ | ------------ |
| `{ minimumFractionDigits: 4, maximumFractionDigits: 4 }`                                               | '1.234,5679' |
| `{ minimumSignificantDigits: 4, maximumSignificantDigits: 4 }`                                         | '1.235'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" }`                        | '1.234'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor", roundingIncrement: 10 }` | '1.230'      |

Es gibt weitere Anpassungsoptionen. Zum Beispiel können Sie die Optionen `useGrouping` und `signDisplay` verwenden, um anzupassen, ob und wie die Gruppentrennzeichen (wie "," in "1.234.567,89") und das Vorzeichen angezeigt werden. Beachten Sie jedoch, dass die verwendeten Zeichen für das Gruppentrennzeichen, das Dezimaltrennzeichen und das Vorzeichen lokalspezifisch sind, sodass Sie sie nicht direkt anpassen können.

Neben `format()` gibt es eine zweite wichtige Methode, {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}, die einen Bereich von Zahlen formatiert. Sie nimmt zwei Zahlenrepräsentationen, formatiert jede davon, verbindet sie mit einem Bereichstrennzeichen (wie das en-Dash) und entfernt gegebenenfalls duplizierte Teile.

```js
const heightRange = {
  min: 1.63,
  max: 1.95,
};

const nf = new Intl.NumberFormat("en-US", { style: "unit", unit: "meter" });
console.log(nf.formatRange(heightRange.min, heightRange.max));
// 1.63–1.95 m
```

### Listenformatierung

Möglicherweise haben Sie bereits Code geschrieben, der Folgendes tut:

```js example-bad
const fruits = ["apple", "banana", "cherry"];
console.log(`I like ${fruits.join(", ")}.`);
// I like apple, banana, cherry.
```

Dieser Code ist nicht internationalisiert. In einigen Sprachen ist das Listentrennzeichen kein Komma. In den _meisten_ Sprachen (einschließlich Englisch) benötigen Sie eine Konjunktion vor dem letzten Element. Aber sogar nur ein "und" manuell hinzuzufügen, macht es nicht korrekt unter allen englischen Sprechern, weil es die Debatte der [Oxford-Kommas](https://de.wikipedia.org/wiki/Oxford-Komma) im Englischen gibt: "apple, banana, and cherry" vs. "apple, banana and cherry".

Das {{jsxref("Intl.ListFormat")}}-Objekt löst dieses Problem. Es nimmt ein Array von Zeichenfolgen und verbindet sie auf eine lokalspezifische Weise, sodass das Ergebnis eine Konjunktion (und), Disjunktion (oder) oder eine Liste von Einheiten darstellt.

```js
const fruits = ["apple", "banana", "cherry"];
const lf = new Intl.ListFormat("en-US", { style: "long", type: "conjunction" });
console.log(`I like ${lf.format(fruits)}.`);
// I like apple, banana, and cherry.

const lf = new Intl.ListFormat("en-US", { style: "long", type: "disjunction" });
console.log(`I can give you ${lf.format(fruits)}.`);
// I can give you apple, banana, or cherry.
```

Weitere Beispiele und Optionen finden Sie unter {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}.

### Relative Zeitformatierung

{{jsxref("Intl.RelativeTimeFormat")}} formatiert eine Zeitdifferenz. Das `RelativeTimeFormat`-Objekt nimmt relative Zeiten in Form von zwei Argumenten entgegen: einer Zahl (mit beliebigem Vorzeichen) und einer Zeiteinheit, wie `"day"`, `"hour"` oder `"minute"`.

Es erledigt mehrere Dinge auf einmal:

- Es lokalisiert und pluralisiert die Zeiteinheit, wie "1 day" vs. "2 days", ähnlich wie in der Zahlenformatierung.
- Es wählt die passende Phrase für vergangene und zukünftige Zeiten, z.B. "in 1 day" vs. "1 day ago".
- Es kann eine spezielle Phrase für einige Zeiteinheiten auswählen, wie "1 day ago" vs. "yesterday".

```js
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(-1, "hour")); // 1 hour ago
```

Weitere Beispiele und Optionen siehe {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}.

### Dauerformatierung

{{jsxref("Intl.DurationFormat")}} bietet Dauerformatierung an, wie "3 hours, 4 minutes, 5 seconds". Es ist keine primitive Operation mit eigenem Formatter: Es verwendet {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.ListFormat")}} intern, um jede Dauerkomponente zu formatieren, dann verbindet es sie mit einem Listentrennzeichen. Das `DurationFormat`-Objekt nimmt Dauerangaben in Form eines {{jsxref("Temporal.Duration")}}-Objekts oder eines einfachen Objekts mit denselben Eigenschaften entgegen.

Neben der Anpassung des Nummerierungssystems entscheidet die Dauerformatierungsoption darüber, ob und wie lange jede Komponente angezeigt werden soll.

```js
console.log(
  new Intl.DurationFormat("en-US", {
    style: "long",
  }).format({ hours: 3, minutes: 4, seconds: 5 }),
);
// 3 hours, 4 minutes, and 5 seconds
```

Weitere Beispiele und Optionen finden Sie unter {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}.

## Sortierung

Das {{jsxref("Intl.Collator")}}-Objekt ist nützlich zum Vergleichen und Sortieren von Zeichenfolgen. Es nimmt zwei Zeichenfolgen und gibt eine Zahl zurück, die ihre relative Reihenfolge angibt, auf dieselbe Weise wie das `compareFn`-Argument der {{jsxref("Array.prototype.sort")}}-Methode.

Es gibt viele Gründe, warum Sie keine JavaScript-Operatoren wie `===` oder `>` verwenden sollten, um benutzerorientierte Zeichenfolgen zu vergleichen:

- Irrelevante orthografische Varianten: Zum Beispiel sind im Englischen "naïve" und "naive" nur alternative Schreibweisen des gleichen Wortes und sollten als gleich behandelt werden.
- Ignorieren der Groß-/Kleinschreibung: Oft möchten Sie die Groß-/Kleinschreibung ignorieren, wenn Sie Zeichenfolgen vergleichen. Zum Beispiel sollten "apple" und "Apple" als gleich behandelt werden.
- Unicode-Codepunkt-Reihenfolge ergibt keinen Sinn: Vergleichsoperatoren wie `>` vergleichen nach Unicode-Codepunkt-Reihenfolge, was nicht dasselbe ist wie die Reihenfolge von Zeichen in einem Wörterbuch. Zum Beispiel kommt "ï" in der Codepunkt-Reihenfolge nach "z", aber Sie würden es in einem Wörterbuch neben "i" anordnen wollen.
- Unicode-Normalisierung: Dasselbe Zeichen kann in Unicode mehrere Darstellungen haben. Zum Beispiel kann "ñ" als einzelnes Zeichen oder als "n" gefolgt von einer kombinierenden Tilde dargestellt werden. (Siehe {{jsxref("String.prototype.normalize()")}}.) Diese sollten als gleichbehandelt werden.
- Zahlenvergleich: Zahlen in Zeichenfolgen sollten als Zahlen und nicht als Zeichenfolgen verglichen werden. Zum Beispiel möchten Sie, dass "test-10" nach "test-2" kommt.

Es gibt zwei unterschiedliche Anwendungsfälle für die Sortierung: **Sortierung** und **Suche**. Sortierung ist, wenn Sie eine Liste von Zeichenfolgen haben und sie gemäß einer Regel ordnen möchten. Suche ist, wenn Sie eine Liste von Zeichenfolgen haben und eine Zeichenfolge finden möchten, die einer Abfrage entspricht. Bei der Suche sollten Sie nur darauf achten, ob das Vergleichsergebnis null (gleich) ist oder nicht, nicht auf das Vorzeichen des Ergebnisses.

Es gibt viele verschiedene Möglichkeiten, zu sortieren, sogar innerhalb desselben Gebietsschemas. Zum Beispiel gibt es im Deutschen zwei verschiedene Sortierreihenfolgen, _Telefonbuch_ und _Wörterbuch_. Die Telefonbuch-Sortierung betont den Klang — als ob "ä", "ö" usw. vor dem Sortieren zu "ae", "oe" usw. erweitert würden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare));
// ['Hochberg', 'Hönigswald', 'Holzman']
```

Einige deutsche Wörter konjugieren mit zusätzlichen Umlauten, sodass es in Wörterbüchern sinnvoll ist, ohne Umlaute zu sortieren (außer beim Sortieren von Wörtern, die sich nur durch Umlaute unterscheiden: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

## Pluralregeln

Das {{jsxref("Intl.PluralRules")}}-Objekt ist nützlich, um die richtige Pluralform eines Wortes zu wählen. Es pluralisiert nicht automatisch Wörter für Sie (zum Beispiel können Sie ihm nicht "apple" übergeben und erwarten, dass "apples" zurückkommt), aber es teilt Ihnen mit, welche Pluralform basierend auf einer Zahl zu verwenden ist. Möglicherweise machen Sie dies bereits:

```js
function formatMessage(n) {
  return `You have ${n} ${n === 1 ? "apple" : "apples"}.`;
}
```

Aber dies ist schwer, über alle Sprachen zu verallgemeinern, insbesondere solche mit vielen Pluralformen. Sie können {{jsxref("Intl.PluralRules")}} für eine allgemeine Einführung in Pluralregeln ansehen. Hier demonstrieren wir nur einige häufige Anwendungsfälle.

```js
const prCard = new Intl.PluralRules("en-US");
const prOrd = new Intl.PluralRules("en-US", { type: "ordinal" });

const englishOrdinalSuffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};

const catPlural = {
  one: "cat",
  other: "cats",
};

function formatMessage(n1, n2) {
  return `The ${n1}${englishOrdinalSuffixes[prOrd.select(n1)]} U.S. president had ${n2} ${catPlural[prCard.select(n2)]}.`;
}

console.log(formatMessage(42, 1)); // The 42nd U.S. president had 1 cat.
console.log(formatMessage(45, 0)); // The 45th U.S. president had 0 cats.
```

## Segmentierung

Das {{jsxref("Intl.Segmenter")}}-Objekt ist nützlich, um eine Zeichenfolge in Segmente aufzuteilen. Ohne `Intl` können Sie bereits eine Zeichenfolge nach [UTF-16-Einheiten und Unicode-Codepunkten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) aufteilen:

```js
const str = "🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷";
console.log(str.split(""));
// Array(20) ['\uD83C', '\uDDFA', '\uD83C', ...]
console.log([...str]);
// Array(10) ['🇺', '🇸', '🇨', '🇳', '🇷', '🇺', '🇬', '🇧', '🇫', '🇷']
```

Aber wie Sie sehen können, sind Unicode-Codepunkte nicht dasselbe wie das, was menschliche Benutzer als diskrete Zeichen wahrnehmen. Dies geschieht oft mit Emojis, bei denen ein einzelnes Emoji durch mehrere Codepunkte dargestellt werden kann. Wenn der Benutzer mit Text interagiert, ist ein Graphem die kleinste Einheit von Text, die er manipulieren kann, wie Löschen oder Auswählen. Das `Segmenter`-Objekt ermöglicht die Segmentierung auf Graphem-Ebene, was nützlich ist, um Zeichen zu zählen, Textbreite zu messen und so weiter. Es nimmt eine Zeichenfolge und gibt ein iterierbares [segments](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekt zurück, wobei jedes Element eine `segment`-Eigenschaft enthält, die den Text des Segments darstellt.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
console.log([...segmenter.segment("🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷")].map((s) => s.segment));
// ['🇺🇸', '🇨🇳', '🇷🇺', '🇬🇧', '🇫🇷']
```

Der Segmentierer kann auch eine Segmentierung auf höherer Ebene durchführen, einschließlich der Aufteilung auf Wort- und Satzebene. Diese Anwendungsfälle sind notwendigerweise sprachenspezifisch. Zum Beispiel ist das Folgende eine sehr schlechte Implementierung des Wortzählens:

```js example-bad
const wordCount = (str) => str.split(/\s+/).length;
console.log(wordCount("Hello, world!")); // 2
```

Es gibt mehrere Probleme damit: Nicht alle Sprachen verwenden Leerzeichen, um Wörter zu trennen, nicht alle Leerzeichen sind worttrennend, und nicht alle Wörter werden durch Leerzeichen getrennt. Um dies zu lösen, verwenden Sie `Segmenter` mit `granularity: "word"`. Das Ergebnis ist die Eingabezeichenfolge, aufgeteilt in Segmente von Wörtern und Nicht-Wörtern. Wenn Sie Wörter zählen, sollten Sie die Nicht-Wörter herausfiltern, indem Sie die `isWordLike`-Eigenschaft jedes Segments überprüfen.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "word" });
const str = "It can even split non-space-separated words";
console.table([...segmenter.segment(str)]);
// ┌─────────────┬───────┬────────────┐
// │ segment     │ index │ isWordLike │
// ├─────────────┼───────┼────────────┤
// │ 'It'        │ 0     │ true       │
// │ ' '         │ 2     │ false      │
// │ 'can'       │ 3     │ true       │
// │ ' '         │ 6     │ false      │
// │ 'even'      │ 7     │ true       │
// │ ' '         │ 11    │ false      │
// │ 'split'     │ 12    │ true       │
// │ ' '         │ 17    │ false      │
// │ 'non'       │ 18    │ true       │
// │ '-'         │ 21    │ false      │
// │ 'space'     │ 22    │ true       │
// │ '-'         │ 27    │ false      │
// │ 'separated' │ 28    │ true       │
// │ ' '         │ 37    │ false      │
// │ 'words'     │ 38    │ true       │
// └─────────────┴───────┴────────────┘

console.log(
  [...segmenter.segment(str)].filter((s) => s.isWordLike).map((s) => s.segment),
);
// ['It', 'can', 'even', 'split', 'non', 'space', 'separated', 'words']
```

Die Wortsegmentierung funktioniert auch für sprachbasierte Sprachen. Zum Beispiel können in Chinesisch mehrere Zeichen ein einzelnes Wort darstellen, aber es gibt keine Leerzeichen dazwischen. Der Segmentierer implementiert dasselbe Verhalten wie die integrierte Wortsegmentierung des Browsers, die durch Doppelklicken eines Wortes ausgelöst wird.

```js
const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "word" });
console.log([...segmenter.segment("我是这篇文档的作者")].map((s) => s.segment));
// ['我是', '这', '篇', '文', '档', '的', '作者']
```

Die Satzsegmentierung ist ähnlich komplex. Zum Beispiel gibt es im Englischen viele Satzzeichen, die das Ende eines Satzes markieren könnten (".", "!", "?", usw.).

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "sentence" });
console.log(
  [...segmenter.segment("I ate a sandwich. Then I went to bed.")].map(
    (s) => s.segment,
  ),
);
// ['I ate a sandwich. ', 'Then I went to bed.']
```

Beachten Sie, dass der Segmentierer keine Zeichen entfernt. Er teilt die Zeichenfolge nur in Segmente auf, wobei jedes ein Satz ist. Sie können dann die Satzzeichen entfernen, wenn Sie möchten. Außerdem unterstützt die derzeitige Implementierung des Segmentierers keine Satzsegmentierungsunterdrückungen (Verhindern von Satzumbrüchen nach Punkten wie "Mr." oder "Approx."), aber es gibt laufende Arbeiten zur Unterstützung hierfür.

## Angezeigte Namen

Nach der Einführung so vieler Optionen und Verhaltensweisen fragen Sie sich vielleicht, wie Sie diese dem Benutzer präsentieren. `Intl` bietet zwei nützliche APIs zum Erstellen von Benutzeroberflächen: {{jsxref("Intl.supportedValuesOf()")}} und {{jsxref("Intl.DisplayNames")}}.

Die {{jsxref("Intl.supportedValuesOf()")}}-Funktion gibt ein Array von unterstützten Werten für eine bestimmte Option zurück. Zum Beispiel können Sie sie verwenden, um eine Dropdown-Liste der unterstützten Kalender zu füllen, aus denen Benutzer auswählen können, um Daten anzuzeigen.

```js
const supportedCal = Intl.supportedValuesOf("calendar");
console.log(supportedCal);
// ['buddhist', 'chinese', 'coptic', 'dangi', ...]
```

Aber oft sind diese Identifikatoren nicht benutzerfreundlich. Zum Beispiel möchten Sie vielleicht, dass die Kalender in der Sprache des Benutzers angezeigt werden oder sie abgekürzt werden. Das {{jsxref("Intl.DisplayNames")}}-Objekt ist dafür nützlich. Es ist wie ein Formatter, aber es ist nicht vorlagenbasiert. Stattdessen handelt es sich um eine direkte Zuordnung von sprachunabhängigen Identifikatoren zu lokalisierten Namen. Es unterstützt die Formatierung von Sprachen, Regionen, Schriftsystemen (die drei Unterfelder eines BCP 47-Tags), Währung, Kalender und Datums-/Zeiteinheiten.

Versuchen Sie die Demo unten:

```html live-sample___display_names
<select id="lang"></select>
<select id="calendar"></select>
<output id="output"></output>
```

```css hidden live-sample___display_names
output {
  display: block;
  margin: 1em;
  font-size: x-large;
}

rt {
  font-weight: bold;
}

ruby {
  border-bottom: 1px dotted;
  ruby-position: under;
  ruby-align: center;
}
```

```js live-sample___display_names
const langSelect = document.getElementById("lang");
const calSelect = document.getElementById("calendar");
const fieldset = document.querySelector("fieldset");
const output = document.getElementById("output");

// A few examples
const langs = [
  "en-US",
  "zh-Hans-CN",
  "ja-JP",
  "ar-EG",
  "ru-RU",
  "es-ES",
  "fr-FR",
  "de-DE",
  "hi-IN",
  "pt-BR",
  "bn-BD",
  "he-IL",
];
const calendars = Intl.supportedValuesOf("calendar");

for (const lang of langs) {
  const option = document.createElement("option");
  option.value = lang;
  option.textContent = new Intl.DisplayNames(lang, { type: "language" }).of(
    lang,
  );
  langSelect.appendChild(option);
}

function renderCalSelect() {
  const lang = langSelect.value;
  calSelect.innerHTML = "";
  const dn = new Intl.DisplayNames(lang, { type: "calendar" });
  const preferredCalendars = new Intl.Locale(lang).getCalendars?.() ?? [
    "gregory",
  ];
  for (const cal of [
    ...preferredCalendars,
    ...calendars.filter((c) => !preferredCalendars.includes(c)),
  ]) {
    const option = document.createElement("option");
    option.value = cal;
    option.textContent = dn.of(cal);
    calSelect.appendChild(option);
  }
}

function renderFieldInputs() {
  const lang = langSelect.value;
  fieldset.querySelectorAll("label").forEach((label) => label.remove());
  const dn = new Intl.DisplayNames(lang, { type: "dateTimeField" });
  for (const field of fields) {
    const label = document.createElement("label");
    label.textContent = dn.of(field);
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = field;
    label.appendChild(input);
    fieldset.appendChild(label);
  }
}

function renderTime() {
  const lang = langSelect.value;
  const cal = calSelect.value;
  const df = new Intl.DateTimeFormat(lang, {
    calendar: cal,
    dateStyle: "full",
    timeStyle: "full",
  });
  const now = new Date();
  const dn = new Intl.DisplayNames(lang, { type: "dateTimeField" });
  output.innerHTML = "";
  for (const component of df.formatToParts(now)) {
    const text = document.createElement("span");
    text.textContent = component.value;
    if (
      ![
        "era",
        "year",
        "quarter",
        "month",
        "weekOfYear",
        "weekday",
        "day",
        "dayPeriod",
        "hour",
        "minute",
        "second",
        "timeZoneName",
      ].includes(component.type)
    ) {
      output.appendChild(text);
      continue;
    }
    const title = dn.of(component.type);
    const field = document.createElement("ruby");
    field.appendChild(text);
    const rt = document.createElement("rt");
    rt.textContent = title;
    field.appendChild(rt);
    output.appendChild(field);
  }
}

renderCalSelect();
renderTime();
langSelect.addEventListener("change", renderCalSelect);
langSelect.addEventListener("change", renderTime);
calSelect.addEventListener("change", renderTime);
setInterval(renderTime, 500);
```

{{EmbedLiveSample("display_names", "", 300)}}

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}
