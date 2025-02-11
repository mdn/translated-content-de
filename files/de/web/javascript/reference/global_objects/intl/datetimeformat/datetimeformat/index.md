---
title: Intl.DateTimeFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Intl.DateTimeFormat()`**-Konstruktor erstellt {{jsxref("Intl.DateTimeFormat")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat", "taller")}}

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

> **Hinweis:** `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.DateTimeFormat`-Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und mit dem `this`-Wert eines anderen `Intl.DateTimeFormat`-Objekts aufgerufen wird; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder eine {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Locale-Bezeichner. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Bezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Beschreibung des Parameters auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die Optionseinstellung Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit wird die Liste der Eigenschaften in Abschnitte unterteilt, die sich auf ihre jeweiligen Zwecke beziehen, einschließlich [Locale-Optionen](#locale-optionen), [Datums- und Zeitkomponenten-Optionen](#datums-_und_zeitkomponenten-optionen) und [Stilabkürzungen](#stilabkürzungen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Locale-Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie z. B. `"chinese"`, `"gregory"`, `"persian"` und andere. Eine Liste unterstützter Kalendertypen finden Sie bei [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Diese Option kann auch über den `ca`-Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese Option Vorrang.
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlenformatierung, wie z. B. `"arab"`, `"hans"`, `"mathsans"` und andere. Eine Liste unterstützter Nummerierungssysteme finden Sie bei [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu`-Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese Option Vorrang.
- `hour12`
  - : Ob 12-Stunden-Zeit verwendet wird (anstelle von 24-Stunden-Zeit). Mögliche Werte sind `true` und `false`; die Standardeinstellung ist abhängig von der Locale. Wenn `true`, wird `hourCycle` auf `"h11"` oder `"h12"` gesetzt, abhängig von der Locale. Wenn `false`, wird `hourCycle` auf `"h23"` gesetzt. `hour12` überschreibt sowohl den `hc`-Locale-Erweiterungs-Tag als auch die `hourCycle`-Option, falls einer oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`. Diese Option kann auch über den `hc`-Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese Option Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zeitzonennamen entsprechen den Zone- und Link-Namen der [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones), wie `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"` und `"America/New_York"`. Außerdem können Zeitzonen als UTC-Offsets im Format "±hh:mm", "±hhmm" oder "±hh" angegeben werden, z. B. `"+01:00"`, `"-2359"` oder `"+23"`. Der Standardwert ist die Standardzeitzone der Laufzeitumgebung.

#### Datums- und Zeitkomponenten-Optionen

- `weekday`
  - : Die Repräsentation des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Z. B. `Thursday`
    - `"short"`
      - : Z. B. `Thu`
    - `"narrow"`
      - : Z. B. `T`. Zwei Wochentage können in einigen Locales denselben kurzen Stil haben (z. B. ist der kurze Stil von `Tuesday` ebenfalls `T`).
- `era`
  - : Die Repräsentation der Ära. Mögliche Werte sind:
    - `"long"`
      - : Z. B. `Anno Domini`
    - `"short"`
      - : Z. B. `AD`
    - `"narrow"`
      - : Z. B. `A`
- `year`
  - : Die Repräsentation des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `month`
  - : Die Repräsentation des Monats. Mögliche Werte sind:
    - `"numeric"`
      - : Z. B. `3`
    - `"2-digit"`
      - : Z. B. `03`
    - `"long"`
      - : Z. B. `March`
    - `"short"`
      - : Z. B. `Mar`
    - `"narrow"`
      - : Z. B. `M`. Zwei Monate können in einigen Locales denselben kurzen Stil haben (z. B. ist der kurze Stil von `May` ebenfalls `M`).
- `day`
  - : Die Repräsentation des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatierungsstil für Tageszeiten wie "am Morgen", "pm", "Mittag" usw. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur dann Auswirkungen, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden denselben String, unabhängig von der angegebenen Breite.

- `hour`
  - : Die Repräsentation der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Repräsentation der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Repräsentation der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern, die zur Darstellung von Sekundenbruchteilen verwendet werden (zusätzliche Ziffern werden abgeschnitten). Mögliche Werte liegen zwischen `1` und `3`.
