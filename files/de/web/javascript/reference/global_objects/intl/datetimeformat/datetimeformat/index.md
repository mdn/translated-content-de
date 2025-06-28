---
title: Intl.DateTimeFormat() Konstruktor
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 5a1a4d38819114ea744222c45394897d63e7cbb7
---

{{JSRef}}

Der **`Intl.DateTimeFormat()`** Konstruktor erzeugt {{jsxref("Intl.DateTimeFormat")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat() Konstruktor", "taller")}}

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
> `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.DateTimeFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this` Wert eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Eine Zeichenkette mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Gebietsschema-Identifikatoren. Das Standard-Gebietsschema der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Gebietsschema-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Der Einfachheit halber ist die Liste der Eigenschaften in Abschnitte basierend auf deren Zwecken unterteilt, einschließlich [Gebietsschema-Optionen](#gebietsschema-optionen), [Datum-Zeit-Komponenten-Optionen](#datum-zeit-komponenten-optionen) und [Stilkürzel](#stilkürzel).

#### Gebietsschema-Optionen

- `localeMatcher`
  - : Der zu verwendende Gebietsschema-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Gebietsschema-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, z.B. `"chinese"`, `"gregory"`, `"persian"`, und so weiter. Für eine Liste der unterstützten Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das zu verwendende Zahlensystem für die Zahlenformatierung, z.B. `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Für eine Liste der unterstützten Zahlensystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob die 12-Stunden-Zeit (anstelle der 24-Stunden-Zeit) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standardwert ist abhängig vom Gebietsschema. Wenn `true`, setzt diese Option `hourCycle` auf entweder `"h11"` oder `"h12"`, abhängig vom Gebietsschema. Wenn `false`, setzt sie `hourCycle` auf `"h23"`. `hour12` überschreibt sowohl das `hc` Gebietsschema-Erweiterungstag als auch die `hourCycle` Option, falls eines oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Kann jeder [IANA Zeitname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sein, einschließlich benannter Identifikatoren wie `"UTC"`, `"America/New_York"` und `"Etc/GMT+8"`, und Offset-Identifikatoren wie `"+01:00"`, `"-2359"` und `"+23"`.

#### Datum-Zeit-Komponenten-Optionen

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Z.B. `Donnerstag`
    - `"short"`
      - : Z.B. `Do`
    - `"narrow"`
      - : Z.B. `D`. Zwei Wochentage können für einige Gebietsschemata denselben narrow-Stil haben (z.B. ist der narrow-Stil vom `Dienstag` ebenfalls `D`).
- `era`
  - : Die Darstellung der Ära. Mögliche Werte sind:
    - `"long"`
      - : Z.B. `Anno Domini`
    - `"short"`
      - : Z.B. `AD`
    - `"narrow"`
      - : Z.B. `A`
- `year`
  - : Die Darstellung des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `month`
  - : Die Darstellung des Monats. Mögliche Werte sind:
    - `"numeric"`
      - : Z.B. `3`
    - `"2-digit"`
      - : Z.B. `03`
    - `"long"`
      - : Z.B. `März`
    - `"short"`
      - : Z.B. `Mär`
    - `"narrow"`
      - : Z.B. `M`. Zwei Monate können für einige Gebietsschemata denselben narrow-Stil haben (z.B. ist der narrow-Stil vom `Mai` ebenfalls `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`
  - : Der Formatierungsstil, der für Tageszeiten wie "am Morgen", "vorm.", "Mittag", "n" usw. verwendet wird. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option wirkt sich nur aus, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Gebietsschemata verwenden denselben String unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern, die zur Darstellung von Bruchteilen einer Sekunde verwendet werden (zusätzliche Ziffern werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
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
      - : Kurzes generisches Nicht-Standort-Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches Nicht-Standort-Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Zeitzonenanzeige kann auf ein anderes Format zurückfallen, wenn ein erforderlicher String nicht verfügbar ist. Zum Beispiel sollten die Nicht-Standort-Formate die Zeitzone ohne einen spezifischen Länder-/Städtenamen wie "Pacific Time" anzeigen, können aber auf eine Zeitzone wie "Los Angeles Time" zurückfallen.

##### Standardwerte der Datum-Zeit-Komponenten

Wenn eine der Datum-Zeit-Komponenten-Optionen angegeben wird, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datum-Zeit-Komponenten-Optionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datum-Zeit-Komponenten gesetzt, die vom Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Bei der Formatierung von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}} sind `year`, `month` und `day` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainTime")}} sind `hour`, `minute` und `second` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainYearMonth")}} sind `year` und `month` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainMonthDay")}} sind `month` und `day` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}} sind `year`, `month`, `day`, `hour`, `minute` und `second` standardmäßig `"numeric"`.

##### Formatabgleich

Implementierungen müssen mindestens die folgenden Untergruppen von Datum-Zeit-Komponenten anzeigen unterstützen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Datum-Zeit-Komponentenstile entsprechen möglicherweise nicht direkt einem gültigen Format, das vom Gebietsschema unterstützt wird, daher ermöglicht es Ihnen der Formatabgleich, festzulegen, wie die angeforderten Stile mit dem nächsten unterstützten Format abgeglichen werden sollen.

- `formatMatcher`
  - : Der zu verwendende Formatabgleichsalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementierungsabhängig, und `"basic"` ist [durch die Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (damit das Format jeder Datum-Zeit-Komponente individuell anpassbar ist).

#### Stilkürzel

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es erweitert sich zu Stilen für `weekday`, `day`, `month`, `year` und `era`, wobei die genaue Kombination von Werten vom Gebietsschema abhängt. Bei der Formatierung von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} wird `dateStyle` nur auf diejenigen Felder aufgelöst, die für das Objekt relevant sind.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es erweitert sich zu Stilen für `hour`, `minute`, `second`, und `timeZoneName`, wobei die genaue Kombination von Werten vom Gebietsschema abhängt.

> [!NOTE]
> `dateStyle` und `timeStyle` können miteinander verwendet werden, jedoch nicht mit anderen Datum-Zeit-Komponenten-Optionen (z.B. `weekday`, `hour`, `month`, usw.).

Sie können je nach den eingeschlossenen Stilkürzel-Optionen verschiedene Objekttypen formatieren:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert jedoch ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde, sondern dass es `Intl.DateTimeFormat.prototype` in seiner Prototypenkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt versteckt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird) liegt.

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz gibt: die, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", da diese Methoden die Optionen der versteckten Instanz nicht verwenden.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new` aufgerufen wird, aber mit `this` gesetzt auf irgendetwas anderes, das kein `instanceof Intl.DateTimeFormat` ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei einfacher Verwendung ohne Angabe eines Gebietsschemas verwendet `DateTimeFormat` das Standardgebietsschema und die Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung zum gleichzeitigen Setzen mehrerer Datum-Zeit-Komponentenoptionen. Zum Beispiel ist für `en-US` `dateStyle: "short"` gleichbedeutend mit den Einstellungen `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` ist gleichbedeutend mit den Einstellungen `hour: "numeric", minute: "numeric"`.

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

Die genaue (gebietsschemaabhängige) Komponentensetzung, zu der sie aufgelöst werden, ist jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datum- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um einen String für die Tageszeiten ("am Morgen", "abends", "Mittag", etc.) auszugeben. Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass die Strings für viele Gebietsschemata unabhängig vom Wert, der für `dayPeriod` übergeben wird, gleich sind.

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

Verwenden Sie die `timeZoneName` Option, um einen String für die Zeitzone ("GMT", "Pacific Time", etc.) auszugeben.

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
