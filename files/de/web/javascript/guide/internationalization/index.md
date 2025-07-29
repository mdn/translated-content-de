---
title: Internationalisierung
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

{{PreviousNext("Web/JavaScript/Guide/Resource_management", "Web/JavaScript/Guide/Modules")}}

Das {{jsxref("Intl")}} Objekt ist der Namensraum für die ECMAScript-Internationalisierungs-API, die eine Vielzahl von lokal- und kulturspezifischen Daten und Operationen bereitstellt.

## Übersicht

Das `Intl` Objekt ist sehr anwendungsfallgetrieben und bietet für jeden Anwendungsfall, der lokalspezifische Logik erfordert, ein separates Objekt. Derzeit bietet es folgende Funktionalitäten:

- [Informationen über ein Gebietsschema abrufen](#informationen_über_das_gebietsschema) mithilfe von {{jsxref("Intl.Locale")}}.
- [Daten formatieren](#daten_formatieren) mithilfe von {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}}.
- [Kollation](#kollation) (d.h. Vergleichen von Zeichenketten zum Sortieren oder Suchen) mithilfe von {{jsxref("Intl.Collator")}}.
- [Pluralformen auswählen](#pluralregeln) mithilfe von {{jsxref("Intl.PluralRules")}}.
- [Texte segmentieren](#segmentierung) in Einheiten wie Wörter, Sätze oder Grapheme mithilfe von {{jsxref("Intl.Segmenter")}}.
- [Den angezeigten Namen abrufen](#anzeige_von_namen) für Währungen, Sprachen, Schriftsysteme, Regionen und Zeitzonen mithilfe von {{jsxref("Intl.DisplayNames")}}.

Die meisten `Intl` APIs teilen ein ähnliches Design ({{jsxref("Intl.Locale")}} ist die einzige Ausnahme). Sie beginnen mit der Erstellung einer Instanz mit dem gewünschten Gebietsschema und Optionen. Dies definiert eine Reihe von Regeln für die gewünschte Operation (Formatierung, Kollation, Segmentierung usw.). Wenn Sie dann die Methode der Instanz aufrufen, wie `format()`, `compare()` oder `segment()`, wendet das Objekt die spezifizierte Regel auf die übergebenen Daten an.

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
  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Gebietsschema-Identifikatoren. Das Standardgebietsschema der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Gebietsschema-Identifikatoren unterstützt wird. Zur allgemeinen Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die bestimmte Aspekte der Operation anpassen, was der Schlüssel zum Verständnis der Verwendung jedes `Intl` Objekts ist.

## Informationen über das Gebietsschema

Gebietsschemas stehen allen Verhaltensweisen von `Intl` zugrunde. Ein _Gebietsschema_ ist eine Menge von Konventionen, die in der `Intl` API durch das {{jsxref("Intl.Locale")}}-Objekt dargestellt werden. Alle `Intl` Konstruktoren, die Sprach-Tags akzeptieren, akzeptieren auch `Intl.Locale`-Objekte.

Jedes Gebietsschema wird hauptsächlich durch vier Dinge definiert: eine {{jsxref("Intl/Locale/language", "language")}}, ein {{jsxref("Intl/Locale/script", "script")}}, eine {{jsxref("Intl/Locale/region", "region")}} und manchmal einige {{jsxref("Intl/Locale/variants", "variants")}}. Wenn sie in dieser Reihenfolge mit `-` verbunden werden, bilden sie ein [BCP 47-Sprach-Tag](https://datatracker.ietf.org/doc/html/rfc5646).

- Die Sprache ist der wichtigste Teil des Gebietsschemas und obligatorisch. Bei Angabe einer einzelnen Sprache, wie `en` oder `fr`, gibt es Algorithmen, um den Rest der Informationen abzuleiten (siehe {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}).
- Sie möchten jedoch häufig die Region angeben, da sich die Konventionen zwischen Regionen, die dieselbe Sprache sprechen, drastisch unterscheiden können. Zum Beispiel ist das Datumsformat in den USA MM/TT/JJJJ, während es im Vereinigten Königreich TT/MM/JJJJ ist, daher ist es wichtig, `en-US` oder `en-GB` anzugeben.
- Sie können auch ein Schriftsystem angeben. Das Schriftsystem ist das Schreibsystem oder die Zeichen, die verwendet werden, um die Sprache zu transkribieren. In der Praxis ist das Schriftsystem oft überflüssig, da die in einer bestimmten Region verwendete Sprache nur in einem Schriftsystem geschrieben wird. Es gibt jedoch Ausnahmen wie die serbische Sprache, die sowohl in lateinischen als auch in kyrillischen Schriftzeichen geschrieben werden kann (`sr-Latn` und `sr-Cyrl`), oder die chinesische Sprache, die sowohl in vereinfachten als auch in traditionellen Schriftzeichen (`zh-Hans` und `zh-Hant`) geschrieben werden kann.
- Die Varianten werden selten verwendet. In der Regel bezeichnen sie unterschiedliche Orthographien; beispielsweise hat das Deutsche die Varianten `1901` und `1996` der Orthographie, die als `de-1901` und `de-1996` geschrieben werden.

```js
// These two are equivalent when passed to other Intl APIs
const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-Latn-US");

console.log(locale1.language, locale1.script, locale1.region); // "en", undefined, "US"
console.log(locale2.language, locale2.script, locale2.region); // "en", "Latn", "US"
```

Ein Gebietsschema enthält auch eine Reihe von Konventionen, die von dieser speziellen Kultur verwendet werden:

<table>
<thead><tr><th>Anwendungsfall</th><th>Eigenschaft</th><th>Beschreibung</th><th>Erweiterungssubtag</th></tr></thead>
<tbody>
<tr>
<td rowspan="2">Datums-/Zeitformatierung</td>
<td>{{jsxref("Intl/Locale/calendar", "calendar")}}</td>
<td>Wird verwendet, um Tage in Jahre, Monate und Wochen zu gruppieren und ihnen Namen zuzuweisen. Zum Beispiel wird das <code>gregory</code> Datum "2022-01-01" im <code>hebrew</code> Kalender zu "28 Tevet 5782".</td>
<td><code>ca</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}</td>
<td>Entscheidet, ob Zeiten im 12- oder 24-Stunden-Format angezeigt werden und ob die kleinste Stundennummer 0 oder 1 ist.</td>
<td><code>hc</code></td>
</tr>
<tr>
<td>Zahlenformatierung, einschließlich Daten, Zeiten, Dauer usw.</td>
<td>{{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}}</td>
<td>Transformiert Zahlen in eine locale-spezifische Notation. Das reguläre <code>0123456789</code>-System wird als <code>latn</code> (Latein) bezeichnet. Oft hat jedes Schriftsystem ein Nummerierungssystem, das nur eine Ziffer-für-Ziffer-Übersetzung ist, aber einige Schriftsysteme haben mehr als ein Nummerierungssystem, einige schreiben normalerweise keine Zahlen in diesem Schriftsystem (zum Beispiel hat Chinesisch sein eigenes <code>hanidec</code> Nummerierungssystem, aber die meisten Texte verwenden das Standard-<code>latn</code> System), und andere können spezielle Konversionsalgorithmen erfordern (zum Beispiel römische Zahlen — <code>roman</code>).</td>
<td><code>nu</code></td>
</tr>
<tr>
<td rowspan="3">Kollation</td>
<td>{{jsxref("Intl/Locale/collation", "collation")}}</td>
<td>Definiert den generischen Kollation-Algorithmus. Zum Beispiel wird bei Verwendung der deutschen <code>phonebk</code> Kollation "ä" als "ae" behandelt und zwischen "ad" und "af" sortiert.</td>
<td><code>co</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/caseFirst", "caseFirst")}}</td>
<td>Entscheidet, ob Groß- oder Kleinbuchstaben zuerst sortiert werden sollen, oder ob die Groß-/Kleinschreibung ignoriert wird.</td>
<td><code>kf</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/numeric", "numeric")}}</td>
<td>Entscheidet, ob Zahlen als Zahlen oder als Zeichenketten sortiert werden. Zum Beispiel, wenn true, wird "10" nach "2" sortiert.</td>
<td><code>kn</code></td>
</tr>
</tbody>
</table>

Sie können diese Eigenschaften beim Erstellen von `Intl.Locale` oder beim Übergeben von Sprach-Tags an andere `Intl` Konstruktoren explizit angeben. Es gibt zwei Möglichkeiten, dies zu tun – sie an das Sprach-Tag anhängen oder sie als Optionen angeben.

- Um sie an das Sprach-Tag anzuhängen, fügen Sie zuerst den String `-u` (bedeutet "Unicode-Erweiterung") hinzu, dann den Erweiterungssubtag wie oben angegeben, dann den Wert.
- Um sie als Optionen anzugeben, fügen Sie einfach den Eigenschaftsnamen wie oben angegeben zusammen mit seinem Wert zum `options` Objekt hinzu.

Am Beispiel von `Intl.DateTimeFormat` erstellen beide der folgenden Zeilen einen Formatter, der Daten im hebräischen Kalender formatiert:

```js
const df1 = new Intl.DateTimeFormat("en-US-u-ca-hebrew");
const df2 = new Intl.DateTimeFormat("en-US", { calendar: "hebrew" });
```

Nicht erkannte Eigenschaften werden ignoriert, sodass Sie denselben Syntax wie oben mit `Intl.NumberFormat` verwenden können, aber dies wird nichts anderes bewirken als nur `en-US` zu übergeben, da die Zahlenformatierung die `calendar`-Eigenschaft nicht verwendet.

Es ist knifflig, die Standardwerte dieser Gebietsschema-Konventionen zu ermitteln. `new Intl.Locale("en-US").calendar` gibt `undefined` zurück, da das `Locale` Objekt nur die Informationen enthält, die Sie ihm übergeben haben. Der Standardkalender hängt theoretisch davon ab, mit welcher API Sie den Kalender verwenden, daher können Sie den Standardkalender von `en-US` so erhalten, wie er von `Intl.DateTimeFormat` verwendet wird, indem Sie seine {{jsxref("Intl/DateTimeFormat/resolvedOptions", "resolvedOptions()")}} Methode verwenden. Dasselbe gilt für andere Eigenschaften.

```js
const locale = new Intl.Locale("en-US");
console.log(locale.calendar); // undefined; it's not provided
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar); // "gregory"
```

`Intl.Locale` Objekte tun zwei Dinge gleichzeitig: Sie repräsentieren ein geparstes BCP 47-Sprach-Tag (wie oben demonstriert) und sie liefern Informationen über dieses Gebietsschema. Alle seine Eigenschaften, wie `calendar`, werden nur aus der Eingabe extrahiert, ohne eine Datenquelle über Standardwerte abzufragen. Andererseits verfügt es über eine Gruppe von Methoden zur Abfrage realer Informationen über das Gebietsschema. Zum Beispiel ergänzen die Methoden {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}} und {{jsxref("Intl/Locale/getCollations", "getCollations()")}} die Eigenschaften `calendar`, `hourCycle`, `numberingSystem` und `collation` und jede gibt ein Array mit bevorzugten Werten für diese Eigenschaft zurück.

```js
const locale = new Intl.Locale("ar-EG");
console.log(locale.getCalendars()); // ['gregory', 'coptic', 'islamic', 'islamic-civil', 'islamic-tbla']
```

`Intl.Locale` Instanzen enthalten auch andere Methoden, die nützliche Informationen bereitstellen, wie {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.

## Identifizierung des Gebietsschemas

Eine gemeinsame Sorge bei der Internationalisierung ist: Wie weiß ich, welches Gebietsschema ich verwenden soll?

Die offensichtlichste Antwort ist "was der Benutzer bevorzugt." Browser stellen die Sprachpräferenzen des Benutzers über die [`navigator.languages`](/de/docs/Web/API/Navigator/languages) Eigenschaft zur Verfügung. Dies ist ein Array von Sprachidentifikatoren, das direkt an den Formatter-Konstruktor übergeben werden kann—mehr dazu später. Der Benutzer kann diese Liste in seinen Browsereinstellungen konfigurieren. Sie können auch ein leeres Array oder `undefined` übergeben, was dazu führt, dass das Standardgebietsschema des Browsers verwendet wird.

```js
const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));

const numberFormatter2 = new Intl.NumberFormat([]);
```

Dies liefert jedoch möglicherweise nicht immer das gewünschte Ergebnis. Die von `Intl` Formatierern formatierten Zeichenketten stellen nur einen winzigen Bruchteil des auf Ihrer Website angezeigten Textes dar; der Großteil des lokalisierten Inhalts wird von Ihnen, dem Site-Entwickler, bereitgestellt. Angenommen, Ihre Seite wird nur in zwei Sprachen angeboten: Englisch und Französisch. Wenn ein japanischer Benutzer Ihre Seite besucht und erwartet, Ihre Seite auf Englisch zu nutzen, wird er verwirrt sein, wenn er den englischen Text mit Zahlen und Daten in Japanisch durchsetzt sieht!

Normalerweise möchten Sie nicht die Standardsprache des Browsers verwenden. Vielmehr möchten Sie dieselbe Sprache verwenden, in der der Rest Ihrer Seite angeboten wird. Angenommen, Ihre Seite verfügt über einen Sprachumschalter, der die Auswahl des Benutzers speichert — Sie könnten diesen direkt verwenden.

```js
// Suppose this can be changed by some site-wide control
const userSettings = {
  locale: "en-US",
  colorMode: "dark",
};
const numberFormatter = new Intl.NumberFormat(userSettings.locale);
console.log(numberFormatter.format(1234567.89));
```

Wenn Ihre Seite über ein Backend verfügt, das die Sprache basierend auf dem {{httpheader("Accept-Language")}} Header des Benutzers dynamisch auswählt und darauf basierend unterschiedliche HTML-Elemente zurücksendet, könnten Sie auch die `lang` Eigenschaft des HTML-Elements verwenden: `new Intl.NumberFormat(document.documentElement.lang)`.

Wenn Ihre Seite nur in einer Sprache angeboten wird, könnten Sie das Gebietsschema auch in Ihrem Code fest codieren: `new Intl.NumberFormat("en-US")`.

Wie bereits erwähnt, können Sie auch ein Array von Gebietsschemas an den Konstruktor übergeben, das eine Liste von Fallback-Optionen darstellt. Das erste Beispiel mit `navigator.languages` ist ein Beispiel dafür: Wenn das erste vom Benutzer konfigurierte Gebietsschema für die bestimmte Operation nicht unterstützt wird, wird das nächste versucht, und so weiter, bis wir ein angefordertes Gebietsschema finden, für das die Laufzeit Daten hat. Sie können dies auch manuell tun. Im folgenden Beispiel geben wir eine Liste von Gebietsschemas in abnehmender Reihenfolge der Spezifität an, die alle Sprachen vertreten, die ein chinesischsprachiger Nutzer aus Hongkong wahrscheinlich verstehen würde, sodass der Formatter das spezifischste auswählt, das er unterstützt.

```js
const numberFormatter = new Intl.NumberFormat([
  "yue-Hant",
  "zh-Hant-HK",
  "zh-Hant",
  "zh",
]);
```

Es gibt keine API zum Auflisten aller unterstützten Gebietsschemas, aber es gibt einige Methoden zur Verwaltung der Gebietsschemaliste:

- {{jsxref("Intl.getCanonicalLocales()")}}: Diese Funktion nimmt eine Liste von Gebietsschema-Identifikatoren und gibt eine Liste von kanonisierten Gebietsschema-Identifikatoren zurück. Dies ist nützlich, um den Kanonisierungsprozess für jeden `Intl` Konstruktor zu verstehen.
- Die `supportedLocalesOf()` statische Methode auf jedem `Intl` Objekt (wie {{jsxref("Intl.DateTimeFormat.supportedLocalesOf()")}}): Diese Methode nimmt die gleichen Argumente wie der Konstruktor (`locales` und `options`) und gibt eine Teilmenge der gegebenen Gebietsschema-Tags zurück, die den gegebenen Daten entsprechen. Dies ist nützlich, um zu verstehen, welche Gebietsschemas von der Laufzeit für eine bestimmte Operation unterstützt werden, zum Beispiel, um einen Sprachumschalter anzuzeigen, der nur die unterstützten Sprachen enthält.

## Verstehen des Rückgabewerts

Die zweite gemeinsame Frage für alle Objekte ist "was gibt die Methode zurück?" Diese Frage ist schwer über die Struktur oder den Typ des zurückgegebenen Wertes hinaus zu beantworten, weil es keine normative Spezifikation gibt, die besagt, was _genau_ zurückgegeben werden sollte. Meistens ist das Ergebnis einer Methode konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, auch innerhalb desselben Gebietsschemas — Ausgabenschwankungen sind beabsichtigt und in der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann die von `format()` zurückgegebene Zeichenkette nicht unterteilte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse einer `Intl` Methode nicht mit hart kodierten Konstanten vergleichen; sie sollten nur Benutzern angezeigt werden.

Natürlich erscheint diese Antwort unbefriedigend, weil die meisten Entwickler die Kontrolle darüber wünschen, wie die Ausgabe aussieht—zumindest möchten Sie nicht, dass Ihr Benutzer von unsinnigem Ausgabes verwirrt wird. Hier sind einige Richtlinien, wenn Sie Tests durchführen möchten, ob automatisiert oder manuell:

- Testen Sie alle Gebietsschemas, die Ihr Benutzer möglicherweise verwenden könnte. Dies ist einfacher, wenn Sie eine feste Anzahl von unterstützten Gebietsschemas haben (zum Beispiel über einen Sprachumschalter). Wenn Sie das verwenden, was der Benutzer bevorzugt, könnten Sie einige gängige auswählen, aber beachten Sie, dass das, was der Benutzer sieht, variieren könnte. Sie können normalerweise die Benutzerpräferenz durch die Konfiguration des Testläufers oder das Nachahmen der `Intl` Konstruktoren vorgeben.
- Testen Sie auf mehreren JavaScript-Maschinen. Die `Intl` API wird direkt von der JavaScript-Maschine implementiert, sodass Sie beispielsweise erwarten sollten, dass Node.js und Chrome (die beide V8 verwenden) dieselbe Ausgabe haben, während Firefox (das SpiderMonkey verwendet) eine unterschiedliche Ausgabe haben könnte. Obwohl alle Maschinen wahrscheinlich die CLDR-Daten verwenden, verarbeiten sie diese normalerweise auf unterschiedliche Weise nach. Einige Browser-Build-Einstellungen (zum Beispiel zur Reduzierung der Installationsgröße) können ebenfalls beeinflussen, welche Gebietsschemas und Optionen unterstützt werden.
- Nehmen Sie die Ausgabe nicht als selbstverständlich hin. Das bedeutet, dass Sie die Ausgabe nicht von Hand schreiben sollten, wie `expect(result).toBe("foo")`. Stattdessen sollten Sie Snapshot-Tests verwenden oder den Zeichenkettenwert ausgeben, der aus einem Testrun stammt, kopieren.

## Daten formatieren

Ein Hauptanwendungsfall von `Intl` besteht darin, lokalspezifische Texte aus strukturierten Daten auszugeben. Dies ist vergleichbar mit Übersetzungssoftware, ermöglicht es jedoch nicht, beliebigen Text zu übersetzen, sondern nimmt Daten wie Daten, Zahlen und Listen und formatiert sie nach lokal spezifischen Regeln.

Die Objekte {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} formatieren jeweils eine Art von Daten. Jede Instanz bietet zwei Methoden:

- `format()`: Nimmt ein Stück Daten und gibt eine Zeichenkette gemäß der durch das Gebietsschema und die Optionen bestimmten Formatierungsregel zurück.
- `formatToParts()`: Nimmt dieselben Daten und gibt dieselbe Zeichenkette zurück, jedoch in Teile aufgeteilt, wobei jeder Teil ein Objekt mit einem `type` und einem `value` ist. Dies ist nützlich für fortgeschrittenere Anwendungsfälle, wie das Verwischen des formatierten Textes mit anderen Texten.

Zum Beispiel hier eine typische Verwendung des {{jsxref("Intl.NumberFormat")}} Objekts:

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

Sie müssen nicht immer ein Formatter-Objekt konstruieren, um Zeichenketten zu formatieren. Für den gelegentlichen Gebrauch können Sie die `toLocaleString()` Methode direkt an den Daten aufrufen und das Gebietsschema und die Optionen als Argumente übergeben. Die `toLocaleString()` Methode wird von {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}, {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}, {{jsxref("Number.prototype.toLocaleString()")}} und ähnlichen implementiert. Lesen Sie die Dokumentation für die Daten, die Sie formatieren, um zu sehen, ob sie `toLocaleString()` unterstützen und welche Formatter-Optionen sie entsprechen.

```js
console.log(
  (5.259).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }),
); // $5.26
```

Beachten Sie, dass `toLocaleString()` potenziell weniger effizient ist als die Verwendung eines Formatter-Objekts, da jedes Mal, wenn `toLocaleString` aufgerufen wird, in einer großen Datenbank von Lokalisierungsstrings gesucht werden muss. Wenn die Methode oft mit denselben Argumenten aufgerufen wird, ist es besser, ein Formatter-Objekt zu erstellen und seine `format()` Methode zu verwenden, da ein Formatter-Objekt die ihm übergebenen Argumente speichert und eventuell einen Teil der Datenbank zwischenspeichern kann, sodass zukünftige Formatierungsaufrufe innerhalb eines eingeschränkteren Kontexts nach Lokalisierungsstrings suchen können.

### Datums- und Zeitformatierung

{{jsxref("Intl.DateTimeFormat")}} formatiert Daten und Zeiten sowie Zeiträume von Daten und Zeiten. Das `DateTimeFormat` Objekt nimmt Datums-/Zeiteingaben in einer der folgenden Formen: {{jsxref("Date")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}.

> [!NOTE]
> Sie können kein {{jsxref("Temporal.ZonedDateTime")}} Objekt direkt übergeben, da die Zeitzone bereits im Objekt festgelegt ist. Sie sollten {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} verwenden oder es zuerst in ein {{jsxref("Temporal.PlainDateTime")}} Objekt konvertieren.

Häufige Anwendungsfälle für die lokalisierte Datums- und Zeitformatierung sind die folgenden:

- Dasselbe Datum und dieselbe Zeit in einem anderen Kalendersystem ausgeben, wie dem islamischen, hebräischen oder chinesischen Kalender.
- Dieselbe reale Weltzeit (Zeitpunkt) ausgeben, jedoch in einer anderen Zeitzone.
- Selektiv bestimmte Komponenten des Datums und der Zeit ausgeben, z. B. nur das Jahr und den Monat und ihre spezifische Darstellung (wie zum Beispiel "Donnerstag" oder "Do").
- Das Datum gemäß lokalspezifischen Konventionen ausgeben, etwa MM/TT/JJJJ wie in den USA, TT/MM/JJJJ wie im Vereinigten Königreich oder JJJJ/MM/TT wie in Japan.
- Die Zeit gemäß lokalspezifischen Konventionen ausgeben, wie den 12- oder 24-Stunden-Takt.

Um zu entscheiden, wie die formatierte Zeichenkette aussieht, wählen Sie zuerst den Kalender (der das Jahr, den Monat, die Woche und die Tagesberechnung betrifft) und die Zeitzone (die die genaue Zeit sowie möglicherweise das Datum beeinflusst). Dies erfolgt über die oben erwähnte `calendar`-Option (oder den `-ca-` Erweiterungsschlüssel im Gebietsschema-Identifier) und die `timeZone`-Option.

- `Date` Objekte repräsentieren einen einzigartigen Zeitpunkt in der Zeitzone des Benutzers und im ISO 8601 Kalender (wie von Methoden wie {{jsxref("Date.prototype.getHours()")}} und {{jsxref("Date.prototype.getMonth()")}} berichtet wird). Sie werden in den angegebenen `calendar` und `timeZone` konvertiert, indem der Zeitpunkt beibehalten wird, sodass sich die Datum- und Zeitkomponenten ändern können.
- Die verschiedenen {{jsxref("Temporal")}} Objekte haben bereits einen integrierten Kalender, sodass die `calendar`-Option mit dem Kalender des Objekts konsistent sein muss—es sei denn, der Kalender des Datums ist "iso8601", in welchem Fall es in den angeforderten `calendar` konvertiert wird. Diese Objekte haben keine Zeitzone, daher werden sie direkt in der angegebenen `timeZone` ohne Konvertierung angezeigt.

Hier zeigen wir, wie die Kombination von `calendar` und `timeZone` Konfigurationen zu unterschiedlichen Darstellungen desselben Zeitpunktes führt.

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

Die Ausgabe sieht wie folgt aus:

| calendar  | timeZone           | Ausgabe                                                         |
| --------- | ------------------ | --------------------------------------------------------------- |
| 'gregory' | 'America/New_York' | 'Freitag, 31. Dezember 2021 um 19:00 Uhr Eastern Standard Time' |
| 'gregory' | 'Asia/Tokyo'       | 'Samstag, 1. Januar 2022 um 9:00 Uhr Japan Standard Time'       |
| 'hebrew'  | 'America/New_York' | 'Freitag, 27 Tevet 5782 um 19:00 Uhr Eastern Standard Time'     |
| 'hebrew'  | 'Asia/Tokyo'       | 'Samstag, 28 Tevet 5782 um 9:00 Uhr Japan Standard Time'        |

Ein Datum/Zeit besteht aus den folgenden Komponenten: `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits` und `timeZoneName`. Ihre nächste Entscheidung ist, welche Komponenten in der Ausgabe enthalten sein sollen und in welcher Form sie erscheinen sollen. Sie haben zwei Möglichkeiten:

- Sie können jede Komponente manuell konfigurieren, indem Sie Optionen mit demselben Namen wie die Komponente verwenden. Nur die von Ihnen spezifizierten Komponenten werden in der Ausgabe enthalten sein, in der angegebenen Form.
- Sie können die Abkürzungen `dateStyle` und `timeStyle` verwenden, bei denen es sich um vordefinierte Sets von Komponenten handelt. Diese werden je nach Gebietsschema zu einem Set von Komponentenoptionen erweitert.

Sie sollten eine dieser beiden Methoden wählen, da sie sich gegenseitig ausschließen. Die gleichzeitige Verwendung beider Methoden führt zu einem Fehler.

Grundsätzlich, nachdem Sie eine Kombination von Komponenten angefordert haben, sucht das `DateTimeFormat` Objekt nach einer "Vorlage", die zu den angeforderten Komponenten passt, sodass es nur die Werte nacheinander ausfüllen muss. Nicht jede Kombination von Komponenten hat eine vordefinierte Vorlage. `DateTimeFormat` hat eine `formatMatcher` Option, die entscheidet, wie verhandelt werden soll, indem Komponenten länger oder kürzer als gewünscht gemacht werden oder indem Komponenten weggelassen oder hinzugefügt werden. Es wird ziemlich technisch, also sollten Sie das [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) Referenzdokument lesen, um besser zu verstehen, wie es damit umgeht.

Hier zeigen wir einige übliche Methoden zum Formatieren der Komponenten:

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

Es gibt andere Anpassungsoptionen. Zum Beispiel können Sie die `hourCycle`-Option verwenden, um die Zeit im 12- oder 24-Stunden-Format anzuzeigen und Mitternacht/Mittag als 12:00 oder 0:00 zu zeigen. Sie können auch die Option `numberingSystem` verwenden, um Zahlen in einem anderen Nummerierungssystem anzuzeigen.

Neben `format()` gibt es eine zweite wichtige Methode, {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}, die einen Zeitraum von Daten oder Zeiten formatiert. Sie nimmt zwei Datumszeiten desselben Typs, formatiert jede, verbindet sie mit einem Bereichsseparator (wie dem en-Dash) und dedupliziert die gemeinsamen Teile.

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

Die Zahlenformatierung wird mit dem {{jsxref("Intl.NumberFormat")}} Objekt durchgeführt. Das `NumberFormat` Objekt akzeptiert Eingaben in Form von Zahlen, Zeichenketten oder `BigInt` Werten. Das Übergeben einer Zeichenkette oder eines `BigInt` anstelle einer Zahl ermöglicht es Ihnen, Zahlen zu formatieren, die zu groß oder zu klein sind, um als JavaScript-Nr. präzise dargestellt zu werden.

Häufige Anwendungsfälle für die lokalisierte Zahlenformatierung sind die folgenden:

- Die Zahl in einem anderen Nummerierungssystem (Schriftsystem) ausgeben, z. B. Chinesisch, Arabisch oder Römisch.
- Die Zahl mit lokalspezifischen Konventionen ausgeben, z. B. das Dezimalzeichen ("." im Englischen, aber "," in vielen europäischen Kulturen) oder die Zifferngruppierung (3 Ziffern im Englischen, aber möglicherweise 4 oder 2 in anderen Kulturen, und sie verwenden möglicherweise ",", " " oder ".").
- Die Zahl mit Exponentialnotation wie "3,7 Millionen" oder "2 Tausend" ausgeben.
- Die Zahl als Währung ausgeben, wobei spezifische Währungssymbole und Rundungsregeln angewendet werden. Zum Beispiel sind Geldwerte unter einem Cent in den USA oder unter einem Yen in Japan möglicherweise nicht sinnvoll anzuzeigen.
- Die Zahl als Prozentsatz ausgeben, wobei lokal spezifische Umrechnungs- und Formatierungsregeln angewendet werden.
- Die Zahl mit Einheiten ausgeben, z. B. "Meter" oder "Liter", mit übersetzten Einheitsnamen.

Um zu entscheiden, wie die formatierte Zeichenkette aussieht, wählen Sie zuerst das Nummerierungssystem (das die verwendeten Zeichen für die Ziffern betrifft). Der Zweck eines Nummerierungssystems wurde bereits in [Informationen zum Gebietsschema](#informationen_über_das_gebietsschema) diskutiert. Eine weitere Option, die Sie entscheiden müssen, ist der `style`, der den Kontext festlegt, was die Zahl darstellt und möglicherweise die Standardwerte anderer Optionen beeinflusst. Es ist eines von `"decimal"`, `"percent"`, `"currency"` oder `"unit"`. Wenn Sie Währungen formatieren möchten, müssen Sie auch die `currency` Option angeben. Wenn Sie Einheiten formatieren möchten, müssen Sie auch die `unit` Option angeben.

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

Die Ausgabe sieht aus wie:

| style      | Ausgabe          |
| ---------- | ---------------- |
| 'decimal'  | '1,234,567.89'   |
| 'percent'  | '123,456,789%'   |
| 'currency' | '$1,234,567.89'  |
| 'unit'     | '1,234,567.89 m' |

Die nächste Gruppe von Optionen spezifiziert, wie der numerische Teil aussehen sollte. Zuerst möchten Sie möglicherweise extrem große Werte in einer lesbareren Weise darstellen. Sie können die `notation` Option auf `"scientific"` oder `"engineering"` setzen, die beide die `1.23e+6` Notation verwenden. Der Unterschied besteht darin, dass ersteres ein Vielfaches von 3 für den Exponenten verwendet und das [Mantisse](https://de.wikipedia.org/wiki/Gleitkommazahl) (der Teil vor dem `e` Symbol) zwischen 1 und 1000 hält, während ersteres jede ganze Zahl für den Exponenten verwenden kann und die Mantisse zwischen 1 und 10 hält. Sie können `notation` auch auf `"compact"` setzen, um eine lesbarere, menschenlesliche Notation zu verwenden.

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

Die Ausgabe sieht wie folgt aus:

| notation        | Ausgabe       |
| --------------- | ------------- |
| 'scientific'    | '1.2E4'       |
| 'engineering'   | '12E3'        |
| 'compact-short' | '12K'         |
| 'compact-long'  | '12 thousand' |

Dann möchten Sie die Zahl (wenn Sie `notation` spezifiziert haben, dann nur den Mantisse-Teil) runden, damit Sie keine Zahl anzeigen, die zu lang ist. Dies sind die Digit-Optionen:

- `minimumIntegerDigits`
- `minimumFractionDigits`
- `maximumFractionDigits`
- `minimumSignificantDigits`
- `maximumSignificantDigits`
- `roundingPriority`
- `roundingIncrement`
- `roundingMode`

Die genaue Interaktion dieser Optionen ist ziemlich komplex und nicht wert, hier behandelt zu werden. Sie sollten in das [Digit Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) Referenzdokument für mehr Details lesen. Dennoch ist die allgemeine Idee einfach: Wir finden zuerst die Anzahl der Dezimalstellen, die wir behalten wollen, und runden dann überschüssige Dezimalstellen entweder nach unten oder oben ab, abhängig vom Wert der letzten Ziffer.

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

Die Ausgabe sieht wie folgt aus:

| Optionen                                                                                               | Ausgabe      |
| ------------------------------------------------------------------------------------------------------ | ------------ |
| `{ minimumFractionDigits: 4, maximumFractionDigits: 4 }`                                               | '1,234.5679' |
| `{ minimumSignificantDigits: 4, maximumSignificantDigits: 4 }`                                         | '1,235'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" }`                        | '1,234'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor", roundingIncrement: 10 }` | '1,230'      |

Es gibt andere Anpassungsoptionen. Zum Beispiel können Sie die `useGrouping` und `signDisplay` Optionen verwenden, um anzupassen, ob und wie die Gruppierungstrennzeichen (wie "," in "1,234,567.89") und das Zeichen angezeigt werden sollen. Beachten Sie jedoch, dass die Zeichen, die als Gruppierungstrennzeichen, Dezimalpunkt und Zeichen verwendet werden, lokalspezifisch sind, sodass sie nicht direkt angepasst werden können.

Zusätzlich zu `format()` gibt es eine zweite wichtige Methode, {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}, die einen Bereich von Zahlen formatiert. Sie nimmt zwei Zahlen und gibt sie mit einem Bereichsseparator (wie einem en-Dash) wieder aus und dedupliziert möglicherweise die gemeinsamen Teile.

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

Sie haben vielleicht bereits Code geschrieben, der dies tut:

```js example-bad
const fruits = ["apple", "banana", "cherry"];
console.log(`I like ${fruits.join(", ")}.`);
// I like apple, banana, cherry.
```

Dieser Code ist nicht internationalisiert. In einigen Sprachen ist das Listentrennzeichen kein Komma. In den meisten Sprachen (einschließlich Englisch) benötigen Sie eine Konjunktion vor dem letzten Element. Aber selbst das manuelle Hinzufügen eines "and" macht es nicht korrekt unter allen englischen Sprechern, da es die Debatte um das [Oxford Komma](https://de.wikipedia.org/wiki/Serial_comma) im Englischen gibt: "apple, banana, and cherry" vs. "apple, banana and cherry".

Das {{jsxref("Intl.ListFormat")}} Objekt löst dieses Problem. Es nimmt ein Array von Zeichenketten und verbindet sie auf eine lokalspezifische Weise, sodass das Ergebnis eine Konjunktion (und), Disjunktion (oder) oder eine Liste von Einheiten repräsentiert.

```js
const fruits = ["apple", "banana", "cherry"];
const lf = new Intl.ListFormat("en-US", { style: "long", type: "conjunction" });
console.log(`I like ${lf.format(fruits)}.`);
// I like apple, banana, and cherry.

const lf = new Intl.ListFormat("en-US", { style: "long", type: "disjunction" });
console.log(`I can give you ${lf.format(fruits)}.`);
// I can give you apple, banana, or cherry.
```

Schauen Sie sich {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} für mehr Beispiele und Optionen an.

### Relative Zeitformatierung

{{jsxref("Intl.RelativeTimeFormat")}} formatiert eine Zeitdifferenz. Das `RelativeTimeFormat` Objekt nimmt relative Zeiten in Form von zwei Argumenten: eine Zahl (mit beliebigem Vorzeichen) und eine Zeiteinheit, wie `"day"`, `"hour"` oder `"minute"`.

Es erledigt mehrere Dinge gleichzeitig:

- Es lokalisiert und pluralisiert die Zeiteinheit, wie "1 day" vs. "2 days", ähnlich der Zahlenformatierung.
- Es wählt den angemessenen Ausdruck für vergangene und zukünftige Zeiten, wie "in 1 day" vs. "1 day ago".
- Es kann einen speziellen Ausdruck für einige Zeiteinheiten wählen, wie "1 day ago" vs. "yesterday".

```js
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(-1, "hour")); // 1 hour ago
```

Schauen Sie sich {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}} für mehr Beispiele und Optionen an.

### Dauernformatierung

{{jsxref("Intl.DurationFormat")}} bietet die Formatierung von Dauern, wie "3 hours, 4 minutes, 5 seconds". Es ist keine Formatierungsoperation für sich, sondern verwendet intern {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.ListFormat")}}, um jede Dauernkomponente zu formatieren, und verbindet sie dann mit einem Listentrennzeichen. Das `DurationFormat` Objekt nimmt Dauern in Form eines {{jsxref("Temporal.Duration")}} Objekts oder eines reinen Objekts mit denselben Eigenschaften an.

Neben der Anpassung des Nummerierungssystems entscheiden die Optionen zur Dauernformatierung darüber, ob und wie jede Komponente angezeigt werden soll und wie lange sie sein sollten.

```js
console.log(
  new Intl.DurationFormat("en-US", {
    style: "long",
  }).format({ hours: 3, minutes: 4, seconds: 5 }),
);
// 3 hours, 4 minutes, and 5 seconds
```

Schauen Sie sich {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}} für mehr Beispiele und Optionen an.

## Kollation

Das {{jsxref("Intl.Collator")}} Objekt ist nützlich zum Vergleichen und Sortieren von Zeichenketten. Es nimmt zwei Zeichenketten und gibt eine Zahl zurück, die ihre relative Reihenfolge angibt, auf die gleiche Weise wie das `compareFn` Argument der {{jsxref("Array.prototype.sort")}} Methode.

Es gibt viele Gründe, warum Sie keine JavaScript-Operatoren wie `===` oder `>` verwenden sollten, um benutzerorientierte Zeichenketten zu vergleichen:

- Irrelevante orthographische Varianten: Zum Beispiel sind im Englischen "naïve" und "naive" nur alternative Schreibweisen desselben Wortes und sollten als gleich behandelt werden.
- Groß-/Kleinschreibung ignorieren: Oft möchten Sie Groß-/Kleinschreibung beim Vergleich von Zeichenketten ignorieren. Zum Beispiel sollten "apple" und "Apple" als gleich behandelt werden.
- Unicode-Codepunkt-Reihenfolge macht keinen Sinn: Vergleichsoperatoren wie `>` vergleichen nach Unicode-Codepunkt-Reihenfolge, die nicht der Reihenfolge von Zeichen im Wörterbuch entspricht. Zum Beispiel kommt "ï" nach "z" in der Codepunkt-Reihenfolge, aber Sie würden es in einem Wörterbuch neben "i" sortiert haben wollen.
- Unicode-Normalisierung: Dasselbe Zeichen kann in Unicode in mehreren Darstellungen vorliegen. Zum Beispiel kann "ñ" als einzelnes Zeichen oder als "n" gefolgt von einem kombinierenden Tilde-Zeichen dargestellt werden. (Siehe {{jsxref("String.prototype.normalize()")}}.) Diese sollten als gleich behandelt werden.
- Zahlvergleich: Zahlen in Zeichenketten sollten als Zahlen und nicht als Zeichenketten verglichen werden. Zum Beispiel möchten Sie, dass "test-10" nach "test-2" kommt.

Es gibt zwei unterschiedliche Anwendungsfälle für Kollation: **Sortieren** und **Suchen**. Sortieren ist, wenn Sie eine Liste von Zeichenketten haben und diese nach einer bestimmten Regel ordnen möchten. Suchen ist, wenn Sie eine Liste von Zeichenketten haben und eine Zeichenkette finden möchten, die einer Abfrage entspricht. Beim Suchen sollten Sie nur darauf achten, ob das Vergleichsergebnis null (gleich) ist oder nicht, nicht das Vorzeichen des Ergebnisses.

Es gibt viele verschiedene Möglichkeiten zu sortieren, auch innerhalb desselben Gebietsschemas. Zum Beispiel gibt es im Deutschen zwei verschiedene Sortierreihenfolgen, _Telefonbuch_ und _Wörterbuch_. Die Telefonbuchsortierung legt Wert auf den Klang — als ob "ä", "ö" usw. vor dem Sortieren auf "ae", "oe" usw. erweitert würden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare));
// ['Hochberg', 'Hönigswald', 'Holzman']
```

Einige deutsche Wörter beugen sich mit zusätzlichen Umlauten, sodass es in Wörterbüchern sinnvoll ist, Ignorieren der Umlaute (außer beim Ordnen von Wörtern, die sich _nur_ durch Umlaute unterscheiden) zu ignorieren: _schon_ vor _schön_.

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

## Pluralregeln

Das {{jsxref("Intl.PluralRules")}} Objekt ist nützlich, um die richtige Pluralform eines Wortes auszuwählen. Es pluralisiert Wörter nicht automatisch für Sie (zum Beispiel können Sie ihm nicht "apple" übergeben und "apples" erwarten), aber es sagt Ihnen, welche Pluralform basierend auf einer Zahl verwendet werden soll. Möglicherweise tun Sie dies bereits:

```js
function formatMessage(n) {
  return `You have ${n} ${n === 1 ? "apple" : "apples"}.`;
}
```

Aber das ist schwer auf verschiedene Sprachen zu verallgemeinern, insbesondere solche mit vielen Pluralformen. Sie können {{jsxref("Intl.PluralRules")}} für eine allgemeine Einführung in Pluralregeln sehen. Hier zeigen wir nur einige häufige Anwendungsfälle.

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

Das {{jsxref("Intl.Segmenter")}} Objekt ist nützlich, um eine Zeichenkette in Segmente zu unterteilen. Ohne `Intl` können Sie eine Zeichenkette bereits nach [UTF-16 Code-Einheiten und Unicode-Codepunkten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) aufteilen:

```js
const str = "🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷";
console.log(str.split(""));
// Array(20) ['\uD83C', '\uDDFA', '\uD83C', ...]
console.log([...str]);
// Array(10) ['🇺', '🇸', '🇨', '🇳', '🇷', '🇺', '🇬', '🇧', '🇫', '🇷']
```

Aber wie Sie sehen, sind Unicode-Codepunkte nicht dasselbe wie das, was menschliche Benutzer als diskrete Zeichen wahrnehmen. Dies geschieht oft bei Emojis, bei denen ein einzelnes Emoji durch mehrere Codepunkte dargestellt werden kann. Wenn der Benutzer mit Texten interagiert, ist ein Graphem die kleinste Einheit von Text, die er manipulieren kann, wie Löschen oder Auswählen. Das `Segmenter` Objekt ermöglicht die Graphem-Einteilung auf Graphem-Ebene, die nützlich für das Zählen von Zeichen, das Messen der Textbreite und so weiter ist. Es nimmt eine Zeichenkette und gibt ein iterierbares [Segmente-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) zurück, wobei jedes Element eine `segment` Eigenschaft hat, die den Text des Segments darstellt.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
console.log([...segmenter.segment("🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷")].map((s) => s.segment));
// ['🇺🇸', '🇨🇳', '🇷🇺', '🇬🇧', '🇫🇷']
```

Der Segmentierer kann auch höhere Ebenen der Segmentierung durchführen, einschließlich der Wort- und Satzebene. Diese Anwendungsfälle sind notwendigerweise sprachspezifisch. Das Folgende ist zum Beispiel eine sehr unzulängliche Implementierung der Wortzählung:

```js example-bad
const wordCount = (str) => str.split(/\s+/).length;
console.log(wordCount("Hello, world!")); // 2
```

Es gibt mehrere Probleme damit: Nicht alle Sprachen verwenden Leerzeichen, um Wörter zu trennen, nicht alle Leerzeichen sind worttrennend, und nicht alle Wörter sind durch Leerzeichen getrennt. Um dies zu lösen, verwenden Sie `Segmenter` mit `granularity: "word"`. Das Ergebnis ist die Eingabezeichenkette, unterteilt in Segmente von Wörtern und Nicht-Wörtern. Wenn Sie Wörter zählen möchten, sollten Sie die Nicht-Wörter herausfiltern, indem Sie die `isWordLike` Eigenschaft jedes Segments überprüfen.

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

Die Wortsegmentierung funktioniert auch für schriftbasierte Sprachen. Zum Beispiel können im Chinesischen mehrere Zeichen ein einzelnes Wort darstellen, aber es gibt keinen Abstand dazwischen. Der Segmentierer implementiert dasselbe Verhalten wie die systemeigene Wortsegmentierung des Browsers, ausgelöst durch das Doppelklicken auf ein Wort.

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

Beachten Sie, dass der Segmentierer keine Zeichen entfernt. Er teilt die Zeichenkette nur in Segmente, wobei jedes Segment einen Satz darstellt. Sie können dann die Satzzeichen entfernen, wenn Sie möchten. Außerdem unterstützt die aktuelle Implementierung des Segmentierers keine Satzsegmentierungsunterdrückungen (Verhinderung von Satzbrüchen nach Punkten wie "Mr." oder "Approx."), aber es wird daran gearbeitet, dies zu unterstützen.

## Anzeige von Namen

Nach der Einführung so vieler Optionen und Verhaltensweisen fragen Sie sich möglicherweise, wie Sie sie dem Benutzer präsentieren. `Intl` enthält zwei nützliche APIs zum Erstellen von Benutzeroberflächen: {{jsxref("Intl.supportedValuesOf()")}} und {{jsxref("Intl.DisplayNames")}}.

Die {{jsxref("Intl.supportedValuesOf()")}} Funktion gibt ein Array mit unterstützten Werten für eine gegebene Option zurück. Zum Beispiel können Sie damit eine Dropdown-Liste unterstützen, aus der die Benutzer zur Anzeige von Daten Kalender auswählen können.

```js
const supportedCal = Intl.supportedValuesOf("calendar");
console.log(supportedCal);
// ['buddhist', 'chinese', 'coptic', 'dangi', ...]
```

Aber oft sind diese Bezeichner nicht benutzerfreundlich. ZumBeispiel möchten Sie möglicherweise die Kalender in der Sprache des Benutzers anzeigen oder sie nicht abgekürzt darstellen. Das {{jsxref("Intl.DisplayNames")}} Objekt ist nützlich dafür. Es ist wie ein Formatter, aber es ist nicht vorlagenbasiert. Stattdessen ist es eine direkte Zuordnung von sprachunabhängigen Bezeichnern zu lokalisierten Namen. Es unterstützt die Formatierung von Sprachen, Regionen, Schriftsystemen (den drei Unterfeldern eines BCP 47-Tags), Währungen, Kalendern und Datum-Zeit-Feldern.

Probieren Sie die Demo unten aus:

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
