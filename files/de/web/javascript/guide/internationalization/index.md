---
title: Internationalisierung
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: 21e2b8f4b57964e00899bf81d9457d04e1f1009d
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript Internationalisierungs-API, die eine breite Palette von lokalen- und kulturspezifischen Daten und Operationen bereitstellt.

## Übersicht

Das `Intl`-Objekt ist sehr anwendungsbezogen. Es bietet ein separates Objekt für jeden Anwendungsfall, der logik-spezifisch ist. Derzeit bietet es die folgenden Funktionen:

- [Erhalten von Informationen über ein Gebietsschema](#gebietsinformationen) mit {{jsxref("Intl.Locale")}}.
- [Formatierung von Daten](#formatieren_von_daten) mit {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}}.
- [Kollation](#kollation) (d.h. Vergleich von Zeichenfolgen für die Sortierung oder Suche) mit {{jsxref("Intl.Collator")}}.
- [Auswahl von Pluralformen](#pluralregeln) mit {{jsxref("Intl.PluralRules")}}.
- [Segmentierung von Text](#segmentierung) in Einheiten wie Wörter, Sätze oder Grapheme mit {{jsxref("Intl.Segmenter")}}.
- [Erhalten des angezeigten Namens](#anzeigenamen) für Währungen, Sprachen, Schriften, Regionen und Zeitzonen mit {{jsxref("Intl.DisplayNames")}}.

Die meisten `Intl`-APIs folgen einem ähnlichen Design ({{jsxref("Intl.Locale")}} ist die einzige Ausnahme). Sie beginnen damit, eine Instanz mit dem gewünschten Gebietsschema und den Optionen zu erstellen. Dies definiert eine Reihe von Regeln für die gewünschte Operation (Formatierung, Kollation, Segmentierung usw.). Dann, wenn Sie die Methode wie `format()`, `compare()` oder `segment()` auf der Instanz aufrufen, wendet das Objekt die spezifizierte Regel auf die übergebenen Daten an.

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
  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Gebietsschema-Identifiers. Das Standardgebietsschema des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Gebietsschema-Identifiers unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Eigenschaften, das spezifische Aspekte der Operation anpasst, was der Schlüssel zum Verstehen ist, wie jedes `Intl`-Objekt verwendet wird.

## Gebietsinformationen

Gebietsschemata liegen allen Verhaltensweisen von `Intl` zugrunde. Ein _locale_ ist eine Reihe von Konventionen, die in der `Intl`-API durch das {{jsxref("Intl.Locale")}}-Objekt dargestellt werden. Alle `Intl`-Konstruktoren, die Sprach-Tags akzeptieren, akzeptieren auch `Intl.Locale`-Objekte.

Jedes Gebietsschema wird hauptsächlich durch drei Dinge definiert: eine {{jsxref("Intl/Locale/language", "language")}}, eine {{jsxref("Intl/Locale/script", "script")}}, und eine {{jsxref("Intl/Locale/region", "region")}}. Wenn sie in dieser Reihenfolge durch `-` verbunden werden, bilden sie ein [BCP 47-Sprach-Tag](https://datatracker.ietf.org/doc/html/rfc5646).

- Die Sprache ist der wichtigste Teil des Gebietsschemas und ist obligatorisch. Wenn eine einzelne Sprache angegeben wird, wie `en` oder `fr`, gibt es Algorithmen, um den Rest der Informationen abzuleiten (siehe {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}).
- Sie möchten jedoch oft auch die Region angeben, da sich die Konventionen zwischen Regionen, die dieselbe Sprache sprechen, drastisch unterscheiden können. Zum Beispiel ist das Datumsformat in den USA MM/TT/JJJJ, während es im Vereinigten Königreich TT/MM/JJJJ ist, daher ist die Angabe von `en-US` oder `en-GB` wichtig.
- Sie können auch ein Schriftsystem angeben. Das Schriftsystem ist das Schriftsystem oder die Zeichen, die zur Transkription der Sprache verwendet werden. In der Praxis ist das Schriftsystem oft unnötig, da die Sprache in einer bestimmten Region nur in einem Schriftsystem geschrieben wird. Es gibt jedoch Ausnahmen wie die serbische Sprache, die sowohl in lateinischer als auch in kyrillischer Schrift geschrieben werden kann (`sr-Latn` und `sr-Cyrl`), oder die chinesische Sprache, die sowohl in der vereinfachten als auch in der traditionellen Schrift geschrieben werden kann (`zh-Hans` und `zh-Hant`).

```js
// These two are equivalent when passed to other Intl APIs
const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-Latn-US");

console.log(locale1.language, locale1.script, locale1.region); // "en", undefined, "US"
console.log(locale2.language, locale2.script, locale2.region); // "en", "Latn", "US"
```

Ein Gebietsschema enthält auch eine Reihe von Konventionen, die von dieser bestimmten Kultur verwendet werden:

<table>
<thead><tr><th>Anwendungsfall</th><th>Eigenschaft</th><th>Beschreibung</th><th>Erweiterungs-Subtag</th></tr></thead>
<tbody>
<tr>
<td rowspan="2">Datum/Zeit-Formatierung</td>
<td>{{jsxref("Intl/Locale/calendar", "calendar")}}</td>
<td>Verwendet, um Tage in Jahre, Monate und Wochen zu gruppieren und ihnen Namen zuzuweisen. Zum Beispiel wird das <code>gregorianische</code> Datum "2022-01-01" im <code>hebräischen</code> Kalender zu "28 Tewet 5782".</td>
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
<td>Trägt zur lokalspezifischen Darstellung von Zahlen bei. Das reguläre <code>0123456789</code>-System wird <code>latn</code> (lateinisch) genannt. Oft hat jedes Schriftsystem ein Ziffernsystem, das nur eine Ziffer-für-Ziffer-Übersetzung ist, aber einige Schriftsysteme haben mehr als ein Zahlenformat, einige schreiben normalerweise keine Zahlen in dieser Schrift (zum Beispiel hat Chinesisch sein eigenes <code>hanidec</code>-Nummerierungssystem, aber die meisten Texte verwenden das Standard-<code>latn</code>-System), und andere erfordern spezielle Umwandlungsalgorithmen (z. B. römische Zahlen — <code>roman</code>).</td>
<td><code>nu</code></td>
</tr>
<tr>
<td rowspan="3">Kollation</td>
<td>{{jsxref("Intl/Locale/collation", "collation")}}</td>
<td>Definiert den allgemeinen Kollationsalgorithmus. Wenn Sie beispielsweise die deutsche <code>phonebk</code>-Kollation verwenden, wird "ä" als "ae" behandelt und zwischen "ad" und "af" einsortiert.</td>
<td><code>co</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/caseFirst", "caseFirst")}}</td>
<td>Entscheidet, ob Groß- oder Kleinbuchstaben zuerst sortiert werden sollen oder ob die Groß- und Kleinschreibung ignoriert wird.</td>
<td><code>kf</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/numeric", "numeric")}}</td>
<td>Entscheidet, ob Zahlen als Zahlen oder Zeichenfolgen sortiert werden sollen. Zum Beispiel, wenn true, wird "10" nach "2" sortiert.</td>
<td><code>kn</code></td>
</tr>
</tbody>
</table>

Sie können diese Eigenschaften beim Erstellen des `Intl.Locale` oder beim Übergeben von Sprach-Tags an andere `Intl`-Konstruktoren explizit angeben. Es gibt zwei Möglichkeiten, dies zu tun: Fügen Sie sie dem Sprach-Tag hinzu oder geben Sie sie als Optionen an.

- Um sie dem Sprach-Tag hinzuzufügen, hängen Sie zuerst die Zeichenfolge `-u` an (bedeutet "Unicode-Erweiterung"), dann das Erweiterungs-Subtag wie oben angegeben und dann den Wert.
- Um sie als Optionen anzugeben, fügen Sie einfach den Eigenschaftsnamen wie oben angegeben zusammen mit seinem Wert dem `options`-Objekt hinzu.

Am Beispiel von `Intl.DateTimeFormat` erstellen beide der folgenden Zeilen einen Formatter, der Daten im hebräischen Kalender formatiert:

```js
const df1 = new Intl.DateTimeFormat("en-US-u-ca-hebrew");
const df2 = new Intl.DateTimeFormat("en-US", { calendar: "hebrew" });
```

Nicht erkannte Eigenschaften werden ignoriert, sodass Sie dieselbe Syntax wie oben mit `Intl.NumberFormat` verwenden können, es wird jedoch nichts anderes tun, als nur `en-US` zu übergeben, da die `calendar`-Eigenschaft nicht für die Zahlenformatierung verwendet wird.

Es ist knifflig, die Standardwerte dieser Lokalkonventionen zu erhalten. `new Intl.Locale("en-US").calendar` gibt `undefined` zurück, da das `Locale`-Objekt nur die Informationen enthält, die Sie ihm übergeben haben. Der Standardkalender hängt theoretisch davon ab, mit welcher API Sie den Kalender verwenden, sodass Sie mit der Methode {{jsxref("Intl/DateTimeFormat/resolvedOptions", "resolvedOptions()")}} den Standardkalender von `en-US` abrufen können, wie er von `Intl.DateTimeFormat` verwendet wird. Dasselbe gilt für andere Eigenschaften.

```js
const locale = new Intl.Locale("en-US");
console.log(locale.calendar); // undefined; it's not provided
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar); // "gregory"
```

`Intl.Locale`-Objekte tun zwei Dinge gleichzeitig: Sie repräsentieren ein geparstes BCP 47-Sprach-Tag (wie oben gezeigt) und bieten Informationen über dieses Gebietsschema. Alle seine Eigenschaften, wie `calendar`, werden nur aus der Eingabe extrahiert, ohne eine Datenquelle nach Standardwerten zu fragen. Andererseits hat es eine Gruppe von Methoden, um reale Informationen über das Gebietsschema abzufragen. Zum Beispiel ergänzen die Methoden {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}} und {{jsxref("Intl/Locale/getCollations", "getCollations()")}} die Eigenschaften `calendar`, `hourCycle`, `numberingSystem` und `collation`, und jede gibt ein Array von bevorzugten Werten für diese Eigenschaft zurück.

```js
const locale = new Intl.Locale("ar-EG");
console.log(locale.getCalendars()); // ['gregory', 'coptic', 'islamic', 'islamic-civil', 'islamic-tbla']
```

`Intl.Locale`-Instanzen enthalten auch andere Methoden, die nützliche Informationen bieten, wie {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.

## Ermitteln des Gebiets

Eine gemeinsame Sorge bei der Internationalisierung ist: Wie weiß ich, welches Gebietsschema ich verwenden soll?

Die naheliegendste Antwort ist "was der Benutzer bevorzugt". Browser stellen die Sprachpräferenzen des Benutzers über die [`navigator.languages`](/de/docs/Web/API/Navigator/languages)-Eigenschaft zur Verfügung. Dies ist ein Array von Sprach-Identifikatoren, das direkt an den Formatter-Konstruktor übergeben werden kann – mehr dazu später. Der Benutzer kann diese Liste in den Browsereinstellungen konfigurieren. Sie können auch ein leeres Array oder `undefined` übergeben, was beides dazu führt, dass das Standardgebietsschema des Browsers verwendet wird.

```js
const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));

const numberFormatter2 = new Intl.NumberFormat([]);
```

Dies kann jedoch nicht immer das wünschenswerteste Ergebnis liefern. Zeichenketten, die von `Intl`-Formatierern formatiert werden, stellen nur einen winzigen Bruchteil des auf Ihrer Website angezeigten Textes dar; Der meiste lokalisierte Inhalt wird von Ihnen, dem Website-Entwickler, bereitgestellt. Beispielsweise, wenn Ihre Site nur in zwei Sprachen angeboten wird: Englisch und Französisch. Wenn ein japanischer Benutzer Ihre Site besucht und erwartet, sie auf Englisch zu nutzen, wird er verwirrt sein, wenn er den englischen Text mit Zahlen und Daten in Japanisch gemischt sieht!

In der Regel möchten Sie nicht die Standardsprache des Browsers verwenden. Vielmehr möchten Sie dieselbe Sprache verwenden, die auch der Rest Ihrer Site bietet. Angenommen, Ihre Site hat einen Sprachumschalter, der die Wahl des Benutzers irgendwo speichert – Sie könnten diese direkt verwenden.

```js
// Suppose this can be changed by some site-wide control
const userSettings = {
  locale: "en-US",
  colorMode: "dark",
};
const numberFormatter = new Intl.NumberFormat(userSettings.locale);
console.log(numberFormatter.format(1234567.89));
```

Wenn Ihre Site einen Backend-Server hat, der die Sprache basierend auf dem {{httpheader("Accept-Language")}}-Header des Benutzers dynamisch auswählt und basierend darauf unterschiedliches HTML zurücksendet, könnten Sie auch die `lang`-Eigenschaft des HTML-Elements verwenden: `new Intl.NumberFormat(document.documentElement.lang)`.

Wenn Ihre Site nur in einer Sprache angeboten wird, könnten Sie das Gebietsschema in Ihrem Code festcodieren: `new Intl.NumberFormat("en-US")`.

Wie bereits erwähnt, können Sie dem Konstruktor auch ein Array von Gebietsschemata übergeben, das eine Liste von Rückfalloptionen darstellt. Das erste Beispiel mit `navigator.languages` ist ein Beispiel dafür: wenn das erste benutzerkonfigurierte Gebietsschema nicht für die bestimmte Operation unterstützt wird, wird das nächste versucht, und so weiter, bis wir ein angefordertes Gebietsschema finden, für das die Laufzeit Daten hat. Dies können Sie auch manuell tun. Im nachstehenden Beispiel geben wir eine Liste von Gebietsschemata in abnehmender Spezifität an, die alle Sprachen repräsentieren, die von einem Hongkonger Chinesisch sprechenden Benutzer wahrscheinlich verstanden werden, sodass der Formatter das spezifischste unterstützte Gebietsschema auswählt.

```js
const numberFormatter = new Intl.NumberFormat([
  "yue-Hant",
  "zh-Hant-HK",
  "zh-Hant",
  "zh",
]);
```

Es gibt keine API zum Auflisten aller unterstützten Gebietsschemata, aber es gibt einige Methoden zur Verwaltung der Gebietsschemaliste:

- {{jsxref("Intl.getCanonicalLocales()")}}: Diese Funktion nimmt eine Liste von Gebietsschema-Identifikatoren und gibt eine Liste kanonischer Gebietsschema-Identifikatoren zurück. Dies ist nützlich, um den Kanonisierungsprozess für jeden `Intl`-Konstruktor zu verstehen.
- Die statische Methode `supportedLocalesOf()` für jedes `Intl`-Objekt (wie {{jsxref("Intl.DateTimeFormat.supportedLocalesOf()")}}): Diese Methode nimmt dieselben Argumente wie der Konstruktor (`locales` und `options`) und gibt eine Untermenge der gegebenen Gebietsschema-Tags zurück, die der gegebenen Datenübereinstimmung entsprechen. Dies ist nützlich, um zu verstehen, welche Gebietsschemata von der Laufzeit für eine bestimmte Operation unterstützt werden, beispielsweise um einen Sprachumschalter anzuzeigen, der nur die unterstützten Sprachen enthält.

## Verständnis des Rückgabewertes

Die zweite gemeinsame Frage für alle Objekte ist "Was gibt die Methode zurück?" Dies ist eine schwer zu beantwortende Frage jenseits der Struktur oder des Typs des zurückgegebenen Wertes, da es keine normativen Spezifikationen gibt, die genau angeben, was zurückgegeben werden sollte. Meistens ist das Ergebnis einer Methode konsistent. Das Ergebnis kann jedoch je nach Implementierung variieren, sogar innerhalb desselben Gebietsschemas — Output-Variationen sind durch Design und von der Spezifikation erlaubt. Es ist möglicherweise auch nicht das, was Sie erwarten. Zum Beispiel könnte die von `format()` zurückgegebene Zeichenfolge Nicht-Breaking-Spaces enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse einer beliebigen `Intl`-Methode nicht mit handcodierten Konstanten vergleichen; sie sollten nur den Benutzern angezeigt werden.

Natürlich scheint diese Antwort unbefriedigend zu sein, weil die meisten Entwickler wünschen, dass sie kontrollieren können, wie der Output aussieht — zumindest möchten Sie nicht, dass Ihr Benutzer von unsinnigem Output irritiert wird. Hier sind einige Richtlinien, wenn Sie testen möchten, sei es automatisiert oder manuell:

- Testen Sie alle Gebietsschemata, die Ihr Benutzer verwenden könnte. Das ist einfacher, wenn Sie einen festen Satz von unterstützten Gebietsschemata haben (z.B. über einen Sprachumschalter). Wenn Sie das verwenden, was der Benutzer bevorzugt, könnten Sie einige davon gebräuchliche für Ihre Benutzer auswählen, aber bedenken Sie, dass das, was der Benutzer sieht, unterschiedlich sein kann. Sie können in der Regel die Präferenz des Benutzers über die Konfiguration des Test-Runner oder das Mocking der `Intl`-Konstruktoren simulieren.
- Testen Sie auf mehreren JavaScript-Engines. Die `Intl` API ist direkt in der JavaScript-Engine implementiert, daher sollten Sie erwarten, dass Node.js und Chrome (die beide V8 verwenden) dasselbe Resultat haben, während Firefox (das SpiderMonkey verwendet) möglicherweise ein anderes Ergebnis hat. Obwohl alle Engines wahrscheinlich die CLDR-Daten verwenden, verarbeiten sie sie gewöhnlich auf verschiedene Arten weiter. Einige Einstellungen zum Erstellen von Browsern (zur Reduzierung der Installationsgröße zum Beispiel) können auch beeinflussen, welche Gebietsschemata und Optionen unterstützt werden.
- Gehen Sie nicht davon aus, dass der Output fest ist. Das bedeutet, dass Sie den Output nicht per Hand schreiben sollten, wie `expect(result).toBe("foo")`. Verwenden Sie stattdessen Snapshot-Tests oder kopieren Sie den String-Wert aus dem Output eines Testlaufs.

## Formatieren von Daten

Ein Hauptanwendungsfall von `Intl` ist die Ausgabe lokalspezifischer Texte, die strukturierte Daten repräsentieren. Dies ähnelt Übersetzungssoftware, aber anstelle Ihnen zu erlauben, willkürliche Texte zu übersetzen, nimmt es Daten wie Datum, Zahlen und Listen und formatiert sie nach lokalen Regeln.

Die Objekte {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} formatieren jeweils eine Art von Daten. Jede Instanz bietet zwei Methoden:

- `format()`: Nimmt ein Stück Daten und gibt eine Zeichenfolge unter Verwendung der Formatierungsregel zurück, wie sie durch das locale und die Optionen bestimmt wird.
- `formatToParts()`: Nimmt dieselben Daten und gibt dieselbe Zeichenkette zurück, jedoch aufgeteilt in Teile, wobei jeder Teil ein Objekt mit einem `type` und einem `value` ist. Dies ist nützlich für fortgeschrittenere Anwendungsfälle, wie das Vermischen des formatierten Textes mit anderen Texten.

Zum Beispiel, hier ist eine typische Verwendung des {{jsxref("Intl.NumberFormat")}} Objekts:

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

Sie müssen nicht immer ein Formatter-Objekt erstellen, um Zeichenfolgen zu formatieren. Für den gelegentlichen Gebrauch können Sie auch direkt die `toLocaleString()`-Methode auf den Daten aufrufen und das Gebietsschema und die Optionen als Argumente übergeben. Die `toLocaleString()`-Methode wird von {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}, {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}, {{jsxref("Number.prototype.toLocaleString()")}} und weitere implementiert. Lesen Sie die Dokumentation der Daten, die Sie formatieren, um zu sehen, ob sie `toLocaleString()` unterstützen und welche Formatter-Optionen sie entsprechen.

```js
console.log(
  (5.259).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }),
); // $5.26
```

Beachten Sie, dass `toLocaleString()` potenziell ineffizienter ist als die Verwendung eines Formatter-Objekts, da jedes Mal, wenn `toLocaleString` aufgerufen wird, es eine Suche in einer großen Datenbank von Lokalisierungs-Strings durchführen muss. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein Formatter-Objekt zu erstellen und dessen `format()` Methode zu verwenden, da ein Formatter-Objekt sich die übergebenen Argumente merkt und möglicherweise einen Ausschnitt der Datenbank zwischenspeichern kann, sodass zukünftige `format` -Aufrufe in einem stärker eingeschränkten Kontext nach Lokalisierungs-Strings suchen können.

### Formatierung von Datum und Uhrzeit

{{jsxref("Intl.DateTimeFormat")}} formatiert Daten und Zeiten sowie Zeiträume von Daten und Zeiten. Das `DateTimeFormat`-Objekt nimmt Datum/Zeit-Eingaben in einer der folgenden Formen an: {{jsxref("Date")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}.

> [!NOTE]
> Sie können kein {{jsxref("Temporal.ZonedDateTime")}}-Objekt direkt übergeben, da die Zeitzone im Objekt bereits festgelegt ist. Sie sollten {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} verwenden oder es zuerst in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt umwandeln.

Häufige Anwendungsfälle für die lokalisierte Datum- und Uhrzeit-Formatierung sind wie folgt:

- Ausgabe desselben Datums und derselben Uhrzeit in einem anderen Kalendersystem, wie dem islamischen, hebräischen oder chinesischen Kalender.
- Ausgabe derselben realen Weltzeit (Wissensdatum) jedoch in einer anderen Zeitzone.
- Selektive Ausgabe bestimmter Komponenten von Datum und Uhrzeit, wie nur Jahr und Monat, und deren spezifische Darstellung (wie "Donnerstag" oder "Do").
- Ausgabe des Datums gemäß lokalspezifischen Konventionen, wie MM/TT/JJJJ wie in den USA, TT/MM/JJJJ wie in Großbritannien oder JJJJ/MM/TT wie in Japan.
- Ausgabe der Zeit gemäß lokalspezifischen Konventionen, wie 12-Stunden- oder 24-Stunden-Uhr.

Um zu entscheiden, wie die formatierte Zeichenfolge aussehen soll, wählen Sie zuerst den Kalender (der das Jahr, den Monat, die Woche und die Tagesberechnung beeinflusst) und die Zeitzone (die die genaue Zeit sowie möglicherweise das Datum beeinflusst). Dies erfolgt mit der erwähnten `calendar`-Option (oder dem `-ca-` Erweiterungsschlüssel im Gebietsschema-Identifikator) und der `timeZone`-Option.

- `Date`-Objekte stellen einen einzigartigen Moment in der Zeitzone des Benutzers und im ISO 8601-Kalender dar (wie durch Methoden wie {{jsxref("Date.prototype.getHours()")}} und {{jsxref("Date.prototype.getMonth()")}} berichtet). Sie werden auf das gegebene `calendar` und die `timeZone` durch die Erhaltung des Moments umgewandelt, sodass sich die Datum- und Zeitkomponenten ändern können.
- Die verschiedenen {{jsxref("Temporal")}} Objekte haben bereits einen integrierten Kalender, daher muss die `calendar`-Option mit dem Kalender des Objekts übereinstimmen – es sei denn, der Kalender des Datums ist `"iso8601"`, in welchem Fall er in das angeforderte `calendar` konvertiert wird. Diese Objekte haben keine Zeitzone, sodass sie direkt ohne Umwandlung in der gegebenen `timeZone` angezeigt werden.

Hier demonstrieren wir, wie die Kombination von `calendar`- und `timeZone`-Konfigurationen zu unterschiedlichen Darstellungen desselben Moments führt.

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

| kalender        | zeitzone           | ausgabe                                                            |
| --------------- | ------------------ | ------------------------------------------------------------------ |
| 'gregorianisch' | 'America/New_York' | 'Freitag, 31. Dezember 2021 um 19:00:00 Uhr Eastern Standard Time' |
| 'gregorianisch' | 'Asia/Tokyo'       | 'Samstag, 1. Januar 2022 um 09:00:00 Uhr Japan Standard Time'      |
| 'hebräisch'     | 'America/New_York' | 'Freitag, 27. Tevet 5782 um 19:00:00 Uhr Eastern Standard Time'    |
| 'hebräisch'     | 'Asia/Tokyo'       | 'Samstag, 28. Tevet 5782 um 09:00:00 Uhr Japan Standard Time'      |

Ein Datum/Zeit-Wert besteht aus den folgenden Komponenten: `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits` und `timeZoneName`. Ihre nächste Entscheidung ist, welche Komponenten in die Ausgabe aufgenommen werden und welche Form sie annehmen sollen. Sie haben zwei Möglichkeiten:

- Sie können jede Komponente manuell konfigurieren, indem Sie Optionen mit demselben Namen wie die Komponente verwenden. Nur die von Ihnen angegebenen Komponenten werden in die Ausgabe aufgenommen, mit der angegebenen Form.
- Sie können die Abkürzungen `dateStyle` und `timeStyle` verwenden, die vordefinierte Mengen von Komponenten sind. Sie erweitern sich auf einen Satz von Komponentenoptionen entsprechend dem Gebietsschema.

Sie sollten eine dieser beiden Methoden auswählen, da sie sich gegenseitig ausschließen. Die gleichzeitige Verwendung beider Methoden führt zu einem Fehler.

Im Hintergrund sucht das `DateTimeFormat`-Objekt nach einer "Vorlage", die zu den angeforderten Komponenten passt, nachdem eine Kombination von Komponenten angefordert wurde, sodass es nur die Werte nacheinander einfüllen muss. Nicht jede Kombination von Komponenten hat eine vordefinierte Vorlage. `DateTimeFormat` verfügt über eine `formatMatcher`-Option, die entscheidet, wie verhandelt werden soll, indem es Komponenten länger oder kürzer als angefordert macht oder indem es Komponenten weglässt oder hinzufügt. Es wird ziemlich technisch, also sollten Sie das [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) Referenzmaterial lesen, um besser zu verstehen, wie es damit umgeht.

Hier demonstrieren wir einige gängige Möglichkeiten, die Komponenten zu formatieren:

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

Es gibt andere Anpassungsoptionen. Zum Beispiel können Sie die `hourCycle`-Option verwenden, um die Zeit im 12-Stunden- oder 24-Stunden-Uhr darzustellen und Mitternacht/Mittag als 12:00 oder 0:00 anzuzeigen. Sie können auch die Option `numberingSystem` verwenden, um Zahlen in einem anderen Zahlensystem anzuzeigen.

Abgesehen von `format()` gibt es eine zweite wichtige Methode, {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}, die einen Bereich von Daten oder Zeiten formatiert. Sie nimmt zwei Daten von demselben Typ, formatiert jedes und verbindet sie mit einem Bereichs-Trennzeichen (wie dem en-Dash) und dedupliziert die gemeinsamen Teile.

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

Die Formatierung von Zahlen erfolgt mit dem {{jsxref("Intl.NumberFormat")}}-Objekt. Das `NumberFormat`-Objekt akzeptiert Eingaben in Form von Zahlen, Zeichenketten oder `BigInt`-Werten. Die Übergabe eines Strings oder `BigInt` anstelle einer Zahl ermöglicht es Ihnen, Zahlen zu formatieren, die zu groß oder zu klein sind, um als JavaScript-Zahl präzise dargestellt zu werden.

Häufige Anwendungsfälle der lokalisierten Zahlenformatierung sind wie folgt:

- Ausgabe der Zahl in einem anderen Zahlensystem (Schrift), wie Chinesisch, Arabisch oder Römisch.
- Ausgabe der Zahl mit lokalspezifischen Konventionen, wie das Dezimalzeichen ("." im Englischen, aber "," in vielen europäischen Kulturen) oder die Zifferngruppierung (3 Ziffern im Englischen, können aber 4 oder 2 in anderen Kulturen sein und können "," " " oder "." verwenden).
- Ausgabe der Zahl im Exponentialformat, wie "3.7 Millionen" oder "2 tausend".
- Ausgabe der Zahl als Währung, Anwendung spezieller Währungssymbole und Rundungsregeln. Zum Beispiel sind Geldwerte von weniger als einem Cent in den USA oder weniger als einem Yen in Japan möglicherweise nicht sinnvoll anzuzeigen.
- Ausgabe der Zahl als Prozentsatz, Anwendung der lokalspezifischen Umwandlungs- und Formatierungsregeln.
- Ausgabe der Zahl mit Einheiten, wie "Meter" oder "Liter", mit übersetzten Einheitsnamen.

Um zu entscheiden, wie die formatierte Zeichenfolge aussehen soll, wählen Sie zuerst das Zahlensystem (das die für die Ziffern verwendeten Zeichen beeinflusst). Der Zweck eines Zahlsystems wird bereits in den [Gebiets Informationen](#gebietsinformationen) behandelt. Eine weitere Option, die Sie entscheiden müssen, ist der `style`, der den Kontext festlegt, was die Zahl darstellt, und potenziell die Standardwerte anderer Optionen beeinflusst. Es ist einer von `"decimal"`, `"percent"`, `"currency"` oder `"unit"`. Wenn Sie Währungen formatieren möchten, müssen Sie auch die Option `currency` angeben. Wenn Sie Einheiten formatieren möchten, müssen Sie auch die Option `unit` angeben.

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

Die Ausgabe sieht folgendermaßen aus:

| stil       | Ausgabe          |
| ---------- | ---------------- |
| 'decimal'  | '1.234.567,89'   |
| 'percent'  | '123.456.789%'   |
| 'currency' | '1.234.567,89 €' |
| 'unit'     | '1.234.567,89 m' |

Die nächsten Optionen spezifizieren, wie der numerische Teil aussehen soll. Zuerst möchten Sie möglicherweise extrem große Werte in einer lesbareren Weise darstellen. Sie können die `notation`-Option auf `"scientific"` oder `"engineering"` setzen, die beide das `1.23e+6` Notation verwenden. Der Unterschied besteht darin, dass letzteres Vielfache von 3 für den Exponenten verwendet, wobei die [Mantisse](https://de.wikipedia.org/wiki/Gleitkommazahl) (der Teil vor dem Symbol `e`) zwischen 1 und 1000 liegt, während das erstere jedem Ganzzahlwert für den Exponenten verwenden kann, wobei die Mantisse zwischen 1 und 10 liegt. Sie können die `notation`-Option auch auf `"compact"` setzen, um eine menschlich lesbarere Notation zu verwenden.

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

| notation        | Ausgabe      |
| --------------- | ------------ |
| 'scientific'    | '1,2E4'      |
| 'engineering'   | '12E3'       |
| 'compact-short' | '12Tsd.'     |
| 'compact-long'  | '12 tausend' |

Dann möchten Sie möglicherweise die Zahl runden (wenn Sie `notation` angegeben haben, dann nur den Mantissenteil), sodass Sie keine zu lange Zahl anzeigen. Dies sind die Ziffernoptionen, die umfassen:

- `minimumIntegerDigits`
- `minimumFractionDigits`
- `maximumFractionDigits`
- `minimumSignificantDigits`
- `maximumSignificantDigits`
- `roundingPriority`
- `roundingIncrement`
- `roundingMode`

Die genaue Interaktion dieser Optionen ist ziemlich komplex und wird hier nicht behandelt. Sie sollten die [Ziffern-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) Referenz für weitere Details lesen. Dennoch ist die allgemeine Idee einfach: Wir bestimmen zuerst die Anzahl der Dezimalstellen, die wir behalten möchten, und runden dann überschüssige Dezimalstellen ab, entweder runden wir nach unten oder oben, abhängig vom Wert der letzten Ziffer.

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

Die Ausgabe sieht bei folgenden Optionen folgendermaßen aus:

| Optionen                                                                                               | Ausgabe      |
| ------------------------------------------------------------------------------------------------------ | ------------ |
| `{ minimumFractionDigits: 4, maximumFractionDigits: 4 }`                                               | '1.234,5679' |
| `{ minimumSignificantDigits: 4, maximumSignificantDigits: 4 }`                                         | '1.235'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" }`                        | '1.234'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor", roundingIncrement: 10 }` | '1.230'      |

Es gibt weitere Anpassungsmöglichkeiten. Beispielsweise können Sie die Optionen `useGrouping` und `signDisplay` verwenden, um anzupassen, ob und wie die Gruppierungszeichen (wie "," in "1,234,567.89") und das Vorzeichen angezeigt werden sollen. Beachten Sie jedoch, dass die Zeichen für das Gruppierungszeichen, das Dezimaltrennzeichen und das Vorzeichen lokalspezifisch sind, sodass Sie sie nicht direkt anpassen können.

Abgesehen von `format()`, gibt es eine zweite wichtige Methode, {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}, die einen Bereich von Zahlen formatiert. Sie nimmt zwei Zahlenrepräsentationen, formatiert jede, verbindet sie mit einem Bereichs-Trennzeichen (wie dem en-Dash) und hebt potenziell die gemeinsamen Teile hervor.

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

Dieser Code ist nicht internationalisiert. In einigen Sprachen ist das Listentrennzeichen kein Komma. In den _meisten_ Sprachen (einschließlich Englisch) benötigen Sie eine Konjunktion vor dem letzten Element. Aber auch das Hinzufügen eines "und" manuell macht es nicht unter allen englischen Sprechern korrekt, aufgrund der Debatte über das [Oxford-Komma](https://de.wikipedia.org/wiki/Serial_comma) im Englischen: "apple, banana, and cherry" versus "apple, banana and cherry".

Das {{jsxref("Intl.ListFormat")}} Objekt löst dieses Problem. Es nimmt ein Array von Strings und verbindet sie auf eine lokalspezifische Weise, sodass das Ergebnis eine Konjunktion (und), Disjunktion (oder) oder eine Listeneinheit darstellt.

```js
const fruits = ["apple", "banana", "cherry"];
const lf = new Intl.ListFormat("en-US", { style: "long", type: "conjunction" });
console.log(`I like ${lf.format(fruits)}.`);
// I like apple, banana, and cherry.

const lf = new Intl.ListFormat("en-US", { style: "long", type: "disjunction" });
console.log(`I can give you ${lf.format(fruits)}.`);
// I can give you apple, banana, or cherry.
```

Überprüfen Sie {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} für weitere Beispiele und Optionen.

### Formatierung relativer Zeit

{{jsxref("Intl.RelativeTimeFormat")}} formatierte Zeitdifferenzen. Das `RelativeTimeFormat`-Objekt nimmt relative Zeiten in Form von zwei Parametern an: eine Zahl (mit beliebigem Vorzeichen) und eine Zeiteinheit, wie `"day"`, `"hour"` oder `"minute"`.

Es tut mehrere Dinge gleichzeitig:

- Es lokalisiert und pluralisiert die Zeiteinheit, wie "1 day" gegenüber "2 days", wie bei der Zahlenformatierung.
- Es wählt die geeignete Phrase für vergangene und zukünftige Zeiten, wie "in 1 day" gegenüber "1 day ago".
- Es kann eine spezielle Phrase für einige Zeiteinheiten auswählen, wie "1 day ago" gegenüber "yesterday".

```js
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(-1, "hour")); // 1 hour ago
```

Überprüfen Sie {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}} für weitere Beispiele und Optionen.

### Dauerformatierung

{{jsxref("Intl.DurationFormat")}} bietet Dauerformatierung, wie "3 hours, 4 minutes, 5 seconds". Es ist keine primitive Operation mit eigenem Formatter: es verwendet {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.ListFormat")}} intern um jede Dauenkomponente zu formatieren und sie dann mit einem Listentrennzeichen zu verbinden. Das `DurationFormat`-Objekt nimmt Dauern in Form eines {{jsxref("Temporal.Duration")}}-Objekts oder eines einfachen Objekts mit denselben Eigenschaften.

Abgesehen von der Anpassung des Zahlensystems entscheidet die Dauerformatierungsoption, ob und wie lange jede Komponente angezeigt werden soll.

```js
console.log(
  new Intl.DurationFormat("en-US", {
    style: "long",
  }).format({ hours: 3, minutes: 4, seconds: 5 }),
);
// 3 hours, 4 minutes, and 5 seconds
```

Überprüfen Sie {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}} für weitere Beispiele und Optionen.

## Kollation

Das {{jsxref("Intl.Collator")}} Objekt ist nützlich zum Vergleichen und Sortieren von Strings. Es nimmt zwei Strings und gibt eine Zahl zurück, die ihre relative Reihenfolge angibt, auf die gleiche Weise wie das `compareFn` Argument der {{jsxref("Array.prototype.sort")}} Methode.

Es gibt viele Gründe, warum Sie keine JavaScript-Operatoren wie `===` oder `>` verwenden sollten, um benutzerorientierte Strings zu vergleichen:

- Irrelevante orthografische Varianten: Zum Beispiel sind im Englischen "naïve" und "naive" alternative Schreibweisen desselben Wortes und sollten als gleich behandelt werden.
- Groß-/Kleinschreibung ignorieren: Oft möchten Sie die Groß- und Kleinschreibung ignorieren, wenn Sie Strings vergleichen. Zum Beispiel sollten "apple" und "Apple" als gleich behandelt werden.
- Unicode-Codepunkt-Anordnung macht keinen Sinn: Vergleichsoperatoren wie `>` vergleichen nach Unicode-Codepunkt-Ordnungen, die nicht der Reihenfolge von Zeichen in einem Wörterbuch entsprechen. Zum Beispiel kommt "ï" nach "z" in der Codepunkt-Reihenfolge, aber Sie möchten, dass es in einem Wörterbuch neben "i" geordnet wird.
- Unicode-Normalisierung: Dasselbe Zeichen kann in Unicode in mehreren Darstellungen erscheinen. Zum Beispiel kann "ñ" als einzelnes Zeichen oder als "n" gefolgt von einer kombinierten Tilde dargestellt werden. (Siehe {{jsxref("String.prototype.normalize()")}}.) Diese sollten als gleich behandelt werden.
- Zahlenvergleiche: Zahlen in Strings sollten als Zahlen und nicht als Strings verglichen werden. Zum Beispiel möchten Sie, dass "test-10" nach "test-2" kommt.

Es gibt zwei verschiedene Anwendungsfälle für Kollation: **Sortieren** und **Suchen**. Sortieren ist, wenn Sie eine Liste von Strings haben und sie nach einer Regel ordnen möchten. Suchen ist, wenn Sie eine Liste von Strings haben und einen String finden möchten, der einer Anfrage entspricht. Beim Suchen sollten Sie nur darauf achten, ob das Vergleichsergebnis null ist (gleich) oder nicht, nicht das Vorzeichen des Ergebnisses.

Es gibt viele verschiedene Möglichkeiten, zu sortieren, selbst innerhalb desselben Gebietsschemas. Zum Beispiel gibt es zwei verschiedene Sortierreihenfolgen im Deutschen, _Telefonbuch- und \_Wörterbuch-Sortierung_. Die Telefonbuch-Sortierung betont den Klang — als ob "ä", "ö" usw. vor dem Soritieren in "ae", "oe" usw. expandiert worden wären.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare));
// ['Hochberg', 'Hönigswald', 'Holzman']
```

Einige deutsche Wörter konjugieren mit zusätzlichen Umlauten, daher ist es sinnvoll, im Wörterbuch die Umlautzeichen zu ignorieren (außer wenn man Wörter nur nach Umlauten unterscheidet: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

## Pluralregeln

Das {{jsxref("Intl.PluralRules")}} Objekt ist nützlich, um die richtige Pluralform eines Wortes auszuwählen. Es pluralisiert Wörter nicht automatisch für Sie (z. B. können Sie ihm nicht "apple" übergeben und "apples" zurückbekommen erwarten), aber es sagt Ihnen, welche Pluralform Sie basierend auf einer Zahl verwenden sollten. Möglicherweise tun Sie dies bereits:

```js
function formatMessage(n) {
  return `You have ${n} ${n === 1 ? "apple" : "apples"}.`;
}
```

Aber dies ist schwer in verschiedenen Sprachen zu verallgemeinern, insbesondere in Sprachen mit vielen Pluralformen. Siehe {{jsxref("Intl.PluralRules")}} für eine allgemeine Einführung in Pluralregeln. Hier demonstrieren wir einige häufige Anwendungsfälle.

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

Das {{jsxref("Intl.Segmenter")}} Objekt ist nützlich, um eine Zeichenkette in Segmente zu unterteilen. Ohne `Intl` können Sie bereits eine Zeichenkette durch [UTF-16-Codes und Unicode-Codepunkte](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) teilen.

```js
const str = "🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷";
console.log(str.split(""));
// Array(20) ['\uD83C', '\uDDFA', '\uD83C', ...]
console.log([...str]);
// Array(10) ['🇺', '🇸', '🇨', '🇳', '🇷', '🇺', '🇬', '🇧', '🇫', '🇷']
```

Wie Sie sehen können, sind Unicode-Codepunkte nicht dasselbe wie das, was menschliche Benutzer als diskrete Zeichen wahrnehmen. Dies kommt häufig bei Emojis vor, bei denen ein einzelnes Emoji durch mehrere Codepunkte dargestellt werden kann. Wenn der Benutzer mit Text interagiert, ist ein Graphem die kleinste Texteinheit, die er manipulieren kann, wie Löschen oder Auswählen. Das `Segmenter` Objekt ermöglicht die Graphem-Ebene der Segmentierung, was nützlich ist, um Zeichen zu zählen, Textbreite zu messen und so weiter. Es nimmt eine Zeichenkette und gibt ein iterierbares [Segmente-](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekt zurück, bei dem jedes Element eine `segment` Eigenschaft hat, die den Text des Segments repräsentiert.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
console.log([...segmenter.segment("🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷")].map((s) => s.segment));
// ['🇺🇸', '🇨🇳', '🇷🇺', '🇬🇧', '🇫🇷']
```

Der Segmentierer kann auch eine höhere Segmentierungsebene durchführen, einschließlich der Wort- und Satzebene aufteilen. Diese Anwendungsfälle sind notwendigerweise sprachspezifisch. Zum Beispiel ist das Folgende eine sehr schlechte Implementierung der Wortzählung:

```js example-bad
const wordCount = (str) => str.split(/\s+/).length;
console.log(wordCount("Hello, world!")); // 2
```

Es gibt mehrere Probleme damit: nicht alle Sprachen verwenden Leerzeichen, um Wörter zu trennen, nicht alle Leerzeichen trennen Wörter, und nicht alle Wörter sind durch Leerzeichen getrennt. Um dies zu lösen, verwenden Sie `Segmenter` mit `granularity: "word"`. Das Ergebnis ist der Eingabestring, der in Segmente von Wörtern und Nicht-Wörtern aufgeteilt ist. Wenn Sie Wörter zählen, sollten Sie die Nicht-Wörter herausfiltern, indem Sie jede Segmenteigenschaft `isWordLike` überprüfen.

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

Die Wortsegmentierung funktioniert auch für Zeichen-basierte Sprachen. Beispielsweise können im Chinesischen mehrere Zeichen ein einzelnes Wort darstellen, aber es gibt keinen Zwischenraum. Der Segmentierer implementiert dasselbe Verhalten wie die eingebaute Wortsegmentierung im Browser, die durch Doppelklick auf ein Wort ausgelöst wird.

```js
const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "word" });
console.log([...segmenter.segment("我是这篇文档的作者")].map((s) => s.segment));
// ['我是', '这', '篇', '文', '档', '的', '作者']
```

Die Segmentierung von Sätzen ist ähnlich komplex. Beispielsweise gibt es im Englischen viele Interpunktionszeichen, die das Ende eines Satzes markieren können (".", "!", "?", usw.).

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "sentence" });
console.log(
  [...segmenter.segment("I ate a sandwich. Then I went to bed.")].map(
    (s) => s.segment,
  ),
);
// ['I ate a sandwich. ', 'Then I went to bed.']
```

Beachten Sie, dass der Segmentierer keine Zeichen entfernt. Es teilt nur die Zeichenkette in Segmente, wobei jedes ein Satz ist. Danach können Sie die Interpunktionszeichen entfernen, wenn Sie möchten. Die aktuelle Implementierung des Segmentierers unterstützt keine Satzsegmentierungssuppressions (Verhinderung von Satzumbrüchen nach Punkten wie "Mr." oder "Approx."), aber es wird daran gearbeitet, dies zu unterstützen.

## Anzeigenamen

Nachdem so viele Optionen und Verhaltensweisen eingeführt wurden, fragen Sie sich möglicherweise, wie Sie diese den Benutzern präsentieren können. `Intl` kommt mit zwei nützlichen APIs zum Erstellen von Benutzeroberflächen: {{jsxref("Intl.supportedValuesOf()")}} und {{jsxref("Intl.DisplayNames")}}.

Die Funktion {{jsxref("Intl.supportedValuesOf()")}} gibt ein Array von unterstützten Werten für eine gegebene Option zurück. Zum Beispiel können Sie es verwenden, um eine Dropdown-Liste der unterstützten Kalender aufzufüllen, aus der Benutzer auswählen können, um Datum anzuzeigen.

```js
const supportedCal = Intl.supportedValuesOf("calendar");
console.log(supportedCal);
// ['buddhist', 'chinese', 'coptic', 'dangi', ...]
```

Aber oft sind diese Bezeichner nicht benutzerfreundlich. Zum Beispiel möchten Sie möglicherweise die Kalender in der Sprache des Benutzers anzeigen oder sie unabgekürzt darstellen. Das {{jsxref("Intl.DisplayNames")}}-Objekt ist dafür nützlich. Es ist wie ein Formatter, aber er ist nicht vorlagenbasiert. Stattdessen ist es eine direkte Zuordnung von Sprach-agnostischen Bezeichnern zu lokalisierten Namen. Es unterstützt das Formatieren von Sprachen, Regionen, Schriften (die drei Unterfelder eines BCP 47-Tags), Währung, Kalender und Datums- und Zeitfelder.

Probieren Sie die Live-Demo unten aus:

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