- `timeZoneName`

  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:

    - `"long"`
      - : Lang lokalisierte Form (z. B., `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurz lokalisierte Form (z. B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurz lokalisierte GMT-Form (z. B. `GMT-8`)
    - `"longOffset"`
      - : Lang lokalisierte GMT-Form (z. B. `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurz generische nicht ortsbezogene Form (z. B. `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Lang generische nicht ortsbezogene Form (z. B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Zeitzonendarstellung kann auf ein anderes Format zurückgreifen, wenn ein erforderlicher String nicht verfügbar ist. Zum Beispiel sollten die nicht ortsbezogenen Formate die Zeitzone ohne spezifische Länder-/Stadtnamen anzeigen, wie "Pacific Time", können jedoch auf eine Zeitzone wie "Los Angeles Time" zurückgreifen.

##### Standardwerte für Datums- und Zeitkomponenten

Wenn irgendeine der Datums- und Zeitkomponenten-Optionen angegeben ist, dann müssen `dateStyle` und `timeStyle` `undefined` sein. Sind alle Datums- und Zeitkomponenten-Optionen sowie `dateStyle`/`timeStyle` `undefined`, dann werden einige Standardwerte für die Datums- und Zeitkomponenten gesetzt, die vom Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wird:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}} setzen die Standardwerte `year`, `month` und `day` auf `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}} setzen die Standardwerte `hour`, `minute` und `second` auf `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}} setzen die Standardwerte `year` und `month` auf `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}} setzen die Standardwerte `month` und `day` auf `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}} setzen die Standardwerte `year`, `month`, `day`, `hour`, `minute` und `second` auf `"numeric"`.

##### Formatabgleich

Implementierungen müssen mindestens die Anzeige der folgenden Teilmengen von Datums- und Zeitkomponenten unterstützen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Datums- und Zeitkomponentenstile stimmen möglicherweise nicht direkt mit einem gültigen von der Locale unterstützten Format überein. Der Format-Matcher ermöglicht es, anzugeben, wie die angeforderten Stile dem nächstgelegenen unterstützten Format zugeordnet werden sollen.

- `formatMatcher`
  - : Der zu verwendende Formatabgleichalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementationsabhängig, und `"basic"` ist [in der Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datums- und Zeitkomponente individuell anpassbar ist).

#### Stilabkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Dieser Wert wird auf Stile für `weekday`, `day`, `month`, `year` und `era` erweitert, wobei die exakte Kombination der Werte von der Locale abhängt. Bei der Formatierung von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} und {{jsxref("Temporal.PlainMonthDay")}} wird `dateStyle` nur auf die für das Objekt relevanten Felder aufgelöst.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Dieser Wert wird auf Stile für `hour`, `minute`, `second` und `timeZoneName` erweitert, wobei die exakte Kombination der Werte von der Locale abhängt.

> **Hinweis:** `dateStyle` und `timeStyle` können miteinander verwendet werden, jedoch nicht mit anderen Datums- und Zeitkomponenten-Optionen (z. B. `weekday`, `hour`, `month` usw.).

Sie können unterschiedliche Objekttypen formatieren, abhängig davon, welche der Stilabkürzungsoptionen Sie einschließen:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} und {{jsxref("Temporal.PlainMonthDay")}}-Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}}-Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}}-Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat`-Objekt.

> [!NOTE]
> Der unten stehende Text beschreibt Verhalten, das von der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat`-Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; es reicht, dass es `Intl.DateTimeFormat.prototype` in seiner Prototypkette hat), wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat`-Objekt im `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaftsbereich verborgen ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat`-Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z. B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", da diese Methoden nicht die Optionen der versteckten Instanz konsultieren.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, jedoch mit `this` gesetzt auf etwas anderes als `instanceof Intl.DateTimeFormat` aufgerufen wird. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat`-Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Beim grundlegenden Gebrauch ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-Locale und Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung, um mehrere Datums- und Zeitkomponenten-Optionen gleichzeitig festzulegen. Beispielsweise ist für `en-US` `dateStyle: "short"` äquivalent zu den Einstellungen `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` entspricht den Einstellungen `hour: "numeric", minute: "numeric"`.

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

Die von ihnen aufgelösten exakten (locale-abhängigen) Komponentenstile sind jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (weil ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Zeitkomponentenstilen ungültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die Option `dayPeriod`, um einen String für die Tageszeiten anzuzeigen ("am Morgen", "in der Nacht", "Mittag" usw.). Beachten Sie, dass dies nur funktioniert, wenn eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) verwendet wird und dass in vielen Locales die Strings unabhängig vom angegebenen Wert für `dayPeriod` identisch sind.

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

Verwenden Sie die Option `timeZoneName`, um einen String für die Zeitzone anzuzeigen ("GMT", "Pacific Time" usw.).

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
