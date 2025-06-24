---
title: Intl.DateTimeFormat() Konstruktor
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
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

> [!NOTE] > `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Methoden erzeugen eine neue Instanz von `Intl.DateTimeFormat`. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this`-Wert eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standardeinstellung des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, die nach ihren Zwecken geordnet sind, einschließlich [Locale-Optionen](#locale-optionen), [Datum-Uhrzeit-Komponenten-Optionen](#datum-uhrzeit-komponenten-optionen) und [Stilkurzfassungen](#stilkurzfassungen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Erkennung und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie z.B. `"chinese"`, `"gregory"`, `"persian"` usw. Eine Liste unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `numberingSystem`
  - : Das zu verwendende Zahlensystem, wie z.B. `"arab"`, `"hans"`, `"mathsans"` usw. Eine Liste unterstützter Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `hour12`
  - : Ob Zeit im 12-Stunden-Format (anstelle des 24-Stunden-Formats) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standardwert hängt von der Locale ab. Wenn `true`, wird `hourCycle` entweder auf `"h11"` oder `"h12"` gesetzt, je nach Locale. Wenn `false`, wird `hourCycle` auf `"h23"` gesetzt. `hour12` überschreibt sowohl das `hc` Locale-Erweiterungsetikett als auch die `hourCycle`-Option, falls eines oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"`, und `"h24"`. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zeitzonennamen entsprechen den Zone- und Link-Namen der [IANA Zeitzonen-Datenbank](https://www.iana.org/time-zones), wie z.B. `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"`, und `"America/New_York"`. Zusätzlich können Zeitzonen als UTC-Versätze im Format "±hh:mm", "±hhmm", oder "±hh" angegeben werden, z.B. als `"+01:00"`, `"-2359"`, oder `"+23"`. Der Standardwert ist die Standardzeitzone des Laufzeitsystems.

#### Datum-Uhrzeit-Komponenten-Optionen

- `weekday`
  - : Die Darstellung des Wochentages. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Donnerstag`
    - `"short"`
      - : Z.B., `Do`
    - `"narrow"`
      - : Z.B., `D`. Zwei Wochentage können in einigen Locales denselben engen Stil haben (z.B. `Dienstag` hat auch den kurzen Stil `D`).
- `era`
  - : Die Darstellung der Epoche. Mögliche Werte sind:
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
      - : Z.B., `M`. Zwei Monate können in einigen Locales denselben engen Stil haben (z.B. wird `Mai` ebenfalls mit `M` dargestellt).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatierungsstil, der für Tageszeiten wie "morgens", "vormittags", "Mittag", "n" usw. verwendet wird. Mögliche Werte sind
    `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur dann eine Wirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden dieselbe Zeichenkette unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der verwendeten Stellen für Bruchteile einer Sekunde (zusätzliche Stellen werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
- `timeZoneName`

  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:

    - `"long"`
      - : Lange lokalisierte Form (z.B., `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurze lokalisierte GMT-Form (z.B., `GMT-8`)
    - `"longOffset"`
      - : Lange lokalisierte GMT-Form (z.B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurze generische, nicht standortbezogene Form (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Lange generische, nicht standortbezogene Form (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Anzeige der Zeitzone kann auf ein anderes Format zurückgreifen, wenn eine erforderliche Zeichenkette nicht verfügbar ist. Zum Beispiel sollten die nicht standortbezogenen Formate die Zeitzone ohne eine spezifische Länder-/Stadtlokalisierung anzeigen, wie "Pacific Time", können aber zu einer Zeitzone wie "Los Angeles Time" zurückfallen.

##### Standardwerte der Datum-Uhrzeit-Komponenten

Wenn eine der Datum-Uhrzeit-Komponenten-Optionen angegeben wird, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datum-Uhrzeit-Komponenten-Optionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für die Datum-Uhrzeit-Komponenten festgelegt, die vom Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}} sind `year`, `month` und `day` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}} sind `hour`, `minute` und `second` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}} sind `year` und `month` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}} sind `month` und `day` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}} sind `year`, `month`, `day`, `hour`, `minute` und `second` standardmäßig auf `"numeric"` gesetzt.

##### Format-Anpassung

Implementierungen sind verpflichtet, mindestens die folgenden Teilmengen von Datum-Uhrzeit-Komponenten anzeigen zu können:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Datum-Uhrzeit-Komponentenstile entsprechen möglicherweise nicht direkt einem gültigen Format, das von der Locale unterstützt wird, sodass der Format-Matcher es Ihnen ermöglicht, anzugeben, wie die angeforderten Stile dem am nächsten unterstützten Format angepasst werden sollen.

- `formatMatcher`
  - : Der zu verwendende Format-Anpassungsalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist Implementierungs-spezifisch, und `"basic"` wird [von der Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (so dass das Format jeder Datum-Uhrzeit-Komponente individuell anpassbar ist).

#### Stilkurzfassungen

- `dateStyle`
  - : Der zu verwendende [Datumformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Er expandiert in Stile für `weekday`, `day`, `month`, `year`, und `era`, wobei die genaue Kombination von Werten von der Locale abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} wird `dateStyle` nur auf die für das Objekt relevanten Felder aufgelöst.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Er expandiert in Stile für `hour`, `minute`, `second`, und `timeZoneName`, wobei die genaue Kombination von Werten von der Locale abhängt.

> [!NOTE] > `dateStyle` und `timeStyle` können miteinander verwendet werden, aber nicht mit anderen Datum-Uhrzeit-Komponenten-Optionen (z.B. `weekday`, `hour`, `month`, usw.).

Sie können verschiedene Objekttypen formatieren, je nachdem, welche der Stilkurzfassungsoptionen Sie einschließen:

- Wenn der `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn der `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; nur, dass es `Intl.DateTimeFormat.prototype` in seiner Prototypenkette hat), dann wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft versteckt ist (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz existiert: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", weil diese Methoden die Optionen der versteckten Instanz nicht konsultieren.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new` aufgerufen wird, aber mit `this` auf alles andere gesetzt ist, das kein `instanceof Intl.DateTimeFormat` ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

In der grundlegenden Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-
Locale und Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Kurzfassung für das gleichzeitige Setzen mehrerer Datum-Uhrzeit-Komponenten-Optionen. Zum Beispiel ist für `en-US` `dateStyle: "short"` äquivalent zu `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` ist äquivalent zu `hour: "numeric", minute: "numeric"`.

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

Die genauen (locale-abhängigen) Komponentenstile, zu denen sie sich auflösen, sind jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch einzelnen Datum- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um eine Zeichenkette für die Tageszeiten ("morgens", "abends", "Mittag", etc.) auszugeben. Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass für viele Locales die Zeichenfolgen unabhängig von der für `dayPeriod` angegebenen Breite dieselben sind.

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

Verwenden Sie die `timeZoneName` Option, um eine Zeichenkette für die Zeitzone ("GMT", "Pacific Time", etc.) auszugeben.

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
