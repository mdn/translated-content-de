---
title: Internationalisierung
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{PreviousNext("Web/JavaScript/Guide/Resource_management", "Web/JavaScript/Guide/Modules")}}

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript-Internationalisierungs-API, die eine breite Palette von lokalisierungs- und kulturbezogenen Daten und Operationen bietet.

## Überblick

Das `Intl`-Objekt ist stark an Anwendungsfällen orientiert. Es bietet ein separates Objekt für jeden Anwendungsfall, der lokalisierungsspezifische Logik erfordert. Derzeit bietet es die folgenden Funktionen:

- [Informationen über eine Locale erhalten](#locale-informationen) mittels {{jsxref("Intl.Locale")}}.
- [Daten formatieren](#daten_formatieren) mittels {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}}.
- [Kollation](#kollation) (d.h. Vergleich von Strings zum Sortieren oder Suchen) mittels {{jsxref("Intl.Collator")}}.
- [Pluralformen auswählen](#pluralregeln) mittels {{jsxref("Intl.PluralRules")}}.
- [Text segmentieren](#segmentierung) in Einheiten wie Wörter, Sätze oder Grapheme mittels {{jsxref("Intl.Segmenter")}}.
- [Den angezeigten Namen erhalten](#anzeigenamen) für Währungen, Sprachen, Schriften, Regionen und Zeitzonen mittels {{jsxref("Intl.DisplayNames")}}.

Die meisten `Intl`-APIs haben ein ähnliches Design ({{jsxref("Intl.Locale")}} ist die einzige Ausnahme). Sie beginnen mit der Konstruktion einer Instanz mit der gewünschten Locale und den Optionen. Dies definiert einen Satz von Regeln für die gewünschte Operation (Formatierung, Kollation, Segmentierung usw.). Dann, wenn Sie die Methode auf der Instanz aufrufen, wie `format()`, `compare()` oder `segment()`, wendet das Objekt die angegebene Regel auf die übergebenen Daten an.

```js
// 1. Construct a formatter object, specifying the locale and formatting options:
const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// 2. Use the `format` method of the formatter object to format a number:
console.log(price.format(5.259)); // $5.26
```

Das allgemeine Signatur des Konstruktors ist:

```js-nolint
new Intl.SomeObject(locales, options)
```

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Identifikatoren. Die Standardeinstellung der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die spezifische Aspekte der Operation anpassen, was der Schlüssel zum Verständnis der Verwendung jedes `Intl`-Objekts ist.

## Locale-Informationen

Locales liegen allen Verhaltensweisen von `Intl` zugrunde. Eine _Locale_ ist ein Satz von Konventionen, dargestellt in der `Intl`-API durch das {{jsxref("Intl.Locale")}}-Objekt. Alle `Intl`-Konstruktoren, die Sprach-Tags akzeptieren, akzeptieren auch `Intl.Locale`-Objekte.

Jede Locale wird hauptsächlich durch vier Dinge definiert: eine {{jsxref("Intl/Locale/language", "language")}}, ein {{jsxref("Intl/Locale/script", "script")}}, eine {{jsxref("Intl/Locale/region", "region")}} und manchmal einige {{jsxref("Intl/Locale/variants", "variants")}}. Wenn sie in dieser Reihenfolge verbunden werden, bilden sie ein {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.

- Die Sprache ist der wichtigste Teil der Locale und ist obligatorisch. Wenn eine einzelne Sprache angegeben wird, wie `en` oder `fr`, gibt es Algorithmen, um den Rest der Informationen zu folgern (siehe {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}).
- Oft möchte man jedoch auch die Region angeben, da sich die Konventionen in Regionen, die dieselbe Sprache sprechen, drastisch unterscheiden können. Zum Beispiel ist das Datumsformat in den USA MM/TT/JJJJ, während es im Vereinigten Königreich TT/MM/JJJJ lautet, daher ist es wichtig, `en-US` oder `en-GB` anzugeben.
- Sie können auch ein Script angeben. Das Script ist das Schriftsystem oder die Zeichen, die verwendet werden, um die Sprache zu transkribieren. In der Praxis ist das Script oft unnötig, da die in einer bestimmten Region verwendete Sprache normalerweise nur in einem Schriftsystem geschrieben wird. Es gibt jedoch Ausnahmen wie die serbische Sprache, die sowohl in der lateinischen als auch in der kyrillischen Schrift geschrieben werden kann (`sr-Latn` und `sr-Cyrl`), oder die chinesische Sprache, die sowohl in der vereinfachten als auch in der traditionellen Schrift geschrieben werden kann (`zh-Hans` und `zh-Hant`).
- Die Varianten werden selten verwendet. In der Regel bezeichnen sie unterschiedliche Orthographien; zum Beispiel hat Deutsch die `1901` und `1996` Orthographie-Varianten, die als `de-1901` und `de-1996` geschrieben werden.

```js
// These two are equivalent when passed to other Intl APIs
const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-Latn-US");

console.log(locale1.language, locale1.script, locale1.region); // "en", undefined, "US"
console.log(locale2.language, locale2.script, locale2.region); // "en", "Latn", "US"
```

Eine Locale enthält auch einen Satz von Konventionen, die von dieser speziellen Kultur verwendet werden:

<table>
<thead><tr><th>Anwendungsfall</th><th>Eigenschaft</th><th>Beschreibung</th><th>Erweiterungs-Untertitel</th></tr></thead>
<tbody>
<tr>
<td rowspan="2">Datum/Uhrzeit-Formatierung</td>
<td>{{jsxref("Intl/Locale/calendar", "calendar")}}</td>
<td>Wird verwendet, um Tage in Jahre, Monate und Wochen zu gruppieren und ihnen Namen zuzuweisen. Zum Beispiel wird das Datum <code>gregory</code> "2022-01-01" im Kalender <code>hebrew</code> zu "28 Tevet 5782".</td>
<td><code>ca</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}</td>
<td>Entscheidet, ob Zeiten im 12-Stunden- oder 24-Stunden-Format angezeigt werden und ob die kleinste Stundenzahl 0 oder 1 ist.</td>
<td><code>hc</code></td>
</tr>
<tr>
<td>Zahlenformatierung, einschließlich Daten, Zeiten, Dauern usw.</td>
<td>{{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}}</td>
<td>Verwandelt Zahlen in eine lokalisierungsspezifische Notation. Das reguläre <code>0123456789</code> System wird <code>latn</code> (Latein) genannt. Oft hat jedes Script ein Zahlensystem, das einfach eine Ziffer-zu-Ziffer-Übersetzung ist, aber einige Scripts haben mehr als ein Zahlensystem, einige schreiben normalerweise keine Zahlen in diesem Script (zum Beispiel hat Chinesisch sein eigenes <code>hanidec</code> Zahlensystem, aber die meisten Texte verwenden das standardmäßige <code>latn</code> System), und andere erfordern spezielle Umrechnungsalgorithmen (zum Beispiel Römische Zahlen - <code>roman</code>).</td>
<td><code>nu</code></td>
</tr>
<tr>
<td rowspan="3">Kollation</td>
<td>{{jsxref("Intl/Locale/collation", "collation")}}</td>
<td>Definiert den generischen Kollationsalgorithmus. Zum Beispiel, wenn Sie die deutsche <code>phonebk</code> Kollation verwenden, wird "ä" wie "ae" behandelt und zwischen "ad" und "af" sortiert.</td>
<td><code>co</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/caseFirst", "caseFirst")}}</td>
<td>Entscheidet, ob Groß- oder Kleinbuchstaben zuerst sortiert werden oder ob die Groß-/Kleinschreibung ignoriert wird.</td>
<td><code>kf</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/numeric", "numeric")}}</td>
<td>Entscheidet, ob Zahlen als Zahlen oder als Strings sortiert werden. Zum Beispiel, wenn wahr, wird "10" nach "2" sortiert.</td>
<td><code>kn</code></td>
</tr>
</tbody>
</table>

Diese Eigenschaften können explizit angegeben werden, wenn das `Intl.Locale`-Objekt erstellt oder Sprach-Tags an andere `Intl`-Konstruktoren übergeben werden. Es gibt zwei Möglichkeiten dies zu tun — sie an das Sprach-Tag anhängen oder sie als Optionen angeben.

- Um sie an das Sprach-Tag anzuhängen, fügen Sie zuerst den String `-u` (was "Unicode-Erweiterung" bedeutet) an, dann das Erweiterungs-Untertitel wie oben angegeben und dann den Wert.
- Um sie als Optionen anzugeben, fügen Sie einfach den Eigenschaftsnamen wie oben angegeben zusammen mit seinem Wert dem `options`-Objekt hinzu.

Mithilfe von `Intl.DateTimeFormat` als Beispiel erstellen beide der folgenden Zeilen einen Formatierer, der Daten im hebräischen Kalender formatiert:

```js
const df1 = new Intl.DateTimeFormat("en-US-u-ca-hebrew");
const df2 = new Intl.DateTimeFormat("en-US", { calendar: "hebrew" });
```

Nicht erkannte Eigenschaften werden ignoriert, sodass Sie die gleiche Syntax wie oben mit `Intl.NumberFormat` verwenden können, aber es wird nichts anderes tun, als einfach `en-US` zu übergeben, da die Zahlenformatierung die `calendar`-Eigenschaft nicht verwendet.

Es ist schwierig, die Standardwerte dieser Locale-Konventionen zu ermitteln. `new Intl.Locale("en-US").calendar` gibt `undefined` zurück, da das `Locale`-Objekt nur die Informationen enthält, die Sie ihm übergeben haben. Der Standardkalender ist theoretisch abhängig von der API, mit der Sie den Kalender verwenden, sodass Sie den Standardkalender von `en-US`, wie er von `Intl.DateTimeFormat` verwendet wird, mit seiner {{jsxref("Intl/DateTimeFormat/resolvedOptions", "resolvedOptions()")}}-Methode ermitteln können. Das Gleiche gilt für andere Eigenschaften.

```js
const locale = new Intl.Locale("en-US");
console.log(locale.calendar); // undefined; it's not provided
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar); // "gregory"
```

`Intl.Locale`-Objekte tun zwei Dinge gleichzeitig: Sie repräsentieren ein geparstes BCP 47 Sprach-Tag (wie oben demonstriert) und sie liefern Informationen über diese Locale. Alle ihre Eigenschaften, wie `calendar`, werden nur aus der Eingabe extrahiert, ohne dabei eine Datenquelle nach Standardwerten abzufragen. Auf der anderen Seite hat es eine Gruppe von Methoden, um reale Informationen über die Locale zu erfragen. Zum Beispiel ergänzen die Methoden {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}} und {{jsxref("Intl/Locale/getCollations", "getCollations()")}} die Eigenschaften `calendar`, `hourCycle`, `numberingSystem` und `collation`, und jede gibt ein Array bevorzugter Werte für diese Eigenschaft zurück.

```js
const locale = new Intl.Locale("ar-EG");
console.log(locale.getCalendars()); // ['gregory', 'coptic', 'islamic', 'islamic-civil', 'islamic-tbla']
```

`Intl.Locale`-Instanzen beinhalten auch andere Methoden, die nützliche Informationen preisgeben, wie {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}, und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.

## Die Locale ermitteln

Eine gemeinsame Frage zur Internationalisierung lautet: Wie weiß ich, welche Locale ich nutzen soll?

Die offensichtlichste Antwort lautet: "was der Nutzer bevorzugt." Browser stellen die Spracheinstellungen des Nutzers über die [`navigator.languages`](/de/docs/Web/API/Navigator/languages)-Eigenschaft zur Verfügung. Dies ist ein Array von Sprach-Identifikatoren, das direkt an den Konstruktor des Formatierers übergeben werden kann – mehr dazu später. Der Nutzer kann diese Liste in seinen Browsereinstellungen konfigurieren. Sie können auch ein leeres Array oder `undefined` übergeben, wodurch die Standardeinstellung des Browsers verwendet wird.

```js
const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));

const numberFormatter2 = new Intl.NumberFormat([]);
```

Allerdings liefert dies möglicherweise nicht immer das wünschenswerteste Ergebnis. Von `Intl` formatierte Strings stellen einen winzigen Bruchteil des auf Ihrer Website angezeigten Texts dar; die meisten lokalisierten Inhalte werden von Ihnen, dem Website-Entwickler, bereitgestellt. Angenommen, Ihre Website wird nur in zwei Sprachen angeboten: Englisch und Französisch. Wenn ein japanischer Nutzer Ihre Website besucht und erwartet, diese auf Englisch zu nutzen, wird er verwirrt sein, wenn er den englischen Text mit Zahlen und Daten auf Japanisch sieht!

In der Regel möchten Sie nicht die Standardsprache des Browsers verwenden. Vielmehr möchten Sie die gleiche Sprache verwenden, in der der Rest Ihrer Website angeboten wird. Angenommen, Ihre Website hat einen Sprachschalter, der die Auswahl des Nutzers irgendwo speichert — Sie könnten diese direkt verwenden.

```js
// Suppose this can be changed by some site-wide control
const userSettings = {
  locale: "en-US",
  colorMode: "dark",
};
const numberFormatter = new Intl.NumberFormat(userSettings.locale);
console.log(numberFormatter.format(1234567.89));
```

Falls Ihre Website ein Backend hat, das die Sprache basierend auf dem {{httpheader("Accept-Language")}}-Header des Nutzers dynamisch auswählt und entsprechend anderes HTML zurücksendet, könnten Sie auch die [`HTMLElement.lang`]-Eigenschaft des HTML-Elements verwenden: `new Intl.NumberFormat(document.documentElement.lang)`.

Falls Ihre Website nur in einer Sprache angeboten wird, könnten Sie die Locale direkt in Ihrem Code hartkodieren: `new Intl.NumberFormat("en-US")`.

Wie bereits erwähnt, können Sie dem Konstruktor auch ein Array von Locales übergeben, das eine Liste von Fallback-Optionen darstellt. Das erste Beispiel mit `navigator.languages` ist ein Beispiel hierfür: Wenn die erste nutzer-configurierte Locale nicht für die bestimmte Operation unterstützt wird, wird die nächste versucht, und so weiter, bis eine angeforderte Locale gefunden wird, für die die Laufzeit Daten hat. Sie können dies auch manuell tun. Im nachstehenden Beispiel spezifizieren wir eine Liste von Locales in absteigender Reihenfolge der Spezifität, die alle Sprachen darstellen, die ein chinesischer Sprecher aus Hongkong wahrscheinlich versteht, sodass der Formatierer die spezifischste von ihm unterstützte Locale auswählt.

```js
const numberFormatter = new Intl.NumberFormat([
  "yue-Hant",
  "zh-Hant-HK",
  "zh-Hant",
  "zh",
]);
```

Es gibt keine API, um alle unterstützten Locales aufzulisten, aber es gibt ein paar Methoden zum Umgang mit der Locale-Liste:

- {{jsxref("Intl.getCanonicalLocales()")}}: Diese Funktion nimmt eine Liste von Locale-Identifikatoren und gibt eine Liste kanonisierter Locale-Identifikatoren zurück. Dies ist nützlich, um den Kanonisierungsprozess für jeden `Intl`-Konstruktor zu verstehen.
- Die `supportedLocalesOf()`-statische Methode auf jedem `Intl`-Objekt (wie {{jsxref("Intl.DateTimeFormat.supportedLocalesOf()")}}): Diese Methode nimmt die gleichen Argumente wie der Konstruktor (`locales` und `options`) und gibt eine Teilmenge der gegebenen Locale-Tags zurück, die mit den gegebenen Daten übereinstimmen. Dies ist nützlich, um zu verstehen, welche Locales von der Laufzeit für eine bestimmte Operation unterstützt werden, zum Beispiel um einen Sprachschalter mit nur den unterstützten Sprachen zu zeigen.

## Verständnis des Rückgabewertes

Die zweite gemeinsame Frage für alle Objekte lautet "was gibt die Methode zurück?" Diese Frage lässt sich nicht über den Aufbau oder Typ des zurückgegebenen Wertes hinaus leicht beantworten, da es keine normative Spezifikation gibt, die genau vorschreibt, was _genau_ zurückgegeben werden sollte. Die meiste Zeit ist das Ergebnis einer Methode konsistent. Allerdings kann sich die Ausgabe zwischen Implementierungen unterscheiden, sogar innerhalb derselben Locale — Unterschiede in Ausgaben sind ausdrücklich von der Spezifikation vorgesehen und erlaubt. Es ist möglicherweise auch nicht das, was Sie erwarten. Zum Beispiel könnte der von `format()` zurückgegebene String geschützte Leerzeichen oder von bidirektionalen Steuerzeichen umgeben sein. Vergleichen Sie die Ergebnisse einer `Intl`-Methode nie mit fest kodierten Konstanten; sie sollten nur Nutzern angezeigt werden.

Natürlich klingt diese Antwort unbefriedigend, denn die meisten Entwickler wollen durchaus kontrollieren, wie die Ausgabe aussieht — zumindest will man nicht, dass Nutzer durch unsinnige Ausgaben verwirrt werden. Hier sind einige Richtlinien, wenn Sie Tests durchführen möchten, sei es automatisiert oder manuell:

- Testen Sie alle Locales, die Ihr Nutzer möglicherweise verwenden könnte. Dies ist einfacher, wenn Sie eine feste Anzahl von unterstützten Locales haben (zum Beispiel über einen Sprachschalter). Wenn Sie verwenden, was der Nutzer bevorzugt, könnten Sie einige gängige für Ihre Nutzer auswählen. Beachten Sie allerdings, dass das, was der Nutzer sieht, variieren könnte. Normalerweise können Sie Benutzerpräferenzen über die Konfiguration des Testrunners simulieren oder die `Intl`-Konstruktoren mocken.
- Testen Sie es auf mehreren JavaScript-Engines. Die `Intl`-API wird direkt von der JavaScript-Engine implementiert, erwarten Sie also, dass Node.js und Chrome (die beide V8 verwenden) dasselbe Ergebnis haben, während Firefox (das SpiderMonkey verwendet) möglicherweise ein anderes Ergebnis hat. Auch wenn alle Engines wahrscheinlich die CLDR-Daten verwenden, verarbeiten sie diese in der Regel auf verschiedene Weise nach. Einige Browsereinstellungen (zum Beispiel um die Installationsgröße zu reduzieren) können ebenfalls beeinflussen, welche Locales und Optionen unterstützt werden.
- Gehen Sie nicht von einer bestimmten Ausgabe aus. Das bedeutet, dass Sie die Ausgabe nicht von Hand niederschreiben sollten, wie `expect(result).toBe("foo")`. Verwenden Sie stattdessen Snapshot-Tests oder kopieren Sie den String-Wert aus der Ausgabe eines Testlaufs.

## Daten formatieren

Ein Hauptanwendungsfall von `Intl` ist das Ausgeben von lokalisierungsspezifischen Texten, die strukturierte Daten darstellen. Dies ähnelt Übersetzungssoftware, aber anstatt Ihnen die Übersetzung beliebigen Textes zu ermöglichen, nimmt es Daten wie Daten, Zahlen und Listen und formatiert sie gemäß lokalisierungsbezogenen Regeln.

Die Objekte {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}}, und {{jsxref("Intl.RelativeTimeFormat")}} formatieren jeweils eine Art von Daten. Jede Instanz bietet zwei Methoden:

- `format()`: Nimmt ein Stück Daten und gibt einen String zurück, der die Formatierungsregel wie von der Locale und den Optionen bestimmt verwendet.
- `formatToParts()`: Nimmt dieselben Daten und gibt denselben String zurück, allerdings aufgeteilt in Teile, wobei jeder Teil ein Objekt mit einem `type` und einem `value` ist. Dies ist nützlich für fortgeschrittene Anwendungsfälle, wie das Einfügen des formatierten Textes in andere Texte.

Zum Beispiel hier eine typische Verwendung des {{jsxref("Intl.NumberFormat")}}-Objekts:

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

Sie müssen nicht immer ein Formatierer-Objekt konstruieren, um Strings zu formatieren. Für gelegentliche Zwecke können Sie auch direkt die `toLocaleString()`-Methode auf den Daten aufrufen, indem Sie die Locale und Optionen als Argumente übergeben. Die `toLocaleString()`-Methode wird von {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}, {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}, {{jsxref("Number.prototype.toLocaleString()")}}, und so weiter implementiert. Lesen Sie die Dokumentation für die Daten, die Sie formatieren, um zu sehen, ob sie `toLocaleString()` unterstützen und welche Formatierer-Optionen es entspricht.

```js
console.log(
  (5.259).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }),
); // $5.26
```

Beachten Sie, dass `toLocaleString()` potenziell weniger effizient sein kann als die Verwendung eines Formatierer-Objekts, da jedes Mal, wenn `toLocaleString` aufgerufen wird, eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden muss. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein Formatierer-Objekt zu erstellen und seine `format()`-Methode zu verwenden, da ein Formatierer-Objekt die ihm übergebenen Argumente speichert und sich entscheidet, einen Ausschnitt der Datenbank im Cache zu halten, sodass zukünftige `format`-Aufrufe Lokalisierungsstrings innerhalb eines eingeschränkteren Kontexts suchen können.

### Datums- und Uhrzeitformatierung

{{jsxref("Intl.DateTimeFormat")}} formatiert Daten und Zeiten sowie Bereiche von Daten und Zeiten. Das `DateTimeFormat`-Objekt akzeptiert Datum/Zeit-Eingaben in einer der folgenden Formen: {{jsxref("Date")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, oder {{jsxref("Temporal.PlainMonthDay")}}.

> [!NOTE]
> Sie können kein {{jsxref("Temporal.ZonedDateTime")}}-Objekt direkt übergeben, da die Zeitzone bereits im Objekt festgelegt ist. Sie sollten {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} verwenden oder es zuerst in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt konvertieren.

Gängige Anwendungsfälle für lokalisierte Datums- und Zeitformatierung sind wie folgt:

- Das gleiche Datum und die gleiche Uhrzeit in einem anderen Kalendersystem ausgeben, wie dem islamischen, hebräischen oder chinesischen Kalender.
- Das gleiche reale Zeitmoment (Moment) ausgeben, jedoch in einer anderen Zeitzone.
- Selektives Ausgeben bestimmter Komponenten des Datums und der Uhrzeit, wie nur des Jahres und des Monats, und deren spezifische Darstellung (wie "Donnerstag" oder "Do").
- Datum gemäß lokalisierungsbezogenen Konventionen ausgeben, wie MM/TT/JJJJ wie in den USA, TT/MM/JJJJ wie im Vereinigten Königreich oder JJJJ/MM/TT wie in Japan.
- Uhrzeit gemäß lokalisierungsbezogenen Konventionen ausgeben, wie 12-Stunden- oder 24-Stunden-Uhr.

Um zu entscheiden, wie der formatierte String aussehen soll, wählen Sie zunächst den Kalender (der Jahr-, Monat-, Wochen-, und Tagesberechnung beeinflusst) und die Zeitzone (die das genaue Zeitmoment sowie möglicherweise das Datum beeinflusst). Dies geschieht mithilfe der zuvor genannten `calendar`-Option (oder dem `-ca-` Erweiterungsschlüssel im Locale-Identifikator) und der `timeZone`-Option.

- `Date`-Objekte repräsentieren ein einzigartiges Moment in der Zeitzone des Nutzers und im ISO 8601-Kalender (wie von Methoden wie {{jsxref("Date.prototype.getHours()")}} und {{jsxref("Date.prototype.getMonth()")}} berichtet). Sie werden in den angegebenen `calendar` und die `timeZone` konvertiert, indem das Moment erhalten bleibt, sodass die Datums- und Zeitkomponenten sich ändern können.
- Die verschiedenen {{jsxref("Temporal")}}-Objekte besitzen bereits einen eingebauten Kalender, sodass die `calendar`-Option konsistent mit dem Kalender des Objekts sein muss—es sei denn, der Kalender des Datums ist `"iso8601"`, in welchem Fall es in den angeforderten `calendar` konvertiert wird. Diese Objekte besitzen keine Zeitzone, sodass sie direkt in der gegebenen `timeZone` ohne Konvertierung angezeigt werden.

Hier zeigen wir, wie die Kombination von `calendar`- und `timeZone`-Konfigurationen zu unterschiedlichen Darstellungen desselben Moments führen.

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

Die Ausgabe sieht so aus:

| Kalender  | Zeitzone           | Ausgabe                                                        |
| --------- | ------------------ | -------------------------------------------------------------- |
| 'gregory' | 'America/New_York' | 'Freitag, 31. Dezember 2021 um 19:00:00 Eastern Standard Time' |
| 'gregory' | 'Asia/Tokyo'       | 'Samstag, 1. Januar 2022 um 09:00:00 Japan Standard Time'      |
| 'hebrew'  | 'America/New_York' | 'Freitag, 27 Tevet 5782 um 19:00:00 Eastern Standard Time'     |
| 'hebrew'  | 'Asia/Tokyo'       | 'Samstag, 28 Tevet 5782 um 09:00:00 Japan Standard Time'       |

Ein Datum/Uhrzeit besteht aus den folgenden Komponenten: `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, und `timeZoneName`. Ihre nächste Entscheidung ist, welche Komponenten in der Ausgabe enthalten sein sollen und welche Formen sie annehmen sollen. Sie haben zwei Möglichkeiten:

- Sie können jede Komponente manuell konfigurieren, indem Sie Optionen mit demselben Namen wie die Komponente verwenden. Nur die von Ihnen spezifizierten Komponenten werden in der Ausgabe enthalten sein, mit der angegebenen Form.
- Sie können die Abkürzungen `dateStyle` und `timeStyle` verwenden, die vordefinierte Sätze von Komponenten sind. Sie erweitern sich zu einem Satz von Komponentenoptionen abhängig von der Locale.

Sie sollten eine dieser beiden Methoden wählen, da sie gegenseitig exklusiv sind. Die gleichzeitige Verwendung beider Methoden führt zu einem Fehler.

Grundsätzlich sucht das `DateTimeFormat`-Objekt nach Anforderung einer Kombination von Komponenten nach einer "Schablone", die mit den angeforderten Komponenten übereinstimmt, sodass es nur die Werte eins nach dem anderen ausfüllen muss. Nicht jede Kombination von Komponenten hat eine vordefinierte Schablone. `DateTimeFormat` hat eine `formatMatcher`-Option, die entscheidet, wie zu verhandeln ist, indem Komponenten länger oder kürzer gemacht werden als angefordert, oder indem Komponenten weggelassen oder hinzugefügt werden. Es wird ziemlich technisch, daher sollten Sie das [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) Nachschlagewerk lesen, um besser zu verstehen, wie es damit umgeht.

Hier, demonstrieren wir einige gängige Methoden zum Formatieren der Komponenten:

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

Es gibt weitere Anpassungsoptionen. Beispielsweise können Sie die `hourCycle`-Option verwenden, um die Uhrzeit im 12-Stunden- oder 24-Stunden-Format anzuzeigen und Mitternacht/Mittag als 12:00 oder 0:00 anzuzeigen. Sie können auch die `numberingSystem`-Option verwenden, um Zahlen in einem anderen Zahlensystem anzuzeigen.

Neben `format()` gibt es eine zweite wichtige Methode, {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}, die einen Bereich von Daten oder Zeiten formatiert. Sie nimmt zwei DateTime-Darstellungen des gleichen Typs, formatiert jede einzeln, verbindet sie mit einem Bereichsseparator (wie der en-Dash), und entfernt gegebenenfalls doppelte Teile.

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

Die Zahlenformatierung erfolgt mit dem {{jsxref("Intl.NumberFormat")}}-Objekt. Das `NumberFormat`-Objekt akzeptiert Eingaben in Form von Zahlen, Strings oder `BigInt`-Werten. Das Übergeben eines Strings oder `BigInt` anstelle einer Zahl ermöglicht Ihnen, Zahlen zu formatieren, die zu groß oder zu klein sind, um als JavaScript-Zahl genau dargestellt zu werden.

Gängige Anwendungsfälle für die lokalisierte Zahlenformatierung sind wie folgt:

- Die Zahl in einem anderen Zahlensystem (Script) ausgeben, wie Chinesisch, Arabisch oder Römisch.
- Die Zahl mit lokalisierungsbezogenen Konventionen ausgeben, wie dem Dezimaltrennzeichen (".'' in Englisch, aber "," in vielen europäischen Kulturen), oder der Zahlenzusammenstellung (3 Ziffern in Englisch, aber in anderen Kulturen könnten es 4 oder 2 sein, und sie könnten ",", " " oder "." verwenden).
- Die Zahl im exponentiellen Notationsformat wie "3,7 Millionen" oder "2 Tausend" ausgeben.
- Die Zahl als Währung ausgeben und bestimmte Währungssymbole und Rundungsregeln anwenden. Zum Beispiel sind Geldbeträge unter einem Cent in den USA oder unter einem Yen in Japan möglicherweise nicht sinnvoll anzuzeigen.
- Die Zahl als Prozentsatz ausgeben und lokalisierungsbezogene Umwandlungs- und Formatierungsregeln anwenden.
- Die Zahl mit Einheiten ausgeben, wie "Meter" oder "Liter", mit übersetzten Einheitsnamen.

Um zu entscheiden, wie der formatierte String aussehen soll, wählen Sie zuerst das Zahlensystem (was die Zeichen beeinflusst, die für die Ziffern verwendet werden). Der Zweck eines Zahlensystems wurde bereits in den [Locale-Informationen](#locale-informationen) diskutiert. Eine weitere Option, die Sie entscheiden müssen, ist der `style`, der den Kontext festlegt, in welchem die Zahl dargestellt wird, und möglicherweise die Standardwerte anderer Optionen beeinflusst. Er ist eines von `"decimal"`, `"percent"`, `"currency"`, oder `"unit"`. Wenn Sie Währungen formatieren möchten, müssen Sie auch die `currency`-Option angeben. Wenn Sie Einheiten formatieren möchten, müssen Sie auch die `unit`-Option angeben.

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

Die Ausgabe sieht so aus:

| Stil       | Ausgabe          |
| ---------- | ---------------- |
| 'decimal'  | '1,234,567.89'   |
| 'percent'  | '123,456,789%'   |
| 'currency' | '$1,234,567.89'  |
| 'unit'     | '1,234,567.89 m' |

Die nächste Gruppe von Optionen spezifizieren alle, wie der numerische Teil aussehen soll. Zunächst möchten Sie möglicherweise extrem große Werte auf eine lesbarere Weise darstellen. Sie können die `notation`-Option auf `"scientific"` oder `"engineering"` setzen, die beide die `1.23e+6`-Notation verwenden. Der Unterschied ist, dass letztere Vielfache von 3 für den Exponenten verwendet, um die [Mantisse](https://de.wikipedia.org/wiki/Wissenschaftliche_Notation) (den Teil vor dem `e`-Symbol) zwischen 1 und 1000 zu halten, während die Erstere für den Exponenten jede ganze Zahl verwenden kann und die Mantisse zwischen 1 und 10 hält. Sie können auch `notation` auf `"compact"` setzen, um eine für Menschen lesbarere Notation zu verwenden.

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

Die Ausgabe sieht so aus:

| Notation        | Ausgabe      |
| --------------- | ------------ |
| 'scientific'    | '1.2E4'      |
| 'engineering'   | '12E3'       |
| 'compact-short' | '12K'        |
| 'compact-long'  | '12 tausend' |

Dann möchten Sie möglicherweise die Zahl runden (falls Sie `notation` angegeben haben, dann nur den Mantissenteil), sodass Sie keine Zahl anzeigen, die zu lang ist. Dies sind die Ziffernoptionen, die umfassen:

- `minimumIntegerDigits`
- `minimumFractionDigits`
- `maximumFractionDigits`
- `minimumSignificantDigits`
- `maximumSignificantDigits`
- `roundingPriority`
- `roundingIncrement`
- `roundingMode`

Die genaue Interaktion dieser Optionen ist recht komplex und es ist nicht lohnenswert, sie hier zu behandeln. Sie sollten die [Ziffernoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) nachlesen, um mehr Details zu erfahren. Dennoch ist das grundsätzliche Konzept einfach: Zunächst ermitteln wir die Anzahl der Dezimalstellen, die wir beibehalten möchten, und dann runden wir überzählige Dezimalstellen ab oder auf, abhängig vom Wert der letzten Ziffer.

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

Die Ausgabe sieht so aus:

| Optionen                                                                                               | Ausgabe      |
| ------------------------------------------------------------------------------------------------------ | ------------ |
| `{ minimumFractionDigits: 4, maximumFractionDigits: 4 }`                                               | '1,234.5679' |
| `{ minimumSignificantDigits: 4, maximumSignificantDigits: 4 }`                                         | '1,235'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" }`                        | '1,234'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor", roundingIncrement: 10 }` | '1,230'      |

Es gibt weitere Anpassungsoptionen. Beispielsweise können Sie die Optionen `useGrouping` und `signDisplay` verwenden, um anzupassen, ob und wie die Gruppentrennzeichen (wie "," in "1,234,567.89") und das Vorzeichen angezeigt werden sollen. Beachten Sie jedoch, dass die verwendeten Zeichen für Gruppentrennzeichen, Dezimaltrennpunkt und Vorzeichen lokalisierungsabhängig sind, sodass Sie sie nicht direkt anpassen können.

Neben `format()` gibt es eine zweite wichtige Methode, {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}, die einen Bereich von Zahlen formatiert. Sie nimmt zwei Zahlendarstellungen, formatiert jede einzeln, verbindet sie mit einem Bereichsseparator (wie der en-Dash), und entfernt gegebenenfalls doppelte Teile.

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

Sie haben möglicherweise bereits Code geschrieben, der dies tut:

```js example-bad
const fruits = ["apple", "banana", "cherry"];
console.log(`I like ${fruits.join(", ")}.`);
// I like apple, banana, cherry.
```

Dieser Code ist nicht internationalisiert. In einigen Sprachen ist der Listentrenner kein Komma. In den _meisten_ Sprachen (einschließlich Englisch) benötigen Sie eine Konjunktion vor dem letzten Element. Aber auch nur das manuelle Hinzufügen eines "und" macht es nicht korrekt für alle Englischsprecher, weil es die Debatte um [Oxford-Kommas](https://de.wikipedia.org/wiki/Komma) im Englischen gibt: "apple, banana, and cherry" vs. "apple, banana and cherry".

Das {{jsxref("Intl.ListFormat")}}-Objekt löst dieses Problem. Es nimmt ein Array von Strings und verbindet sie auf eine lokalisierungsabhängige Weise, sodass das Ergebnis eine Konjunktion (und), Disjunktion (oder) oder eine Liste von Einheiten repräsentiert.

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

{{jsxref("Intl.RelativeTimeFormat")}} formatiert einen Zeitunterschied. Das `RelativeTimeFormat`-Objekt nimmt relative Zeiten in Form von zwei Argumenten: eine Zahl (mit beliebigem Vorzeichen) und eine Zeitöffnung, wie `"day"`, `"hour"`, oder `"minute"`.

Es erledigt mehrere Dinge gleichzeitig:

- Es lokalisiert und pluralisiert die Zeitöffnung, wie "1 day" vs. "2 days", ähnlich wie bei der Zahlenformatierung.
- Es wählt die passende Phrase für vergangene und zukünftige Zeiten, wie "in 1 day" vs. "1 day ago".
- Es kann eine spezielle Phrase für einige Zeiteinheiten auswählen, wie "1 day ago" vs. "yesterday".

```js
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(-1, "hour")); // 1 hour ago
```

Weitere Beispiele und Optionen finden Sie unter {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}.

### Dauernformatierung

{{jsxref("Intl.DurationFormat")}} bietet die Formatierung von Dauern, wie "3 hours, 4 minutes, 5 seconds". Es ist keine primitive Operation mit eigenem Formatierer: Es verwendet intern {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.ListFormat")}}, um jede Dauereinheit zu formatieren, und fügt sie dann mit einem Listentrenner zusammen. Das `DurationFormat`-Objekt nimmt Dauern in der Form eines {{jsxref("Temporal.Duration")}}-Objekts oder eines einfachen Objekts mit denselben Eigenschaften an.

Abgesehen von der Anpassung des Zahlensystems, entscheidet die Dauernformatierungs-Option, ob jede Komponente angezeigt wird und wie lang sie sein sollen.

```js
console.log(
  new Intl.DurationFormat("en-US", {
    style: "long",
  }).format({ hours: 3, minutes: 4, seconds: 5 }),
);
// 3 hours, 4 minutes, and 5 seconds
```

Weitere Beispiele und Optionen finden Sie unter {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}.

## Kollation

Das {{jsxref("Intl.Collator")}}-Objekt ist nützlich zum Vergleichen und Sortieren von Strings. Es nimmt zwei Strings und gibt eine Zahl zurück, die ihre relative Ordnung angibt, auf die gleiche Weise wie das `compareFn`-Argument der {{jsxref("Array.prototype.sort")}}-Methode.

Es gibt viele Gründe, warum Sie keine JavaScript-Operatoren wie `===` oder `>` verwenden sollten, um benutzerorientierte Strings zu vergleichen:

- Irrelevante orthografische Varianten: Beispielsweise sollten im Englischen "naïve" und "naive" als alternative Schreibweisen desselben Wortes behandelt werden und gleich behandelt werden.
- Ignorieren die Großschreibung: Oft möchten Sie die Großschreibung beim Vergleich von Strings ignorieren. Beispielsweise sollten "apple" und "Apple" als gleich behandelt werden.
- Unicode-Codepunkt-Reihenfolge ergibt keinen Sinn: Vergleichsoperatoren wie `>` vergleichen anhand der Unicode-Codepunkt-Reihenfolge, die nicht dasselbe ist wie die Reihenfolge der Zeichen im Wörterbuch. Beispielsweise kommt "ï" nach "z" in Codepunktreihenfolge, aber man würde es im Wörterbuch neben "i" anordnen wollen.
- Unicode-Normalisierung: Dasselbe Zeichen kann in Unicode mehrere Darstellungen haben. Beispielsweise kann "ñ" als einzelnes Zeichen oder als "n" gefolgt von einem kombinierenden Tilde dargestellt werden (siehe {{jsxref("String.prototype.normalize()")}}). Diese sollten als gleich behandelt werden.
- Zahlenvergleich: Zahlen in Strings sollten als Zahlen verglichen werden und nicht als Strings. Beispielsweise möchte man, dass "test-10" nach "test-2" kommt.

Es gibt zwei unterschiedliche Anwendungsfälle für Kollation: **Sortierung** und **Suche**. Sortierung erfolgt, wenn Sie eine Liste von Strings haben und diese nach einer bestimmten Regel ordnen möchten. Suche erfolgt, wenn Sie eine Liste von Strings haben und einen String finden möchten, der einer Suchanfrage entspricht. Bei der Suche sollten Sie nur darauf achten, ob das Vergleichsergebnis Null (gleich) ist oder nicht, nicht auf das Vorzeichen des Ergebnisses.

Es gibt viele verschiedene Arten zu sortieren, sogar innerhalb derselben Locale. Beispielsweise gibt es im Deutschen zwei verschiedene Sortierreihenfolgen, _Telefonbuch_ und _Wörterbuch_. Die Telefonbuchsortierung betont den Klang—als ob "ä", "ö" und so weiter auf "ae", "oe" und so weiter erweitert würden, bevor sie sortiert werden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare));
// ['Hochberg', 'Hönigswald', 'Holzman']
```

Einige deutsche Wörter konjugieren mit zusätzlichen Umlauten, sodass es in Wörterbüchern sinnvoll ist, die Umlaute zu ignorieren (außer beim Sortieren von Wörtern, die sich _nur_ in Umlauten unterscheiden: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

## Pluralregeln

Das {{jsxref("Intl.PluralRules")}}-Objekt ist nützlich, um die korrekte Pluralform eines Wortes auszuwählen. Es pluralisiert die Wörter nicht automatisch für Sie (zum Beispiel können Sie nicht "apple" übergeben und "apples" erwarten), aber es sagt Ihnen, welche Pluralform basierend auf einer Zahl verwendet werden soll. Sie tun dies möglicherweise bereits:

```js
function formatMessage(n) {
  return `You have ${n} ${n === 1 ? "apple" : "apples"}.`;
}
```

Aber dies ist schwer auf andere Sprachen zu verallgemeinern, insbesondere auf solche mit vielen Pluralformen. Sie können {{jsxref("Intl.PluralRules")}} für eine allgemeine Einführung in Pluralregeln einsehen. Hier demonstrieren wir einige gängige Anwendungsfälle.

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

Das {{jsxref("Intl.Segmenter")}}-Objekt ist nützlich, um einen String in Segmente zu teilen. Ohne `Intl` können Sie bereits einen String durch [UTF-16 Code-Einheiten und Unicode Code-Punkte](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) teilen:

```js
const str = "🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷";
console.log(str.split(""));
// Array(20) ['\uD83C', '\uDDFA', '\uD83C', ...]
console.log([...str]);
// Array(10) ['🇺', '🇸', '🇨', '🇳', '🇷', '🇺', '🇬', '🇧', '🇫', '🇷']
```

Aber wie Sie sehen können, sind Unicode-Code-Punkte nicht dasselbe wie das, was menschliche Nutzer als diskrete Zeichen wahrnehmen. Dies geschieht oft bei Emojis, wo ein einzelnes Emoji durch mehrere Code-Punkte dargestellt werden kann. Wenn der Nutzer mit Text arbeitet, ist ein Graphem die kleinste Einheit von Text, die sie manipulieren können, wie löschen oder auswählen. Das `Segmenter`-Objekt ermöglicht die Segmentierung auf Graphemebene, was nützlich ist zum Zählen von Zeichen, Messen der Textbreite und mehr. Es nimmt einen String und gibt ein iterierbares [Segmente](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekt zurück, wobei jedes Element eine `segment`-Eigenschaft hat, die den Text des Segments repräsentiert.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
console.log([...segmenter.segment("🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷")].map((s) => s.segment));
// ['🇺🇸', '🇨🇳', '🇷🇺', '🇬🇧', '🇫🇷']
```

Der Segmentierer kann auch eine höhere Segmentierung durchführen, einschließlich der Segmentierung auf Wort- und Satzebene. Diese Anwendungsfälle sind notwendigerweise sprachspezifisch. Beispielsweise ist das folgende eine sehr schlechte Implementierung der Wortzählung:

```js example-bad
const wordCount = (str) => str.split(/\s+/).length;
console.log(wordCount("Hello, world!")); // 2
```

Es gibt mehrere Probleme damit: nicht alle Sprachen verwenden Leerzeichen, um Wörter zu trennen, nicht alle Leerzeichen trennen Wörter, und nicht alle Wörter werden durch Leerzeichen getrennt. Um dies zu lösen, verwenden Sie `Segmenter` mit `granularity: "word"`. Das Ergebnis ist der Eingabestring, getrennt in Segmente von Wörtern und Nicht-Wörtern. Wenn Sie Wörter zählen, sollten Sie die Nicht-Wörter herausfiltern, indem Sie die `isWordLike`-Eigenschaft jedes Segments überprüfen.

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

Die Wortsegmentierung funktioniert auch bei zeichenbasierten Sprachen. Beispielsweise können im Chinesischen mehrere Zeichen ein einziges Wort darstellen, aber es gibt keinen Leerraum dazwischen. Der Segmentierer implementiert dasselbe Verhalten wie die eingebaute Wortsegmentierung des Browsers, die durch Doppelklicken auf ein Wort ausgelöst wird.

```js
const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "word" });
console.log([...segmenter.segment("我是这篇文档的作者")].map((s) => s.segment));
// ['我是', '这', '篇', '文', '档', '的', '作者']
```

Die Satzsegmentierung ist ähnlich komplex. Beispielsweise gibt es im Englischen viele Satzzeichen, die das Ende eines Satzes markieren könnten (".", "!", "?", und so weiter).

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "sentence" });
console.log(
  [...segmenter.segment("I ate a sandwich. Then I went to bed.")].map(
    (s) => s.segment,
  ),
);
// ['I ate a sandwich. ', 'Then I went to bed.']
```

Beachten Sie, dass der Segmentierer keine Zeichen entfernt. Er teilt einfach den String in Segmente, von denen jedes einen Satz darstellt. Sie können dann die Satzzeichen entfernen, wenn Sie möchten. Auch die aktuelle Implementierung des Segmentierers unterstützt keine Satzsegmentierung-Unterdrückungen (Verhinderung von Satzumbrüchen nach Punkten wie "Mr." oder "Approx."), aber es wird daran gearbeitet, dies zu unterstützen.

## Anzeigenamen

Nachdem so viele Optionen und Verhaltensweisen eingeführt wurden, fragen Sie sich möglicherweise, wie Sie diese dem Nutzer präsentieren können. `Intl` hat zwei nützliche APIs zum Aufbau von Benutzeroberflächen: {{jsxref("Intl.supportedValuesOf()")}} und {{jsxref("Intl.DisplayNames")}}.

Die {{jsxref("Intl.supportedValuesOf()")}}-Funktion gibt ein Array von unterstützten Werten für eine gegebene Option zurück. Beispielsweise können Sie dies verwenden, um eine Dropdown-Liste unterstützter Kalender zu füllen, aus der Benutzer auswählen können, um Daten anzuzeigen.

```js
const supportedCal = Intl.supportedValuesOf("calendar");
console.log(supportedCal);
// ['buddhist', 'chinese', 'coptic', 'dangi', ...]
```

Diese Bezeichner sind jedoch oft nicht benutzerfreundlich. Beispielsweise möchten Sie möglicherweise die Kalender in der Sprache des Nutzers anzeigen oder sie unabgekürzt darstellen. Das {{jsxref("Intl.DisplayNames")}}-Objekt ist dafür nützlich. Es ist wie ein Formatierer, ist aber nicht schablonenbasiert. Stattdessen ist es eine direkte Zuordnung von sprachunabhängigen Bezeichnern zu lokalisierten Namen. Es unterstützt das Formatieren von Sprachen, Regionen, Schriften (die drei Unterfelder eines BCP 47 Sprach-Tags), Währung, Kalender und Datum-Zeit-Feldern.

Probieren Sie die untenstehende Demo aus:

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

{{PreviousNext("Web/JavaScript/Guide/Resource_management", "Web/JavaScript/Guide/Modules")}}
