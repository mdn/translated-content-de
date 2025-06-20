---
title: Intl.DateTimeFormat() Konstruktor
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
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

> **Hinweis:** `Intl.DateTimeFormat()` kann sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue Instanz von `Intl.DateTimeFormat`. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der Wert von `this` eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprachcode oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprachkennungen. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der Intl Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit ist die Eigenschaftsliste in Abschnitte unterteilt, basierend auf ihren Zwecken, einschließlich [Locale-Optionen](#locale-optionen), [Datums- und Zeitkomponenten-Optionen](#datums-_und_zeitkomponenten-optionen) und [Stilabkürzungen](#stilabkürzungen).

#### Locale-Optionen

- `localeMatcher`
  - : Der Algorithmus zur Übereinstimmung von Locales, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; die Standardeinstellung ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie zum Beispiel `"chinese"`, `"gregory"`, `"persian"`, etc. Für eine Liste unterstützter Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel eingestellt werden; wenn beide angegeben werden, hat diese `options`-Eigenschaft Vorrang.
- `numberingSystem`
  - : Das Nummerierungssystem, das für die Zahlenformatierung verwendet werden soll, z.B. `"arab"`, `"hans"`, `"mathsans"`, etc. Für eine Liste unterstützter Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel eingestellt werden; wenn beide angegeben werden, hat diese `options`-Eigenschaft Vorrang.
- `hour12`
  - : Ob eine 12-Stunden-Uhr (im Gegensatz zu einer 24-Stunden-Uhr) verwendet werden soll. Mögliche Werte sind `true` und `false`; die Standardeinstellung ist von der Locale abhängig. Bei `true` wird diese Option auf `"h11"` oder `"h12"` gesetzt, je nach Locale. Bei `false` wird sie auf `"h23"` gesetzt. `hour12` überschreibt sowohl das `hc` Locale-Erweiterungsetikett als auch die `hourCycle`-Option, falls eine oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"`, und `"h24"`. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel eingestellt werden; wenn beide angegeben werden, hat diese `options`-Eigenschaft Vorrang.
- `timeZone`
  - : Die Zeitzone, die verwendet werden soll. Zeitzonennamen entsprechen den Zone- und Link-Namen der [IANA Time Zone Database](https://www.iana.org/time-zones), wie `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"`, und `"America/New_York"`. Zusätzlich können Zeitzonen als UTC-Versätze im Format "±hh:mm", "±hhmm" oder "±hh" angegeben werden, z.B. `"+01:00"`, `"-2359"`, oder `"+23"`. Die Standardeinstellung ist die Standardzeitzone der Laufzeit.

#### Datums- und Zeitkomponenten-Optionen

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Thursday`
    - `"short"`
      - : Z.B., `Thu`
    - `"narrow"`
      - : Z.B., `T`. Zwei Wochentage können denselben schmalen Stil für einige Locales haben (z.B. ist der schmale Stil von `Tuesday` ebenfalls `T`).
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
      - : Z.B., `M`). Zwei Monate können denselben schmalen Stil für einige Locales haben (z.B. ist der schmale Stil von `May` ebenfalls `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der stilistische Ausdruck für Tageszeiten wie "am Morgen", "AM", "Mittag", etc. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur eine Wirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden denselben String unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern, die zur Darstellung von Sekundenbruchteilen verwendet werden (zusätzliche Ziffern werden abgeschnitten). Mögliche Werte liegen zwischen `1` und `3`.
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
      - : Kurzes generisches nicht-lokalisiertes Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches nicht-lokalisiertes Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Anzeige der Zeitzone kann auf ein anderes Format zurückfallen, wenn eine erforderliche Zeichenfolge nicht verfügbar ist. Zum Beispiel sollten die nicht-lokalisierten Formate die Zeitzone ohne spezifischen Landes-/Stadtort wie "Pacific Time" anzeigen, können jedoch auf eine Zeitzone wie "Los Angeles Time" zurückfallen.

##### Standardwerte für Datums- und Zeitkomponenten

Wenn eine der Datums- und Zeitkomponenten-Optionen angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datums- und Zeitkomponenten-Optionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datums- und Zeitkomponenten gesetzt, die vom Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}} sind `year`, `month` und `day` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}} sind `hour`, `minute` und `second` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}} sind `year` und `month` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}} sind `month` und `day` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}} sind `year`, `month`, `day`, `hour`, `minute` und `second` standardmäßig auf `"numeric"` gesetzt.

##### Übereinstimmung des Formats

Implementierungen sind verpflichtet, mindestens die folgenden Teilmengen von Datums- und Zeitkomponenten anzuzeigen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Stile der Datums- und Zeitkomponenten entsprechen möglicherweise nicht direkt einem gültigen Format, das von der Locale unterstützt wird. Der Formatmatcher ermöglicht es Ihnen, anzugeben, wie die angeforderten Stile dem am nächsten liegenden unterstützten Format zugeordnet werden sollen.

- `formatMatcher`
  - : Der zu verwendende Formatabgleichsalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; die Standardeinstellung ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementationsabhängig, und `"basic"` ist [von der Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datums- und Zeitkomponente individuell anpassbar ist).

#### Stilabkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es erweitert sich zu Stilen für `weekday`, `day`, `month`, `year` und `era`, wobei die genaue Kombination der Werte von der Locale abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} wird `dateStyle` zu nur den Feldern aufgelöst, die für das Objekt relevant sind.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es erweitert sich zu Stilen für `hour`, `minute`, `second` und `timeZoneName`, wobei die genaue Kombination der Werte von der Locale abhängt.

> **Hinweis:** `dateStyle` und `timeStyle` können miteinander verwendet werden, jedoch nicht mit anderen Datums- und Zeitkomponentenoptionen (z.B. `weekday`, `hour`, `month`, etc.).

Sie können verschiedene Objekttypen formatieren, abhängig davon, welche der Stilabkürzungsoptionen Sie einschließen:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der folgende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; nur dass es `Intl.DateTimeFormat.prototype` in seiner Prototypenkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft versteckt ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) Methoden auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", da diese Methoden die Optionen der versteckten Instanz nicht konsultieren.

Dieses Verhalten, `ChainDateTimeFormat` genannt, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, aber mit `this` aufgerufen wird, gesetzt auf etwas anderes, das kein `instanceof Intl.DateTimeFormat` ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei der grundlegenden Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-Locale und Standard-Optionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung zum gleichzeitigen Festlegen mehrerer Datums- und Zeitkomponentenoptionen. Zum Beispiel für `en-US` ist `dateStyle: "short"` gleichbedeutend mit dem Festlegen von `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` entspricht dem Festlegen von `hour: "numeric", minute: "numeric"`.

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

Die genauen (locale-abhängigen) Komponentenstile, auf die sie aufgelöst werden, sind jedoch nicht in den [entschiedenen Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch einzelnen Datums- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um eine Zeichenfolge für Tageszeiten ("am Morgen", "in der Nacht", "Mittag", etc.) auszugeben. Beachten Sie, dass dies nur funktioniert, wenn Sie für eine 12-Stunden-Uhr formatieren (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) und dass für viele Locales die Zeichenfolgen gleich sind, unabhängig von dem für die `dayPeriod` übergebenen Wert.

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

Verwenden Sie die `timeZoneName` Option, um eine Zeichenfolge für die Zeitzone auszugeben ("GMT", "Pacific Time", etc.).

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
