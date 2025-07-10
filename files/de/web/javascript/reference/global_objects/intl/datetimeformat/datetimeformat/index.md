---
title: Intl.DateTimeFormat() Konstruktor
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
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
> `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `Intl.DateTimeFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und mit dem `this`-Wert eines anderen `Intl.DateTimeFormat` Instanz aufgerufen wird; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Sprachkennzeichnungen. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Sprachkennzeichnungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften basierend auf ihren Zwecken in Abschnitte unterteilt, einschließlich [locale options](#locale-optionen), [date-time component options](#datums-_und_zeitkomponentenoptionen) und [style shortcuts](#style-shortcuts).

#### Locale-Optionen

- `localeMatcher`
  - : Der Algorithmus zum Sprachvergleich. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifizierung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie `"chinese"`, `"gregory"`, `"persian"`, usw. Für eine Liste unterstützter Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das Nummerierungssystem, das für die Zahlenformatierung verwendet werden soll, z. B. `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste unterstützter Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob 12-Stunden-Zeit verwendet werden soll (im Gegensatz zu 24-Stunden-Zeit). Mögliche Werte sind `true` und `false`; der Standardwert hängt von der jeweiligen Locale ab. Wenn `true`, setzt diese Option `hourCycle` entweder auf `"h11"` oder `"h12"`, abhängig von der Locale. Wenn `false`, setzt es `hourCycle` auf `"h23"`. `hour12` überschreibt sowohl das `hc` Locale-Erweiterungs-Tag als auch die `hourCycle` Option, falls eines oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"`, und `"h24"`. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die Zeitzone, die verwendet werden soll. Kann jeder [IANA-Zeitzonenname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sein, einschließlich benannter Bezeichner wie `"UTC"`, `"America/New_York"`, und `"Etc/GMT+8"`, und Offset-Bezeichner wie `"+01:00"`, `"-2359"`, und `"+23"`.

#### Datums- und Zeitkomponentenoptionen

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Z. B. `Donnerstag`
    - `"short"`
      - : Z. B. `Do`
    - `"narrow"`
      - : Z. B. `D`. Zwei Wochentage können im schmalen Stil für einige Locale denselben Stil haben (z. B. hat `Dienstag` im engen Stil ebenfalls `D`).
- `era`
  - : Die Darstellung der Epoche. Mögliche Werte sind:
    - `"long"`
      - : Z. B. `Anno Domini`
    - `"short"`
      - : Z. B. `AD`
    - `"narrow"`
      - : Z. B. `A`
- `year`
  - : Die Darstellung des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `month`
  - : Die Darstellung des Monats. Mögliche Werte sind:
    - `"numeric"`
      - : Z. B. `3`
    - `"2-digit"`
      - : Z. B. `03`
    - `"long"`
      - : Z. B. `März`
    - `"short"`
      - : Z. B. `Mär`
    - `"narrow"`
      - : Z. B. `M`. Zwei Monate können im schmalen Stil für einige Locale denselben Stil haben (z. B. hat `Mai` im engen Stil ebenfalls `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`
  - : Der Formatierungsstil, der für Tageszeiten wie „morgens“, „a.m.“, „Mittag“, „n“ usw. verwendet wird. Mögliche Werte sind
    `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur eine Wirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locale verwenden unabhängig von der angegebenen Breite denselben String.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern, die verwendet werden, um Bruchteile einer Sekunde darzustellen (zusätzliche Ziffern werden abgeschnitten). Mögliche Werte liegen zwischen `1` und `3`.
- `timeZoneName`
  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:
    - `"long"`
      - : Lange lokalisierte Form (z. B. `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z. B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurzes lokalisiertes GMT-Format (z. B., `GMT-8`)
    - `"longOffset"`
      - : Langes lokalisiertes GMT-Format (z. B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurzes generisches Nicht-Standort-Format (z. B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches Nicht-Standort-Format (z. B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Anzeige der Zeitzone kann auf ein anderes Format zurückgreifen, wenn ein erforderlicher String nicht verfügbar ist. Zum Beispiel sollten Non-Location-Formate die Zeitzone ohne eine spezifische Länder-/Stadtangabe wie "Pacific Time" anzeigen, können jedoch auf eine Zeitzone wie "Los Angeles Time" zurückgreifen.

##### Standardwerte für Datums- und Zeitkomponenten

Wenn eine der Datums- und Zeitkomponentenoptionen angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datums- und Zeitkomponentenoptionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datums- und Zeitkomponenten gesetzt, die vom Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}}, sind `year`, `month` und `day` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}}, sind `hour`, `minute` und `second` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}}, sind `year` und `month` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}}, sind `month` und `day` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}}, sind `year`, `month`, `day`, `hour`, `minute` und `second` standardmäßig auf `"numeric"` gesetzt.

##### Formatzuordnung

Implementierungen müssen mindestens die Anzeige der folgenden Teilmengen von Datums- und Zeitkomponenten unterstützen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Stile der Datums- und Zeitkomponenten entsprechen möglicherweise nicht direkt einem von der Locale unterstützten Format, daher ermöglicht der Formatzuordner, wie Sie die angeforderten Stile auf das nächste unterstützte Format abstimmen können.

- `formatMatcher`
  - : Der Algorithmus zur Formatzuordnung. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementierungsdefiniert und `"basic"` ist [in der Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datums- und Zeitkomponente getrennt anpassbar ist).

#### Style-Shortcuts

- `dateStyle`
  - : Der zu verwendende [Datumformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es dehnt sich zu Stilen für `weekday`, `day`, `month`, `year` und `era` aus, wobei die genaue Kombination von Werten von der Locale abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}}, löst sich `dateStyle` nur auf jene Felder auf, die für das Objekt relevant sind.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es dehnt sich zu Stilen für `hour`, `minute`, `second`, und `timeZoneName` aus, wobei die genaue Kombination von Werten von der Locale abhängt.

> [!NOTE]
> `dateStyle` und `timeStyle` können miteinander verwendet werden, jedoch nicht mit anderen Datums- und Zeitkomponentenoptionen (z. B. `weekday`, `hour`, `month`, usw.).

Sie können verschiedene Objekttypen formatieren, je nachdem, welche der Style-Shortcut-Optionen Sie einbeziehen:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der unten beschriebene Text beschreibt ein Verhalten, das in der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es mit `new Intl.DateTimeFormat` erstellt wurde; nur dass es `Intl.DateTimeFormat.prototype` in seiner Prototypkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft versteckt ist (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz gibt: die, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z. B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", weil diese Methoden nicht die Optionen der versteckten Instanz konsultieren.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, aber mit `this`, das auf etwas anderes eingestellt ist, das kein `instanceof Intl.DateTimeFormat` ist, aufgerufen wird. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei der grundlegenden Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-Locale und -Optionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung zum Festlegen mehrerer Datums- und Zeitkomponentenoptionen auf einmal. Zum Beispiel ist für `en-US`, `dateStyle: "short"` gleichbedeutend damit, `year: "2-digit", month: "numeric", day: "numeric"` zu setzen, und `timeStyle: "short"` ist gleichbedeutend damit, `hour: "numeric", minute: "numeric"` zu setzen.

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

Die genau (localeabhängigen) Komponentenstile, auf die sie sich auflösen, sind jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die Option `dayPeriod`, um einen String für die Tageszeiten auszugeben ("morgens", "abends", "Mittag", usw.). Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass für viele Locale die Strings unabhängig vom für das `dayPeriod` angegebenen Wert gleich sind.

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

Verwenden Sie die Option `timeZoneName`, um einen String für die Zeitzone auszugeben ("GMT", "Pacific Time", usw.).

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
