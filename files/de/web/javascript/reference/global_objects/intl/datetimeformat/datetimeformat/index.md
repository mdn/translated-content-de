---
title: Intl.DateTimeFormat() Konstruktor
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
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
> `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.DateTimeFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der Wert von `this` eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Gebietsschema-Identifikatoren. Das voreingestellte Gebietsschema der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Gebietsschema-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` gesetzt werden (wie unten aufgelistet). Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte je nach Zweck unterteilt, einschließlich [Local-Optionen](#local-optionen), [Datums- und Zeitkomponenten-Optionen](#datums-_und_zeitkomponenten-optionen) und [Stil-Abkürzungen](#stil-abkürzungen).

#### Local-Optionen

- `localeMatcher`
  - : Der zu verwendende Algorithmus zum Abgleichen des Gebietsschemas. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option siehe [Locale identification and negotiation](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie zum Beispiel `"chinese"`, `"gregory"`, `"persian"` usw. Für eine Liste der unterstützten Kalenderarten siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types); der Standardwert ist gebietsschemaabhängig. Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide vorhanden sind, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das Zahlensystem, das für die Zahlenformatierung verwendet werden soll, wie zum Beispiel `"arab"`, `"hans"`, `"mathsans"` usw. Für eine Liste der unterstützten Zahlensystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standardwert ist gebietsschemaabhängig. Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide vorhanden sind, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob eine 12-Stunden-Uhr (statt einer 24-Stunden-Uhr) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standardwert ist gebietsschemaabhängig. Wenn `true`, setzt diese Option `hourCycle` entweder auf `"h11"` oder `"h12"`, je nach Gebietsschema. Wenn `false`, setzt sie `hourCycle` auf `"h23"`. `hour12` überschreibt sowohl den `hc` Locale-Erweiterungs-Tag als auch die `hourCycle` Option, falls eine oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stunden-Zyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"`, und `"h24"`; der Standardwert wird von `hour12` und der Region abgeleitet. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide vorhanden sind, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die verwendete Zeitzone. Kann jeder [IANA-Zeitzonenname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sein, einschließlich benannter Bezeichner wie `"UTC"`, `"America/New_York"` und `"Etc/GMT+8"`, und Offset-Bezeichner wie `"+01:00"`, `"-2359"`, und `"+23"`. Der Standardwert ist die Zeitzone der Laufzeitumgebung, dieselbe Zeitzone, die auch von {{jsxref("Date.prototype.toString()")}} verwendet wird.

#### Datums- und Zeitkomponenten-Optionen

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Donnerstag`
    - `"short"`
      - : Z.B., `Do`
    - `"narrow"`
      - : Z.B., `D`. Zwei Wochentage können für einige Lokalisierungen denselben schmalen Stil haben (z.B., der schmale Stil von `Dienstag` ist auch `D`).
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
      - : Z.B., `März`
    - `"short"`
      - : Z.B., `Mär`
    - `"narrow"`
      - : Z.B., `M`). Zwei Monate können für einige Lokalisierungen denselben schmalen Stil haben (z.B., der schmale Stil von `Mai` ist ebenfalls `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`
  - : Der Formatierungsstil, der für Tageszeiten wie "morgens", "am", "Mittag", "n" usw. verwendet wird. Mögliche Werte sind
    `"narrow"`, `"short"`, und `"long"`.

    > [!NOTE]
    > Diese Option hat nur Auswirkungen, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Lokalisierungen verwenden denselben String, unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Stellen zur Darstellung von Sekundenbruchteilen (zusätzliche Stellen werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
- `timeZoneName`
  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:
    - `"long"`
      - : Lange lokalisierte Form (z.B., `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurzes lokalisiertes GMT-Format (z.B., `GMT-8`)
    - `"longOffset"`
      - : Langes lokalisiertes GMT-Format (z.B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurz generisches nicht-Orts-bezogenes Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Lang generisches nicht-Orts-bezogenes Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Zeitzonenanzeige kann auf ein anderes Format zurückfallen, wenn ein erforderlicher String nicht verfügbar ist. Zum Beispiel sollten die nicht-Orts-bezogenen Formate die Zeitzone ohne eine spezifische Land/Stadt-Position wie "Pacific Time" anzeigen, können aber auf eine Zeitzone wie "Los Angeles Time" zurückfallen.

##### Standardwerte der Datums- und Zeitkomponenten

Wenn eine der Optionen für Datums- und Zeitkomponenten angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datums- und Zeitkomponentenoptionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datums- und Zeitkomponenten gesetzt, die von dem Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Bei der Formatierung von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}}, sind `year`, `month`, und `day` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainTime")}}, sind `hour`, `minute`, und `second` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainYearMonth")}}, sind `year` und `month` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainMonthDay")}}, sind `month` und `day` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}}, sind `year`, `month`, `day`, `hour`, `minute`, und `second` standardmäßig `"numeric"`.

