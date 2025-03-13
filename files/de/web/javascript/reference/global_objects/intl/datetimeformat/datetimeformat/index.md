---
title: Intl.DateTimeFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

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

> **Note:** `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Wege erstellen eine neue `Intl.DateTimeFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this` Wert eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Identifikatoren. Die Standardsprache der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften nach ihren Zwecken unterteilt, einschließlich [Lokaloptionen](#lokaloptionen), [Datum-Zeit-Komponentenoptionen](#datum-zeit-komponentenoptionen) und [Stil-Abkürzungen](#stil-abkürzungen).

#### Lokaloptionen

- `localeMatcher`
  - : Der Locale-Abgleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie `"chinese"`, `"gregory"`, `"persian"` und so weiter. Für eine Liste der unterstützten Kalenderarten siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem, wie `"arab"`, `"hans"`, `"mathsans"` und so weiter. Für eine Liste der unterstützten Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob 12-Stunden-Zeit (im Gegensatz zu 24-Stunden-Zeit) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standardwert ist sprachabhängig. Wenn `true`, setzt diese Option `hourCycle` auf entweder `"h11"` oder `"h12"`, je nach Locale. Wenn `false`, setzt es `hourCycle` auf `"h23"`. `hour12` überschreibt sowohl das `hc` Locale Erweiterungs-Tag als auch die `hourCycle` Option, falls eine oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzählzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Die Zeitzonennamen entsprechen den Zonen- und Linknamen der [IANA Time Zone Database](https://www.iana.org/time-zones), wie `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"` und `"America/New_York"`. Darüber hinaus können Zeitzonen als UTC-Versatz im Format "±hh:mm", "±hhmm" oder "±hh" angegeben werden, zum Beispiel als `"+01:00"`, `"-2359"` oder `"+23"`. Der Standardwert ist die Standardzeitzone der Laufzeit.

#### Datum-Zeit-Komponentenoptionen

- `weekday`
  - : Die Darstellung des Wochentages. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Thursday`
    - `"short"`
      - : Z.B., `Thu`
    - `"narrow"`
      - : Z.B., `T`. Zwei Wochentage können für einige Locales den gleichen schmalen Stil haben (z.B. ist der schmale Stil von `Tuesday` auch `T`).
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
      - : Z.B., `M`). Zwei Monate können für einige Locales den gleichen schmalen Stil haben (z.B. ist der schmale Stil von `May` auch `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatstil, der für Tageszeiten wie "in the morning", "am", "noon", "n" usw. verwendet wird. Mögliche Werte sind
    `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur eine Wirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden dieselbe Zeichenkette unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern, die zur Darstellung von Sekundenbruchteilen verwendet werden (alle zusätzlichen Ziffern werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
- `timeZoneName`

  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:

    - `"long"`
      - : Lange Lokalisierungsform (z.B., `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze Lokalisierungsform (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurzes lokalisiertes GMT-Format (z.B., `GMT-8`)
    - `"longOffset"`
      - : Langes lokalisiertes GMT-Format (z.B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurzes generisches Nicht-Standort-Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches Nicht-Standort-Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Zeitzonendarstellung kann auf ein anderes Format zurückfallen, wenn eine erforderliche Zeichenkette nicht verfügbar ist. Zum Beispiel sollten die Nicht-Standort-Formate die Zeitzone ohne spezifischen Landes-/Stadtort wie "Pacific Time" anzeigen, können jedoch auf eine Zeitzone wie "Los Angeles Time" zurückfallen.

##### Standardwerte für Datum-Zeit-Komponenten

Wenn eine der Datum-Zeit-Komponentenoptionen angegeben wird, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datum-Zeit-Komponentenoptionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datum-Zeit-Komponenten gesetzt, die vom Objekt abhängen, mit dem die Formatiermethode aufgerufen wurde:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}}, sind `year`, `month` und `day` standardmäßig `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}}, sind `hour`, `minute` und `second` standardmäßig `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}}, sind `year` und `month` standardmäßig `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}}, sind `month` und `day` standardmäßig `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}}, sind `year`, `month`, `day`, `hour`, `minute` und `second` standardmäßig `"numeric"`.

##### Format-Abgleich

Implementierungen müssen mindestens die folgenden Teilmengen von Datum-Zeit-Komponenten anzeigen können:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Datum-Zeit-Komponentenstile stimmen möglicherweise nicht direkt mit einem gültigen Format überein, das von der Locale unterstützt wird, sodass der Format-Matcher es ermöglicht, anzugeben, wie die angeforderten Stile mit dem nächstgelegenen unterstützten Format abgeglichen werden sollen.

- `formatMatcher`
  - : Der Format-Abgleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementierungsabhängig, und `"basic"` ist [laut Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (damit das Format jeder Datum-Zeit-Komponente individuell anpassbar ist).

#### Stil-Abkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es erweitert sich zu Stilen für `weekday`, `day`, `month`, `year` und `era`, wobei die exakte Kombination von Werten von der Locale abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} und {{jsxref("Temporal.PlainMonthDay")}}, wird `dateStyle` nur auf die Felder aufgelöst, die für das Objekt relevant sind.
- `timeStyle`
  - : Der zu verwendende [Zeitformatstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es erweitert sich zu Stilen für `hour`, `minute`, `second`, und `timeZoneName`, wobei die exakte Kombination von Werten von der Locale abhängt.

> **Note:** `dateStyle` und `timeStyle` können miteinander verwendet werden, aber nicht mit anderen Datum-Zeit-Komponentenoptionen (z.B. `weekday`, `hour`, `month`, etc.).

Sie können verschiedene Objekttypen formatieren, abhängig davon, welche der Stil-Abkürzungsoptionen Sie einschließen:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; es hat einfach `Intl.DateTimeFormat.prototype` in seiner Prototyp-Kette), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz vorhanden ist: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, jedoch würden alle anderen Methodenaufrufe (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) fehlschlagen: "TypeError: formatRange method called on incompatible Object", da diese Methoden die Optionen der versteckten Instanz nicht berücksichtigen.

Dieses Verhalten, `ChainDateTimeFormat` genannt, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, aber mit `this`, das auf etwas anderes als ein `instanceof Intl.DateTimeFormat` gesetzt ist, aufgerufen wird. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei grundlegender Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standardlocale und die Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung, um mehrere Datum-Zeit-Komponentenoptionen auf einmal festzulegen. Für `en-US` entspricht zum Beispiel `dateStyle: "short"` dem Setzen von `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` entspricht dem Setzen von `hour: "numeric", minute: "numeric"`.

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

Die genauen (von der Locale abhängigen) Komponentenstile, auf die sie aufgelöst werden, werden jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) eingeschlossen. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` als auch `timeStyle` und individuellen Datums- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um eine Zeichenkette für Tageszeiten ("in the morning", "at night", "noon" usw.) auszugeben. Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass für viele Locales die Zeichenfolgen unabhängig von dem für `dayPeriod` übergebenen Wert gleich sind.

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

Verwenden Sie die `timeZoneName` Option, um eine Zeichenkette für die Zeitzone ("GMT", "Pacific Time" usw.) auszugeben.

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
