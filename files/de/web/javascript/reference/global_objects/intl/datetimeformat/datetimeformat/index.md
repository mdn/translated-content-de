---
title: Intl.DateTimeFormat() Konstruktor
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 96336268293d3958a19fa7552d84ec1af96dd59e
---

Der **`Intl.DateTimeFormat()`** Konstruktor erzeugt {{jsxref("Intl.DateTimeFormat")}} Objekte.

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
> `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide rufen eine neue `Intl.DateTimeFormat` Instanz hervor. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this`-Wert eine andere `Intl.DateTimeFormat`-Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Laufzeit verwendet die Standard-Locale, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Um die Lesbarkeit zu erleichtern, ist die Liste der Eigenschaften in Abschnitte unterteilt, die auf ihren Zwecken basieren, einschließlich [Locale-Optionen](#locale-optionen), [Datum-Uhrzeit-Komponentenoptionen](#datum-uhrzeit-komponentenoptionen) und [Stil-Abkürzungen](#stil-abkürzungen).

#### Locale-Optionen

- `localeMatcher`
  - : Der Localauswahlalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option, siehe [Locale-Ermittlung und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie `"chinese"`, `"gregory"`, `"persian"`, und so weiter. Für eine Liste unterstützter Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types); der Standardwert ist abhängig von der Locale. Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `numberingSystem`
  - : Das für die Zahlenformatierung zu verwendende Nummerierungssystem, wie `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Für eine Liste unterstützter Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standardwert ist abhängig von der Locale. Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `hour12`
  - : Ob die 12-Stunden-Zeit (anstatt der 24-Stunden-Zeit) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standardwert ist abhängig von der Locale. Wenn `true`, setzt diese Option `hourCycle` entweder auf `"h11"` oder `"h12"`, je nach der Locale. Wenn `false`, setzt sie `hourCycle` auf `"h23"`. `hour12` überschreibt sowohl das `hc` Locale-Erweiterungstag als auch die `hourCycle`-Option, falls einer von beiden oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"`, und `"h24"`; der Standardwert wird von `hour12` und der Locale abgeleitet. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Kann jeder [IANA-Zeitzonenname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sein, einschließlich benannter Bezeichner wie `"UTC"`, `"America/New_York"`, und `"Etc/GMT+8"`, und Offset-Bezeichner wie `"+01:00"`, `"-2359"`, und `"+23"`. Der Standardwert ist die Zeitzone der Laufzeit, dieselbe Zeitzone, die von {{jsxref("Date.prototype.toString()")}} verwendet wird.

#### Datum-Uhrzeit-Komponentenoptionen

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Thursday`
    - `"short"`
      - : Z.B., `Thu`
    - `"narrow"`
      - : Z.B., `T`. Zwei Wochentage können für einige Locales denselben schmalen Stil haben (z.B. hat `Tuesday`'s schmaler Stil auch `T`).
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
      - : Z.B., `M`. Zwei Monate können denselben schmalen Stil für einige Locales haben (z.B. hat `May`'s schmaler Stil auch `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`
  - : Der Formatierungsstil, der für Tagesperioden wie "am Morgen", "am Vormittag", "Mittag", "Nacht" usw. verwendet wird. Mögliche Werte sind `"narrow"`, `"short"`, und `"long"`.

    > [!NOTE]
    > Diese Option hat nur dann eine Wirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden denselben String unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern, die verwendet werden, um Sekundenbruchteile darzustellen (zusätzliche Ziffern werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
- `timeZoneName`
  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:
    - `"long"`
      - : Lange lokalisierte Form (z.B. `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurze lokalisierte GMT-Format (z.B., `GMT-8`)
    - `"longOffset"`
      - : Lange lokalisierte GMT-Format (z.B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurzes generisches Nicht-Standort-Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches Nicht-Standort-Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Zeitzonendarstellung kann auf ein anderes Format zurückfallen, wenn ein benötigter String nicht verfügbar ist. Zum Beispiel sollten die Nicht-Standort-Formate die Zeitzone ohne einen spezifischen Länder-/Stadtort wie "Pacific Time" anzeigen, können jedoch auf eine Zeitzone wie "Los Angeles Time" zurückfallen.

##### Standardwerte der Datum-Uhrzeit-Komponenten

Wenn eine der Datum-Uhrzeit-Komponentenoptionen angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datum-Uhrzeit-Komponentenoptionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für die Datum-Uhrzeit-Komponenten gesetzt, die von dem Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Bei der Formatierung von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}}, sind `year`, `month`, und `day` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainTime")}}, sind `hour`, `minute`, und `second` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainYearMonth")}}, sind `year` und `month` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainMonthDay")}}, sind `month` und `day` standardmäßig `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}}, sind `year`, `month`, `day`, `hour`, `minute`, und `second` standardmäßig `"numeric"`.