##### Formatübereinstimmung

Implementierungen sind verpflichtet, mindestens die folgenden Teilmengen von Datums- und Zeitkomponenten anzuzeigen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Datums- und Zeitkomponentenstile stimmen möglicherweise nicht direkt mit einem gültigen Format überein, das vom Gebietsschema unterstützt wird, sodass der Formatabgleicher Ihnen ermöglicht, anzugeben, wie die angeforderten Stile mit dem nächsten unterstützten Format abgeglichen werden sollen.

- `formatMatcher`
  - : Der zu verwendende Abgleichsalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementierungsdefiniert und `"basic"` ist [durch die Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datums- und Zeitkomponente individuell anpassbar ist).

#### Stil-Abkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Er erweitert sich zu Stilen für `weekday`, `day`, `month`, `year`, und `era`, wobei die genaue Kombination der Werte vom Gebietsschema abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}}, wird `dateStyle` nur auf die Felder aufgelöst, die für das Objekt relevant sind.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Er erweitert sich zu Stilen für `hour`, `minute`, `second`, und `timeZoneName`, wobei die genaue Kombination der Werte vom Gebietsschema abhängt.

> [!NOTE]
> `dateStyle` und `timeStyle` können miteinander, aber nicht mit anderen Datums- und Zeitkomponentenoptionen (z.B. `weekday`, `hour`, `month`, usw.) verwendet werden.

Sie können unterschiedliche Objekttypen formatieren, abhängig davon, welche der Stilabkürzungsoptionen Sie einbeziehen:

- Wenn der `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn der `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben sind, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das in der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn jedoch der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde, sondern dass es `Intl.DateTimeFormat.prototype` in seiner Prototypenkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen bleibt (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine eigentliche `Intl.DateTimeFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", weil diese Methoden die Optionen der verborgenen Instanz nicht berücksichtigen.

Dieses Verhalten, `ChainDateTimeFormat` genannt, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new` aufgerufen wird, sondern mit `this`, sodass es etwas anderes ist, das kein `instanceof Intl.DateTimeFormat` ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normalerweise erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Ohne Angabe eines Gebietsschemas verwendet `DateTimeFormat` in der grundlegenden Anwendung das Standardgebietsschema und die Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung, um mehrere Datums- und Zeitkomponentenoptionen gleichzeitig festzulegen. Beispielsweise ist für `en-US`, `dateStyle: "short"` äquivalent dazu, `year: "2-digit", month: "numeric", day: "numeric"` einzustellen, und `timeStyle: "short"` ist äquivalent dazu, `hour: "numeric", minute: "numeric"` einzustellen.

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

Die genauen (gebietsschemaabhängigen) Komponentenstile, auf die sie sich auflösen, sind jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` und individuellen Datums- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um eine Zeichenkette für Tageszeiten auszugeben ("morgens", "abends", "Mittag" usw.). Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr formatiert wird (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) und dass in vielen Lokalisierungen die Strings unabhängig vom Wert, der für `dayPeriod` übergeben wird, dieselben sind.

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

Verwenden Sie die `timeZoneName` Option, um eine Zeichenkette für die Zeitzone auszugeben ("GMT", "Pacific Time" usw.).

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
