---
title: Intl.DateTimeFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Der **`Intl.DateTimeFormat()`** Konstruktor erstellt {{jsxref("Intl.DateTimeFormat")}} Objekte.

{{InteractiveExample("JavaScript-Demo: Intl.DateTimeFormat() Konstruktor", "taller")}}

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

> **Note:** `Intl.DateTimeFormat()` kann sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `Intl.DateTimeFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der Wert von `this` eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Lokalisierungskennzeichen. Die Standard-Lokalisierung der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Lokalisierungskennzeichen unterstützt wird. Für das allgemeine Format und die Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Der Lesbarkeit halber ist die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf ihrem Zweck, einschließlich [Lokalisierungsoptionen](#lokalisierungsoptionen), [Datums- und Zeitkomponentenoptionen](#datums-_und_zeitkomponentenoptionen) und [Stilabkürzungen](#stilabkürzungen).

#### Lokalisierungsoptionen

- `localeMatcher`
  - : Der zu verwendende Algorhithmus zum Abgleichen der Lokalisierung. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option siehe [Lokalisierungsidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie z.B. `"chinese"`, `"gregory"`, `"persian"`, usw. Für eine Liste der unterstützten Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Diese Option kann auch durch den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das zu verwendende Zahlsystem für die Zahlenformatierung, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste der unterstützten Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch durch den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob 12-Stunden-Zeit verwendet werden soll (im Gegensatz zu 24-Stunden-Zeit). Mögliche Werte sind `true` und `false`; der Standard ist von der Lokalisierung abhängig. Wenn `true`, setzt diese Option `hourCycle` auf entweder `"h11"` oder `"h12"`, abhängig von der Lokalisierung. Wenn `false`, setzt sie `hourCycle` auf `"h23"`. `hour12` überschreibt sowohl das `hc` Lokalisierungserweiterungstags als auch die `hourCycle` Option, sollten eine oder beide vorhanden sein.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"`, und `"h24"`. Diese Option kann auch durch den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zeitzonennamen entsprechen den Zone- und Link-Namen der [IANA Time Zone Database](https://www.iana.org/time-zones), wie z.B. `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"`, und `"America/New_York"`. Zusätzlich können Zeitzonen als UTC Offsets im Format "±hh:mm", "±hhmm", oder "±hh" angegeben werden, z.B. als `"+01:00"`, `"-2359"`, oder `"+23"`. Der Standard ist die Standardzeitzone der Laufzeitumgebung.

#### Datums- und Zeitkomponentenoptionen

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Z.B. `Thursday`
    - `"short"`
      - : Z.B. `Thu`
    - `"narrow"`
      - : Z.B. `T`. Zwei Wochentage können in einigen Lokalisierungen denselben schmalen Stil haben (z.B. `Tuesday`'s schmaler Stil ist auch `T`).
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
      - : Z.B. `March`
    - `"short"`
      - : Z.B. `Mar`
    - `"narrow"`
      - : Z.B. `M`). Zwei Monate können in einigen Lokalisierungen denselben schmalen Stil haben (z.B. `May`'s schmaler Stil ist auch `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatierungsstil, der für Tageszeiten wie "in the morning", "am", "noon", "n" usw. verwendet wird. Mögliche Werte sind `"narrow"`, `"short"`, und `"long"`.

    > [!NOTE]
    > Diese Option hat nur eine Wirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Lokalisierungen verwenden dieselbe Zeichenfolge unabhängig von der angegebenen Breite.

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
      - : Lange lokalisierte Form (z.B. `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
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
    > Die Anzeige der Zeitzone kann auf ein anderes Format zurückgreifen, wenn eine erforderliche Zeichenfolge nicht verfügbar ist. Beispielsweise sollten die Nicht-Standortformate die Zeitzone ohne eine spezifische Land-/Stadtzuordnung anzeigen, wie "Pacific Time", können aber auf eine Zeitzone wie "Los Angeles Zeit" zurückfallen.

##### Standardwerte der Datums- und Zeitkomponenten

Wenn eine der Optionen für Datums- und Zeitkomponenten angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Optionen für Datums- und Zeitkomponenten und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datums- und Zeitkomponenten gesetzt, die von dem Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}} sind `year`, `month` und `day` standardmäßig `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}} sind `hour`, `minute` und `second` standardmäßig `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}} sind `year` und `month` standardmäßig `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}} sind `month` und `day` standardmäßig `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}} sind `year`, `month`, `day`, `hour`, `minute` und `second` standardmäßig `"numeric"`.

##### Format-Abgleich

Implementierungen müssen mindestens die folgenden Teilmengen von Datums- und Zeitkomponenten anzeigen können:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Stile der Datums- und Zeitkomponenten entsprechen möglicherweise nicht direkt einem gültigen Format, das von der Lokalisierung unterstützt wird. Der Format-Abgleich ermöglicht es, die angeforderten Stile zum nächsten unterstützten Format zuzuordnen.

- `formatMatcher`
  - : Der Format-Abgleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementationsspezifisch, und `"basic"` ist [von der Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datums- und Zeitkomponente individuell anpassbar ist).

#### Stilabkürzungen

- `dateStyle`
  - : Der [Datumformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh), der verwendet werden soll. Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Er erweitert sich auf Stile für `weekday`, `day`, `month`, `year`, und `era`, wobei die genaue Kombination der Werte von der Lokalisierung abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} wird `dateStyle` auf nur die Felder aufgelöst, die für das Objekt relevant sind.
- `timeStyle`
  - : Der [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu), der verwendet werden soll. Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Er erweitert sich auf Stile für `hour`, `minute`, `second`, und `timeZoneName`, wobei die genaue Kombination der Werte von der Lokalisierung abhängt.

> **Note:** `dateStyle` und `timeStyle` können miteinander verwendet werden, jedoch nicht mit anderen Datums- und Zeitkomponentenoptionen (z.B. `weekday`, `hour`, `month`, usw.).

Sie können verschiedene Objekttypen formatieren, je nachdem, welche der Stilabkürzungsoptionen Sie einschließen:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben sind, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der unten stehende Text beschreibt ein Verhalten, das in der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) jedoch ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; es muss nur `Intl.DateTimeFormat.prototype` in seiner Prototypkette haben), dann wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft versteckt ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz existiert: die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckte. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", da diese Methoden die Optionen der versteckten Instanz nicht berücksichtigen.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, aber mit `this` aufgerufen wird, das auf etwas anderes gesetzt ist, das kein `instanceof Intl.DateTimeFormat` ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei der grundlegenden Verwendung ohne Angabe einer Lokalisierung verwendet `DateTimeFormat` die Standard-Lokalisierung und die Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung, um mehrere Datums- und Zeitkomponentenoptionen auf einmal einzustellen. Zum Beispiel ist für `en-US` `dateStyle: "short"` gleichbedeutend mit dem Setzen von `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` ist gleichbedeutend mit dem Setzen von `hour: "numeric", minute: "numeric"`.

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

Die genauen (lokalisierungsabhängigen) Komponentenstile, die dadurch aufgelöst werden, sind jedoch nicht in den [Aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (weil ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch einzelnen Datum- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um eine Zeichenfolge für die Tageszeiten auszugeben ("in the morning", "at night", "noon", usw.). Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass für viele Lokalisierungen die Zeichenfolgen unabhängig vom Wert, der für die `dayPeriod` übergeben wird, gleich sind.

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

Verwenden Sie die `timeZoneName` Option, um eine Zeichenfolge für die Zeitzone auszugeben ("GMT", "Pacific Time", usw.).

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
