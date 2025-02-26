---
title: Internationalisierung
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: 56beb40c68076030d1812fcec837c89910b58373
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Meta_programming")}}

Das {{jsxref("Intl")}}-Objekt ist der Namensraum für die ECMAScript-Internationalisierungs-API, die eine breite Palette von lokal- und kultursensiblen Daten und Operationen bereitstellt.

## Übersicht

Das `Intl`-Objekt ist sehr anwendungsfallgetrieben. Es stellt ein separates Objekt für jeden Anwendungsfall bereit, der lokalspezifische Logik erfordert. Derzeit bietet es die folgenden Funktionalitäten:

- [Abrufen von Informationen über eine Locale](#locale-informationen) mit {{jsxref("Intl.Locale")}}.
- [Formatierung von Daten](#daten_formatieren) mit {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}}.
- [Kollation](#kollation) (d.h. Vergleich von Zeichenfolgen zum Sortieren oder Suchen) mit {{jsxref("Intl.Collator")}}.
- [Auswahl von Pluralformen](#pluralregeln) mit {{jsxref("Intl.PluralRules")}}.
- [Segmentierung von Text](#segmentierung) in Einheiten wie Wörter, Sätze oder Grapheme mit {{jsxref("Intl.Segmenter")}}.
- [Abrufen des angezeigten Namens](#angezeigte_namen) für Währungen, Sprachen, Skripte, Regionen und Zeitzonen mit {{jsxref("Intl.DisplayNames")}}.

Die meisten `Intl`-APIs teilen ein ähnliches Design ({{jsxref("Intl.Locale")}} ist die einzige Ausnahme). Sie beginnen mit der Erstellung einer Instanz mit der gewünschten Locale und Optionen. Dies definiert einen Satz von Regeln für die gewünschte Operation (Formatierung, Kollation, Segmentierung, etc.). Wenn Sie dann die Methode an der Instanz aufrufen, z.B. `format()`, `compare()` oder `segment()`, wendet das Objekt die spezifizierte Regel auf die übergebenen Daten an.

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
  - : Ein String mit einem BCP 47-Sprachtag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Identifikatoren. Die Standardlocale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder kein der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Beschreibung des Parameters auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die spezifische Aspekte der Operation anpassen, was der Schlüssel zum Verständnis der Verwendung jedes `Intl`-Objekts ist.

## Locale-Informationen

Locales bilden die Grundlage aller Verhaltensweisen von `Intl`. Eine _Locale_ ist ein Satz von Konventionen, der in der `Intl`-API durch das {{jsxref("Intl.Locale")}}-Objekt dargestellt wird. Alle `Intl`-Konstruktoren, die Sprachtags akzeptieren, akzeptieren auch `Intl.Locale`-Objekte.

Jede Locale wird hauptsächlich durch drei Dinge definiert: eine {{jsxref("Intl/Locale/language", "Sprache")}}, ein {{jsxref("Intl/Locale/script", "Skript")}} und eine {{jsxref("Intl/Locale/region", "Region")}}. Wenn sie in dieser Reihenfolge durch `-` verbunden sind, bilden sie einen [BCP 47-Sprachtag](https://datatracker.ietf.org/doc/html/rfc5646).

- Die Sprache ist der wichtigste Teil der Locale und ist obligatorisch. Wenn eine einzelne Sprache angegeben wird, wie `en` oder `fr`, gibt es Algorithmen, um den Rest der Informationen zu ermitteln (siehe {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}).
- Oftmals möchte man jedoch auch die Region angeben, da sich die Konventionen drastisch zwischen Regionen unterscheiden können, die dieselbe Sprache sprechen. Zum Beispiel ist das Datumsformat in den USA MM/TT/JJJJ, während es im Vereinigten Königreich TT/MM/JJJJ ist, sodass die Angabe von `en-US` oder `en-GB` wichtig ist.
- Sie können auch ein Skript angeben. Das Skript ist das Schriftsystem oder die Zeichen, die zur Transkription der Sprache verwendet werden. In der Praxis ist das Skript oft unnötig, da die in einer bestimmten Region verwendete Sprache nur in einem Skript geschrieben wird. Es gibt jedoch Ausnahmen wie die serbische Sprache, die sowohl in lateinischen als auch in kyrillischen Schriften geschrieben werden kann (`sr-Latn` und `sr-Cyrl`), oder die chinesische Sprache, die sowohl in vereinfachten als auch in traditionellen Schriften geschrieben werden kann (`zh-Hans` und `zh-Hant`).

```js
// These two are equivalent when passed to other Intl APIs
const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-Latn-US");

console.log(locale1.language, locale1.script, locale1.region); // "en", undefined, "US"
console.log(locale2.language, locale2.script, locale2.region); // "en", "Latn", "US"
```

Eine Locale enthält auch eine Reihe von Konventionen, die von dieser bestimmten Kultur verwendet werden:

<table>
<thead><tr><th>Anwendungsfall</th><th>Eigenschaft</th><th>Beschreibung</th><th>Erweiterungs-Subtag</th></tr></thead>
<tbody>
<tr>
<td rowspan="2">Datum/Zeit-Formatierung</td>
<td>{{jsxref("Intl/Locale/calendar", "calendar")}}</td>
<td>Wird verwendet, um Tage in Jahre, Monate und Wochen zu gruppieren und ihnen Namen zuzuweisen. Beispielsweise wird das <code>gregory</code>-Datum „2022-01-01“ im <code>hebrew</code>-Kalender zu „28 Tevet 5782“.</td>
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
<td>Transformiert Zahlen in eine lokalspezifische Notation. Das reguläre <code>0123456789</code>-System wird <code>latn</code> (Lateinisch) genannt. Oft hat jedes Skript ein Nummerierungssystem, das eine digitale Übersetzung ist, aber einige Skripte haben mehr als ein Nummerierungssystem; einige schreiben möglicherweise normalerweise keine Zahlen in diesem Skript (zum Beispiel hat das Chinesische sein eigenes <code>hanidec</code>-Nummerierungssystem, aber die meisten Texte verwenden das Standard-<code>latn</code>-System), und andere erfordern möglicherweise spezielle Umrechnungsalgorithmen (zum Beispiel Römische Ziffern — <code>roman</code>).</td>
<td><code>nu</code></td>
</tr>
<tr>
<td rowspan="3">Kollation</td>
<td>{{jsxref("Intl/Locale/collation", "collation")}}</td>
<td>Definiert den generischen Kollationsalgorithmus. Verwenden Sie beispielsweise die deutsche <code>phonebk</code>-Kollation, wird „ä“ wie „ae“ behandelt und zwischen „ad“ und „af“ sortiert.</td>
<td><code>co</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/caseFirst", "caseFirst")}}</td>
<td>Entscheidet, ob Groß- oder Kleinbuchstaben zuerst sortiert werden sollen oder ob die Groß-/Kleinschreibung ignoriert wird.</td>
<td><code>kf</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/numeric", "numeric")}}</td>
<td>Entscheidet, ob Zahlen als Zahlen oder als Zeichenfolgen sortiert werden. Wenn beispielsweise wahr, wird „10“ nach „2“ sortiert.</td>
<td><code>kn</code></td>
</tr>
</tbody>
</table>

Sie können diese Eigenschaften explizit angeben, wenn Sie das `Intl.Locale` konstruieren oder Sprachtags an andere `Intl`-Konstruktoren übergeben. Es gibt zwei Möglichkeiten, dies zu tun — hängen Sie sie an das Sprachtag an oder geben Sie sie als Optionen an.

- Um sie an das Sprachtag anzuhängen, hängen Sie zuerst die Zeichenkette `-u` (bedeutet „Unicode-Erweiterung“) an, dann das Erweiterungs-Subtag wie oben angegeben, dann den Wert.
- Um sie als Optionen anzugeben, fügen Sie den Eigenschaftsnamen wie oben angegeben zusammen mit seinem Wert zum `options`-Objekt hinzu.

Unter Verwendung von `Intl.DateTimeFormat` als Beispiel erstellen beide der folgenden Zeilen einen Formatter, der Daten im Hebräischen Kalender formatiert:

```js
const df1 = new Intl.DateTimeFormat("en-US-u-ca-hebrew");
const df2 = new Intl.DateTimeFormat("en-US", { calendar: "hebrew" });
```

Unbekannte Eigenschaften werden ignoriert, sodass Sie die gleiche Syntax wie oben mit `Intl.NumberFormat` verwenden können, aber es wird nichts anderes tun, als nur `en-US` zu übergeben, da die Zahlenformatierung die `calendar`-Eigenschaft nicht verwendet.

Es ist schwierig, die Standardwerte dieser Locale-Konventionen zu ermitteln. `new Intl.Locale("en-US").calendar` gibt `undefined` zurück, weil das `Locale`-Objekt nur die Informationen enthält, die Sie an es übergeben haben. Der Standardkalender hängt theoretisch davon ab, mit welcher API der Kalender verwendet wird, daher können Sie den Standardkalender von `en-US` verwenden, wie er von `Intl.DateTimeFormat` verwendet wird, indem Sie die Methode {{jsxref("Intl/DateTimeFormat/resolvedOptions", "resolvedOptions()")}} verwenden. Das Gleiche gilt für andere Eigenschaften.

```js
const locale = new Intl.Locale("en-US");
console.log(locale.calendar); // undefined; it's not provided
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar); // "gregory"
```

`Intl.Locale`-Objekte erfüllen zwei Funktionen gleichzeitig: Sie repräsentieren einen geparsten BCP 47-Sprachtag (wie oben demonstriert), und sie bieten Informationen über diese Locale. Alle seine Eigenschaften, wie `calendar`, werden nur aus der Eingabe extrahiert, ohne eine Datenquelle nach Standardwerten abzufragen. Andererseits verfügt es über eine Gruppe von Methoden zum Abfragen von Informationen über die tatsächliche Welt der Locale. Beispielsweise ergänzen die {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}} und {{jsxref("Intl/Locale/getCollations", "getCollations()")}} Methoden die `calendar`, `hourCycle`, `numberingSystem` und `collation`-Eigenschaften und jede gibt ein Array bevorzugter Werte für diese Eigenschaft zurück.

```js
const locale = new Intl.Locale("ar-EG");
console.log(locale.getCalendars()); // ['gregory', 'coptic', 'islamic', 'islamic-civil', 'islamic-tbla']
```

`Intl.Locale`-Instanzen enthalten auch andere Methoden, die nützliche Informationen bereitstellen, wie {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.

## Die Locale herausfinden

Eine gemeinsame Sorge bei der Internationalisierung ist: Wie finde ich heraus, welche Locale ich verwenden soll?

Die offensichtlichste Antwort ist „was der Benutzer bevorzugt“. Browser stellen die Sprachpräferenzen des Benutzers über die [`navigator.languages`](/de/docs/Web/API/Navigator/languages)-Eigenschaft bereit. Dies ist ein Array von Sprachidentifikatoren, das direkt an den Formatter-Konstruktor übergeben werden kann – mehr dazu später. Der Benutzer kann diese Liste in seinen Browsereinstellungen konfigurieren. Sie können auch ein leeres Array oder `undefined` übergeben, was beide dazu führen, dass die Standardlocale des Browsers verwendet wird.

```js
const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));

const numberFormatter2 = new Intl.NumberFormat([]);
```

Dies liefert jedoch möglicherweise nicht immer das gewünschte Ergebnis. Von `Intl` formatierte Zeichenfolgen repräsentieren nur einen winzigen Bruchteil des auf Ihrer Seite angezeigten Textes; Die meisten lokalisierten Inhalte werden von Ihnen, dem Webseitenentwickler, bereitgestellt. Angenommen, Ihre Seite wird nur in zwei Sprachen angeboten: Englisch und Französisch. Wenn ein japanischer Benutzer Ihre Seite besucht und erwartet, diese auf Englisch zu nutzen, wird er verwirrt sein, wenn er den englischen Text mit Zahlen und Daten in japanisch sieht!

In der Regel möchten Sie nicht die Standardsprache des Browsers verwenden. Vielmehr möchten Sie dieselbe Sprache verwenden, die auch der Rest Ihrer Website bietet. Angenommen, Ihre Seite hat einen Sprachumschalter, der die Wahl des Benutzers irgendwo speichert – Sie könnten diese direkt verwenden.

```js
// Suppose this can be changed by some site-wide control
const userSettings = {
  locale: "en-US",
  colorMode: "dark",
};
const numberFormatter = new Intl.NumberFormat(userSettings.locale);
console.log(numberFormatter.format(1234567.89));
```

Wenn Ihre Seite ein Backend hat, das die Sprache basierend auf dem {{httpheader("Accept-Language")}}-Header des Benutzers dynamisch auswählt und basierend darauf unterschiedliche HTML-Daten zurücksendet, könnten Sie auch die [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)-Eigenschaft des HTML-Elements verwenden:`new Intl.NumberFormat(document.documentElement.lang)`.

Wenn Ihre Seite nur in einer Sprache angeboten wird, könnten Sie die Locale auch fest im Code eintragen: `new Intl.NumberFormat("en-US")`.

Wie bereits erwähnt, können Sie dem Konstruktor auch ein Array von Locales übergeben, das eine Liste von Fallback-Optionen darstellt. Das erste Beispiel mit `navigator.languages` ist ein Beispiel dafür: Wenn die erste vom Benutzer konfigurierte Locale für die bestimmte Operation nicht unterstützt wird, wird die nächste ausprobiert und so weiter, bis wir eine angeforderte Locale finden, für die die Laufzeit Umgebung Daten hat. Sie können dies auch manuell tun. Im folgenden Beispiel geben wir eine Liste von Locales in abnehmender Reihenfolge der Spezifität an, die alle Sprachen darstellen, die ein chinesischer Sprecher aus Hongkong wahrscheinlich versteht, sodass der Formatter die am besten unterstützte auswählt.

```js
const numberFormatter = new Intl.NumberFormat([
  "yue-Hant",
  "zh-Hant-HK",
  "zh-Hant",
  "zh",
]);
```

Es gibt keine API zum Auflisten aller unterstützten Locales, aber es gibt einige Methoden zum Verwalten der Locale-Liste:

- {{jsxref("Intl.getCanonicalLocales()")}}: Diese Funktion akzeptiert eine Liste von Locale-Identifikatoren und gibt eine Liste kanonischer Locale-Identifikatoren zurück. Dies ist nützlich zum Verständnis des Kanonisierungsprozesses für jeden `Intl`-Konstruktor.
- Die `supportedLocalesOf()`-Methode auf jedem `Intl`-Objekt (wie {{jsxref("Intl.DateTimeFormat.supportedLocalesOf()")}}): Diese Methode nimmt dieselben Argumente wie der Konstruktor (`locales` und `options`) und gibt eine Teilmenge der angegebenen Locale-Tags zurück, die mit den gegebenen Daten übereinstimmen. Dies ist nützlich, um zu verstehen, welche Locales von der Laufzeitumgebung für eine bestimmte Operation unterstützt werden, zum Beispiel um einen Sprachumschalter zu zeigen, der nur die unterstützten Sprachen enthält.

## Das Rückgabewert verstehen

Die zweite gemeinsame Frage für alle Objekte ist „Was gibt die Methode zurück?“ Dies ist eine schwierige Frage, die über die Struktur oder den Typ des zurückgegebenen Werts hinausgeht, da es keine normative Spezifikation gibt, die besagt, was _genau_ zurückgegeben werden soll. Meistens ist das Ergebnis einer Methode konsistent. Das Ergebnis kann jedoch je nach Implementierung variieren, selbst innerhalb derselben Locale - Abweichungen im Ergebnis sind beabsichtigt und durch die Spezifikation erlaubt. Es entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann die von `format()` zurückgegebene Zeichenfolge geschützte Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse einer `Intl`-Methode nicht mit hartcodierten Konstanten vergleichen; sie sollten nur dem Benutzer angezeigt werden.

Natürlich mag diese Antwort unzufriedenstellend erscheinen, weil die meisten Entwickler wünschen, dass sie kontrollieren können, wie das Ergebnis aussieht – zumindest möchten Sie nicht, dass Ihr Benutzer durch unsinniges Ergebnis verwirrt wird. Hier sind einige Richtlinien, wenn Sie dennoch Tests durchführen möchten, sei es automatisiert oder manuell:

- Testen Sie alle Locales, die Ihr Benutzer verwenden könnte. Dies ist einfacher, wenn Sie eine feste Menge unterstützter Locales haben (z. B. über einen Sprachumschalter). Wenn Sie verwenden, was der Benutzer bevorzugt, können Sie einige der häufigsten für Ihre Benutzer auswählen, jedoch berücksichtigen, dass das, was der Benutzer sieht, variieren könnte. In der Regel können Sie die Benutzerpräferenz über die Konfiguration der Testumgebung oder durch Mocking der `Intl`-Konstruktoren simulieren.
- Testen Sie auf mehreren JavaScript-Engines. Die `Intl`-API wird direkt durch die JavaScript-Engine implementiert, also sollten Sie erwarten, dass beispielsweise Node.js und Chrome (die beide V8 verwenden) das gleiche Ergebnis ausgeben, während Firefox (das SpiderMonkey verwendet) ein anderes Ergebnis liefern kann. Obwohl alle Engines wahrscheinlich die CLDR-Daten verwenden, verarbeiten sie diese normalerweise auf unterschiedliche Weise. Einige Browsereinstellung (zum Beispiel zur Reduzierung der Installationsgröße) können auch beeinflussen, welche Locales und Optionen unterstützt werden.
- Gehen Sie nicht davon aus, wie das Ergebnis aussieht. Das bedeutet, dass Sie das Ergebnis nicht von Hand schreiben sollten, wie z. B. `expect(result).toBe("foo")`. Verwenden Sie stattdessen Snapshot-Tests oder kopieren Sie den Zeichenfolgenwert aus der Ausgabe eines Testruns.

## Daten formatieren

Ein wesentlicher Anwendungsfall von `Intl` besteht darin, lokalspezifische Texte darzustellen, die strukturierte Daten repräsentieren. Dies ähnelt Übersetzungssoftware, aber anstatt Ihnen zu erlauben, beliebigen Text zu übersetzen, nimmt es Daten wie Daten, Zahlen und Listen und formatiert sie entsprechend lokalspezifischer Regeln.

Die Objekte {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.RelativeTimeFormat")}} formatieren jeweils eine Art von Daten. Jede Instanz stellt zwei Methoden bereit:

- `format()`: Nimmt ein Stück Daten und gibt eine Zeichenfolge unter Verwendung der durch die Locale und die Optionen festgelegten Formatierungsregel zurück.
- `formatToParts()`: Nimmt dieselben Daten und gibt dieselbe Zeichenfolge zurück, jedoch unterteilt in Teile, wobei jeder Teil ein Objekt mit einem `type` und einem `value` ist. Dies ist für komplexere Anwendungsfälle nützlich, wie das Verschachteln des formatierten Textes mit anderem Text.

Hier ist ein typisches Beispiel für die Verwendung des {{jsxref("Intl.NumberFormat")}}-Objekts:

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

Sie müssen nicht immer ein Formatter-Objekt erstellen, um Zeichenfolgen zu formatieren. Für gelegentliche Verwendung können Sie auch direkt die `toLocaleString()`-Methode auf die Daten aufrufen, wobei Sie die Locale und Optionen als Argumente übergeben. Die `toLocaleString()`-Methode wird von {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}, {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}, {{jsxref("Number.prototype.toLocaleString()")}}, usw. implementiert. Lesen Sie die Dokumentation zu den Daten, die Sie formatieren, um festzustellen, ob sie `toLocaleString()` unterstützt und zu welchen Formatter-Optionen sie gehört.

```js
console.log(
  (5.259).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }),
); // $5.26
```

Beachten Sie, dass `toLocaleString()` möglicherweise weniger effizient ist als die Verwendung eines Formatter-Objekts, da bei jedem Aufruf von `toLocaleString` eine Suche in einer großen Datenbank mit Lokalisierungszeichenfolgen durchgeführt werden muss. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein Formatter-Objekt zu erstellen und dessen `format()`-Methode zu verwenden, da ein Formatter-Objekt sich die übergebenen Argumente merkt und möglicherweise einen Abschnitt der Datenbank zwischenspeichern kann, sodass zukünftige `format`-Aufrufe Lokalisierungszeichenfolgen in einem engeren Kontext suchen können.

### Datum- und Zeitformatierung

{{jsxref("Intl.DateTimeFormat")}} formatiert Daten und Zeiten sowie Bereiche von Daten und Zeiten. Das `DateTimeFormat`-Objekt nimmt Datum/Zeit-Eingaben in einer der folgenden Formen entgegen: {{jsxref("Date")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, oder {{jsxref("Temporal.PlainMonthDay")}}.

> [!NOTE]
> Sie können kein {{jsxref("Temporal.ZonedDateTime")}}-Objekt direkt übergeben, da die Zeitzone bereits im Objekt fixiert ist. Sie sollten {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} verwenden, oder es zuerst in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt konvertieren.

Zu den allgemeinen Anwendungsfällen der lokalisierten Datums- und Zeitformatierung gehören:

- Ausgabe des gleichen Datums und der gleichen Uhrzeit in einem anderen Kalendersystem, wie dem islamischen, hebräischen oder chinesischen Kalender.
- Ausgabe der gleichen realen Uhrzeit (Instant), aber in einer anderen Zeitzone.
- Selektive Ausgabe bestimmter Komponenten des Datums und der Uhrzeit, wie nur das Jahr und den Monat, und deren spezifische Darstellung (wie „Thursday“ oder „Thu“).
- Ausgabe des Datums entsprechend den lokalspezifischen Konventionen, wie MM/TT/JJJJ wie in den USA, TT/MM/JJJJ wie im Vereinigten Königreich oder JJJJ/MM/TT wie in Japan.
- Ausgabe der Uhrzeit gemäß lokalspezifischen Konventionen, wie 12-Stunden- oder 24-Stunden-Uhr.

Um zu entscheiden, wie die formatierte Zeichenfolge aussieht, wählen Sie zunächst den Kalender (der die Berechnung des Jahres, des Monats, der Woche und des Tages beeinflusst) und die Zeitzone (die die genaue Zeit sowie möglicherweise das Datum beeinflusst). Dies wird unter Verwendung der oben genannten `calendar`-Option (oder des `-ca-`-Erweiterungsschlüssels im Locale-Identifier) und der `timeZone`-Option durchgeführt.

- `Date`-Objekte repräsentieren einen einzigartigen Moment in der Zeitzone des Benutzers und im ISO 8601-Kalender (wie durch Methoden wie {{jsxref("Date.prototype.getHours()")}} und {{jsxref("Date.prototype.getMonth()")}} berichtet). Sie werden durch Beibehalten des Moments in den angegebenen `calendar` und `timeZone` konvertiert, sodass sich die Datum- und Zeitkomponenten ändern können.
- Die verschiedenen {{jsxref("Temporal")}}-Objekte haben bereits einen eingebauten Kalender, sodass die `calendar`-Option konsistent mit dem Kalender des Objekts sein muss – es sei denn, der Kalender des Datums ist `"iso8601"`, in diesem Fall wird es in den angeforderten `calendar` konvertiert. Diese Objekte haben keine Zeitzone, sodass sie direkt in der angegebenen `timeZone` ohne Konvertierung angezeigt werden.

Hier zeigen wir, wie die Kombination aus `calendar` und `timeZone`-Konfigurationen zu unterschiedlichen Darstellungen desselben Moments führt.

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

| Kalender  | Zeitzone           | Ausgabe                                                          |
| --------- | ------------------ | ---------------------------------------------------------------- |
| 'gregory' | 'America/New_York' | 'Freitag, 31. Dezember 2021, 19:00:00 Uhr Eastern Standard Time' |
| 'gregory' | 'Asia/Tokyo'       | 'Samstag, 1. Januar 2022, 9:00:00 Uhr Japan Standard Time'       |
| 'hebrew'  | 'America/New_York' | 'Freitag, 27 Tevet 5782, 19:00:00 Uhr Eastern Standard Time'     |
| 'hebrew'  | 'Asia/Tokyo'       | 'Samstag, 28 Tevet 5782, 9:00:00 Uhr Japan Standard Time'        |

Ein Datum/eine Uhrzeit besteht aus den folgenden Komponenten: `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits` und `timeZoneName`. Ihre nächste Entscheidung ist, welche Komponenten in der Ausgabe enthalten sein sollen und welche Form sie annehmen sollen. Sie haben zwei Möglichkeiten:

- Sie können jede Komponente manuell konfigurieren, wobei Optionen denselben Namen wie die Komponente haben. Nur die von Ihnen angegebenen Komponenten werden in die Ausgabe aufgenommen und in der angegebenen Form ausgegeben.
- Sie können die Abkürzungen `dateStyle` und `timeStyle` verwenden, die vordefinierte Sätze von Komponenten sind. Sie erweitern sich zu einem Satz von Komponentenoptionen, abhängig von der Locale.

Sie sollten eine dieser beiden Methoden auswählen, da sie sich gegenseitig ausschließen. Die gleichzeitige Verwendung beider Methoden führt zu einem Fehler.

Grundsätzlich sucht das `DateTimeFormat`-Objekt nach einer „Vorlage“, die den angeforderten Komponenten entspricht, sodass es nur die Werte einzeln einfügen muss. Nicht jede Kombination von Komponenten hat eine vordefinierte Vorlage. `DateTimeFormat` hat eine `formatMatcher`-Option, die entscheidet, wie die Übereinstimmung ausgehandelt wird, indem Komponenten länger oder kürzer als angefordert gemacht werden oder durch Weglassen oder Hinzufügen von Komponenten. Es wird ziemlich technisch, also sollten Sie das Referenzhandbuch [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) lesen, um besser zu verstehen, wie es damit umgeht.

Hier zeigen wir einige gängige Möglichkeiten, die Komponenten zu formatieren:

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

Es gibt weitere Anpassungsoptionen. Beispielsweise können Sie die `hourCycle`-Option verwenden, um die Zeit im 12-Stunden- oder 24-Stunden-Format anzuzeigen und Mitternacht/Mittag als 12:00 oder 0:00 zu zeigen. Sie können auch die `numberingSystem`-Option verwenden, um beliebige Zahlen in einem anderen Nummernsystem darzustellen.

Neben `format()` gibt es noch eine zweite wichtige Methode, {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}, die einen Bereich von Daten oder Zeiten formatiert. Sie nimmt zwei Datumszeiten desselben Typs, formatiert jede einzeln, verbindet sie mit einem Bereichstrenner (wie dem Gedankenstrich) und entfernt überflüssige Teile.

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

Die Zahlenformatierung erfolgt mit dem {{jsxref("Intl.NumberFormat")}}-Objekt. Das `NumberFormat`-Objekt akzeptiert Eingaben in Form von Zahlen, Strings oder `BigInt`-Werten. Das Übergeben eines Strings oder `BigInt` anstelle einer Zahl ermöglicht es Ihnen, Zahlen zu formatieren, die zu groß oder zu klein sind, um präzise als JavaScript-Zahl dargestellt zu werden.

Allgemeine Anwendungsfälle der lokalisierten Zahlenformatierung sind:

- Ausgabe der Zahl in einem anderen Nummerierungssystem (Skript), z.B. Chinesisch, Arabisch oder Römisch.
- Ausgabe der Zahl mit lokalspezifischen Konventionen, wie dem Dezimalsymbol („.“ im Englischen, aber „,“ in vielen europäischen Kulturen) oder dem Gruppieren von Ziffern (3 Ziffern im Englischen, aber möglicherweise 4 oder 2 in anderen Kulturen, und kann „,“ oder „ “, oder „.“ verwenden).
- Ausgabe der Zahl mit Exponentialschreibweise wie „3,7 Millionen“ oder „2 Tausend“.
- Ausgabe der Zahl als Währung, wobei spezifische Währungssymbole und Rundungsregeln angewendet werden. Zum Beispiel sind Geldwerte unter einem Cent in den USA oder weniger als ein Yen in Japan möglicherweise nicht sinnvoll anzuzeigen.
- Ausgabe der Zahl als Prozentsatz, wobei lokalspezifische Umrechnungs- und Formatierungsregeln angewendet werden.
- Ausgabe der Zahl mit Einheiten, wie „Meter“ oder „Liter“, mit übersetzten Einheitsnamen.

Um zu entscheiden, wie die formatierte Zeichenfolge aussehen soll, wählen Sie zunächst das Nummerierungssystem (das die verwendeten Zeichen für die Ziffern beeinflusst). Der Zweck eines Nummerierungssystems wurde bereits unter [Locale-Informationen](#locale-informationen) diskutiert. Eine weitere Option, die Sie angeben müssen, ist der `style`, der den Kontext festlegt, was die Zahl darstellt und potenziell die Standardwerte anderer Optionen beeinflusst. Er kann einer von `"decimal"`, `"percent"`, `"currency"` oder `"unit"` sein. Wenn Sie Währungen formatieren möchten, müssen Sie auch die `currency`-Option angeben. Wenn Sie Einheiten formatieren möchten, müssen Sie auch die `unit`-Option angeben.

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

Die nächste Gruppe von Optionen gibt an, wie der numerische Teil aussehen soll. Zunächst möchten Sie vielleicht extrem große Werte auf eine lesbarere Weise darstellen. Sie können die `notation`-Option auf `"scientific"` oder `"engineering"` setzen, die beide die `1.23e+6`-Notation verwenden. Der Unterschied besteht darin, dass letzteres Vielfache von 3 für den Exponenten verwendet und die [Mantisse](https://en.wikipedia.org/wiki/Scientific_notation) (den Teil vor dem `e`-Symbol) zwischen 1 und 1000 hält, während ersteres jeden ganzzahligen Exponenten verwenden kann und die Mantisse zwischen 1 und 10 hält. Sie können `notation` auch auf `"compact"` setzen, um eine lesbarere Darstellung der Zahl zu verwenden.

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

| Notation        | Ausgabe       |
| --------------- | ------------- |
| 'scientific'    | '1.2E4'       |
| 'engineering'   | '12E3'        |
| 'compact-short' | '12K'         |
| 'compact-long'  | '12 thousand' |

Anschließend möchten Sie möglicherweise die Zahl runden (wenn Sie `notation` angegeben haben, dann nur den Mantissenteil), damit Sie nicht eine zu lange Zahl anzeigen. Dies sind die Ziffernoptionen, die Folgendes umfassen:

- `minimumIntegerDigits`
- `minimumFractionDigits`
- `maximumFractionDigits`
- `minimumSignificantDigits`
- `maximumSignificantDigits`
- `roundingPriority`
- `roundingIncrement`
- `roundingMode`

Die genaue Interaktion dieser Optionen ist ziemlich komplex und es lohnt sich nicht, sie hier zu behandeln. Sie sollten die [Ziffernoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) Referenz für weitere Details lesen. Dennoch ist die allgemeine Idee klar: Wir bestimmen zuerst die Anzahl der Dezimalstellen, die wir behalten möchten, und runden dann die überschüssigen Dezimalstellen ab, entweder abwärts oder aufwärts, abhängig vom Wert der letzten Ziffer.

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

Es gibt weitere Anpassungsoptionen. Beispielsweise können Sie die `useGrouping`- und `signDisplay`-Optionen verwenden, um anzupassen, ob und wie Gruppierungstrenner (wie „,“ in „1,234,567.89“) und das Vorzeichen angezeigt werden sollen. Beachten Sie jedoch, dass die verwendeten Zeichen für den Gruppierungstrenner, das Dezimaltrennzeichen und das Vorzeichen lokalspezifisch sind, sodass Sie sie nicht direkt anpassen können.

Neben `format()` gibt es noch eine zweite wichtige Methode, {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}, die einen Bereich von Zahlen formatiert. Es nimmt zwei numerische Darstellungen, formatiert jede einzeln, verbindet sie mit einem Bereichstrenner (wie dem Gedankenstrich) und entfernt möglicherweise überflüssige Teile.

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

Sie haben möglicherweise schon einmal Code geschrieben, der dies tut:

```js example-bad
const fruits = ["apple", "banana", "cherry"];
console.log(`I like ${fruits.join(", ")}.`);
// I like apple, banana, cherry.
```

Dieser Code ist nicht internationalisiert. In einigen Sprachen ist der Listentrenner kein Komma. In den _meisten_ Sprachen (einschließlich Englisch) benötigen Sie eine Konjunktion vor dem letzten Element. Aber selbst wenn Sie manuell ein „and“ hinzufügen, ist es nicht korrekt für alle Englischsprecher, da es die Debatte über [Oxford-Kommas](https://en.wikipedia.org/wiki/Serial_comma) im Englischen gibt: „apple, banana, and cherry“ vs. „apple, banana and cherry“.

Das {{jsxref("Intl.ListFormat")}}-Objekt löst dieses Problem. Es nimmt ein Array von Zeichenfolgen und verbindet sie auf lokalspezifische Weise, sodass das Ergebnis eine Konjunktion (und), eine Disjunktion (oder) oder eine Liste von Einheiten darstellt.

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

{{jsxref("Intl.RelativeTimeFormat")}} formatiert einen Zeitunterschied. Das `RelativeTimeFormat`-Objekt akzeptiert relative Zeiten in Form von zwei Argumenten: einer Zahl (mit beliebigem Vorzeichen) und einer Zeiteinheit, wie `"Tag"`, `"Stunde"` oder `"Minute"`.

Es führt mehrere Dinge gleichzeitig aus:

- Es lokalisiert und pluralisiert die Zeiteinheit, wie „1 Tag“ vs. „2 Tage“, ähnlich wie bei der Zahlenformatierung.
- Es wählt den richtigen Ausdruck für vergangene und zukünftige Zeiten, wie „in 1 Tag“ vs. „vor 1 Tag“.
- Es kann einen speziellen Ausdruck für einige Zeiteinheiten auswählen, wie „vor 1 Tag“ vs. „gestern“.

```js
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(-1, "hour")); // 1 hour ago
```

Sehen Sie sich {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}} für weitere Beispiele und Optionen an.

### Dauerformatierung

{{jsxref("Intl.DurationFormat")}} bietet die Formatierung einer Dauer, wie „3 Stunden, 4 Minuten, 5 Sekunden“. Es handelt sich nicht um eine primitive Operation mit eigenem Formatter: Es verwendet intern {{jsxref("Intl.NumberFormat")}} und {{jsxref("Intl.ListFormat")}}, um jede Dauereinheit zu formatieren und sie dann mit einem Listentrenner zu verbinden. Das `DurationFormat`-Objekt akzeptiert Dauern in Form eines {{jsxref("Temporal.Duration")}} Objekts oder eines einfachen Objekts mit den gleichen Eigenschaften.

Neben der Anpassung des Nummerierungssystems entscheidet die Dauerformatierungsoption, ob oder nicht jede Komponente gezeigt werden soll und wie lange sie sein sollten.

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

Das {{jsxref("Intl.Collator")}}-Objekt ist nützlich zum Vergleichen und Sortieren von Zeichenfolgen. Es nimmt zwei Zeichenfolgen und gibt eine Zahl zurück, die ihre relative Reihenfolge angibt, in der gleichen Weise wie das `compareFn`-Argument der {{jsxref("Array.prototype.sort")}}-Methode.

Es gibt viele Gründe, warum Sie nicht JavaScript-Operatoren wie `===` oder `>` verwenden sollten, um benutzerseitige Texte zu vergleichen:

- Unerhebliche orthografische Varianten: Zum Beispiel sind im Englischen "naïve" und "naive" einfach alternative Schreibweisen desselben Wortes und sollten als gleich behandelt werden.
- Ignorieren der Groß-/Kleinschreibung: Oft möchten Sie die Groß-/Kleinschreibung ignorieren, wenn Sie Zeichenfolgen vergleichen. Zum Beispiel sollten „apple“ und „Apple“ als gleich behandelt werden.
- Unicode-Codepunkt-Reihenfolge macht keinen Sinn: Vergleichsoperationen wie `>` vergleichen nach Unicode-Codepunkt-Reihenfolge, die nicht der Reihenfolge von Zeichen in einem Wörterbuch entspricht. Zum Beispiel kommt „ï“ nach „z“ in Codepunktreihenfolge, aber Sie möchten, dass es neben „i“ in einem Wörterbuch sortiert wird.
- Unicode-Normalisierung: Dasselbe Zeichen kann mehrere Darstellungen in Unicode haben. Zum Beispiel kann „ñ“ als einzelnes Zeichen dargestellt werden oder als „n“ gefolgt von einer kombinierenden Tilde. (Siehe {{jsxref("String.prototype.normalize()")}}.) Diese sollten als gleich behandelt werden.
- Zahlenvergleich: Zahlen in Zeichenfolgen sollten als Zahlen und nicht als Zeichenfolgen verglichen werden. Zum Beispiel möchten Sie, dass „test-10“ nach „test-2“ kommt.

Es gibt zwei unterschiedliche Anwendungsfälle für Kollation: **Sortieren** und **Suchen**. Beim Sortieren haben Sie eine Liste von Zeichenfolgen und möchten sie gemäß einer Regel ordnen. Beim Suchen haben Sie eine Liste von Zeichenfolgen und möchten eine finden, die einer Abfrage entspricht. Beim Suchen sollten Sie nur darauf achten, ob das Vergleichsergebnis null (gleich) ist oder nicht, nicht das Vorzeichen des Ergebnisses.

Es gibt viele verschiedene Arten zu sortieren, selbst innerhalb derselben Locale. Zum Beispiel gibt es im Deutschen zwei verschiedene Sortierfolgen, _Telefonbuch_ und _Wörterbuch_. Die Telefonbuchsortierung betont den Klang – als ob „ä“, „ö“ und so weiter vor der Sortierung auf „ae“, „oe“ und so weiter erweitert würden.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare));
// ['Hochberg', 'Hönigswald', 'Holzman']
```

Einige deutsche Wörter konjugieren mit zusätzlichen Umlauten, also ist es sinnvoll, in Wörterbüchern zu sortieren, indem man die Umlaute ignoriert (außer wenn man Wörter sortiert, die sich _nur_ durch Umlaute unterscheiden: _schon_ vor _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

## Pluralregeln

Das {{jsxref("Intl.PluralRules")}}-Objekt ist nützlich, um die korrekte Pluralform eines Wortes auszuwählen. Es pluralisiert nicht automatisch Wörter für Sie (z. B. können Sie ihm nicht „apple“ übergeben und erwarten, „apples“ zurückzubekommen), aber es teilt Ihnen mit, welche Pluralform auf Basis einer Zahl verwendet werden soll. Sie machen dies möglicherweise bereits:

```js
function formatMessage(n) {
  return `You have ${n} ${n === 1 ? "apple" : "apples"}.`;
}
```

Aber dies ist schwer zu verallgemeinern über Sprachen hinweg, insbesondere jene mit vielen Pluralformen. Siehe {{jsxref("Intl.PluralRules")}} für eine allgemeine Einführung in Pluralregeln. Hier zeigen wir nur einige häufige Anwendungsfälle.

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

Das {{jsxref("Intl.Segmenter")}}-Objekt ist nützlich, um eine Zeichenfolge in Segmente zu zerlegen. Ohne `Intl` sind Sie bereits in der Lage, eine Zeichenkette nach [UTF-16-Codeeinheiten und Unicode-Codepunkten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) zu teilen:

```js
const str = "🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷";
console.log(str.split(""));
// Array(20) ['\uD83C', '\uDDFA', '\uD83C', ...]
console.log([...str]);
// Array(10) ['🇺', '🇸', '🇨', '🇳', '🇷', '🇺', '🇬', '🇧', '🇫', '🇷']
```

Aber wie Sie sehen können, sind Unicode-Codepunkte nicht dasselbe wie das, was menschliche Nutzer als diskrete Zeichen wahrnehmen. Dies passiert oft mit Emojis, bei denen ein einzelnes Emoji durch mehrere Codepunkte dargestellt werden kann. Wenn der Benutzer mit Text interagiert, ist ein Graphem die kleinste Einheit von Text, die er manipulieren kann, z.B. löschen oder auswählen. Das `Segmenter`-Objekt ermöglicht eine Segmentierung auf Graphem-Ebene, was nützlich ist, um Zeichen zu zählen, Textbreite zu messen usw. Es nimmt eine Zeichenfolge und gibt ein iterierbares [Segmente](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) Objekt zurück, wobei jedes Element eine `segment`-Eigenschaft hat, die den Text des Segments repräsentiert.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
console.log([...segmenter.segment("🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷")].map((s) => s.segment));
// ['🇺🇸', '🇨🇳', '🇷🇺', '🇬🇧', '🇫🇷']
```

Der Segmentierer kann auch eine Segmentierung auf höherer Ebene durchführen, einschließlich Wort- und Satzniveau. Diese Anwendungsfälle sind notwendigerweise sprachspezifisch. Zum Beispiel ist das folgende eine sehr schlechte Implementierung der Wortzählung:

```js example-bad
const wordCount = (str) => str.split(/\s+/).length;
console.log(wordCount("Hello, world!")); // 2
```

Es gibt mehrere Probleme damit: Nicht alle Sprachen verwenden Leerzeichen, um Wörter zu trennen, nicht alle Leerzeichen trennen Wörter, und nicht alle Wörter werden durch Leerzeichen getrennt. Um dies zu lösen, verwenden Sie `Segmenter` mit `granularity: "word"`. Das Ergebnis ist die Eingabestring, aufgeteilt in Segmente von Wörtern und Nicht-Wörtern. Wenn Sie Wörter zählen, sollten Sie die Nicht-Wörter herausfiltern, indem Sie die `isWordLike`-Eigenschaft jedes Segments überprüfen.

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

Die Wortsegmentierung funktioniert auch für Zeichen-basierte Sprachen. Zum Beispiel können im Chinesischen mehrere Zeichen ein einziges Wort darstellen, aber es gibt keinen Abstand dazwischen. Der Segmentierer implementiert das gleiche Verhalten wie die eingebaute Wortsegmentierung des Browsers, die durch Doppelklicken auf ein Wort ausgelöst wird.

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

Beachten Sie, dass der Segmentierer keine Zeichen entfernt. Er teilt nur die Zeichenfolge in Segmente, von denen jedes ein Satz ist. Sie können die Satzzeichen später entfernen, wenn Sie möchten. Auch die aktuelle Implementierung des Segmentierers unterstützt keine Satzsegmentierung-Überschreibungen (Verhinderung von Satzumbrüchen nach Punkten wie „Mr.“ oder „Approx.“), aber es gibt laufende Arbeiten, um dies zu unterstützen.

## Angezeigte Namen

Nach der Einführung so vieler Optionen und Verhaltensweisen fragen Sie sich möglicherweise, wie Sie diese dem Benutzer präsentieren. `Intl` verfügt über zwei nützliche APIs zum Erstellen von Benutzeroberflächen: {{jsxref("Intl.supportedValuesOf()")}} und {{jsxref("Intl.DisplayNames")}}.

Die Funktion {{jsxref("Intl.supportedValuesOf()")}} gibt ein Array unterstützter Werte für eine gegebene Option zurück. Beispielsweise können Sie sie verwenden, um eine Dropdown-Liste unterstützter Kalender zu füllen, aus denen Benutzer auswählen können, um Daten anzuzeigen.

```js
const supportedCal = Intl.supportedValuesOf("calendar");
console.log(supportedCal);
// ['buddhist', 'chinese', 'coptic', 'dangi', ...]
```

Aber oft sind diese Bezeichner nicht benutzerfreundlich. Beispielsweise möchten Sie möglicherweise die Kalender in der Sprache des Benutzers anzeigen oder sie ausgeschrieben anzeigen. Das {{jsxref("Intl.DisplayNames")}}-Objekt ist dafür nützlich. Es ist wie ein Formatter, aber es ist nicht vorlagenbasiert. Stattdessen handelt es sich um eine direkte Zuordnung von sprachunabhängigen Bezeichnern zu lokalisierten Namen. Es unterstützt das Formatieren von Sprachen, Regionen, Skripten (den drei Unterfeldern eines BCP 47-Tags), Währungen, Kalendern und Datumszeitfeldern.

Probieren Sie das folgende Demo aus:

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

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Meta_programming")}}