##### Formatübereinstimmung

Implementierungen sind verpflichtet, mindestens die folgenden Teilmengen von Datum-Uhrzeit-Komponenten anzuzeigen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Stilarten der Datum-Uhrzeit-Komponenten entsprechen möglicherweise nicht direkt einem gültigen Format, das von der Locale unterstützt wird, daher ermöglicht es der Format-Matcher, wie man die angeforderten Stile dem nächstgelegenen unterstützten Format zuordnet.

- `formatMatcher`
  - : Der für das Formatmatching zu verwendende Algorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementierungsdefiniert, und `"basic"` ist [durch die Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (so dass das Format jeder Datum-Uhrzeit-Komponente individuell anpassbar ist).

#### Stil-Abkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Es erweitert sich zu Stilen für `weekday`, `day`, `month`, `year`, und `era`, mit der exakten Kombination von Werten, die von der Locale abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}}, wird `dateStyle` nur auf die für das Objekt relevanten Felder aufgelöst.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Es erweitert sich zu Stilen für `hour`, `minute`, `second`, und `timeZoneName`, mit der exakten Kombination von Werten, die von der Locale abhängt.

> [!NOTE]
> `dateStyle` und `timeStyle` können miteinander verwendet werden, aber nicht mit anderen Datum-Uhrzeit-Komponentenoptionen (z.B. `weekday`, `hour`, `month`, etc.).

Sie können unterschiedliche Objekttypen formatieren, abhängig davon, welche der Stil-Abkürzungsoptionen Sie einschließen:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat`-Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das in der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und eine neue `Intl.DateTimeFormat`-Instanz wird in beiden Fällen zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; es bedeutet nur, dass es `Intl.DateTimeFormat.prototype` in seiner Prototypenkette hat), dann wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat`-Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird) versteckt ist.

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat`-Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) Methoden auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", da diese Methoden die Optionen der versteckten Instanz nicht berücksichtigen.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new` aufgerufen wird, jedoch mit `this`, das auf etwas anderes gesetzt ist, das nicht `instanceof Intl.DateTimeFormat` ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat`-Instanz wird normal erstellt.

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

`dateStyle` und `timeStyle` bieten eine Abkürzung für das gleichzeitige Festlegen mehrerer Datum-Uhrzeit-Komponentenoptionen. Zum Beispiel ist für `en-US` `dateStyle: "short"` äquivalent zum Setzen von `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` entspricht dem Setzen von `hour: "numeric", minute: "numeric"`.

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

Die genauen (von der Locale abhängigen) Komponentenstile, auf die sie aufgelöst werden, sind jedoch nicht in den [auflösbaren Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dadurch wird sichergestellt, dass das Ergebnis von `resolvedOptions()` direkt dem `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datum- oder Zeitkomponentenstilen ungültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um einen String für die Tageszeiten auszugeben ("am Morgen", "nachts", "Mittag", etc.). Beachten Sie, dass dies nur beim Formatieren für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) funktioniert und dass für viele Locales die Strings unabhängig vom Wert, der für `dayPeriod` übergeben wird, gleich sind.

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

Verwenden Sie die `timeZoneName` Option, um einen String für die Zeitzone auszugeben ("GMT", "Pacific Time", etc.).

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
