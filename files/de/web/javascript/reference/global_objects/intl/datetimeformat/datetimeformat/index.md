---
title: Intl.DateTimeFormat() Konstruktor
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 5e0388c53dfc75003e83f79181797c3f66455971
---

Der **`Intl.DateTimeFormat()`** Konstruktor erstellt {{jsxref("Intl.DateTimeFormat")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat() constructor", "taller")}}

```js interactive-example
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat("en-US").format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date),
);
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## Syntax

```js-nolint
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

Intl.DateTimeFormat()
Intl.DateTimeFormat(locales)
Intl.DateTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `Intl.DateTimeFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this` Wert eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder einer {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Identifier. Die Standard-Locale des Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifier unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf ihren Zwecken, einschließlich [Locale-Optionen](#locale-optionen), [Datum-Uhrzeit-Komponenten-Optionen](#datum-uhrzeit-komponenten-optionen) und [Style-Abkürzungen](#style-abkürzungen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleich-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifizierung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie z.B. `"chinese"`, `"gregory"`, `"persian"`, usw. Für eine Liste der unterstützten Kalenderarten siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types); der Standard ist locale-abhängig. Diese Option kann auch durch den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Nummernformatierung, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste der unterstützten Nummerierungssysteme siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standard ist locale-abhängig. Diese Option kann auch durch den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob eine 12-Stunden-Zeit (anstelle einer 24-Stunden-Zeit) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standard ist locale-abhängig. Wenn `true`, setzt diese Option `hourCycle` entweder auf `"h11"` oder `"h12"`, abhängig von der Locale. Wenn `false`, setzt sie `hourCycle` auf `"h23"`. `hour12` überschreibt sowohl das `hc` Locale-Erweiterungstag als auch die `hourCycle` Option, falls eines oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`; der Standardwert wird aus `hour12` und Locale abgeleitet. Diese Option kann auch durch den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Kann jeder [IANA Zeitzonenname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sein, einschließlich benannten Identifikatoren wie `"UTC"`, `"America/New_York"`, und `"Etc/GMT+8"`, und Offset-Identifikatoren wie `"+01:00"`, `"-2359"`, und `"+23"`. Der Standardwert ist die Zeitzone der Laufzeitumgebung, dieselbe Zeitzone die durch {{jsxref("Date.prototype.toString()")}} verwendet wird.

#### Datum-Uhrzeit-Komponenten-Optionen

- `weekday`
  - : Die Darstellung des Wochentages. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Thursday`
    - `"short"`
      - : Z.B., `Thu`
    - `"narrow"`
      - : Z.B., `T`. Zwei Wochentage können denselben engen Stil in einigen Locales haben (z.B. haben sowohl `Tuesday` als auch `Thursday` die enge Darstellung `T` in der Locale `en-US`).
- `era`
  - : Die Darstellung der Ära. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Anno Domini`
    - `"short"`
      - : Z.B., `AD`
    - `"narrow"`
      - : Z.B., `A`
- `year`
  - : Die Darstellung des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `month`
  - : Die Darstellung des Monats. Mögliche Werte sind:
    - `"numeric"`
      - : Z.B., `3`
    - `"2-digit"`
      - : Z.B., `03`
    - `"long"`
      - : Z.B., `March`
    - `"short"`
      - : Z.B., `Mar`
    - `"narrow"`
      - : Z.B., `M`. Zwei Monate können denselben engen Stil in einigen Locales haben (z.B. haben sowohl `March` als auch `May` den engen Stil `M` in der Locale `en-US`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`
  - : Der Formatierungsstil für Tageszeiten wie "in the morning", "am", "noon", usw. Mögliche Werte sind `"narrow"`, `"short"`, und `"long"`.

    > [!NOTE]
    > Diese Option hat nur einen Effekt, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden denselben String unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern zur Darstellung von Sekundenbruchteilen (alle zusätzlichen Ziffern werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
- `timeZoneName`
  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:
    - `"long"`
      - : Lange lokalisierte Form (z.B., `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurze lokalisierte GMT-Format (z.B., `GMT-8`)
    - `"longOffset"`
      - : Lange lokalisierte GMT-Format (z.B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurzes generisches nicht-ortsgebundenes Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Lang generisches nicht-ortsgebundenes Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Zeitzonendarstellung kann auf ein anderes Format zurückgreifen, wenn ein erforderlicher String nicht verfügbar ist. Zum Beispiel sollten die nicht-ortsgebundenen Formate die Zeitzone ohne einen bestimmten Landes/Stadt-Ort anzeigen, wie "Pacific Time", aber sie können auf eine Zeitzone wie "Los Angeles Time" zurückfallen.

##### Standardwerte der Datum-Uhrzeit-Komponenten

Wenn eine der Datum-Uhrzeit-Komponentenoptionen angegeben sind, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datum-Uhrzeit-Komponentenoptionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datum-Uhrzeit-Komponenten gesetzt, die davon abhängen, mit welchem Objekt die Formatierungsmethode aufgerufen wurde:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}}, standardmäßig sind `year`, `month`, und `day` auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}}, standardmäßig sind `hour`, `minute`, und `second` auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}}, standardmäßig sind `year` und `month` auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}}, standardmäßig sind `month` und `day` auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}}, standardmäßig sind `year`, `month`, `day`, `hour`, `minute`, und `second` auf `"numeric"` gesetzt.

