---
title: Internationalisierung
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript-Internationalisierungs-API, welche eine breite Palette von daten- und kulturabhängigen Operationen bereitstellt.

## Übersicht

Das `Intl`-Objekt ist sehr anwendungsorientiert. Es stellt ein separates Objekt für jede Anforderung bereit, die eine lokalisierungsspezifische Logik erfordert. Derzeit bietet es die folgenden Funktionen:

- [Abrufen von Informationen über eine Locale](#lokale_informationen) mit {{jsxref("Intl.Locale")}}.
- [Formatierung von Daten](#formatierung_von_daten) mit {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}}, und {{jsxref("Intl.RelativeTimeFormat")}}.
- [Sortierung](#kollation) (d.h. Vergleich von Strings zum Sortieren oder Suchen) mit {{jsxref("Intl.Collator")}}.
- [Auswahl von Pluralformen](#pluralregeln) mit {{jsxref("Intl.PluralRules")}}.
- [Segmentierung von Text](#segmentierung) in Einheiten wie Wörter, Sätze oder Grapheme mit {{jsxref("Intl.Segmenter")}}.
- [Abrufen des angezeigten Namens](#anzeigemöglichkeiten) für Währungen, Sprachen, Skripte, Regionen und Zeitzonen mit {{jsxref("Intl.DisplayNames")}}.

Die meisten `Intl`-APIs teilen ein ähnliches Design ({{jsxref("Intl.Locale")}} ist die einzige Ausnahme). Sie beginnen damit, eine Instanz mit der gewünschten Locale und Optionen zu erstellen. Dies definiert eine Reihe von Regeln für die gewünschte Operation (Formatierung, Sortierung, Segmentierung usw.). Wenn Sie dann die Methode auf der Instanz aufrufen, wie `format()`, `compare()` oder `segment()`, wendet das Objekt die angegebene Regel auf die übergebenen Daten an.

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
  - : Eine Zeichenfolge mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die spezifische Aspekte der Operation anpassen, was entscheidend ist, um zu verstehen, wie man jedes `Intl`-Objekt verwendet.

## Lokale Informationen

Locales liegen allen Verhaltensweisen von `Intl` zugrunde. Eine _Locale_ ist eine Reihe von Konventionen, dargestellt in der `Intl`-API durch das {{jsxref("Intl.Locale")}}-Objekt. Alle `Intl`-Konstruktoren, die Sprach-Tags akzeptieren, akzeptieren auch `Intl.Locale`-Objekte.

Jede Locale wird hauptsächlich durch vier Dinge definiert: eine {{jsxref("Intl/Locale/language", "Sprache")}}, ein {{jsxref("Intl/Locale/script", "Skript")}}, eine {{jsxref("Intl/Locale/region", "Region")}}, und manchmal einige {{jsxref("Intl/Locale/variants", "Varianten")}}. Wenn sie in dieser Reihenfolge mit `-` verbunden werden, bilden sie ein [BCP 47-Sprach-Tag](https://datatracker.ietf.org/doc/html/rfc5646).

- Die Sprache ist der wichtigste Teil der Locale und ist obligatorisch. Wenn eine einzelne Sprache angegeben wird, wie `en` oder `fr`, gibt es Algorithmen, um die restlichen Informationen abzuleiten (siehe {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}).
- Häufig möchten Sie jedoch auch die Region angeben, da sich Konventionen zwischen Regionen, die dieselbe Sprache sprechen, drastisch unterscheiden können. Beispielsweise ist das Datumsformat in den USA MM/TT/JJJJ, während es im Vereinigten Königreich TT/MM/JJJJ ist, daher ist die Angabe von `en-US` oder `en-GB` wichtig.
- Sie können auch ein Skript spezifizieren. Das Skript ist das Schriftsystem oder die Zeichen, die zur Transkription der Sprache verwendet werden. In der Praxis ist das Skript oft nicht notwendig, da die in einer bestimmten Region verwendete Sprache nur in einem Skript geschrieben wird. Es gibt jedoch Ausnahmen wie die serbische Sprache, die sowohl in lateinischen als auch in kyrillischen Skripten geschrieben werden kann (`sr-Latn` und `sr-Cyrl`), oder die chinesische Sprache, die sowohl in vereinfachten als auch in traditionellen Skripten (`zh-Hans` und `zh-Hant`) geschrieben werden kann.
- Die Varianten werden selten genutzt. Normalerweise bezeichnen sie unterschiedliche Orthographien; zum Beispiel hat Deutsch die Orthographievarianten `1901` und `1996`, die als `de-1901` und `de-1996` geschrieben werden.

```js
// These two are equivalent when passed to other Intl APIs
const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-Latn-US");

console.log(locale1.language, locale1.script, locale1.region); // "en", undefined, "US"
console.log(locale2.language, locale2.script, locale2.region); // "en", "Latn", "US"
```

Eine Locale enthält auch eine Reihe von Konventionen, die von dieser speziellen Kultur verwendet werden:

<table>
<thead><tr><th>Anwendungsfall</th><th>Eigenschaft</th><th>Beschreibung</th><th>Erweiterungs-Untertitel</th></tr></thead>
<tbody>
<tr>
<td rowspan="2">Datums-/Uhrzeitformatierung</td>
<td>{{jsxref("Intl/Locale/calendar", "Kalendar")}}</td>
<td>Wird verwendet, um Tage in Jahre, Monate und Wochen zu gruppieren und ihnen Namen zuzuweisen. Zum Beispiel wird das <code>gregorianische</code> Datum „2022-01-01“ im <code>hebräischen</code> Kalender zu „28 Tevet 5782“.</td>
<td><code>ca</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/hourCycle", "Stundenzyklus")}}</td>
<td>Entscheidet, ob die Uhrzeit im 12- oder 24-Stunden-Format angezeigt wird und ob die kleinste Stundenzahl 0 oder 1 ist.</td>
<td><code>hc</code></td>
</tr>
<tr>
<td>Zahlenformatierung, einschließlich Daten, Zeiten, Dauer usw.</td>
<td>{{jsxref("Intl/Locale/numberingSystem", "Nummerierungssystem")}}</td>
<td>Transformiert Zahlen in eine locale-spezifische Notation. Das reguläre <code>0123456789</code>-System wird <code>latn</code> (Latein) genannt. Häufig hat jedes Skript ein Nummerierungssystem, das nur eine Ziffer-für-Ziffer-Übersetzung ist, aber einige Skripte haben mehr als ein Nummerierungssystem, einige schreiben möglicherweise normalerweise keine Zahlen in diesem Skript (zum Beispiel hat Chinesisch sein eigenes <code>hanidec</code>-Nummerierungssystem, aber die meisten Texte verwenden das Standard-<code>latn</code>-System), und andere erfordern möglicherweise spezielle Umrechnungsalgorithmen (zum Beispiel die römischen Zahlen — <code>roman</code>).</td>
<td><code>nu</code></td>
</tr>
<tr>
<td rowspan="3">Sortierung</td>
<td>{{jsxref("Intl/Locale/collation", "Sortierung")}}</td>
<td>Definiert den generischen Sortieralgorithmus. Wenn Sie zum Beispiel die deutsche <code>phonebk</code>-Sortierung verwenden, wird „ä“ wie „ae“ behandelt und zwischen „ad“ und „af“ sortiert.</td>
<td><code>co</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/caseFirst", "caseFirst")}}</td>
<td>Entscheidet, ob Groß- oder Kleinbuchstaben zuerst sortiert werden sollen oder ob die Groß-/Kleinschreibung ignoriert wird.</td>
<td><code>kf</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/numeric", "numerisch")}}</td>
<td>Entscheidet, ob Zahlen als Zahlen oder als Strings sortiert werden. Wenn es zum Beispiel wahr ist, wird „10“ nach „2“ sortiert.</td>
<td><code>kn</code></td>
</tr>
</tbody>
</table>

Sie können diese Eigenschaften explizit angeben, wenn Sie die `Intl.Locale` erstellen oder Sprach-Tags an andere `Intl`-Konstruktoren übergeben. Es gibt zwei Möglichkeiten, dies zu tun — Sie hängen sie entweder an das Sprach-Tag an oder geben sie als Optionen an.

- Um sie an das Sprach-Tag anzuhängen, fügen Sie zuerst die Zeichenfolge `-u` (bedeutet "Unicode-Erweiterung") an, dann den Erweiterung-Untertitel wie oben angegeben, dann den Wert.
- Um sie als Optionen anzugeben, fügen Sie einfach den Eigenschaftsnamen wie oben angegeben zusammen mit seinem Wert dem `options`-Objekt hinzu.

Am Beispiel der `Intl.DateTimeFormat` erzeugen beide der folgenden Zeilen einen Formatter, der Daten im hebräischen Kalender formatiert:

```js
const df1 = new Intl.DateTimeFormat("en-US-u-ca-hebrew");
const df2 = new Intl.DateTimeFormat("en-US", { calendar: "hebrew" });
```

Nicht erkannte Eigenschaften werden ignoriert, sodass Sie die gleiche Syntax wie oben mit `Intl.NumberFormat` verwenden können, aber es wird nichts anderes tun als nur `en-US` zu übergeben, da die Zahlenformatierung die `calendar`-Eigenschaft nicht verwendet.

Es ist schwierig, die Standardwerte dieser Locale-Konventionen herauszufinden. `new Intl.Locale("en-US").calendar` gibt `undefined` zurück, da das `Locale`-Objekt nur die von Ihnen übergebenen Informationen enthält. Der Standardkalender hängt theoretisch davon ab, mit welcher API Sie den Kalender verwenden, sodass Sie den Standardkalender von `en-US`, wie er von `Intl.DateTimeFormat` verwendet wird, mit seiner Methode {{jsxref("Intl/DateTimeFormat/resolvedOptions", "resolvedOptions()")}} abrufen können. Das Gleiche gilt für andere Eigenschaften.

```js
const locale = new Intl.Locale("en-US");
console.log(locale.calendar); // undefined; it's not provided
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar); // "gregory"
```

`Intl.Locale`-Objekte erfüllen zwei Aufgaben gleichzeitig: Sie repräsentieren ein geparstes BCP 47-Sprach-Tag (wie oben gezeigt), und sie liefern Informationen über diese Locale. Alle seine Eigenschaften, wie `calendar`, werden ausschließlich aus der Eingabe extrahiert, ohne eine Datenquelle für Standardwerte abzufragen. Auf der anderen Seite verfügt es über eine Gruppe von Methoden, um reale Informationen über die Locale abzufragen. Zum Beispiel ergänzen die Methoden {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, und {{jsxref("Intl/Locale/getCollations", "getCollations()")}} die Eigenschaften `calendar`, `hourCycle`, `numberingSystem`, und `collation`, und jede gibt einem Array der bevorzugten Werte für diese Eigenschaft zurück.

```js
const locale = new Intl.Locale("ar-EG");
console.log(locale.getCalendars()); // ['gregory', 'coptic', 'islamic', 'islamic-civil', 'islamic-tbla']
```

`Intl.Locale`-Instanzen enthalten auch andere Methoden, die nützliche Informationen offenlegen, wie {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}, und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.

## Herausfinden der Locale

Ein gemeinsames Anliegen bei der Internationalisierung ist: Woher weiß ich, welche Locale ich verwenden soll?

Die offensichtlichste Antwort lautet "was der Nutzer bevorzugt." Browser stellen die Spracheinstellungen des Nutzers über die [`navigator.languages`](/de/docs/Web/API/Navigator/languages)-Eigenschaft bereit. Dies ist ein Array von Sprach-Identifikatoren, das direkt an den Konstruktor des Formatters übergeben werden kann – mehr dazu später. Der Benutzer kann diese Liste in seinen Browsereinstellungen konfigurieren. Sie können auch ein leeres Array oder `undefined` übergeben, was beides dazu führt, dass die Standard-Locale des Browsers verwendet wird.

```js
const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));

const numberFormatter2 = new Intl.NumberFormat([]);
```

Dies liefert jedoch möglicherweise nicht immer das wünschenswerteste Ergebnis. Strings, die von `Intl`-Formattern formatiert werden, stellen nur einen kleinen Bruchteil des Textes dar, der auf Ihrer Website angezeigt wird; der größte Teil der lokalisierten Inhalte wird von Ihnen, dem Webseitenentwickler, bereitgestellt. Angenommen, Ihre Website wird nur in zwei Sprachen angeboten: Englisch und Französisch. Wenn ein japanischer Nutzer Ihre Website besucht und erwartet, sie in Englisch zu verwenden, wird er verwirrt sein, wenn er den englischen Text mit Zahlen und Daten in Japanisch vermischt sieht!

In der Regel möchten Sie also nicht die Standardsprache des Browsers verwenden. Stattdessen möchten Sie dieselbe Sprache verwenden, in der der Rest Ihrer Website angeboten wird. Angenommen, Ihre Website hat einen Sprachumschalter, der die Auswahl des Nutzers irgendwo speichert – Sie könnten diese direkt verwenden.

```js
// Suppose this can be changed by some site-wide control
const userSettings = {
  locale: "en-US",
  colorMode: "dark",
};
const numberFormatter = new Intl.NumberFormat(userSettings.locale);
console.log(numberFormatter.format(1234567.89));
```

Wenn Ihre Website ein Backend hat, das die Sprache basierend auf der {{httpheader("Accept-Language")}}-Header des Nutzers dynamisch auswählt und basierend darauf unterschiedliche HTML-Dateien zurücksendet, können Sie auch die [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)-Eigenschaft des HTML-Elements verwenden: `new Intl.NumberFormat(document.documentElement.lang)`.

Wenn Ihre Website nur in einer Sprache angeboten wird, könnten Sie die Locale auch hardcoden: `new Intl.NumberFormat("en-US")`.

Wie bereits erwähnt, können Sie auch ein Array von Locales an den Konstruktor übergeben, das eine Liste von Ausweichmöglichkeiten darstellt. Das erste Beispiel mit `navigator.languages` ist ein Beispiel hierfür: Wenn die erste benutzerkonfigurierte Locale für die bestimmte Operation nicht unterstützt wird, wird die nächste versucht, und so weiter, bis wir eine angeforderte Locale finden, für die die Laufzeitumgebung Daten hat. Sie können dies auch manuell tun. Im Beispiel unten spezifizieren wir eine Liste von Locales in abnehmender Spezifität, die alle Sprachen darstellen, die ein chinesischer Sprecher in Hongkong wahrscheinlich verstehen würde, sodass der Formatter die spezifischste Auswahl trifft, die er unterstützt.

```js
const numberFormatter = new Intl.NumberFormat([
  "yue-Hant",
  "zh-Hant-HK",
  "zh-Hant",
  "zh",
]);
```

Es gibt keine API, um alle unterstützten Locales aufzulisten, aber es gibt einige Methoden zur Handhabung der Locales-Liste:

- {{jsxref("Intl.getCanonicalLocales()")}}: Diese Funktion nimmt eine Liste von Locale-Identifikatoren und gibt eine Liste von kanonisierten Locale-Identifikatoren zurück. Dies ist nützlich, um den Kanonisierungsprozess für jeden `Intl`-Konstruktor zu verstehen.
- Die `supportedLocalesOf()`-statische Methode auf jedem `Intl`-Objekt (zum Beispiel {{jsxref("Intl.DateTimeFormat.supportedLocalesOf()")}}): Diese Methode nimmt dieselben Argumente wie der Konstruktor (`locales` und `options`) und gibt eine Teilmenge der angegebenen Locale-Tags zurück, die mit den angegebenen Daten übereinstimmen. Dies ist nützlich, um zu verstehen, welche Locales von der Laufzeitumgebung für eine bestimmte Operation unterstützt werden, zum Beispiel, um einen Sprachumschalter mit nur den unterstützten Sprachen anzuzeigen.

## Das Rückgabewert verstehen

Die zweite gemeinsame Frage für alle Objekte lautet: "Was gibt die Methode zurück?" Diese Frage ist schwer zu beantworten, jenseits der Struktur oder des Typs des zurückgegebenen Wertes, weil es keine normative Spezifikation gibt, die vorschreibt, was _genau_ zurückgegeben werden soll. Meistens ist das Ergebnis einer Methode konsistent. Das Ergebnis kann jedoch je nach Implementierung variieren, sogar innerhalb derselben Locale – Variationen in der Ausgabe sind gewollt und von der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann der von `format()` zurückgegebene String nicht-brechende Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollen die Ergebnisse einer `Intl`-Methode nicht mit hartkodierten Konstanten vergleichen; sie sollen nur dem Nutzer angezeigt werden.

Natürlich erscheint diese Antwort unbefriedigend, weil sich die meisten Entwickler wünschen, Einfluss darauf zu nehmen, wie die Ausgabe aussieht – zumindest soll der Nutzer nicht durch unsinnige Ausgaben verwirrt werden. Hier sind einige Richtlinien, wenn Sie Tests durchführen möchten, egal ob automatisiert oder manuell:

- Testen Sie alle Locales, die Ihr Nutzer verwenden könnte. Dies ist einfacher, wenn Sie eine feste Menge unterstützter Locales haben (zum Beispiel über einen Sprachumschalter). Wenn Sie das verwenden, was der Nutzer bevorzugt, können Sie einige der gängigen für Ihre Nutzer auswählen, aber bedenken Sie, dass das, was der Nutzer sieht, variieren könnte. Sie können normalerweise die Benutzereinstellungen über die Konfiguration des Testrunners oder durch Mocken der `Intl`-Konstruktoren abfangen.
- Testen Sie mit mehreren JavaScript-Engines. Die `Intl`-API wird direkt von der JavaScript-Engine implementiert, sodass Sie beispielsweise erwarten sollten, dass Node.js und Chrome (die beide V8 verwenden) dieselbe Ausgabe haben, während Firefox (der SpiderMonkey verwendet) eine andere Ausgabe haben könnte. Obwohl alle Engines wahrscheinlich die CLDR-Daten verwenden, werden diese normalerweise in unterschiedlicher Weise nachbearbeitet. Einige Browsereinstellungen (zum Beispiel zur Reduzierung der Installationsgröße) können ebenfalls beeinflussen, welche Locales und Optionen unterstützt werden.
- Gehen Sie nicht davon aus, dass die Ausgabe festliegt. Das bedeutet, dass Sie die Ausgabe nicht manuell schreiben sollten, wie `expect(result).toBe("foo")`. Stattdessen verwenden Sie Snapshot-Tests oder kopieren den String-Wert aus der Ausgabe eines Testruns.

## Formatierung von Daten

Ein wichtiger Anwendungsfall von `Intl` ist die Ausgabe von lokalisierungsspezifischen Texten, die strukturierte Daten darstellen. Dies ist ähnlich wie bei Übersetzungssoftware, aber anstatt Ihnen zu ermöglichen, beliebigen Text zu übersetzen, nimmt es Daten wie Datumsangaben, Zahlen und Listen und formatiert sie nach lokalisierungsspezifischen Regeln.

Die Objekte {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}}, und {{jsxref("Intl.RelativeTimeFormat")}} formatieren jeweils einen Datentyp. Jede Instanz bietet zwei Methoden:

- `format()`: Nimmt ein Datenstück und gibt einen String zurück, der die Formatierungsregel verwendet, wie sie durch die Locale und die Optionen bestimmt wird.
- `formatToParts()`: Nimmt die gleichen Daten und gibt den gleichen String zurück, jedoch in Teile zerlegt, wobei jeder Teil ein Objekt mit einem `type` und einem `value` ist. Dies ist nützlich für anspruchsvollere Anwendungsfälle, wie das Verschachteln des formatierten Textes mit anderen Texten.

Ein typisches Beispiel für die Verwendung des {{jsxref("Intl.NumberFormat")}}-Objekts:

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

Es ist nicht immer erforderlich, ein Formatter-Objekt zu erstellen, um Strings zu formatieren. Für den gelegentlichen Gebrauch können Sie auch direkt die `toLocaleString()`-Methode auf den Daten aufrufen und die Locale und Optionen als Argumente übergeben. Die `toLocaleString()`-Methode wird von {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}, {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}, {{jsxref("Number.prototype.toLocaleString()")}}, und so weiter implementiert. Lesen Sie die Dokumentation zu den von Ihnen zu formatierenden Daten, um zu sehen, ob sie `toLocaleString()` unterstützen und welche Optionen zum Formatter sie entsprechen.

```js
console.log(
  (5.259).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }),
); // $5.26
```

Beachten Sie, dass `toLocaleString()` potenziell weniger effizient ist als die Verwendung eines Formatter-Objekts, da bei jedem Aufruf von `toLocaleString` eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden muss. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein Formatter-Objekt zu erstellen und seine `format()`-Methode zu verwenden, da ein Formatter-Objekt sich die ihm übergebenen Argumente merkt und eventuell beschließen kann, einen Teil der Datenbank zu speichern, sodass zukünftige `format`-Aufrufe innerhalb eines eingeschränkteren Kontexts suchen können.

### Datums- und Zeitformatierung

{{jsxref("Intl.DateTimeFormat")}} formatiert Daten und Uhrzeiten sowie Bereiche von Daten und Uhrzeiten. Das `DateTimeFormat`-Objekt nimmt Eingaben in Form von Datums-/Uhrzeitangaben in einer der folgenden Formen an: {{jsxref("Date")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, oder {{jsxref("Temporal.PlainMonthDay")}}.

> [!NOTE]
> Sie können kein {{jsxref("Temporal.ZonedDateTime")}}-Objekt direkt übergeben, da die Zeitzone bereits im Objekt festgelegt ist. Sie sollten {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} verwenden oder es zuerst in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt umwandeln.

Häufige Anwendungsfälle für lokalisierte Datums- und Zeitformatierung sind wie folgt:

- Ausgabe desselben Datums und derselben Uhrzeit in einem anderen Kalendersystem, wie dem Islamischen, Hebräischen oder Chinesischen Kalender.
- Ausgabe derselben realen Uhrzeit, aber in einer anderen Zeitzone.
- Selektive Ausgabe bestimmter Komponenten des Datums und der Uhrzeit, wie nur das Jahr und den Monat, und deren spezifische Darstellung (z. B. "Donnerstag" oder "Do").
- Ausgabe des Datums nach lokalisierungsspezifischen Konventionen, wie MM/TT/JJJJ in den USA, TT/MM/JJJJ im Vereinigten Königreich oder JJJJ/MM/TT in Japan.
- Ausgabe der Uhrzeit nach lokalisierungsspezifischen Konventionen, wie der 12-Stunden- oder der 24-Stunden-Uhr.

Um zu entscheiden, wie der formatierte String aussehen soll, wählen Sie zuerst den Kalender (der die Berechnung von Jahr, Monat, Woche und Tag beeinflusst) und die Zeitzone (die die genaue Zeit sowie möglicherweise das Datum beeinflusst). Dies geschieht mit der zuvor erwähnten `calendar`-Option (oder dem `-ca-`-Erweiterungsschlüssel im Locale-Identifikator) und der `timeZone`-Option.

- `Date`-Objekte repräsentieren einen eindeutigen Moment in der Zeitzone des Nutzers und im ISO 8601-Kalender (wie von Methoden wie {{jsxref("Date.prototype.getHours()")}} und {{jsxref("Date.prototype.getMonth()")}} berichtet). Sie werden in den angegebenen `calendar` und `timeZone` umgewandelt, indem der Moment erhalten bleibt, sodass sich Datum- und Zeitkomponenten ändern können.
- Die verschiedenen {{jsxref("Temporal")}}-Objekte haben bereits einen Kalender eingebaut, sodass die `calendar`-Option mit dem Kalender des Objekts übereinstimmen muss – es sei denn, der Kalender des Datums ist `"iso8601"`, in diesem Fall wird er in den angeforderten `calendar` umgewandelt. Diese Objekte haben keine Zeitzone, sodass sie direkt in der angegebenen `timeZone` angezeigt werden, ohne Konversion.

Hier demonstrieren wir, wie die Kombination der Konfigurationen von `calendar` und `timeZone` zu unterschiedlichen Darstellungen desselben Moments führt.

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

| Calendar  | TimeZone           | Ausgabe                                                        |
| --------- | ------------------ | -------------------------------------------------------------- |
| 'gregory' | 'America/New_York' | 'Freitag, 31. Dezember 2021 um 19:00:00 Eastern Standard Time' |
| 'gregory' | 'Asia/Tokyo'       | 'Samstag, 1. Januar 2022 um 09:00:00 Japan Standard Time'      |
| 'hebrew'  | 'America/New_York' | 'Freitag, 27 Tevet 5782 um 19:00:00 Eastern Standard Time'     |
| 'hebrew'  | 'Asia/Tokyo'       | 'Samstag, 28 Tevet 5782 um 09:00:00 Japan Standard Time'       |

Ein Datum/Zeit besteht aus den folgenden Komponenten: `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, und `timeZoneName`. Ihre nächste Entscheidung ist, welche Komponenten in der Ausgabe enthalten sein sollen und in welcher Form. Sie haben zwei Optionen:

- Sie können jede Komponente manuell konfigurieren, indem Sie Optionen mit dem gleichen Namen wie die Komponente verwenden. Nur die von Ihnen angegebenen Komponenten werden in die Ausgabe aufgenommen, mit der angegebenen Form.
- Sie können die Abkürzungen `dateStyle` und `timeStyle` verwenden, die vordefinierte Sets von Komponenten sind. Sie erweitern sich zu einem Satz von Komponentenoptionen, abhängig von der Locale.

Sie sollten sich für eine dieser beiden Methoden entscheiden, da sie sich gegenseitig ausschließen. Die gleichzeitige Verwendung beider Methoden führt zu einem Fehler.

Im Hintergrund sucht das `DateTimeFormat`-Objekt nach einem „Template“, das den angeforderten Komponenten entspricht, sodass es nur die Werte einer nach dem anderen ausfüllen muss. Nicht jede Kombination von Komponenten hat ein vordefiniertes Template. `DateTimeFormat` hat eine `formatMatcher`-Option, die entscheidet, wie verhandelt wird, indem Komponenten länger oder kürzer als angefordert gemacht werden oder durch Entfernen oder Hinzufügen von Komponenten. Es wird ziemlich technisch, daher sollten Sie die Referenz zur [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) lesen, um besser zu verstehen, wie dies gehandhabt wird.

Hier zeigen wir Ihnen einige gängige Möglichkeiten zur Formatierung der Komponenten:

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

Es gibt weitere Anpassungsoptionen. Zum Beispiel können Sie die `hourCycle`-Option verwenden, um die Uhrzeit im 12- oder 24-Stunden-Format anzuzeigen und Mitternacht/Mittag als 12:00 oder 0:00 darzustellen. Sie können auch die `numberingSystem`-Option verwenden, um alle Zahlen in einem anderen Nummerierungssystem anzuzeigen.

Abgesehen von `format()` gibt es eine zweite wichtige Methode, {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}, die einen Bereich von Daten oder Uhrzeiten formatiert. Sie nimmt zwei Datum/Uhrzeit-Werte des gleichen Typs, formatiert jeden einzelnen, verbindet sie mit einem Bereichstrennzeichen (wie dem Bindestrich) und verdrängt die gemeinsamen Teile.

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

Die Zahlenformatierung erfolgt mit dem {{jsxref("Intl.NumberFormat")}}-Objekt. Das `NumberFormat`-Objekt akzeptiert Eingaben in Form von Zahlen, Strings oder `BigInt`-Werten. Das Übergeben von Strings oder `BigInt` anstelle von Zahlen ermöglicht es Ihnen, Zahlen zu formatieren, die zu groß oder zu klein sind, um präzise als JavaScript-Zahl dargestellt zu werden.

Häufige Anwendungsfälle für die lokalisierte Zahlenformatierung sind wie folgt:

- Ausgabe der Zahl in einem anderen Nummerierungssystem (Schriftart), wie Chinesisch, Arabisch oder Römisch.
- Ausgabe der Zahl mit lokalisierungsspezifischen Konventionen, wie dem Dezimalsymbol („.“ im Englischen, aber „,“ in vielen europäischen Kulturen) oder dem Gruppieren von Ziffern (3 Ziffern im Englischen, aber möglicherweise 4 oder 2 in anderen Kulturen und möglicherweise Verwendung von „,“, „ “, oder „. “).
- Ausgabe der Zahl in exponentieller Notation wie „3,7 Millionen“ oder „2 Tausend“.
- Ausgabe der Zahl als Währung, wobei spezifische Währungssymbole und Rundungsregeln angewendet werden. Zum Beispiel, Geldbeträge unter einem Cent in den USA oder unter einem Yen in Japan sind möglicherweise nicht sinnvoll, um angezeigt zu werden.
- Ausgabe der Zahl als Prozentangabe, wobei lokalisierungsspezifische Umwandlungs- und Formatierungsregeln angewendet werden.
- Ausgabe der Zahl mit Einheiten, wie „Meter“ oder „Liter“, mit übersetzten Einheitsnamen.

Um zu entscheiden, wie der formatierte String aussieht, wählen Sie zuerst das Nummerierungssystem (welches die Zeichen, die für die Ziffern verwendet werden, beeinflusst). Der Zweck eines Nummerierungssystems wurde bereits in den [lokalen Informationen](#lokale_informationen) besprochen. Eine weitere Option, die Sie entscheiden müssen, ist der `style`, der den Kontext festlegt, was die Zahl darstellt und möglicherweise die Standardwerte anderer Optionen beeinflusst. Er ist einer von `"decimal"`, `"percent"`, `"currency"`, oder `"unit"`. Wenn Sie Währungen formatieren möchten, müssen Sie auch die `currency`-Option angeben. Wenn Sie Einheiten formatieren möchten, müssen Sie auch die `unit`-Option angeben.

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

Die Ausgabe sieht wie folgt aus:

| style      | Ausgabe          |
| ---------- | ---------------- |
| 'decimal'  | '1,234,567.89'   |
| 'percent'  | '123,456,789%'   |
| 'currency' | '$1,234,567.89'  |
| 'unit'     | '1,234,567.89 m' |

Die nächste Gruppe von Optionen spezifiziert, wie der numerische Teil aussehen soll. Zunächst möchten Sie möglicherweise extrem große Werte auf eine lesbarere Weise darstellen. Sie können die `notation`-Option auf `"scientific"` oder `"engineering"` festlegen, die beide die `1.23e+6 NOTATION` verwenden. Der Unterschied besteht darin, dass letztere Vielfache von 3 für den Exponenten verwendet und die [Mantissa](https://en.wikipedia.org/wiki/Scientific_notation) (der Teil vor dem `e`-Symbol) zwischen 1 und 1000 hält, während die erstere einen beliebigen ganzzahligen Exponenten verwenden kann und die Mantissa zwischen 1 und 10 bleibt. Sie können auch `notation` auf `"compact"` setzen, um eine lesbarere Notation für Menschen zu verwenden.

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

Die Ausgabe sieht folgendermaßen aus:

| notation        | Ausgabe       |
| --------------- | ------------- |
| 'scientific'    | '1.2E4'       |
| 'engineering'   | '12E3'        |
| 'compact-short' | '12K'         |
| 'compact-long'  | '12 thousand' |

Dann möchten Sie möglicherweise die Zahl (oder, wenn Sie `notation` angegeben haben, nur den Mantissateil) runden, damit Sie keine zu lange Zahl anzeigen. Das sind die Optionsoptionen, die Folgendes umfassen:

- `minimumIntegerDigits`
- `minimumFractionDigits`
- `maximumFractionDigits`
- `minimumSignificantDigits`
- `maximumSignificantDigits`
- `roundingPriority`
- `roundingIncrement`
- `roundingMode`

Die genaue Interaktion dieser Optionen ist ziemlich komplex und es lohnt sich nicht, sie hier zu behandeln. Sie sollten die [Digit-Options](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) durchlesen, um mehr Details zu erhalten. Dennoch ist die allgemeine Idee recht einfach: Wir bestimmen zunächst die Anzahl der Nachkommastellen, die wir behalten möchten, und dann runden wir überschüssige Nachkommastellen ab, entweder nach unten oder nach oben, abhängig vom Wert der letzten Ziffer.

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

Es gibt noch weitere Anpassungsoptionen. Zum Beispiel können Sie die `useGrouping`- und `signDisplay`-Optionen verwenden, um anzupassen, ob und wie Gruppenseparatoren (wie „,“ in „1,234,567.89“) und das Zeichen angezeigt werden. Beachten Sie jedoch, dass die für den Gruppenseparator, das Dezimalzeichen und das Zeichen verwendeten Zeichen localespezifisch sind, sodass Sie sie nicht direkt anpassen können.

Abgesehen von `format()`, gibt es eine zweite wichtige Methode, {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}, die einen Bereich von Zahlen formatiert. Sie nimmt zwei Zahlenrepräsentationen, formatiert jede einzelne, verbindet sie mit einem Bereichsseparator (wie dem Bindestrich) und verdrängt gegebenenfalls die gemeinsamen Teile.

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

Dieser Code ist nicht internationalisiert. In einigen Sprachen ist der Listen-Trenner kein Komma. In _den meisten_ Sprachen (einschließlich Englisch) benötigt man vor dem letzten Element eine Konjunktion. Aber selbst das Hinzufügen eines „und“ manuell macht es nicht korrekt bei allen englischen Sprechern, da es in der englischen Sprache Debatten über [Oxford-Kommas](https://en.wikipedia.org/wiki/Serial_comma) gibt: „apple, banana, and cherry“ vs. „apple, banana and cherry“.

Das {{jsxref("Intl.ListFormat")}}-Objekt löst dieses Problem. Es nimmt ein Array von Strings und verbindet diese auf lokalisierungsspezifische Weise, sodass das Ergebnis eine Konjunktion (und), Disjunktion (oder) oder eine Liste von Einheiten darstellt.

```js
const fruits = ["apple", "banana", "cherry"];
const lf = new Intl.ListFormat("en-US", { style: "long", type: "conjunction" });
console.log(`I like ${lf.format(fruits)}.`);
// I like apple, banana, and cherry.

const lf = new Intl.ListFormat("en-US", { style: "long", type: "disjunction" });
console.log(`I can give you ${lf.format(fruits)}.`);
// I can give you apple, banana, or cherry.
```

Sehen Sie sich {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} für weitere Beispiele und Optionen an.

### Relative Zeitformatierung

{{jsxref("Intl.RelativeTimeFormat")}} formatiert ein Zeitunterschied. Das `RelativeTimeFormat`-Objekt nimmt relative Zeiten in Form von zwei Argumenten an: einer Zahl (mit beliebigem Vorzeichen) und einer Zeiteinheit, etwa „Tag“, „Stunde“ oder „Minute“.

Es erledigt mehrere Dinge gleichzeitig:

- Es lokalisiert und pluralisiert die Zeiteinheit, wie „1 Tag“ vs. „2 Tage“, ähnlich wie bei der Zahlenformatierung.
- Es wählt die passende Phrase für vergangene und zukünftige Zeiten, etwa „in 1 Tag“ vs. „vor 1 Tag“.
- Es wählt möglicherweise eine spezielle Phrase für einige Zeiteinheiten, wie „vor 1 Tag“ vs. „gestern“.

```js
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(-1, "hour")); // 1 hour ago
```

Sehen Sie sich {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}} für weitere Beispiele und Optionen an.

### Dauerformatierung

{{jsxref("Intl.DurationFormat")}} bietet die Dauerformatierung, wie „3 Stunden, 4 Minuten, 5 Sekunden“. Es ist keine primitive Operation mit eigenem Formatter: es verwendet intern {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.ListFormat")}}, um jede Daurkomponente zu formatieren und verbindet sie dann mit einem Listenseparator. Das `DurationFormat`-Objekt akzeptiert Dauerangaben in Form eines {{jsxref("Temporal.Duration")}}-Objekts oder eines einfachen Objekts mit denselben Eigenschaften.

Abgesehen von der Anpassung des Nummerierungssystems entscheidet die Dauerformatierungs-Option, ob und wie jede Komponente angezeigt werden soll.

```js
console.log(
  new Intl.DurationFormat("en-US", {
    style: "long",
  }).format({ hours: 3, minutes: 4, seconds: 5 }),
);
// 3 hours, 4 minutes, and 5 seconds
```

Sehen Sie sich {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}} für weitere Beispiele und Optionen an.

## Kollation

Das {{jsxref("Intl.Collator")}}-Objekt ist nützlich zum Vergleichen und Sortieren von Strings. Es nimmt zwei Strings und gibt eine Zahl zurück, die ihre relative Reihenfolge angibt, genauso wie das `compareFn`-Argument der {{jsxref("Array.prototype.sort")}}-Methode.

Es gibt viele Gründe, warum Sie nicht JavaScript-Operatoren wie `===` oder `>` verwenden sollten, um benutzerorientierte Strings zu vergleichen:

- Irrelevante orthographische Varianten: Zum Beispiel werden im Englischen „naïve“ und „naive“ einfach als alternative Schreibweisen desselben Wortes behandelt und sollten als gleich behandelt werden.
- Groß-/Kleinschreibung ignorieren: Oft möchten Sie die Groß-/Kleinschreibung beim Vergleichen von Strings ignorieren. Zum Beispiel sollten „apple“ und „Apple“ als gleich behandelt werden.
- Die Reihenfolge der Unicode-Codepunkte ergibt keinen Sinn: Vergleichsoperatoren wie `>` vergleichen nach der Reihenfolge der Unicode-Codepunkte, die nicht der Reihenfolge der Zeichen in einem Wörterbuch entspricht. Zum Beispiel kommt „ï“ nach „z“ in der Reihenfolge der Codepunkte, aber Sie möchten, dass es im Wörterbuch neben „i“ geordnet wird.
- Unicode-Normalisierung: Dasselbe Zeichen kann in Unicode mehrere Darstellungen haben. Zum Beispiel kann „ñ“ als einzelnes Zeichen oder als „n“ gefolgt von einer kombinierten Tilde dargestellt werden. (Siehe {{jsxref("String.prototype.normalize()")}}.) Diese sollten als gleich behandelt werden.
- Zahlenvergleich: Zahlen in Strings sollten als Zahlen und nicht als Strings verglichen werden. Zum Beispiel möchten Sie, dass „test-10“ nach „test-2“ kommt.

Es gibt zwei verschiedene Anwendungsfälle für die Sortierung: **Sortieren** und **Suchen**. Sortieren ist, wenn Sie eine Liste von Strings haben und diese nach einer Regel ordnen möchten. Suchen ist, wenn Sie eine Liste von Strings haben und einen String finden möchten, der mit einer Abfrage übereinstimmt. Beim Suchen sollten Sie nur darauf achten, ob das Vergleichsergebnis Null (gleich) oder nicht ist, nicht das Vorzeichen des Ergebnisses.

Es gibt viele verschiedene Möglichkeiten, zu sortieren, sogar innerhalb derselben Locale. Zum Beispiel gibt es zwei verschiedene Sortierordnungen im Deutschen, _Telefonbuch_ und _Wörterbuch_. Die Sortierung des Telefonbuchs betont den Klang – als ob „ä“, „ö“ und so weiter vor dem Sortieren auf „ae“, „oe“ und so weiter erweitert würden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare));
// ['Hochberg', 'Hönigswald', 'Holzman']
```

Einige deutsche Wörter konjugieren mit zusätzlichen Umlauten, sodass es in Wörterbüchern sinnvoll ist, beim Sortieren die Umlaute zu ignorieren (außer wenn Wörter differenziert werden, die _nur_ von Umlauten unterscheiden: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

## Pluralregeln

Das {{jsxref("Intl.PluralRules")}}-Objekt ist nützlich zum Auswählen der richtigen Pluralform eines Wortes. Es pluralisiert nicht automatisch Wörter für Sie (zum Beispiel können Sie „apple“ nicht übergeben und „apples“ erwarten), aber es sagt Ihnen, welche Pluralform basierend auf einer Zahl verwendet werden soll. Sie machen das möglicherweise bereits so:

```js
function formatMessage(n) {
  return `You have ${n} ${n === 1 ? "apple" : "apples"}.`;
}
```

Aber das ist schwer zu generalisieren über Sprachen hinweg, insbesondere jene mit vielen Pluralformen. Sie können {{jsxref("Intl.PluralRules")}} für eine allgemeine Einführung in Pluralregeln verwenden. Hier zeigen wir nur einige häufige Anwendungsfälle.

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

Das {{jsxref("Intl.Segmenter")}}-Objekt ist nützlich zum Aufbrechen eines Strings in Segmente. Ohne `Intl` können Sie einen String bereits nach [UTF-16-Codeeinheiten und Unicode-Codepunkten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) aufspalten:

```js
const str = "🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷";
console.log(str.split(""));
// Array(20) ['\uD83C', '\uDDFA', '\uD83C', ...]
console.log([...str]);
// Array(10) ['🇺', '🇸', '🇨', '🇳', '🇷', '🇺', '🇬', '🇧', '🇫', '🇷']
```

Wie Sie sehen können, sind Unicode-Codepunkte nicht dasselbe wie das, was Menschen als diskrete Zeichen wahrnehmen. Dies geschieht häufig mit Emojis, bei denen ein einzelnes Emoji durch mehrere Codepunkte dargestellt werden kann. Wenn der Benutzer mit Text interagiert, ist ein Graphem die kleinste Einheit von Text, die sie manipulieren können, wie löschen oder auswählen. Das `Segmenter`-Objekt ermöglicht eine Segmentierung auf Graphem-Ebene, die nützlich für das Zählen von Zeichen, Messen der Textbreite usw. ist. Es nimmt einen String und gibt ein iterables [Segmente](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekt zurück, dessen jedes Element eine `segment`-Eigenschaft hat, die den Text des Segments darstellt.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
console.log([...segmenter.segment("🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷")].map((s) => s.segment));
// ['🇺🇸', '🇨🇳', '🇷🇺', '🇬🇧', '🇫🇷']
```

Der Segmenter kann auch eine höherstufige Segmentierung durchführen, einschließlich der Trennung auf Wort- und Satzebene. Diese Anwendungsfälle sind notwendigerweise sprachspezifisch. Zum Beispiel ist das folgende eine sehr schlechte Implementierung zur Wortzählung:

```js example-bad
const wordCount = (str) => str.split(/\s+/).length;
console.log(wordCount("Hello, world!")); // 2
```

Es gibt mehrere Probleme mit diesem Ansatz: nicht alle Sprachen verwenden Leerzeichen, um Wörter zu trennen; nicht alle Leerzeichen trennen Wörter; und nicht alle Wörter sind durch Leerzeichen getrennt. Um dies zu lösen, verwenden Sie `Segmenter` mit `granularity: "word"`. Das Ergebnis ist der Eingabestring, aufgeteilt in Segmente von Wörtern und Nicht-Wörtern. Wenn Sie Wörter zählen, sollten Sie die Nicht-Wörter herausfiltern, indem Sie die `isWordLike`-Eigenschaft jedes Segments überprüfen.

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

Die Wortsegmentierung funktioniert auch für zeichenbasierte Sprachen. Zum Beispiel können im Chinesischen mehrere Zeichen ein einziges Wort darstellen, aber es gibt kein Leerzeichen zwischen ihnen. Der Segmenter implementiert dasselbe Verhalten wie die eingebaute Wortsegmentierung des Browsers, die durch Doppelklicken auf ein Wort ausgelöst wird.

```js
const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "word" });
console.log([...segmenter.segment("我是这篇文档的作者")].map((s) => s.segment));
// ['我是', '这', '篇', '文', '档', '的', '作者']
```

Die Satzsegmentierung ist ähnlich komplex. Zum Beispiel gibt es im Englischen viele Interpunktionszeichen, die das Ende eines Satzes markieren könnten (".", "!", "?" usw.).

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "sentence" });
console.log(
  [...segmenter.segment("I ate a sandwich. Then I went to bed.")].map(
    (s) => s.segment,
  ),
);
// ['I ate a sandwich. ', 'Then I went to bed.']
```

Beachten Sie, dass der Segmenter keine Zeichen entfernt. Er trennt nur den String in Segmente, von denen jedes eine Aussage ist. Sie können dann die Interpunktionen entfernen, wenn Sie möchten. Auch unterstützt die aktuelle Implementierung des Segmenters keine Satzsegmentierungssuppressionen (Verhinderung von Satzumbrüchen nach Punkten wie "Mr." oder "Approx."), aber es wird daran gearbeitet, dies zu unterstützen.

## Anzeigemöglichkeiten

Nach der Vorstellung von so vielen Optionen und Verhaltensweisen fragen Sie sich vielleicht, wie man sie dem Benutzer präsentiert. `Intl` bietet zwei nützliche APIs zum Erstellen von Benutzeroberflächen: {{jsxref("Intl.supportedValuesOf()")}} und {{jsxref("Intl.DisplayNames")}}.

Die Funktion {{jsxref("Intl.supportedValuesOf()")}} gibt ein Array von unterstützten Werten für eine bestimmte Option zurück. Zum Beispiel können Sie es verwenden, um eine Dropdown-Liste mit unterstützten Kalendern zu füllen, aus der die Benutzer auswählen können, um Daten anzuzeigen.

```js
const supportedCal = Intl.supportedValuesOf("calendar");
console.log(supportedCal);
// ['buddhist', 'chinese', 'coptic', 'dangi', ...]
```

Aber häufig sind diese Identifikatoren nicht benutzerfreundlich. Zum Beispiel möchten Sie die Kalender in der Sprache des Benutzers anzeigen oder sie unabgekürzt darstellen. Das {{jsxref("Intl.DisplayNames")}}-Objekt ist dafür nützlich. Es ist wie ein Formatter, ist jedoch nicht vorlagenbasiert. Stattdessen handelt es sich um ein direktes Mapping von sprachunabhängigen Identifikatoren zu lokalisierten Namen. Es unterstützt das Formatieren von Sprachen, Regionen, Skripten (die drei Unterfelder eines BCP 47-Tags), Währung, Kalender und Datums-Zeit-Feldern.

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