##### Formatübereinstimmung

Implementierungen sind verpflichtet, mindestens die folgenden Subsets von Datum-Uhrzeit-Komponenten anzuzeigen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Datum-Uhrzeit-Komponentenstile entsprechen möglicherweise nicht direkt einem gültigen Format, das von der Locale unterstützt wird, sodass der Formatmatcher es erlaubt, festzulegen, wie die angeforderten Stile dem nächsten unterstützen Format zugeordnet werden.

- `formatMatcher`
  - : Der zu verwendende Formatübereinstimmungs-Algorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementierungsdefiniert, und `"basic"` ist [definiert durch die Spezifikation](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datum-Uhrzeit-Komponente individuell anpassbar ist).

#### Style-Abkürzungen

- `dateStyle`
  - : Der zu verwendende [Datum-Formatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Es erweitert sich auf Stile für `weekday`, `day`, `month`, `year`, und `era`, wobei die genaue Kombination von Werten von der Locale abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}}, wird `dateStyle` nur auf die für das Objekt relevanten Felder aufgelöst.
- `timeStyle`
  - : Der zu verwendende [Zeit-Formatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Es erweitert sich auf Stile für `hour`, `minute`, `second`, und `timeZoneName`, wobei die genaue Kombination von Werten von der Locale abhängt.

> [!NOTE]
> `dateStyle` und `timeStyle` können miteinander verwendet werden, aber nicht mit anderen Datum-Uhrzeit-Komponentenoptionen (z.B., `weekday`, `hour`, `month`, usw.).

Sie können je nach den enthaltenen Optionen verschiedene Objekttypen formatieren:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der unten stehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es könnte nicht in allen Umgebungen funktionieren. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und eine neue `Intl.DateTimeFormat` Instanz wird in beiden Fällen zurückgegeben. Jedoch, wenn der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; sondern dass es `Intl.DateTimeFormat.prototype` in seiner Prototypkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, und das neu erstellte `Intl.DateTimeFormat` Objekt ist in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

```js
const formatter = Intl.DateTimeFormat.call(
  { __proto__: Intl.DateTimeFormat.prototype },
  "en-US",
  { dateStyle: "full" },
);
console.log(Object.getOwnPropertyDescriptors(formatter));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: DateTimeFormat [Intl.DateTimeFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z.B., [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", weil diese Methoden nicht die Optionen der versteckten Instanz konsultieren.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, aber mit `this`, das auf etwas anderes als `instanceof Intl.DateTimeFormat` gesetzt ist, aufgerufen wird. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei der grundlegenden Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-Locale und Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung zum Festlegen mehrerer Datum-Uhrzeit-Komponentenoptionen auf einmal. Zum Beispiel, für `en-US`, entspricht `dateStyle: "short"` dem Setzen von `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` entspricht dem Setzen von `hour: "numeric", minute: "numeric"`.

```js
const shortTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "short",
});
console.log(shortTime.format(Date.now())); // "1:31 PM"

const shortDate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
});
console.log(shortDate.format(Date.now())); // "7/7/20"

const mediumTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "medium",
  dateStyle: "short",
});
console.log(mediumTime.format(Date.now())); // "7/7/20, 1:31:55 PM"
```

Die genauen (locale-abhängigen) Komponentenstile, die sie auflösen, sind jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um einen String für die Tageszeiten ("in the morning", "at night", "noon", usw.) auszugeben. Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass für viele Locales die Strings dieselben sind, unabhängig vom Wert, der für `dayPeriod` übergeben wird.

```js
const date = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(
  new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "short",
    timeZone: "UTC",
  }).format(date),
);
// 4 at night"  (same formatting in en-GB for all dayPeriod values)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "narrow",
    timeZone: "UTC",
  }).format(date),
);
// "4 mat."  (same output in French for both narrow/short dayPeriod)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "long",
    timeZone: "UTC",
  }).format(date),
);
// "4 du matin"
```

### Verwendung von timeZoneName

Verwenden Sie die `timeZoneName` Option, um einen String für die Zeitzone ("GMT", "Pacific Time", usw.) auszugeben.

```js
const date = Date.UTC(2021, 11, 17, 3, 0, 42);
const timezoneNames = [
  "short",
  "long",
  "shortOffset",
  "longOffset",
  "shortGeneric",
  "longGeneric",
];

for (const zoneName of timezoneNames) {
  // Do something with currentValue
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: zoneName,
  });
  console.log(`${zoneName}: ${formatter.format(date)}`);
}

// Logs:
// short: 12/16/2021, PST
// long: 12/16/2021, Pacific Standard Time
// shortOffset: 12/16/2021, GMT-8
// longOffset: 12/16/2021, GMT-08:00
// shortGeneric: 12/16/2021, PT
// longGeneric: 12/16/2021, Pacific Time
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
